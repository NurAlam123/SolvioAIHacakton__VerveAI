import { CogIcon, UploadIcon } from "lucide-react";

import JobPostCard from "@/components/JobPostCard";
import Footer from "@/components/shared/Footer";
import NavigationCard from "@/components/shared/NavigationCard";
import ProfileCard from "@/components/shared/ProfileCard";
import Image from "@/components/ui/Image";
import { jobPosts } from "@/constant/posts";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto h-svh md:h-screen md:grid md:grid-cols-[1fr_30%] md:gap-2 pt-6 md:py-6 px-2 relative">
      <div className="text-5xl absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[calc(50%+8px)] -rotate-90 select-none max-md:hidden">
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
        <div className="max-md:flex max-md:justify-between max-md:items-center mb-4">
          <p className="uppercase text-sm font-semibold text-gray-500 select-none">
            JOB BOARD
          </p>

          {/* Navigation for small screens */}
          <div className="flex md:hidden gap-2 items-center">
            <button
              type="button"
              className="bg-gray-50 px-2 py-2 rounded-xl active:scale-[0.98] transition-transform will-change-transform"
            >
              <UploadIcon className="size-5" />
            </button>

            <button
              type="button"
              className="bg-gray-50 px-2 py-2 rounded-xl active:scale-[0.98] transition-transform will-change-transform"
            >
              <CogIcon className="size-5" />
            </button>

            <div className="w-8 h-8 overflow-hidden rounded-full border border-gray-300">
              <Image
                src={"/images/pfp.jpg"}
                alt="profile picture"
                width={1024}
                height={1024}
                className="object-center"
              />
            </div>
          </div>
        </div>

        <div className="h-full overflow-y-auto space-y-2 no-scrollbar pb-24 md:pb-16">
          {jobPosts.map((data) => (
            <JobPostCard key={data.id} {...data} />
          ))}
        </div>
      </div>

      {/* Profile and Navigation */}
      <div className="h-full rounded-2xl max-md:hidden">
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

        <Footer />
      </div>
    </main>
  );
}
