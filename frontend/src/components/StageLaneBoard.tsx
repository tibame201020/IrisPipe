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
import { useMemo, useState, type KeyboardEvent, type ReactNode } from 'react'
import { StatusBadge } from './StatusBadge'

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
  jobs: StageLaneJobCard[]
}

interface StageLaneBoardProps {
  stages: StageLaneData[]
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
        <div className="flex h-full min-h-[360px] flex-col items-center justify-center rounded-xl border border-dashed border-base-300 bg-base-100/80 text-center">
          <div className="text-base font-semibold text-base-content/60">{emptyTitle}</div>
          <div className="mt-1.5 max-w-md text-sm text-base-content/35">{emptyDescription}</div>
        </div>
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
        className="h-full overflow-x-auto overflow-y-hidden"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--bc)/0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        <div className="px-6 py-5 h-full">
          <SortableContext items={stages.map((s) => s.id)} strategy={horizontalListSortingStrategy}>
            <div className="flex h-full min-w-max items-start gap-0 pb-2">
              {stages.map((stage, index) => (
                <StageLane
                  key={stage.id}
                  stage={stage}
                  stageIndex={index}
                  showConnector={index < stages.length - 1}
                  stageDnDEnabled={Boolean(onMoveStage)}
                  jobsDnDEnabled={jobsDnDEnabled}
                  activeDragType={activeDrag?.type ?? null}
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
}: {
  stage: StageLaneData
  stageIndex: number
  showConnector: boolean
  stageDnDEnabled: boolean
  jobsDnDEnabled: boolean
  activeDragType: 'stage' | 'job' | null
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

  // Top accent: error if issues, primary if selected, else base
  const hasIssues = typeof stage.issuesCount === 'number' && stage.issuesCount > 0
  const accentClass = hasIssues
    ? 'bg-error/70'
    : stage.selected
      ? 'bg-primary'
      : 'bg-base-300/60'

  return (
    <div
      ref={setStageRef}
      className="flex items-stretch"
      style={{
        transform: CSS.Transform.toString(stageTransform),
        transition: stageTransition,
        opacity: stageDragging ? 0 : 1,
        pointerEvents: stageDragging ? 'none' : undefined,
      }}
    >
      {/* ?�?� Stage Column ?�?� */}
      <section
        ref={setBodyRef}
        className={`group/stage relative flex w-[256px] shrink-0 flex-col overflow-hidden rounded-xl border bg-base-100 shadow-sm transition-all duration-150 ${
          stage.selected
            ? 'border-primary/40 shadow-md'
            : 'border-base-300/80'
        } ${stageBodyIsOver || stageDropTarget ? 'ring-2 ring-primary/25 shadow-lg border-primary/30' : ''}`}
        aria-label={`Stage ${stage.title}`}
      >
        {/* Top accent bar */}
        <div className={`h-[3px] w-full shrink-0 ${accentClass} transition-colors`} />

        {/* Stage Header */}
        <div
          className={`shrink-0 border-b px-3 py-2.5 ${stage.selected ? 'bg-primary/5 border-primary/20' : 'bg-base-200/50 border-base-200'}`}
          ref={setActivatorNodeRef}
          {...stageAttributes}
          {...stageListeners}
        >
          <div className="flex items-center gap-2">
            {/* Stage index badge */}
            <span className={`shrink-0 rounded px-1.5 py-0.5 text-[9px] font-black tabular-nums ${
              stage.selected ? 'bg-primary/15 text-primary' : 'bg-base-300/70 text-base-content/45'
            }`}>
              S{stageIndex + 1}
            </span>

            {/* Stage title */}
            <div
              className={`min-w-0 flex-1 ${stage.onClick ? 'cursor-pointer' : ''}`}
              onClick={stage.onClick}
              onKeyDown={(e) => triggerButtonLikeAction(e, stage.onClick)}
              role={stage.onClick ? 'button' : undefined}
              tabIndex={stage.onClick ? 0 : -1}
            >
              <span className="block truncate text-[13px] font-bold tracking-tight" title={stage.title}>
                {stage.title}
              </span>
            </div>

            {/* Jobs count + issues */}
            <div className="flex shrink-0 items-center gap-1.5">
              {hasIssues ? (
                <span className="badge badge-error badge-xs">{stage.issuesCount}</span>
              ) : null}
              {stage.status ? <StatusBadge status={stage.status} subtle /> : null}
              <span className="text-[10px] text-base-content/40 tabular-nums">
                {stage.jobs.length}j
              </span>
            </div>
          </div>

          {/* Stage toolbar */}
          {stage.toolbar ? (
            <div
              className="mt-2 flex items-center gap-1 opacity-0 transition-opacity duration-100 group-hover/stage:opacity-100 group-focus-within/stage:opacity-100"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            >
              {stage.toolbar}
            </div>
          ) : null}

          {stage.summary ? (
            <div className="mt-1 text-[10px] text-base-content/45">{stage.summary}</div>
          ) : null}
        </div>

        {/* Stage Body */}
        <div
          className={`flex-1 space-y-1.5 overflow-y-auto p-2 transition-colors ${stageBodyIsOver ? 'bg-primary/5' : ''}`}
        >
          {stageBodyIsOver ? (
            <div className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
              Drop here
            </div>
          ) : null}
          <SortableContext items={stage.jobs.map((j) => j.id)} strategy={rectSortingStrategy}>
            {stage.jobs.length === 0 ? (
              <div className="rounded-lg border border-dashed border-base-300/60 px-3 py-6 text-center text-[11px] text-base-content/40">
                No jobs yet. Add one above.
              </div>
            ) : (
              stage.jobs.map((job) => (
                <StageLaneJob
                  key={job.id}
                  job={job}
                  stageId={stage.id}
                  dragDisabled={!jobsDnDEnabled || activeDragType === 'stage'}
                />
              ))
            )}
          </SortableContext>
        </div>
      </section>

      {/* ?�?� Stage Connector ?�?� */}
      {showConnector ? (
        <div className="flex w-[52px] shrink-0 flex-col items-center justify-start pt-10 gap-1">
          <span className="text-[7px] font-bold uppercase tracking-widest text-base-content/35">then</span>
          <div className="flex items-center">
            <div className="h-[1.5px] w-7 bg-base-300" />
            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" className="shrink-0">
              <path d="M1 1L6 5L1 9" stroke="hsl(var(--bc)/0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
}: {
  job: StageLaneJobCard
  stageId: string
  dragDisabled: boolean
}) {
  const { setNodeRef, transform, transition, isDragging, isOver, attributes, listeners } = useSortable({
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

  return (
    <article
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`group/job relative flex overflow-hidden rounded-lg border transition-all duration-150 ${
        job.selected
          ? 'border-primary/50 bg-primary/5 shadow-sm ring-1 ring-primary/15'
          : 'border-base-300 bg-base-100 hover:border-base-content/20 hover:bg-base-100/80 hover:shadow-sm'
      } ${isOver ? 'border-primary/50 bg-primary/5 ring-2 ring-primary/15' : ''} ${
        dragDisabled ? 'cursor-pointer' : 'cursor-grab active:cursor-grabbing'
      }`}
      aria-label={`Job ${job.title}`}
    >
      {/* Drop indicator */}
      {isOver ? (
        <div className="absolute inset-x-2 -top-[1.5px] h-[2px] rounded-full bg-primary" />
      ) : null}

      {/* Left colored bar */}
      <div className={`w-[3px] shrink-0 self-stretch ${barClass} ${barPulse}`} />

      {/* Card content */}
      <div
        className="min-w-0 flex-1 cursor-pointer px-2.5 py-2.5 pr-9"
        onClick={job.onClick}
        onDoubleClick={job.onDoubleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter') { e.preventDefault(); job.onDoubleClick?.(); return }
          if (e.key === ' ') { e.preventDefault(); job.onClick?.() }
        }}
        role={job.onClick ? 'button' : undefined}
        tabIndex={job.onClick ? 0 : -1}
      >
        {/* Title row */}
        <div className="flex items-start gap-1.5">
          {statusDot ? (
            <span className={`mt-[3px] size-1.5 shrink-0 rounded-full ${statusDot}`} />
          ) : null}
          <span className="min-w-0 flex-1 text-[12.5px] font-semibold leading-tight" title={job.title}>
            {job.title}
          </span>
          {typeof job.issuesCount === 'number' && job.issuesCount > 0 ? (
            <span className="badge badge-error badge-xs shrink-0 mt-0.5">{job.issuesCount}</span>
          ) : null}
        </div>

        {/* Subtitle ??connection summary */}
        {job.subtitle ? (
          <div className="mt-1.5 truncate text-[10.5px] text-base-content/45" title={job.subtitle}>
            {job.subtitle}
          </div>
        ) : null}

        {/* Step summary */}
        {job.stepSummary ? (
          <div className="mt-0.5 truncate text-[10px] text-base-content/40">
            {job.stepSummary}
          </div>
        ) : null}

        {/* Duration + wait time (run mode) */}
        {(job.duration || job.waitTime) ? (
          <div className="mt-2 flex items-center gap-2">
            {job.duration ? (
              <span className="font-mono text-[10px] font-medium text-base-content/50">{job.duration}</span>
            ) : null}
            {job.waitTime ? (
              <span className="font-mono text-[10px] text-base-content/35">{job.waitTime} wait</span>
            ) : null}
          </div>
        ) : null}

        {/* Error line (run mode) */}
        {job.errorLine ? (
          <div className="mt-1.5 truncate text-[10px] font-mono text-error/70" title={job.errorLine}>
            {job.errorLine}
          </div>
        ) : null}

        {/* Atomic badge */}
        {job.badges && job.badges.length > 0 ? (
          <div className="mt-2">
            <span className="rounded bg-base-200/40 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-base-content/55">
              {job.badges[0]}
            </span>
          </div>
        ) : null}
      </div>

      {/* Hover toolbar */}
      <div
        className="absolute right-1.5 top-1.5 z-10 flex items-center gap-0.5 opacity-0 transition-opacity duration-100 group-hover/job:opacity-100 group-focus-within/job:opacity-100"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        {job.toolbar}
      </div>
    </article>
  )
}

function JobOverlay({ job }: { job: StageLaneJobCard }) {
  return (
    <div className="flex w-[256px] overflow-hidden rounded-lg border border-primary/40 bg-base-100/95 shadow-2xl backdrop-blur-sm">
      <div className="w-[3px] shrink-0 bg-primary" />
      <div className="px-2.5 py-2.5">
        <div className="text-[12.5px] font-semibold leading-tight">{job.title}</div>
        {job.subtitle ? <div className="mt-1.5 truncate text-[10.5px] text-base-content/45">{job.subtitle}</div> : null}
        {job.stepSummary ? <div className="mt-0.5 truncate text-[10px] text-base-content/40">{job.stepSummary}</div> : null}
      </div>
    </div>
  )
}

function StageOverlay({ stage }: { stage: StageLaneData }) {
  return (
    <div className="flex items-stretch">
      <section className="flex w-[256px] shrink-0 flex-col overflow-hidden rounded-xl border border-primary/30 bg-base-100/95 shadow-2xl backdrop-blur-sm">
        <div className="h-[3px] w-full bg-primary" />
        <div className="border-b border-base-200 bg-base-200/50 px-3 py-2.5">
          <div className="flex items-center gap-2">
            <span className="rounded bg-primary/15 px-1.5 py-0.5 text-[9px] font-black text-primary">S</span>
            <span className="truncate text-[13px] font-bold">{stage.title}</span>
          </div>
        </div>
        <div className="space-y-1.5 p-2">
          {stage.jobs.slice(0, 3).map((job) => (
            <div key={job.id} className="flex overflow-hidden rounded-lg border border-base-200 bg-base-100">
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
