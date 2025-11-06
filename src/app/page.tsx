import JobPostCard from "@/components/JobPostCard";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto h-screen grid grid-cols-[1fr_30%] gap-2 py-6 px-2 relative">
      <div className="text-5xl absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[calc(50%+8px)] -rotate-90 -z-10">
        <p className="font-bold text-gray-200/70 tracking-wider">VERVE AI</p>
      </div>

      {/* Job board */}
      <div className="h-full overflow-hidden px-2">
        <p className="uppercase text-sm font-bold text-gray-500 mb-4 select-none">
          JOB BOARD
        </p>
        <div className="h-full overflow-y-auto space-y-2 no-scrollbar pb-16">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <JobPostCard key={i} />
          ))}
        </div>
      </div>

      {/* Profile and Navigation */}
      <div className="border border-gray-300 h-full rounded-2xl"></div>
    </div>
  );
}
