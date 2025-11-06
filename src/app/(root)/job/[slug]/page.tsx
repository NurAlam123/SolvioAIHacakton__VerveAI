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

  return <div>{job.title}</div>;
};

export default JobPost;
