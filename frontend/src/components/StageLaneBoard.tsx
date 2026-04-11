import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
  type UniqueIdentifier,
} from '@dnd-kit/core'
import {
  SortableContext,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical } from 'lucide-react'
import { useMemo, useState, type KeyboardEvent, type ReactNode } from 'react'
import { StatusBadge } from './StatusBadge'
import { PipelineJobSlab } from './pipeline-family/PipelineJobSlab'
import { PipelineStageColumn } from './pipeline-family/PipelineStageColumn'
import { SurfaceBox } from './ui/Surface'

export interface StageLaneJobCard {
  id: string
  title: string
  status?: string
  // Semantic fields (all optional, backward-compatible)
  subtitle?: string           // e.g. "MySQL ??PostgreSQL"
  stepSummary?: string        // e.g. "3 steps · SELECT / INSERT"
  duration?: string           // e.g. "1.2s" (run mode)
  waitTime?: string           // e.g. "0.3s wait" (run mode)
  errorLine?: string          // first line of exitDescription (run mode)
  validationStatus?: 'ok' | 'warning' | 'error'  // config mode
  // Existing fields
  meta?: string
  badges?: string[]
  issuesCount?: number
  selected?: boolean
  onClick?: () => void
  onDoubleClick?: () => void
  toolbar?: ReactNode
}

export interface StageLaneData {
  id: string
  title: string
  summary?: string
  meta?: string
  status?: string
  issuesCount?: number
  selected?: boolean
  onClick?: () => void
  toolbar?: ReactNode
  emptyAction?: ReactNode
  jobs: StageLaneJobCard[]
}

interface StageLaneBoardProps {
  stages: StageLaneData[]
  mode?: 'topology' | 'runtime'
  emptyTitle?: string
  emptyDescription?: string
  onMoveStage?: (draggedStageId: string, targetStageId: string) => void
  onMoveJob?: (draggedJobId: string, sourceStageId: string, targetStageId: string, targetJobId?: string) => void
}

type DragItem = { type: 'job'; stageId: string; jobId: string }
type StageDragItem = { type: 'stage'; stageId: string }
type AnyDragItem = DragItem | StageDragItem

