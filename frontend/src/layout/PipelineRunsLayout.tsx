import { Outlet, useOutletContext } from 'react-router-dom'
import type { PipelineWorkspaceContext } from './PipelineWorkspaceLayout'

export function PipelineRunsLayout() {
  const workspace = useOutletContext<PipelineWorkspaceContext>()
  return <Outlet context={workspace} />
}
