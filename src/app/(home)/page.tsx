import JobPostCard from "@/components/JobPostCard";
import NavigationCard from "@/components/shared/NavigationCard";
import ProfileCard from "@/components/shared/ProfileCard";

import { jobPosts } from "@/constant/posts";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto h-screen grid grid-cols-[1fr_30%] gap-2 py-6 px-2 relative">
      <div className="text-5xl absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[calc(50%+8px)] -rotate-90 select-none">
        <p className="font-bold tracking-widest">
          {"VERVE AI".split("").map((c, i) => (
            <span
              key={`char-${c}-${i + 1}`}
              className=" text-gray-300/40 hover:text-gray-300 inline-block transition-all ease-in-out hover:rotate-6 hover:scale-95"
            >
              {c}
            </span>
          ))}
        </p>
      </div>

      {/* Job board */}
      <div className="h-full overflow-hidden px-2">
        <p className="uppercase text-sm font-semibold text-gray-500 mb-4 select-none">
          JOB BOARD
        </p>
        <div className="h-full overflow-y-auto space-y-2 no-scrollbar pb-16">
          {jobPosts.map((data) => (
            <JobPostCard key={data.id} {...data} />
          ))}
        </div>
      </div>

      {/* Profile and Navigation */}
      <div className="h-full rounded-2xl">
        <div>
          <p className="uppercase text-sm font-semibold text-gray-500 mb-4 select-none">
            PROFILE
          </p>
          <ProfileCard />
        </div>

        <div className="mt-8">
          <p className="uppercase text-sm font-semibold text-gray-500 mb-4 select-none">
            NAVIGATION
          </p>
          <NavigationCard />
        </div>
      </div>
    </main>
  );
}
