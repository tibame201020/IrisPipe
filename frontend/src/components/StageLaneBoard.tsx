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
            {
              stageId: stage.id,
              job,
            },
          ]),
        ),
      ),
    [stages],
  )

  const activeJob = activeDrag?.type === 'job' ? jobMap.get(activeDrag.jobId)?.job ?? null : null
  const activeStage = activeDrag?.type === 'stage' ? stages.find((stage) => stage.id === activeDrag.stageId) ?? null : null

  function handleDragStart(event: DragStartEvent) {
    const data = event.active.data.current as AnyDragItem | undefined
    if (!data) return
    setActiveDrag(data)
  }

  function handleDragEnd(event: DragEndEvent) {
    if (!activeDrag || !event.over) {
      setActiveDrag(null)
      return
    }

    const overData = event.over.data.current as { type?: string; stageId?: string; jobId?: string } | undefined
    if (!overData) {
      setActiveDrag(null)
      return
    }

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
      <div className="h-full overflow-x-auto overflow-y-hidden px-6 py-6">
        <div className="flex h-full min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-base-300 bg-base-100 text-center">
          <div className="text-lg font-semibold">{emptyTitle}</div>
          <div className="mt-2 max-w-md text-sm text-base-content/45">{emptyDescription}</div>
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
      <div className="h-full overflow-x-auto overflow-y-hidden px-6 py-6">
        <SortableContext items={stages.map((stage) => stage.id)} strategy={horizontalListSortingStrategy}>
          <div className="flex h-full min-w-max items-start gap-5 pb-2">
            {stages.map((stage, index) => (
              <StageLane
                key={stage.id}
                stage={stage}
                showConnector={index < stages.length - 1}
                stageDnDEnabled={Boolean(onMoveStage)}
                activeDragType={activeDrag?.type ?? null}
              />
            ))}
          </div>
        </SortableContext>
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
  showConnector,
  stageDnDEnabled,
  activeDragType,
}: {
  stage: StageLaneData
  showConnector: boolean
  stageDnDEnabled: boolean
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

  return (
    <div
      ref={setStageRef}
      className="flex items-stretch gap-5"
      style={{
        transform: CSS.Transform.toString(stageTransform),
        transition: stageTransition,
        opacity: stageDragging ? 0 : 1,
        pointerEvents: stageDragging ? 'none' : undefined,
      }}
    >
      <section
        ref={setBodyRef}
        className={`group/stage relative w-[320px] shrink-0 rounded-2xl border bg-base-100 shadow-sm transition-all duration-150 ${
          stage.selected ? 'border-primary/60 shadow-md' : 'border-base-300'
        } ${stageBodyIsOver || stageDropTarget ? 'ring-2 ring-primary/30 shadow-lg' : ''}`}
        aria-label={`Stage ${stage.title}`}
      >
      <div
        className={`rounded-t-2xl border-b px-4 py-4 ${stage.selected ? 'bg-primary/5' : 'bg-base-200/35'} border-base-300`}
        ref={setActivatorNodeRef}
        {...stageAttributes}
        {...stageListeners}
      >
        <div className="flex items-start justify-between gap-3">
          <div
            className={`min-w-0 flex-1 ${stage.onClick ? 'cursor-pointer' : ''}`}
            onClick={stage.onClick}
            onKeyDown={(event) => triggerButtonLikeAction(event, stage.onClick)}
            role={stage.onClick ? 'button' : undefined}
            tabIndex={stage.onClick ? 0 : -1}
          >
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-base-content/35">
              <span>Stage</span>
            </div>
            <div className="mt-1 truncate text-base font-bold">{stage.title}</div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {typeof stage.issuesCount === 'number' && stage.issuesCount > 0 ? (
              <span className="badge badge-warning badge-sm">{stage.issuesCount} issues</span>
            ) : null}
            {stage.status ? <StatusBadge status={stage.status} subtle /> : null}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="min-h-[16px] text-[11px] font-medium text-base-content/35">
            {stage.summary ? stage.summary : null}
          </div>
          <div
            className="flex shrink-0 translate-y-0.5 items-center gap-1 opacity-0 transition-all duration-150 group-hover/stage:translate-y-0 group-hover/stage:opacity-100 group-focus-within/stage:translate-y-0 group-focus-within/stage:opacity-100"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => event.stopPropagation()}
          >
            {stage.toolbar}
          </div>
        </div>
      </div>

      <div
        className={`space-y-3 rounded-b-2xl p-4 transition-colors ${stageBodyIsOver ? 'bg-primary/5 ring-2 ring-inset ring-primary/20' : ''}`}
      >
        {stageBodyIsOver ? (
          <div className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary shadow-sm">
            Drop job into this stage
          </div>
        ) : null}
        <SortableContext items={stage.jobs.map((job) => job.id)} strategy={rectSortingStrategy}>
          {stage.jobs.length === 0 ? (
            <div className="rounded-xl border border-dashed border-base-300 bg-base-200/20 px-4 py-6 text-center text-sm text-base-content/45">
              Drop a job here or add the first job.
            </div>
          ) : (
            stage.jobs.map((job) => (
              <StageLaneJob key={job.id} job={job} stageId={stage.id} dragDisabled={activeDragType === 'stage'} />
            ))
          )}
        </SortableContext>
      </div>
      </section>
      {showConnector ? (
        <div className="flex h-full min-h-[260px] w-24 items-center justify-center">
          <div className="flex items-center">
            <div className="h-[3px] w-16 rounded-full bg-primary/80 shadow-sm" />
            <div className="h-0 w-0 border-y-[8px] border-y-transparent border-l-[14px] border-l-primary" />
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
    opacity: isDragging ? 0.55 : 1,
  }

  return (
    <article
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`group/job relative rounded-xl border px-4 py-4 transition-all duration-150 ${
        job.selected
          ? 'border-primary bg-primary/5 shadow-sm ring-1 ring-primary/20'
          : 'border-base-300 bg-base-100 hover:border-primary/30 hover:bg-base-200/35'
      } ${isOver ? 'border-primary/60 bg-primary/6 ring-2 ring-primary/20 shadow-md' : ''} cursor-grab active:cursor-grabbing`}
      aria-label={`Job ${job.title}`}
      title="Drag to reorder or move across stages"
    >
      {isOver ? (
        <>
          <div className="absolute inset-x-3 -top-[3px] h-[3px] rounded-full bg-primary shadow-[0_0_0_1px_hsl(var(--p)/0.2)]" />
          <div className="absolute inset-x-3 -bottom-[3px] h-[3px] rounded-full bg-primary/55" />
        </>
      ) : null}

      <div
        className="absolute right-3 top-3 z-10 flex translate-y-0.5 items-center gap-1 opacity-0 transition-all duration-150 group-hover/job:translate-y-0 group-hover/job:opacity-100 group-focus-within/job:translate-y-0 group-focus-within/job:opacity-100"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={(event) => event.stopPropagation()}
      >
        {job.toolbar}
      </div>

      <div
        className={`min-w-0 cursor-pointer pr-16`}
        onClick={job.onClick}
        onDoubleClick={job.onDoubleClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault()
            job.onDoubleClick?.()
            return
          }
          if (event.key === ' ') {
            event.preventDefault()
            job.onClick?.()
          }
        }}
        role={job.onClick ? 'button' : undefined}
        tabIndex={job.onClick ? 0 : -1}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="truncate text-base font-semibold">{job.title}</div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {typeof job.issuesCount === 'number' && job.issuesCount > 0 ? (
              <span className="badge badge-warning badge-sm">{job.issuesCount}</span>
            ) : null}
            {job.status ? <StatusBadge status={job.status} subtle /> : null}
          </div>
        </div>

        {job.meta ? <div className="mt-2 truncate text-xs font-medium text-base-content/45">{job.meta}</div> : null}

        {job.badges && job.badges.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {job.badges.map((badge) => (
              <span key={badge} className="badge badge-ghost badge-sm truncate">
                {badge}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}

function JobOverlay({ job }: { job: StageLaneJobCard }) {
  return (
    <div className="w-[320px] rounded-xl border border-primary/30 bg-base-100/95 px-4 py-4 shadow-2xl backdrop-blur-sm">
      <div className="truncate text-base font-semibold">{job.title}</div>
      {job.meta ? <div className="mt-2 truncate text-xs font-medium text-base-content/45">{job.meta}</div> : null}
      {job.badges && job.badges.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {job.badges.map((badge) => (
            <span key={badge} className="badge badge-ghost badge-sm">
              {badge}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function StageOverlay({ stage }: { stage: StageLaneData }) {
  return (
    <div className="flex items-stretch gap-5">
      <section className="w-[320px] shrink-0 rounded-2xl border border-primary/30 bg-base-100/95 shadow-2xl backdrop-blur-sm">
        <div className="rounded-t-2xl border-b border-base-300 bg-primary/5 px-4 py-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-base-content/35">Stage</div>
              <div className="mt-1 truncate text-base font-bold">{stage.title}</div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {typeof stage.issuesCount === 'number' && stage.issuesCount > 0 ? (
                <span className="badge badge-warning badge-sm">{stage.issuesCount} issues</span>
              ) : null}
              {stage.status ? <StatusBadge status={stage.status} subtle /> : null}
            </div>
          </div>
        </div>
        <div className="space-y-3 rounded-b-2xl p-4">
          {stage.jobs.slice(0, 3).map((job) => (
            <div key={job.id} className="rounded-xl border border-base-300 bg-base-100 px-4 py-4">
              <div className="truncate text-base font-semibold">{job.title}</div>
              {job.badges && job.badges.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.badges.map((badge) => (
                    <span key={badge} className="badge badge-ghost badge-sm">
                      {badge}
                    </span>
                  ))}
                </div>
              ) : null}
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