export function StageLaneBoard({
  stages,
  mode = 'runtime',
  emptyTitle = 'No stages',
  emptyDescription = 'This pipeline does not currently define any stage lanes.',
  onMoveStage,
  onMoveJob,
}: StageLaneBoardProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const [activeDrag, setActiveDrag] = useState<AnyDragItem | null>(null)
  const jobMap = useMemo(
    () =>
      new Map(
        stages.flatMap((stage) =>
          stage.jobs.map((job) => [
            job.id,
            { stageId: stage.id, job },
          ]),
        ),
      ),
    [stages],
  )

  const activeJob = activeDrag?.type === 'job' ? jobMap.get(activeDrag.jobId)?.job ?? null : null
  const activeStage = activeDrag?.type === 'stage' ? stages.find((s) => s.id === activeDrag.stageId) ?? null : null
  const jobsDnDEnabled = Boolean(onMoveJob)

  function handleDragStart(event: DragStartEvent) {
    const data = event.active.data.current as AnyDragItem | undefined
    if (data) setActiveDrag(data)
  }

  function handleDragEnd(event: DragEndEvent) {
    if (!activeDrag || !event.over) { setActiveDrag(null); return }
    const overData = event.over.data.current as { type?: string; stageId?: string; jobId?: string } | undefined
    if (!overData) { setActiveDrag(null); return }

    if (activeDrag.type === 'stage') {
      if ((overData.type === 'stage' || overData.type === 'stage-header') && overData.stageId && onMoveStage) {
        onMoveStage(activeDrag.stageId, overData.stageId)
      }
      setActiveDrag(null)
      return
    }

    if (onMoveJob) {
      if (overData.type === 'job' && overData.stageId) {
        onMoveJob(activeDrag.jobId, activeDrag.stageId, overData.stageId, overData.jobId)
        setActiveDrag(null)
        return
      }
      if ((overData.type === 'stage' || overData.type === 'stage-body') && overData.stageId) {
        onMoveJob(activeDrag.jobId, activeDrag.stageId, overData.stageId)
        setActiveDrag(null)
        return
      }
    }
    setActiveDrag(null)
  }

  if (stages.length === 0) {
    return (
      <div
        className="h-full overflow-x-auto overflow-y-hidden px-6 py-6"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--bc)/0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        <SurfaceBox variant="empty" className="flex h-full min-h-[360px] flex-col items-center justify-center bg-base-100/80 text-center">
          <div className="text-base font-semibold text-base-content/60">{emptyTitle}</div>
          <div className="mt-1.5 max-w-md text-sm text-base-content/35">{emptyDescription}</div>
        </SurfaceBox>
      </div>
    )
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveDrag(null)}
    >
      <div
        className={`h-full overflow-x-auto overflow-y-hidden ${mode === 'topology' ? 'px-4 py-4' : ''}`}
        style={{
          backgroundImage:
            mode === 'topology'
              ? 'linear-gradient(180deg, hsl(var(--bc)/0.018), transparent 20%)'
              : 'radial-gradient(circle, hsl(var(--bc)/0.05) 1px, transparent 1px)',
          backgroundSize: mode === 'topology' ? 'auto' : '20px 20px',
        }}
      >
        <div className={`h-full ${mode === 'topology' ? 'iris-topology-shell px-4 py-4' : 'px-5 py-4'}`}>
          <SortableContext items={stages.map((s) => s.id)} strategy={horizontalListSortingStrategy}>
            <div className={`flex h-full min-w-max items-start ${mode === 'topology' ? 'gap-4 pb-2' : 'gap-3.5 pb-2'}`}>
              {stages.map((stage, index) => (
                <StageLane
                  key={stage.id}
                  stage={stage}
                  stageIndex={index}
                  showConnector={index < stages.length - 1}
                  stageDnDEnabled={Boolean(onMoveStage)}
                  jobsDnDEnabled={jobsDnDEnabled}
                  activeDragType={activeDrag?.type ?? null}
                  mode={mode}
                />
              ))}
            </div>
          </SortableContext>
        </div>
      </div>

      <DragOverlay dropAnimation={null}>
        {activeDrag?.type === 'job' && activeJob ? <JobOverlay job={activeJob} /> : null}
        {activeDrag?.type === 'stage' && activeStage ? <StageOverlay stage={activeStage} /> : null}
      </DragOverlay>
    </DndContext>
  )
}

