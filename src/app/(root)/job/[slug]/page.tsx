import MarkdownContent from "@/components/MarkdownContent";
import CompanyName from "@/components/shared/CompanyName";
import ContentArea from "@/components/shared/ContentArea";
import Time from "@/components/Time";
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
          className="py-6"
        />

        <p className="text-sm w-fit px-4">
          <Time time={job.createdAt} />
        </p>
      </div>

      <section className="mt-4">
        <h1 className="text-3xl">{job.title}</h1>

        <div className="mt-4">
          <p className="text-lg text-gray-700 font-medium mb-1">
            ABOUT THE ROLE
          </p>
          <article>{job.description}</article>
        </div>

        <div className="mt-4">
          <p className="text-lg text-gray-700 font-medium mb-1">READ MORE</p>
          <article className="prose">
            <MarkdownContent content={job.content} />
          </article>
        </div>
      </section>
    </ContentArea>
  );
};

export default JobPost;
