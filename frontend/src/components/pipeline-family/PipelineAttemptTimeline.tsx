import type { PipelineRunAttemptInfo } from '../../types/irispipe'
import { cn } from '../../lib/cn'
import { formatDateTimeLong, formatDuration } from '../../lib/date'
import { getAttemptKindLabel } from '../../lib/pipeline-runtime'
import { StatusBadge } from '../StatusBadge'

type PipelineAttemptTimelineProps = {
  attempts: PipelineRunAttemptInfo[]
  selectedAttemptId: number | null
  latestAttemptId: number | null
  onSelect: (executionId: number) => void
  className?: string
}

export function PipelineAttemptTimeline({
  attempts,
  selectedAttemptId,
  latestAttemptId,
  onSelect,
  className,
}: PipelineAttemptTimelineProps) {
  return (
    <div className={cn('iris-attempt-strip overflow-hidden', className)}>
      <div className="flex items-center justify-between gap-3 border-b border-base-300/60 px-4 py-3">
        <div className="min-w-0">
          <div className="iris-header">Attempt Timeline</div>
          <div className="mt-1 text-[11px] iris-copy">
            Select an attempt to update the runtime board, overview rail, and diagnostics.
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-[10px] iris-copy-soft">
          <span className="badge badge-ghost badge-sm">Latest marked</span>
          <span className="badge badge-ghost badge-sm">Selected drives board</span>
        </div>
      </div>

      <div className="overflow-x-auto px-3 py-3">
        <div className="flex min-w-max items-stretch gap-2">
          {attempts.map((attempt, index) => {
            const isSelected = attempt.executionId === selectedAttemptId
            const isLatest = attempt.executionId === latestAttemptId
            const isCurrent = attempt.status === 'STARTING' || attempt.status === 'STARTED' || attempt.status === 'STOPPING'

            return (
              <div key={attempt.executionId} className="flex items-center gap-2">
                {index > 0 ? <div className="iris-attempt-link h-px w-8 shrink-0 rounded-full" /> : null}
                <button
                  type="button"
                  className={cn(
                    'group relative min-w-[168px] max-w-[224px] rounded-[var(--iris-radius-inset)] border px-3 py-2 text-left transition-all',
                    isSelected
                      ? 'border-primary/40 bg-primary/8 ring-1 ring-primary/20'
                      : 'border-base-300 bg-base-100/94 hover:border-primary/25 hover:bg-base-100',
                  )}
                  onClick={() => onSelect(attempt.executionId)}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-[10px] font-black uppercase tracking-[0.16em] text-base-content/42">
                        Attempt #{attempt.executionNo}
                      </div>
                      <div className="mt-1 truncate text-[12px] font-semibold text-base-content/84">
                        {getAttemptKindLabel(attempt.executionKind)}
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      {isLatest ? <span className="badge badge-primary badge-xs">latest</span> : null}
                      {isCurrent ? <span className="badge badge-info badge-xs">live</span> : null}
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <StatusBadge status={attempt.status} subtle />
                  </div>

                  <div className="mt-2 space-y-0.5 text-[10px] iris-copy-soft">
                    <div>{attempt.startTime ? `Started ${formatDateTimeLong(attempt.startTime)}` : 'Pending'}</div>
                    <div>
                      {attempt.startTime && attempt.endTime
                        ? `Duration ${formatDuration(attempt.startTime, attempt.endTime)}`
                        : 'Duration pending'}
                    </div>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
