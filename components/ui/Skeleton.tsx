interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div className={`animate-pulse rounded-xl border-2 border-white/10 bg-ink-800 ${className}`} />
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border-2 border-black bg-ink-900 p-5 shadow-[6px_6px_0px_#000000]">
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-xl" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    </div>
  );
}
