import {
  ArrowLeft,
  PlayCircle,
  RefreshCw,
  RotateCcw,
  Square,
  Trash2,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { PageToolbar } from '../components/PageToolbar'
import { StatusBadge } from '../components/StatusBadge'
import { deleteRun, getApiErrorMessage, getRunDetail, rerunRun, resumeRun, stopRun } from '../lib/api'
import { formatDateTimeLong, formatDuration } from '../lib/date'
import type { PipelineRunDetailInfo } from '../types/irispipe'

export function RunDetailPage() {
  const { pipelineId, runId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [detail, setDetail] = useState<PipelineRunDetailInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pendingAction, setPendingAction] = useState<string | null>(null)

  const numericPipelineId = Number(pipelineId)
  const numericRunId = Number(runId)
  const folderId = searchParams.get('folderId')

  async function loadDetail() {
    setLoading(true)
    setError(null)

    try {
      const response = await getRunDetail(numericRunId)
      setDetail(response)
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

  if (loading) {
    return (
      <div className="space-y-6">
        <PageToolbar eyebrow="Run detail" title="Loading logical run" description="Reading the latest jobs and attempt timeline from backend runtime state." />
        <LoadingState cards={5} />
      </div>
    )
  }

  if (error || !detail) {
    return (
      <EmptyState
        icon={PlayCircle}
        title="Run detail is unavailable"
        description={error ?? 'The backend did not return the requested run detail payload.'}
        action={
          <Link to={`/pipeline/items/${numericPipelineId}/runs${folderId ? `?folderId=${folderId}` : ''}`} className="btn btn-primary px-5">
            Back to runs
          </Link>
        }
      />
    )
  }

  const canStop = ['STARTING', 'STARTED'].includes(detail.status)
  const canResume = ['FAILED', 'STOPPED'].includes(detail.status)
  const canRerun = ['FAILED', 'STOPPED', 'COMPLETED', 'ABANDONED'].includes(detail.status)
  const canDelete = ['FAILED', 'STOPPED', 'COMPLETED', 'ABANDONED'].includes(detail.status)

  return (
    <div className="space-y-6">
      <div className="breadcrumbs rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm shadow-sm">
        <ul>
          <li>
            <Link to={folderId ? `/pipeline/folders/${folderId}` : '/pipeline'}>Explorer</Link>
          </li>
          <li>
            <Link to={`/pipeline/items/${detail.pipelineId}/config${detail.folderId ? `?folderId=${detail.folderId}` : ''}`}>{detail.pipelineName}</Link>
          </li>
          <li>
            <Link to={`/pipeline/items/${detail.pipelineId}/runs${detail.folderId ? `?folderId=${detail.folderId}` : ''}`}>Runs</Link>
          </li>
          <li>Run #{detail.id}</li>
        </ul>
      </div>

      <PageToolbar
        eyebrow="Run detail"
        title={`Run #${detail.id}`}
        description={`Dedicated runtime surface for ${detail.pipelineName}. This page replaces the old shared inspector model.`}
        actions={
          <>
            <Link
              to={`/pipeline/items/${detail.pipelineId}/runs${detail.folderId ? `?folderId=${detail.folderId}` : ''}`}
              className="btn border-base-300 bg-base-100"
            >
              <ArrowLeft size={16} />
              Back to runs
            </Link>
            <button type="button" onClick={() => void loadDetail()} className="btn border-base-300 bg-base-100">
              <RefreshCw size={16} />
              Refresh
            </button>
          </>
        }
      />

      {error ? <div className="alert alert-error rounded-box">{error}</div> : null}

      <div className="grid gap-4 lg:grid-cols-4">
        <RunMetric label="Status" value={<StatusBadge status={detail.status} />} />
        <RunMetric label="Requested async" value={detail.requestedAsync ? 'true' : 'false'} />
        <RunMetric label="Started" value={formatDateTimeLong(detail.startTime ?? detail.createdAt)} />
        <RunMetric label="Duration" value={formatDuration(detail.startTime ?? detail.createdAt, detail.endTime)} />
      </div>

      <div className="card rounded-box border border-base-300 bg-base-100 shadow-sm">
        <div className="card-body p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">Control</div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">Runtime actions</h2>
          </div>
          {pendingAction ? <div className="badge border-0 bg-base-200 px-3 py-3">{pendingAction}...</div> : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" disabled={!canStop || !!pendingAction} className="btn border-base-300 bg-base-100" onClick={() => void runAction('stop', () => stopRun(detail.id))}>
            <Square size={16} />
            Stop
          </button>
          <button type="button" disabled={!canResume || !!pendingAction} className="btn border-base-300 bg-base-100" onClick={() => void runAction('resume', () => resumeRun(detail.id))}>
            <PlayCircle size={16} />
            Resume
          </button>
          <button type="button" disabled={!canRerun || !!pendingAction} className="btn border-base-300 bg-base-100" onClick={() => void runAction('rerun', () => rerunRun(detail.id))}>
            <RotateCcw size={16} />
            Rerun
          </button>
          <button type="button" disabled={!canDelete || !!pendingAction} className="btn border-error/30 bg-error/10 text-error hover:bg-error/15" onClick={() => void runAction('delete', () => deleteRun(detail.id))}>
            <Trash2 size={16} />
            Delete
          </button>
        </div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)]">
        <section className="card rounded-box border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">Attempts</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Execution timeline</h2>
            <div className="mt-5 space-y-3">
            {detail.attempts.map((attempt) => (
              <div key={attempt.executionId} className="rounded-box border border-base-300 bg-base-100 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="badge badge-outline px-3 py-3 font-semibold">ATTEMPT {attempt.executionNo}</div>
                  <div className="text-lg font-semibold">{attempt.executionKind}</div>
                  <StatusBadge status={attempt.status} />
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <RunMetric label="Started" value={formatDateTimeLong(attempt.startTime)} compact />
                  <RunMetric label="Ended" value={formatDateTimeLong(attempt.endTime)} compact />
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        <section className="card rounded-box border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">Latest jobs</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Runtime projection</h2>
            <div className="mt-5 space-y-3">
            {detail.jobs.map((job) => (
              <div key={job.id} className="collapse-arrow collapse rounded-box border border-base-300 bg-base-100">
                <input type="checkbox" defaultChecked={job.sequenceOrder === 1} />
                <div className="collapse-title px-5 py-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="badge border-0 bg-base-200 px-3 py-3">JOB {job.sequenceOrder}</div>
                    <div className="text-lg font-semibold">{job.jobName}</div>
                    <StatusBadge status={job.status} subtle />
                  </div>
                  <div className="mt-3 grid gap-3 md:grid-cols-3">
                    <RunMetric label="Atomic level" value={job.atomicLevel} compact />
                    <RunMetric label="Started" value={formatDateTimeLong(job.startTime ?? job.createdAt)} compact />
                    <RunMetric label="Duration" value={formatDuration(job.startTime ?? job.createdAt, job.endTime)} compact />
                  </div>
                </div>
                <div className="collapse-content px-5 pb-5">
                  <div className="space-y-3">
                    {job.stepExecutionInfos.map((step) => (
                      <div key={step.id} className="rounded-box border border-base-300 bg-base-200/40 p-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="font-semibold">{step.stepName}</div>
                          <StatusBadge status={step.status} subtle />
                        </div>
                        <div className="mt-3 grid gap-3 md:grid-cols-4">
                          <RunMetric label="Read" value={step.readCount} compact />
                          <RunMetric label="Write" value={step.writeCount} compact />
                          <RunMetric label="Commit" value={step.commitCount} compact />
                          <RunMetric label="Rollback" value={step.rollbackCount} compact />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function RunMetric({
  label,
  value,
  compact = false,
}: {
  label: string
  value: ReactNode
  compact?: boolean
}) {
  return (
    <div className={`rounded-box border border-base-300 bg-base-100 ${compact ? 'px-4 py-3' : 'px-5 py-4'}`}>
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">{label}</div>
      <div className="mt-1 text-base font-semibold">{value}</div>
    </div>
  )
}