function StageLane({
  stage,
  stageIndex,
  showConnector,
  stageDnDEnabled,
  jobsDnDEnabled,
  activeDragType,
  mode,
}: {
  stage: StageLaneData
  stageIndex: number
  showConnector: boolean
  stageDnDEnabled: boolean
  jobsDnDEnabled: boolean
  activeDragType: 'stage' | 'job' | null
  mode: 'topology' | 'runtime'
}) {
  const {
    setNodeRef: setStageRef,
    setActivatorNodeRef,
    attributes: stageAttributes,
    listeners: stageListeners,
    transform: stageTransform,
    transition: stageTransition,
    isDragging: stageDragging,
    isOver: stageDropTarget,
  } = useSortable({
    id: stage.id,
    data: { type: 'stage', stageId: stage.id } satisfies StageDragItem,
    disabled: !stageDnDEnabled || activeDragType === 'job',
  })

  const { setNodeRef: setBodyRef, isOver: stageBodyIsOver } = useDroppable({
    id: `stage-body:${stage.id}` satisfies UniqueIdentifier,
    data: { type: 'stage-body', stageId: stage.id },
  })

  const hasIssues = typeof stage.issuesCount === 'number' && stage.issuesCount > 0
  const runtimeTone = getRuntimeStageTone(stage.status)
  const stageShellRef = (node: HTMLElement | null) => {
    setStageRef(node)
    setBodyRef(node)
  }

  return (
    <div
      className="flex items-stretch"
      style={{
        transform: CSS.Transform.toString(stageTransform),
        transition: stageTransition,
        opacity: stageDragging ? 0 : 1,
        pointerEvents: stageDragging ? 'none' : undefined,
      }}
    >
      {/* ?�?� Stage Column ?�?� */}
      {mode === 'topology' ? (
        <PipelineStageColumn
          ref={stageShellRef}
          className={`iris-topology-stage-column group/stage relative flex w-[312px] shrink-0 flex-col transition-all duration-150 ${
            stage.selected
              ? 'z-10 border-primary/40 ring-2 ring-primary/18 shadow-[0_14px_32px_hsl(var(--p)/0.07)]'
              : 'hover:border-base-300/90'
          } ${stageBodyIsOver || stageDropTarget ? 'border-primary/35 ring-2 ring-primary/25' : ''} ${
            stage.onClick ? 'cursor-default' : ''
          }`}
          headerClassName="iris-topology-stage-head"
          bodyClassName={`iris-topology-stage-body ${stageBodyIsOver ? 'bg-primary/4' : ''}`}
          header={
            <div className="space-y-3 px-4 py-3.5">
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`min-w-0 flex-1 ${stage.onClick ? 'cursor-pointer' : ''}`}
                  onClick={stage.onClick}
                  onKeyDown={(e) => triggerButtonLikeAction(e, stage.onClick)}
                  role={stage.onClick ? 'button' : undefined}
                  tabIndex={stage.onClick ? 0 : -1}
                >
                  <div className="flex items-center gap-2">
                    <span className="iris-topology-stage-order">Stage {stageIndex + 1}</span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-base-content/44">
                      {stage.jobs.length} jobs
                    </span>
                    {hasIssues ? <span className="badge badge-error badge-xs">{stage.issuesCount}</span> : null}
                  </div>
                  <div className="mt-2 min-w-0 truncate text-[14px] font-semibold tracking-tight text-base-content/88" title={stage.title}>
                    {stage.title}
                  </div>
                  {stage.summary ? <div className="mt-1.5 text-[10.5px] iris-copy">{stage.summary}</div> : null}
                </div>

                <div
                  className="iris-topology-stage-tools shrink-0"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                >
                  {stage.toolbar}
                  {!stageDnDEnabled ? null : (
                    <button
                      type="button"
                      ref={setActivatorNodeRef}
                      className="iris-topology-grip btn btn-ghost btn-xs btn-square shrink-0 cursor-grab text-base-content/38 hover:text-base-content active:cursor-grabbing"
                      aria-label={`Reorder ${stage.title}`}
                      {...stageAttributes}
                      {...stageListeners}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <GripVertical size={12} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          }
          aria-label={`Stage ${stage.title}`}
        >
          <div className="relative min-h-[236px] flex-1 px-3 py-3 transition-all">
            <div className="iris-topology-stage-spine pointer-events-none absolute bottom-3 left-[18px] top-3 w-px" />
            {stageBodyIsOver ? (
              <div className="iris-inset-panel border-primary/30 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                Drop here
              </div>
            ) : null}
            <SortableContext items={stage.jobs.map((j) => j.id)} strategy={rectSortingStrategy}>
              {stage.jobs.length === 0 ? (
                <div className="iris-empty-panel border-base-300/80 bg-base-100/90 px-3 py-7 text-center text-[11px] text-base-content/42">
                  <div>No jobs in this stage yet.</div>
                  {stage.emptyAction ? <div className="mt-3 flex justify-center">{stage.emptyAction}</div> : null}
                </div>
              ) : (
                <div className="iris-topology-job-stack space-y-2">
                  {stage.jobs.map((job) => (
                    <StageLaneJob
                      key={job.id}
                      job={job}
                      stageId={stage.id}
                      dragDisabled={!jobsDnDEnabled || activeDragType === 'stage'}
                      mode={mode}
                    />
                  ))}
                </div>
              )}
            </SortableContext>
          </div>
        </PipelineStageColumn>
      ) : (
        <PipelineStageColumn
          ref={stageShellRef}
          className={`group/stage relative flex shrink-0 flex-col overflow-hidden transition-all duration-150 iris-lane-shell w-[300px] ${
            stage.selected ? 'border-primary/35 shadow-md ring-1 ring-primary/15' : 'border-base-300/70'
          } ${runtimeTone.shellClass} ${stageBodyIsOver || stageDropTarget ? 'ring-2 ring-primary/25 shadow-lg border-primary/30' : ''}`}
          aria-label={`Stage ${stage.title}`}
        >
          <div className={`shrink-0 px-4 iris-lane-header py-3 ${stage.selected ? 'bg-primary/6' : runtimeTone.headerClass}`}>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black uppercase tracking-[0.18em] text-base-content/40">
                Stage {stageIndex + 1}
              </span>

              <div
                className={`min-w-0 flex-1 ${stage.onClick ? 'cursor-pointer' : ''}`}
                onClick={stage.onClick}
                onKeyDown={(e) => triggerButtonLikeAction(e, stage.onClick)}
                role={stage.onClick ? 'button' : undefined}
                tabIndex={stage.onClick ? 0 : -1}
              >
                <span className="block truncate text-[14px] font-semibold tracking-tight text-base-content/88" title={stage.title}>
                  {stage.title}
                </span>
              </div>

              <div className="flex shrink-0 items-center gap-1.5">
                {hasIssues ? <span className="badge badge-error badge-xs">{stage.issuesCount}</span> : null}
                {stage.status ? <StatusBadge status={stage.status} subtle /> : null}
                <span className="text-[10px] uppercase tracking-[0.12em] text-base-content/40 tabular-nums">{stage.jobs.length} jobs</span>
                {!stageDnDEnabled ? null : (
                  <button
                    type="button"
                    ref={setActivatorNodeRef}
                    className="btn btn-ghost btn-xs btn-square shrink-0 cursor-grab text-base-content/40 hover:text-base-content active:cursor-grabbing"
                    aria-label={`Reorder ${stage.title}`}
                    {...stageAttributes}
                    {...stageListeners}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <GripVertical size={12} />
                  </button>
                )}
              </div>
            </div>

            {stage.toolbar ? (
              <div
                className="mt-2 flex flex-wrap items-center gap-1"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
              >
                {stage.toolbar}
              </div>
            ) : null}

            {stage.summary ? <div className="mt-2 text-[10px] iris-copy">{stage.summary}</div> : null}
          </div>

          <div className={`flex-1 overflow-y-auto transition-colors iris-lane-body space-y-2 p-3 ${stageBodyIsOver ? 'bg-primary/5' : ''}`}>
            {stageBodyIsOver ? (
              <div className="iris-inset-panel border-primary/30 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                Drop here
              </div>
            ) : null}
            <SortableContext items={stage.jobs.map((j) => j.id)} strategy={rectSortingStrategy}>
              {stage.jobs.length === 0 ? (
                <div className="iris-empty-panel border-base-300/60 px-3 py-7 text-center text-[11px] text-base-content/40">
                  <div>No jobs in this stage yet.</div>
                  {stage.emptyAction ? <div className="mt-3 flex justify-center">{stage.emptyAction}</div> : null}
                </div>
              ) : (
                stage.jobs.map((job) => (
                  <StageLaneJob
                    key={job.id}
                    job={job}
                    stageId={stage.id}
                    dragDisabled={!jobsDnDEnabled || activeDragType === 'stage'}
                    mode={mode}
                  />
                ))
              )}
            </SortableContext>
          </div>
        </PipelineStageColumn>
      )}

      {/* ?�?� Stage Connector ?�?� */}
      {showConnector ? (
        <div className={`flex shrink-0 items-start justify-center ${mode === 'topology' ? 'w-[56px] pt-[86px]' : 'w-[44px] pt-[62px]'}`}>
          <div
            className={`flex items-center ${mode === 'topology' ? 'iris-topology-flow-stack text-base-content/40' : runtimeTone.connectorClass}`}
          >
            {mode === 'topology' ? (
              <>
                <span className="iris-topology-flow-label">Then</span>
                <div className="flex items-center">
                  <div className="iris-topology-connector-line h-[2px] w-10 rounded-full" />
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="iris-topology-flow-arrow shrink-0 overflow-visible">
                    <path d="M1 1L8 5L1 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <div className="iris-topology-connector-line h-px w-6 rounded-full" />
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" className="shrink-0 overflow-visible">
                  <path d="M1 1L7.5 5L1 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function StageLaneJob({
  job,
  stageId,
  dragDisabled,
  mode,
}: {
  job: StageLaneJobCard
  stageId: string
  dragDisabled: boolean
  mode: 'topology' | 'runtime'
}) {
  const { setNodeRef, setActivatorNodeRef, transform, transition, isDragging, isOver, attributes, listeners } = useSortable({
    id: job.id,
    data: { type: 'job', stageId, jobId: job.id } satisfies DragItem,
    disabled: dragDisabled,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  }

  // Left bar color ??priority: run status > validation status
  const barClass =
    job.status === 'COMPLETED'
      ? 'bg-success'
      : job.status === 'FAILED' || job.status === 'ABANDONED'
        ? 'bg-error'
        : job.status === 'STARTED' || job.status === 'STARTING'
          ? 'bg-info'
          : job.status === 'STOPPING' || job.status === 'STOPPED'
            ? 'bg-warning'
            : job.status === 'NOT_RUN'
              ? 'bg-base-300'
              : job.validationStatus === 'error'
                ? 'bg-error'
                : job.validationStatus === 'warning'
                  ? 'bg-warning'
                  : job.validationStatus === 'ok'
                    ? 'bg-success'
                    : 'bg-base-300/50'

  // Pulse for in-progress
  const barPulse = job.status === 'STARTED' || job.status === 'STARTING' ? 'animate-pulse' : ''

  // Status dot for title row (only for run mode)
  const statusDot =
    job.status === 'COMPLETED'
      ? 'bg-success'
      : job.status === 'FAILED' || job.status === 'ABANDONED'
        ? 'bg-error'
        : job.status === 'STARTED' || job.status === 'STARTING'
          ? 'bg-info animate-pulse'
          : job.status === 'STOPPING' || job.status === 'STOPPED'
            ? 'bg-warning'
            : job.status === 'NOT_RUN'
              ? 'bg-base-300'
              : null
  const compactStepLabel = getCompactStepLabel(job.stepSummary, job.meta)
  const topologyControls = Boolean(job.toolbar) || !dragDisabled
  const topologyLeadingClass =
    job.validationStatus === 'error'
      ? 'bg-error'
      : job.validationStatus === 'warning'
        ? 'bg-warning'
        : job.validationStatus === 'ok'
          ? 'bg-success/80'
          : 'bg-neutral/60'

  return (
    <PipelineJobSlab
      ref={setNodeRef}
      style={style}
      className={`group/job relative flex overflow-hidden transition-all duration-150 ${
        mode === 'topology'
          ? `iris-topology-job-slab ${job.selected ? 'border-primary/45 bg-primary/[0.06] shadow-sm ring-1 ring-primary/14' : 'hover:border-neutral/45'}`
          : `iris-job-tile ${job.selected ? 'border-primary/45 bg-primary/5 shadow-sm ring-1 ring-primary/12' : 'border-base-300/70'}`
      } ${isOver ? 'border-primary/50 bg-primary/5 ring-2 ring-primary/15' : ''} ${mode === 'topology' ? '' : 'cursor-default'}`}
      headerClassName={mode === 'topology' ? 'items-start gap-2 px-3 py-2.5' : ''}
      bodyClassName={mode === 'topology' ? 'mt-1.5 px-3 pb-2.5' : ''}
      interactive={Boolean(job.onClick)}
      onClick={mode === 'topology' ? job.onClick : undefined}
      onDoubleClick={mode === 'topology' ? job.onDoubleClick : undefined}
      onKeyDown={
        mode === 'topology'
          ? (e) => {
              if (e.key === 'Enter') { e.preventDefault(); job.onDoubleClick?.(); return }
              if (e.key === ' ') { e.preventDefault(); job.onClick?.() }
            }
          : undefined
      }
      role={mode === 'topology' && job.onClick ? 'button' : undefined}
      tabIndex={mode === 'topology' && job.onClick ? 0 : undefined}
      aria-label={`Job ${job.title}`}
      leading={mode === 'topology' ? <div className={`h-full w-full ${topologyLeadingClass}`} /> : undefined}
      leadingClassName={mode === 'topology' ? 'w-[4px]' : undefined}
      header={
        mode === 'topology' ? (
          <div className="flex min-w-0 items-start gap-2">
            <span className="min-w-0 flex-1 truncate text-[12.5px] font-semibold leading-tight text-base-content/86" title={job.title}>
              {job.title}
            </span>
            {typeof job.issuesCount === 'number' && job.issuesCount > 0 ? (
              <span className="badge badge-error badge-xs shrink-0">{job.issuesCount}</span>
            ) : null}
          </div>
        ) : undefined
      }
      headerAside={
        mode === 'topology' && topologyControls ? (
          <div
            className="iris-topology-job-actions flex items-center gap-1"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            {job.toolbar}
            {dragDisabled ? null : (
              <button
                type="button"
                ref={setActivatorNodeRef}
                className="iris-topology-grip btn btn-ghost btn-xs btn-square shrink-0 cursor-grab text-base-content/35 hover:text-base-content active:cursor-grabbing"
                aria-label={`Reorder ${job.title}`}
                {...attributes}
                {...listeners}
                onClick={(event) => event.stopPropagation()}
                onDoubleClick={(event) => event.stopPropagation()}
              >
                <GripVertical size={11} />
              </button>
            )}
          </div>
        ) : undefined
      }
    >
      {/* Drop indicator */}
      {isOver ? (
        <div className="absolute inset-x-2 -top-[1.5px] h-[2px] rounded-full bg-primary" />
      ) : null}

      {/* Left colored bar */}
      {mode === 'topology' ? null : <div className={`w-[3px] shrink-0 self-stretch ${barClass} ${barPulse}`} />}

      {/* Card content */}
      <div className={`min-w-0 flex-1 ${mode === 'topology' ? 'iris-topology-job-main' : 'cursor-pointer px-3 py-2.5'}`}>
        {/* Title row */}
        {mode === 'topology' ? null : (
          <div className="flex items-start gap-1.5">
            {statusDot ? (
              <span className={`mt-[3px] size-1.5 shrink-0 rounded-full ${statusDot}`} />
            ) : null}
            <span className="min-w-0 flex-1 text-[12.5px] font-semibold leading-tight text-base-content/84" title={job.title}>
              {job.title}
            </span>
            <div
              className="mt-0.5 flex shrink-0 items-center gap-1"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            >
              {typeof job.issuesCount === 'number' && job.issuesCount > 0 ? (
                <span className="badge badge-error badge-xs shrink-0">{job.issuesCount}</span>
              ) : null}
            </div>
          </div>
        )}

        {mode === 'topology' ? (
          <div className="flex items-center gap-2">
            {compactStepLabel ? <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-base-content/50">{compactStepLabel}</span> : null}
            {job.selected ? <span className="text-[10px] iris-copy-soft">Selected</span> : null}
          </div>
        ) : null}

        {job.subtitle && mode !== 'topology' ? (
          <div className="mt-1 truncate text-[10.5px] iris-copy" title={job.subtitle}>
            {job.subtitle}
          </div>
        ) : null}

        {job.stepSummary && mode !== 'topology' ? (
          <div className="mt-0.5 truncate text-[10px] iris-copy-soft">
            {job.stepSummary}
          </div>
        ) : null}

        {(job.duration || job.waitTime) && mode !== 'topology' ? (
          <div className="mt-2 flex items-center gap-2">
            {job.duration ? (
              <span className="font-mono text-[10px] font-medium text-base-content/58">{job.duration}</span>
            ) : null}
            {job.waitTime ? (
              <span className="font-mono text-[10px] text-base-content/42">{job.waitTime} wait</span>
            ) : null}
          </div>
        ) : null}

        {job.errorLine && mode !== 'topology' ? (
          <div className="mt-1.5 truncate text-[10px] font-mono text-error/70" title={job.errorLine}>
            {job.errorLine}
          </div>
        ) : null}

        {job.badges && job.badges.length > 0 && mode !== 'topology' ? (
          <div className="mt-2">
            <span className="rounded-sm bg-base-200/60 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-base-content/55">
              {job.badges[0]}
            </span>
          </div>
        ) : null}
      </div>

      {job.toolbar && mode !== 'topology' ? (
        <div
          className="shrink-0 border-l border-base-300/80 bg-base-200/34 px-1.5 py-1.5"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-full flex-col justify-between gap-1">
            {job.toolbar}
          </div>
        </div>
      ) : null}
    </PipelineJobSlab>
  )
}

function getRuntimeStageTone(status?: string) {
  switch (status) {
    case 'COMPLETED':
      return {
        shellClass: 'shadow-[inset_0_0_0_1px_hsl(var(--su)/0.12)]',
        headerClass: 'bg-success/6',
        connectorClass: 'text-success/75',
        connectorLabelClass: 'text-success/70',
      }
    case 'FAILED':
    case 'ABANDONED':
      return {
        shellClass: 'shadow-[inset_0_0_0_1px_hsl(var(--er)/0.14)]',
        headerClass: 'bg-error/6',
        connectorClass: 'text-error/75',
        connectorLabelClass: 'text-error/68',
      }
    case 'STARTED':
    case 'STARTING':
      return {
        shellClass: 'shadow-[inset_0_0_0_1px_hsl(var(--in)/0.14)]',
        headerClass: 'bg-info/7',
        connectorClass: 'text-info/80',
        connectorLabelClass: 'text-info/70',
      }
    case 'STOPPING':
    case 'STOPPED':
      return {
        shellClass: 'shadow-[inset_0_0_0_1px_hsl(var(--wa)/0.14)]',
        headerClass: 'bg-warning/8',
        connectorClass: 'text-warning/80',
        connectorLabelClass: 'text-warning/72',
      }
    default:
      return {
        shellClass: '',
        headerClass: '',
        connectorClass: 'text-base-content/46',
        connectorLabelClass: 'text-base-content/42',
      }
  }
}

function getCompactStepLabel(stepSummary?: string, meta?: string) {
  const source = stepSummary ?? meta
  if (!source) return null

  const stepMatch = source.match(/(\d+)\s*steps?/i)
  if (stepMatch) return `${stepMatch[1]} steps`

  const firstSegment = source.split(/[|,]/)[0]?.trim()
  return firstSegment ? firstSegment : null
}

function JobOverlay({ job }: { job: StageLaneJobCard }) {
  return (
    <div className="flex w-[256px] overflow-hidden rounded-md border border-primary/40 bg-base-100/95 shadow-2xl backdrop-blur-sm">
      <div className="w-[3px] shrink-0 bg-primary" />
      <div className="px-2.5 py-2.5">
        <div className="text-[12.5px] font-semibold leading-tight">{job.title}</div>
        {job.subtitle ? <div className="mt-1.5 truncate text-[10.5px] iris-copy">{job.subtitle}</div> : null}
        {job.stepSummary ? <div className="mt-0.5 truncate text-[10px] iris-copy-soft">{job.stepSummary}</div> : null}
      </div>
    </div>
  )
}

function StageOverlay({ stage }: { stage: StageLaneData }) {
  return (
    <div className="flex items-stretch">
      <section className="iris-lane-shell flex w-[276px] shrink-0 flex-col overflow-hidden border-primary/30 bg-base-100/95 shadow-2xl backdrop-blur-sm">
        <div className="h-[3px] w-full bg-primary" />
        <div className="iris-lane-header px-3 py-2.5">
          <div className="flex items-center gap-2">
            <span className="rounded-sm bg-primary/15 px-1.5 py-0.5 text-[9px] font-black text-primary">Stage</span>
            <span className="truncate text-[13px] font-bold">{stage.title}</span>
          </div>
        </div>
        <div className="iris-lane-body space-y-2 p-2.5">
          {stage.jobs.slice(0, 3).map((job) => (
            <div key={job.id} className="iris-job-tile flex overflow-hidden">
              <div className="w-[3px] shrink-0 bg-base-300" />
              <div className="px-2.5 py-2">
                <div className="text-[12.5px] font-semibold leading-tight">{job.title}</div>
                {job.subtitle ? <div className="mt-1 truncate text-[10.5px] text-base-content/50">{job.subtitle}</div> : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function triggerButtonLikeAction(event: KeyboardEvent<HTMLElement>, action?: () => void) {
  if (!action) return
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    action()
  }
}
