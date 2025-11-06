import JobPostCard from "@/components/JobPostCard";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto h-screen grid grid-cols-[1fr_30%] gap-2 py-6 px-2">
      {/* Job board */}
      <div className="h-full px-2 overflow-y-auto space-y-2 no-scrollbar">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <JobPostCard key={i} />
        ))}
      </div>

      {/* Profile and Navigation */}
      <div className="border border-gray-300 h-full rounded-2xl"></div>
    </div>
  );
}
