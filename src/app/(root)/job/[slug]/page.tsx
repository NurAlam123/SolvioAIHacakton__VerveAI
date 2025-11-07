import MarkdownContent from "@/components/MarkdownContent";
import CompanyName from "@/components/shared/CompanyName";
import ContentArea from "@/components/shared/ContentArea";
import Time from "@/components/Time";
import Label from "@/components/ui/Label";
import { jobPosts } from "@/constant/posts";

interface Params {
  slug: string;
}

interface Props {
  params: Promise<Params>;
}

const JobPost = async ({ params }: Props) => {
  const { slug } = await params;
  const job = jobPosts.filter(({ id }) => id === slug)[0];

  return (
    <ContentArea title="JOB POST">
      <div className="flex justify-between items-center">
        <CompanyName
          name={job.company?.name}
          logo="/replit.svg"
          className="py-2 md:py-6"
        />

        <p className="text-sm w-fit px-4 text-gray-500">
          <Time time={job.createdAt} />
        </p>
      </div>

      <section className="md:mt-4">
        <h1 className="text-xl md:text-3xl font-bold">{job.title}</h1>

        <div className="mt-4">
          <Label className="text-xs md:text-lg">ABOUT THE ROLE</Label>
          <article>{job.description}</article>
        </div>

        <div className="mt-4">
          <Label className="text-xs md:text-lg">MORE DETAILS</Label>
          <article className="prose">
            <MarkdownContent content={job.content} />
          </article>
        </div>
      </section>
    </ContentArea>
  );
};

export default JobPost;
