interface LoadingStateProps {
  cards?: number
}

export function LoadingState({ cards = 3 }: LoadingStateProps) {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      {Array.from({ length: cards }).map((_, index) => (
        <div key={index} className="card border border-base-300 bg-base-100 shadow-none">
          <div className="card-body space-y-4 p-6">
            <div className="skeleton h-3 w-24" />
            <div className="skeleton h-8 w-32" />
            <div className="space-y-2">
              <div className="skeleton h-3 w-full" />
              <div className="skeleton h-3 w-5/6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
