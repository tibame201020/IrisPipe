import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { formatDateTime, formatDuration } from '../../lib/date'
import {
  findResumeTargetStage,
  getAttemptKindLabel,
  getPipelineStatusMeta,
  isPipelineStatusActive,
  isPipelineStatusResumable,
} from '../../lib/pipeline-runtime'
import type { PipelineRunDetailInfo, PipelineRunSummaryInfo } from '../../types/irispipe'
import { StatusBadge } from '../StatusBadge'

type PipelineRunRowProps = {
  run: PipelineRunSummaryInfo
  detail?: PipelineRunDetailInfo
  isLatest?: boolean
  to: string
  className?: string
}

type PipelineRunRowSkeletonProps = {
  className?: string
}

const ROW_COLUMNS = '24px minmax(0,1.45fr) minmax(0,1.2fr) minmax(0,1fr) minmax(0,0.95fr) 108px'

export function PipelineRunRow({ run, detail, isLatest = false, to, className }: PipelineRunRowProps) {
  const statusMeta = getPipelineStatusMeta(run.status)
  const isActive = isPipelineStatusActive(run.status)
  const isResumable = isPipelineStatusResumable(run.status)
  const attempts = detail?.attempts ?? []
  const latestAttempt = attempts[attempts.length - 1] ?? null
  const resumeTarget = latestAttempt ? findResumeTargetStage(latestAttempt) : null
  const attemptCount = attempts.length
  const startedAt = run.startTime ?? run.createdAt
  const statusToneClass = {
    success: 'border-success/20 bg-success/8 text-success',
    warning: 'border-warning/20 bg-warning/10 text-warning',
    info: 'border-info/20 bg-info/8 text-info',
    error: 'border-error/20 bg-error/8 text-error',
    neutral: 'border-base-300 bg-base-100 text-base-content/70',
  }[statusMeta.tone]

  return (
    <Link
      to={to}
      className={cn(
        'iris-list-row group grid items-center gap-4 px-5 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20',
        'hover:bg-base-200/40',
        isLatest && 'bg-primary/4',
        className,
      )}
      style={{ gridTemplateColumns: ROW_COLUMNS }}
      aria-label={`Open run ${run.id}`}
    >
      <div className="flex justify-center">
        <span className={cn('size-1.5 rounded-full', statusMeta.dotClass, isActive && 'animate-pulse')} />
      </div>

      <div className="min-w-0">
        <div className="flex min-w-0 items-center gap-2">
          <span className="font-mono text-[12px] font-semibold tabular-nums text-base-content/82">#{run.id}</span>
          {isLatest ? <span className="rounded-sm bg-primary/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-primary">latest</span> : null}
          {isActive ? <span className="text-[9px] font-black uppercase tracking-widest text-info/75">live</span> : null}
          {isResumable ? <span className="text-[9px] font-black uppercase tracking-widest text-warning/80">resumable</span> : null}
        </div>
        <div className="mt-0.5 truncate text-[11px] iris-copy-soft" title={run.folderPath}>
          {run.folderPath}
        </div>
      </div>

      <div className="min-w-0">
        <div className="truncate text-[11px] font-semibold text-base-content/78">
          {latestAttempt ? `Attempt #${latestAttempt.executionNo} · ${getAttemptKindLabel(latestAttempt.executionKind)}` : 'Attempt context loading'}
        </div>
        <div className="mt-0.5 truncate text-[10px] iris-copy-soft">
          {latestAttempt
            ? `${attemptCount} attempt${attemptCount === 1 ? '' : 's'} in this run`
            : 'Latest attempt details are loading'}
        </div>
      </div>

      <div className="min-w-0">
        <div className="truncate font-mono text-[11px] tabular-nums text-base-content/68">
          {formatDateTime(startedAt)}
        </div>
        <div className="mt-0.5 font-mono text-[10px] tabular-nums iris-copy-soft">
          {formatDuration(startedAt, run.endTime)}
        </div>
      </div>

      <div className="min-w-0">
        <StatusBadge status={run.status} subtle mode="text" />
        <div className={cn('mt-1 truncate text-[10px]', statusToneClass)}>
          {isResumable
            ? resumeTarget
              ? `Resume from ${resumeTarget.stage}`
              : 'Resume available from the first incomplete stage'
            : statusMeta.description}
        </div>
      </div>

      <div className="flex justify-end">
        <span className="inline-flex items-center gap-1 rounded-sm border border-base-300 bg-base-100 px-2 py-1 text-[10px] font-semibold text-base-content/60 transition-colors group-hover:border-primary/30 group-hover:text-primary">
          Open
          <ChevronRight size={11} />
        </span>
      </div>
    </Link>
  )
}

export function PipelineRunRowSkeleton({ className }: PipelineRunRowSkeletonProps) {
  return (
    <div
      className={cn('iris-list-row grid items-center gap-4 px-5 py-3', className)}
      style={{ gridTemplateColumns: ROW_COLUMNS }}
      aria-hidden="true"
    >
      <div className="flex justify-center">
        <span className="skeleton size-1.5 rounded-full" />
      </div>

      <div className="space-y-2">
        <div className="skeleton h-3.5 w-24" />
        <div className="skeleton h-3 w-40" />
      </div>

      <div className="space-y-2">
        <div className="skeleton h-3.5 w-28" />
        <div className="skeleton h-3 w-32" />
      </div>

      <div className="space-y-2">
        <div className="skeleton h-3.5 w-24" />
        <div className="skeleton h-3 w-20" />
      </div>

      <div className="space-y-2">
        <div className="skeleton h-6 w-24" />
        <div className="skeleton h-3 w-28" />
      </div>

      <div className="flex justify-end">
        <div className="skeleton h-7 w-16 rounded-sm" />
      </div>
    </div>
  )
}
