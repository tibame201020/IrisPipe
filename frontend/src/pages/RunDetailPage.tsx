import {
  ArrowLeft,
  Clock,
  History,
  Info,
  Layers,
  LayoutDashboard,
  PlayCircle,
  RefreshCw,
  RotateCcw,
  Square,
  Trash2,
} from 'lucide-react'
import { useEffect, useState, useMemo } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { StatusBadge } from '../components/StatusBadge'
import { PipelineCanvas } from '../components/GraphEngine/PipelineCanvas'
import { deleteRun, getApiErrorMessage, getRunDetail, rerunRun, resumeRun, stopRun } from '../lib/api'
import { formatDateTimeLong, formatDuration } from '../lib/date'
import type { StatusNodeData } from '../types/graph'
import type { PipelineRunDetailInfo } from '../types/irispipe'
import type { Node, Edge } from '@xyflow/react'

export function RunDetailPage() {
  const { pipelineId, runId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [detail, setDetail] = useState<PipelineRunDetailInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pendingAction, setPendingAction] = useState<string | null>(null)
  const [selectedAttemptId, setSelectedAttemptId] = useState<number | null>(null)
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null)

  const numericPipelineId = Number(pipelineId)
  const numericRunId = Number(runId)
  const folderId = searchParams.get('folderId')

  async function loadDetail() {
    setLoading(true)
    setError(null)
    try {
      const response = await getRunDetail(numericRunId)
      setDetail(response)
      // Default to latest attempt if not set
      if (response.attempts.length > 0 && selectedAttemptId === null) {
        setSelectedAttemptId(response.attempts[response.attempts.length - 1].executionId)
      }
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, 'Failed to load run detail'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!Number.isFinite(numericRunId) || !Number.isFinite(numericPipelineId)) {
      setError('Invalid run route')
      setLoading(false)
      return
    }
    void loadDetail()
  }, [numericPipelineId, numericRunId])

  // Poll for status if running
  useEffect(() => {
    if (!detail) return
    const isRunning = ['STARTING', 'STARTED'].includes(detail.status)
    if (isRunning) {
      const timer = setInterval(() => {
        void loadDetail()
      }, 3000)
      return () => clearInterval(timer)
    }
  }, [detail?.status])

  const currentAttempt = useMemo(() => {
    if (!detail) return null
    return detail.attempts.find(a => a.executionId === selectedAttemptId) || detail.attempts[detail.attempts.length - 1]
  }, [detail, selectedAttemptId])

  const { graphNodes, graphEdges } = useMemo(() => {
    if (!detail || !currentAttempt) return { graphNodes: [], graphEdges: [] }

    const nodes: Node<StatusNodeData>[] = currentAttempt.jobs.map((job, idx) => ({
      id: `job-${job.id}`,
      type: 'statusNode',
      position: { x: idx * 350, y: 100 },
      data: {
        label: job.jobName,
        index: job.sequenceOrder - 1,
        status: job.status,
        stats: job.stepExecutionInfos.reduce((acc, step) => ({
          read: (acc.read || 0) + step.readCount,
          write: (acc.write || 0) + step.writeCount,
        }), { read: 0, write: 0 })
      }
    }))

    const edges: Edge[] = []
    for (let i = 0; i < nodes.length - 1; i++) {
      edges.push({
        id: `edge-${i}`,
        source: nodes[i].id,
        target: nodes[i+1].id,
        type: 'audit',
        animated: nodes[i].data.status === 'STARTED' || nodes[i].data.status === 'STARTING',
      })
    }

    return { graphNodes: nodes, graphEdges: edges }
  }, [detail, currentAttempt])

  const selectedJob = useMemo(() => {
    if (!currentAttempt || !selectedJobId) return null
    return currentAttempt.jobs.find(j => j.id === selectedJobId)
  }, [currentAttempt, selectedJobId])

  async function runAction(actionName: string, action: () => Promise<unknown>) {
    setPendingAction(actionName)
    setError(null)
    try {
      await action()
      if (actionName === 'delete') {
        navigate(`/pipeline/items/${numericPipelineId}/runs${folderId ? `?folderId=${folderId}` : ''}`)
        return
      }
      await loadDetail()
    } catch (actionError) {
      setError(getApiErrorMessage(actionError, `Failed to ${actionName} run`))
    } finally {
      setPendingAction(null)
    }
  }

  if (loading && !detail) return <div className="p-12"><LoadingState /></div>

  if (error || !detail) {
    return (
      <EmptyState
        icon={PlayCircle}
        title="Run detail unavailable"
        description={error ?? 'The run could not be found.'}
        action={<Link to={`/pipeline/items/${numericPipelineId}/runs`} className="btn btn-primary">Back to runs</Link>}
      />
    )
  }

  const canStop = ['STARTING', 'STARTED'].includes(detail.status)
  const canResume = ['FAILED', 'STOPPED'].includes(detail.status)
  const canRerun = ['FAILED', 'STOPPED', 'COMPLETED', 'ABANDONED'].includes(detail.status)

  return (
    <div className="flex h-screen flex-col bg-base-200/30 overflow-hidden">
      {/* Header Bar */}
      <header className="flex shrink-0 items-center justify-between border-b border-base-300 bg-base-100 px-8 py-4 z-20">
        <div className="flex items-center gap-6">
          <Link to={`/pipeline/items/${detail.pipelineId}/runs${detail.folderId ? `?folderId=${detail.folderId}` : ''}`} className="btn btn-ghost btn-sm btn-square">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="iris-header">Execution # {detail.id}</span>
              <StatusBadge status={detail.status} />
            </div>
            <h1 className="text-xl font-bold tracking-tight">{detail.pipelineName}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-base-200/50 rounded-lg p-1 mr-4">
            <button 
              type="button" 
              disabled={!canStop || !!pendingAction} 
              className="btn btn-ghost btn-sm text-error h-9" 
              onClick={() => void runAction('stop', () => stopRun(detail.id))}
            >
              <Square size={14} />
              Stop
            </button>
            <button 
              type="button" 
              disabled={!canResume || !!pendingAction} 
              className="btn btn-ghost btn-sm h-9" 
              onClick={() => void runAction('resume', () => resumeRun(detail.id))}
            >
              <PlayCircle size={14} />
              Resume
            </button>
            <button 
              type="button" 
              disabled={!canRerun || !!pendingAction} 
              className="btn btn-ghost btn-sm h-9" 
              onClick={() => void runAction('rerun', () => rerunRun(detail.id))}
            >
              <RotateCcw size={14} />
              Rerun
            </button>
          </div>
          <button type="button" onClick={() => void loadDetail()} className="btn btn-ghost btn-sm btn-square">
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
      </header>

      {/* Main Surface */}
      <div className="flex flex-1 min-h-0 relative">
        {/* Left Sidebar: Attempts / Audit Timeline */}
        <aside className="w-80 border-r border-base-300 bg-base-100 flex flex-col z-10 overflow-hidden">
          <div className="p-6 border-b border-base-300">
            <div className="flex items-center gap-2 mb-4">
              <History size={16} className="text-primary" />
              <span className="iris-header">Attempts</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="iris-card p-3">
                <div className="text-[10px] font-bold opacity-40 mb-1">Duration</div>
                <div className="font-mono text-sm">{formatDuration(detail.startTime || detail.createdAt, detail.endTime)}</div>
              </div>
              <div className="iris-card p-3">
                <div className="text-[10px] font-bold opacity-40 mb-1">Attempts</div>
                <div className="font-mono text-sm">{detail.attempts.length}</div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {detail.attempts.slice().reverse().map((attempt) => (
              <button
                key={attempt.executionId}
                type="button"
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 group ${
                  selectedAttemptId === attempt.executionId 
                    ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' 
                    : 'border-transparent bg-base-200/50 hover:bg-base-200'
                }`}
                onClick={() => setSelectedAttemptId(attempt.executionId)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black tracking-widest opacity-50"># {attempt.executionNo}</span>
                  <StatusBadge status={attempt.status} subtle />
                </div>
                <div className="font-bold text-sm mb-1">{attempt.executionKind}</div>
                <div className="flex items-center gap-2 text-[10px] text-base-content/40">
                  <Clock size={10} />
                  {formatDateTimeLong(attempt.startTime)}
                </div>
              </button>
            ))}
          </div>

          <div className="p-4 bg-base-200/30 border-t border-base-300">
             <button 
              type="button" 
              className="btn btn-ghost btn-sm w-full text-error gap-2"
              onClick={() => void runAction('delete', () => deleteRun(detail.id))}
            >
              <Trash2 size={14} />
              Delete Run
            </button>
          </div>
        </aside>

        {/* Center Canvas */}
        <main className="flex-1 relative bg-base-200/50">
          <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
             <div className="badge badge-lg iris-glass border-primary/20 gap-2 h-10 px-4">
               <Layers size={14} />
               <span className="font-bold text-sm">Attempt View: {currentAttempt?.executionNo}</span>
             </div>
             {selectedAttemptId !== detail.attempts[detail.attempts.length - 1].executionId && (
               <div className="badge badge-warning h-10 px-4 gap-2 font-bold animate-pulse">
                 <Info size={14} /> Historical Snapshot
               </div>
             )}
          </div>

          <div className="absolute inset-0">
            <PipelineCanvas 
              nodes={graphNodes} 
              edges={graphEdges} 
              onNodeClick={(_, node) => setSelectedJobId(Number(node.id.split('-')[1]))}
            />
          </div>

          {/* Bottom Info Bar */}
          <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
            <div className="flex justify-between items-end">
              <div className="iris-glass border-primary/10 p-4 rounded-2xl pointer-events-auto max-w-md w-full shadow-2xl">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="p-2 bg-primary/10 text-primary rounded-lg">
                     <LayoutDashboard size={18} />
                   </div>
                   <div>
                     <div className="text-[10px] font-black tracking-[0.2em] opacity-40">INSIGHTS</div>
                      <div className="text-sm font-bold">Run Graph</div>
                   </div>
                 </div>
                 <p className="text-xs text-base-content/60 leading-relaxed">
                    Nodes represent jobs in the selected attempt. Step counters come from the backend step execution summaries.
                 </p>
              </div>

              {selectedJob && (
                <div className="iris-glass border-primary border-2 p-6 rounded-2xl pointer-events-auto w-96 shadow-2xl animate-in slide-in-from-right-10">
                   <div className="flex items-center justify-between mb-4">
                     <div className="badge h-7 bg-base-content text-base-100 font-black tracking-tighter">JOB {selectedJob.sequenceOrder}</div>
                     <StatusBadge status={selectedJob.status} />
                   </div>
                   <h3 className="text-xl font-bold mb-4">{selectedJob.jobName}</h3>
                   
                   <div className="space-y-3">
                     {selectedJob.stepExecutionInfos.map((step) => (
                       <div key={step.id} className="bg-base-200/50 rounded-xl p-3 border border-base-300">
                         <div className="flex items-center justify-between mb-2">
                           <span className="text-xs font-bold">{step.stepName}</span>
                           <StatusBadge status={step.status} subtle />
                         </div>
                         <div className="grid grid-cols-2 gap-2 mt-2">
                           <div className="flex flex-col">
                             <span className="text-[9px] font-bold opacity-30">READ</span>
                             <span className="font-mono text-sm font-bold">{step.readCount}</span>
                           </div>
                           <div className="flex flex-col">
                            <span className="text-[9px] font-bold opacity-30">WRITE</span>
                             <span className="font-mono text-sm font-bold">{step.writeCount}</span>
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>

                   <button 
                    type="button" 
                    className="btn btn-ghost btn-sm w-full mt-4"
                    onClick={() => setSelectedJobId(null)}
                   >
                     Close Details
                    </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
