export default function Loading() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-ink-950">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-brand-500 border-t-transparent" />
      </div>
    </div>
  );
}
