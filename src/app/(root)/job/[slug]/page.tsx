import MarkdownContent from "@/components/MarkdownContent";
import ContentArea from "@/components/shared/ContentArea";
import Image from "@/components/ui/Image";
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
      <div className="flex gap-4 py-6">
        <Image
          src="/replit.svg"
          alt="company logo"
          width={64}
          height={64}
          className="size-6"
        />

        <p className="text-sm md:text-base font-medium">{job.company?.name}</p>
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
