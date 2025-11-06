import JobPostCard from "@/components/JobPostCard";
import ContentArea from "@/components/shared/ContentArea";
import SideLabel from "@/components/shared/SideLabel";
import { jobPosts } from "@/constant/posts";

export default function Home() {
  return (
    <>
      <SideLabel />
      <ContentArea title="JOB BOARD">
        <div className="h-full overflow-y-auto space-y-2 no-scrollbar pb-24 md:pb-16">
          {jobPosts.map((data) => (
            <JobPostCard key={data.id} {...data} />
          ))}
        </div>
      </ContentArea>
    </>
  );
}
