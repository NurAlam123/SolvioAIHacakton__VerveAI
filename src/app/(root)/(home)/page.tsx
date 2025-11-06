import JobPostCard from "@/components/JobPostCard";
import Footer from "@/components/shared/Footer";
import { NavigationCard } from "@/components/shared/NavigationCard";
import ProfileCard from "@/components/shared/ProfileCard";
import { jobPosts } from "@/constant/posts";

export default function Home() {
  return (
    <>
      <Left />
      {/* Job board */}
      <Middle title="JOB BOARD">
        <div className="h-full overflow-y-auto space-y-2 no-scrollbar pb-24 md:pb-16">
          {jobPosts.map((data) => (
            <JobPostCard key={data.id} {...data} />
          ))}
        </div>
      </Middle>

      {/* Profile and Navigation */}
      <Right />
    </>
  );
}

const Left = () => {
  return (
    <aside className="text-5xl absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[calc(50%+8px)] -rotate-90 select-none max-md:hidden">
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
    </aside>
  );
};

const Right = () => {
  return (
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
  );
};

const Middle = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="h-full overflow-hidden px-2">
      <div className="max-md:flex max-md:justify-between max-md:items-center mb-4">
        <p className="uppercase text-sm font-semibold text-gray-500 select-none">
          {title}
        </p>

        {/* Navigation for small screens */}
        <div className="md:hidden">
          <NavigationCard />
        </div>
      </div>

      {children}
    </div>
  );
};
