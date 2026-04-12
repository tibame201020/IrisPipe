export const PIPELINE_FAMILY_WORKSPACE_LABEL = 'Pipeline family workspace'

export const PIPELINE_FAMILY_RAIL_WIDTH = {
  compact: 'w-[300px] xl:w-[316px]',
  ledger: 'w-[320px]',
  detail: 'w-full xl:w-[336px]',
} as const

export const PIPELINE_FAMILY_TERMS = {
  pipeline: 'Pipeline',
  run: 'Logical run',
  attempt: 'Execution attempt',
  stageProjection: 'Stage projection',
} as const

export const PIPELINE_FAMILY_CONTEXT_DETAIL = {
  config: 'Design stage topology first, then refine jobs and step-level execution details.',
  runs: 'Run rows are the primary surface. Use detail view for attempt timelines, runtime boards, and diagnostics.',
  runDetail: 'Attempt timeline, runtime board, and diagnostics stay in one family workspace.',
} as const
