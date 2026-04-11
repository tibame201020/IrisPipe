import type { ReactNode } from 'react'
import type { PipelineRunDetailInfo, PipelineRunSummaryInfo } from '../../types/irispipe'
import { PipelineRunRow, PipelineRunRowSkeleton } from './PipelineRunRow'

type PipelineRunsLedgerProps = {
  runs: PipelineRunSummaryInfo[]
  detailsById: Record<number, PipelineRunDetailInfo | undefined>
  latestRunId?: number | null
  buildRunHref: (run: PipelineRunSummaryInfo) => string
  loading?: boolean
  loadingCount?: number
  hasMore?: boolean
  loadingMore?: boolean
  onLoadMore?: () => void
  footer?: ReactNode
}

const ROW_COLUMNS = '24px minmax(0,1.45fr) minmax(0,1.2fr) minmax(0,1fr) minmax(0,0.95fr) 108px'

export function PipelineRunsLedger({
  runs,
  detailsById,
  latestRunId,
  buildRunHref,
  loading = false,
  loadingCount = 6,
  hasMore = false,
  loadingMore = false,
  onLoadMore,
  footer,
}: PipelineRunsLedgerProps) {
  return (
    <div className="flex min-h-0 flex-col">
      <div
        className="iris-run-ledger-head sticky top-0 z-10 grid items-center px-5 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-base-content/45 backdrop-blur-sm"
        style={{ gridTemplateColumns: ROW_COLUMNS }}
      >
        <span />
        <span>Run</span>
        <span>Latest Attempt</span>
        <span>Timeline</span>
        <span>Status</span>
        <span className="text-right">Open</span>
      </div>

      <div className="iris-list-panel">
        {loading ? (
          Array.from({ length: loadingCount }).map((_, index) => <PipelineRunRowSkeleton key={index} />)
        ) : (
          runs.map((run) => (
            <PipelineRunRow
              key={run.id}
              run={run}
              detail={detailsById[run.id]}
              isLatest={run.id === latestRunId}
              to={buildRunHref(run)}
            />
          ))
        )}
      </div>

      {footer ? <div className="px-1 pt-4">{footer}</div> : null}

      {hasMore && onLoadMore ? (
        <div className="flex justify-center px-5 pb-1 pt-4">
          <button
            type="button"
            className="btn btn-ghost btn-xs gap-2 border-base-300 bg-base-100 text-base-content/60 hover:text-base-content"
            onClick={onLoadMore}
            disabled={loadingMore}
          >
            {loadingMore ? <span className="loading loading-spinner loading-xs" /> : null}
            Load older runs
          </button>
        </div>
      ) : null}
    </div>
  )
}
