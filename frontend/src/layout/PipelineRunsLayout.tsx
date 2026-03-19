import { Link, Outlet, useOutletContext, useParams } from 'react-router-dom'
import type { PipelineWorkspaceContext } from './PipelineWorkspaceLayout'

export function PipelineRunsLayout() {
  const workspace = useOutletContext<PipelineWorkspaceContext>()
  const { runId } = useParams()
  const folderId = workspace.pipeline.folderId

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-base-100">
      <div className="flex shrink-0 items-center justify-between border-b border-base-300 bg-base-100 px-8 py-5">
        <div>
          <div className="iris-header">Runs</div>
          {runId ? (
            <>
              <div className="breadcrumbs mt-1 text-sm text-base-content/55">
                <ul>
                  <li>
                    <Link to={`/pipeline/items/${workspace.pipeline.id}/runs${folderId ? `?folderId=${folderId}` : ''}`}>
                      Run History
                    </Link>
                  </li>
                  <li className="font-semibold text-base-content">Run #{runId}</li>
                </ul>
              </div>
              <div className="mt-2 text-sm text-base-content/55">
                Attempts, jobs, and step execution summaries for the selected run.
              </div>
            </>
          ) : (
            <>
              <h1 className="text-xl font-bold tracking-tight">Run History</h1>
              <div className="mt-2 text-sm text-base-content/55">
                Runtime history for this pipeline definition.
              </div>
            </>
          )}
        </div>
      </div>

      <Outlet context={workspace} />
    </div>
  )
}
