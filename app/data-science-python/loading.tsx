import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="space-y-10 py-10">
      <div className="flex flex-col space-y-2">
        <Skeleton className="h-[400px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  )
}
