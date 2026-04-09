import { SurfaceBox } from './ui/Surface'

interface LoadingStateProps {
  cards?: number
}

export function LoadingState({ cards = 3 }: LoadingStateProps) {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      {Array.from({ length: cards }).map((_, index) => (
        <SurfaceBox key={index} variant="section" className="border px-6 py-6 shadow-none">
          <div className="space-y-4">
            <div className="skeleton h-3 w-24" />
            <div className="skeleton h-8 w-32" />
            <div className="space-y-2">
              <div className="skeleton h-3 w-full" />
              <div className="skeleton h-3 w-5/6" />
            </div>
          </div>
        </SurfaceBox>
      ))}
    </div>
  )
}
