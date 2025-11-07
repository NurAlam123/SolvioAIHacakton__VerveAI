import JobPostCard from "@/components/JobPostCard";
import ContentArea from "@/components/shared/ContentArea";
import SideLabel from "@/components/shared/SideLabel";
import { jobPosts } from "@/constant/posts";

export default function Home() {
  return (
    <>
      <SideLabel />
      <ContentArea title="JOB BOARD">
        {jobPosts.map((data) => (
          <JobPostCard key={data.id} {...data} />
        ))}
      </ContentArea>
    </>
  );
}
