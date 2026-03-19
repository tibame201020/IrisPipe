import {
  Database,
  FileJson2,
  Layers3,
  PlayCircle,
  RefreshCw,
  Settings2,
  Waypoints,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { LoadingState } from '../components/LoadingState'
import { PageToolbar } from '../components/PageToolbar'
import { executePipeline, getApiErrorMessage, getPipelineConfig } from '../lib/api'
import type { ConfigPipelineInfo, ConnectionInfo, ExecutionStep, SyncJobDefinition } from '../types/irispipe'

export function PipelineConfigPage() {
  const { pipelineId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const isDraft = !pipelineId
  const [config, setConfig] = useState<ConfigPipelineInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [executing, setExecuting] = useState(false)

  const numericPipelineId = Number(pipelineId)
  const folderId = searchParams.get('folderId')
  const explorerLink = folderId ? `/pipeline/folders/${folderId}` : '/pipeline'

  async function loadConfig() {
    setLoading(true)
    setError(null)

    try {
      const response = await getPipelineConfig(numericPipelineId)
      setConfig(response)
    } catch (loadError) {
      setError(getApiErrorMessage(loadError, 'Failed to load pipeline config'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isDraft) {
      setLoading(false)
      setError(null)
      setConfig(null)
      return
    }

    if (!Number.isFinite(numericPipelineId)) {
      setError('Invalid pipeline id')
      setLoading(false)
      return
    }

    void loadConfig()
  }, [isDraft, numericPipelineId])

  async function handleExecute() {
    if (!config) {
      return
    }

    setExecuting(true)
    try {
      const run = await executePipeline({
        pipelineId: config.id,
        useAsyncLaucher: true,
      })
      navigate(`/pipeline/items/${config.id}/runs/${run.id}${config.folderId ? `?folderId=${config.folderId}` : ''}`)
    } catch (executeError) {
      setError(getApiErrorMessage(executeError, 'Failed to execute pipeline'))
    } finally {
      setExecuting(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <PageToolbar eyebrow="Pipeline config" title="Loading pipeline surface" description="Reading the workflow definition from backend config detail." />
        <LoadingState cards={4} />
      </div>
    )
  }

  if (isDraft) {
    return (
      <div className="space-y-6">
        <div className="breadcrumbs border border-base-300 bg-base-100 px-4 py-3 text-sm shadow-sm">
          <ul>
            <li>
              <Link to={explorerLink}>Explorer</Link>
            </li>
            <li>New pipeline</li>
          </ul>
        </div>

        <PageToolbar
          eyebrow="Pipeline config"
          title="New pipeline"
          description="Draft editor surface only. Create and save flow will be defined in the next pipeline editor phase."
          actions={
            <Link to={explorerLink} className="btn border-base-300 bg-base-100">
              Back to explorer
            </Link>
          }
        />

        <div className="hero min-h-[22rem] rounded-box border border-base-300 bg-base-100 shadow-sm">
          <div className="hero-content text-center">
            <div className="max-w-2xl space-y-5">
              <div className="mx-auto flex size-14 items-center justify-center rounded-box bg-primary/10 text-primary">
                <FileJson2 size={24} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight">Pipeline editor draft</h2>
                <p className="text-sm leading-7 text-base-content/65">
                  Explorer can now hand off into editor creation mode without forcing a backend write first.
                  The actual pipeline name, jobs, steps, connections, and save contract belong to the next stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !config) {
    return (
      <EmptyState
        icon={Waypoints}
        title="Pipeline surface is unavailable"
        description={error ?? 'The backend did not return a pipeline config payload.'}
        action={
          <Link to={explorerLink} className="btn btn-primary px-5">
            Back to explorer
          </Link>
        }
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="breadcrumbs border border-base-300 bg-base-100 px-4 py-3 text-sm shadow-sm">
        <ul>
          <li>
            <Link to={explorerLink}>Explorer</Link>
          </li>
          <li>{config.pipelineName}</li>
        </ul>
      </div>

      <PageToolbar
        eyebrow="Pipeline config"
        title={config.pipelineName}
        description={`Linear workflow surface built from backend config detail. Folder path: ${config.folderPath}`}
        actions={
          <>
            <Link
              to={`/pipeline/items/${config.id}/runs${config.folderId ? `?folderId=${config.folderId}` : ''}`}
              className="btn border-base-300 bg-base-100"
            >
              Open runs
            </Link>
            <button type="button" onClick={() => void loadConfig()} className="btn border-base-300 bg-base-100">
              <RefreshCw size={16} />
              Refresh
            </button>
            <button type="button" onClick={() => void handleExecute()} className="btn btn-primary px-5" disabled={executing}>
              <PlayCircle size={16} />
              {executing ? 'Executing...' : 'Execute pipeline'}
            </button>
          </>
        }
      />

      {error ? <div className="alert alert-error">{error}</div> : null}

      <div className="grid gap-4 lg:grid-cols-3">
        <SummaryPill label="Jobs" value={config.jobs.length} description="Linear workflow cards" icon={Layers3} />
        <SummaryPill label="Folder" value={config.folderPath} description="Registry location" icon={Waypoints} />
        <SummaryPill label="Pipeline id" value={`#${config.id}`} description="Primary execution identity" icon={Settings2} />
      </div>

      <div className="space-y-4">
        {config.jobs.map((job, index) => (
          <JobCard key={`${job.jobName}-${index}`} job={job} index={index} />
        ))}
      </div>
    </div>
  )
}

function SummaryPill({
  icon: Icon,
  label,
  value,
  description,
}: {
  icon: typeof Layers3
  label: string
  value: string | number
  description: string
}) {
  return (
    <div className="stats rounded-box border border-base-300 bg-base-100 shadow-sm">
      <div className="stat">
        <div className="mb-3 flex size-11 items-center justify-center rounded-box bg-base-200 text-primary">
          <Icon size={18} />
        </div>
        <div className="stat-title text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">{label}</div>
        <div className="stat-value text-2xl font-semibold text-base-content">{value}</div>
        <div className="stat-desc mt-2 text-sm text-base-content/55">{description}</div>
      </div>
    </div>
  )
}

function JobCard({ job, index }: { job: SyncJobDefinition; index: number }) {
  return (
    <div className="collapse-arrow collapse rounded-box border border-base-300 bg-base-100 shadow-sm">
      <input defaultChecked={index === 0} type="checkbox" />
      <div className="collapse-title px-6 py-5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="badge badge-primary badge-outline px-3 py-3 font-semibold">JOB {index + 1}</div>
          <h2 className="text-2xl font-semibold tracking-tight">{job.jobName}</h2>
          <div className="badge border-0 bg-base-200 px-3 py-3">{job.setting.atomicLevel ?? 'UNKNOWN'}</div>
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <MetricChip label="Executions" value={job.executions.length} />
          <MetricChip label="Fetch size" value={job.setting.fetchSize ?? '-'} />
          <MetricChip label="Batch size" value={job.setting.batchSize ?? '-'} />
        </div>
      </div>
      <div className="collapse-content px-6 pb-6">
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="space-y-4">
            <ConnectionCard title="Source" connection={job.database.source} />
            <ConnectionCard title="Destination" connection={job.database.dest} />
          </div>

          <div className="space-y-4">
            {job.executions.map((execution, executionIndex) => (
              <ExecutionCard key={`${job.jobName}-${executionIndex}`} execution={execution} executionIndex={executionIndex} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MetricChip({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-box border border-base-300 bg-base-200/60 px-4 py-3">
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  )
}

function ConnectionCard({ title, connection }: { title: string; connection: ConnectionInfo | null }) {
  return (
    <div className="rounded-box border border-base-300 bg-base-200/50 p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-box bg-base-100 text-primary">
          <Database size={18} />
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">{title}</div>
          <div className="text-lg font-semibold">{connection ? 'Connected definition' : 'Not configured'}</div>
        </div>
      </div>
      {connection ? (
        <div className="space-y-3 text-sm">
          <FieldRow label="Driver" value={connection.driver} />
          <FieldRow label="URL" value={connection.url} mono />
          <FieldRow label="Username" value={connection.username} />
          <FieldRow label="Password" value={connection.password ? '********' : '-'} />
        </div>
      ) : (
        <p className="text-sm text-base-content/55">The backend payload does not include a connection block here.</p>
      )}
    </div>
  )
}

function FieldRow({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="rounded-box border border-base-300 bg-base-100 px-4 py-3">
      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">{label}</div>
      <div className={`mt-1 break-all text-sm ${mono ? 'font-mono' : 'font-medium'}`}>{value || '-'}</div>
    </div>
  )
}

function ExecutionCard({ execution, executionIndex }: { execution: ExecutionStep; executionIndex: number }) {
  return (
    <div className="rounded-box border border-base-300 bg-base-100 p-5">
      <div className="flex flex-wrap items-center gap-3">
        <div className="badge badge-outline px-3 py-3 font-semibold">STEP {executionIndex + 1}</div>
        <div className="text-lg font-semibold">{execution.name || execution.type}</div>
        <div className="badge border-0 bg-primary/10 px-3 py-3 text-primary">{execution.type}</div>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <MetricChip label="Destination table" value={execution.destTable || '-'} />
        <MetricChip label="Parameters" value={execution.parameters?.length ?? 0} />
      </div>
      <div className="mt-4">
        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">SQL</div>
        <pre className="mt-2 overflow-x-auto rounded-box border border-base-300 bg-base-200/80 p-4 font-mono text-xs leading-6 text-base-content/70">
          {execution.sql}
        </pre>
      </div>
      {execution.parameters?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {execution.parameters.map((parameter) => (
            <span key={parameter.param} className="badge border-0 bg-base-200 px-3 py-3 font-mono text-xs">
              {parameter.param}: {String(parameter.value)}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}
