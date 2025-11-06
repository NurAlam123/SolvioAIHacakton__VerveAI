import type { JobPosts } from "@/constant/posts";

import Chip from "./Chip";
import Time from "./Time";

import Button from "./ui/Button";
import Image from "./ui/Image";

const JobPostCard = ({
  company,
  createdAt,
  title,
  description,
  tags,
  type,
  salary,
  location,
  experience,
}: JobPosts) => {
  return (
    <div className="w-full max-h-96 min-h-52 bg-gray-50 hover:bg-gray-100 p-4 rounded-2xl shadow-2xs">
      <div className="flex justify-between items-start gap-1 mb-2">
        <div className="flex items-center gap-1">
          <Image
            src="/file.svg"
            alt="company logo"
            width={24}
            height={24}
            className="object-cover"
          />
          <p className="text-base font-medium">{company?.name}</p>
        </div>

        <p className="text-sm text-gray-700 min-w-fit mt-1.5 select-none">
          <Time time={createdAt} />
        </p>
      </div>

      <div className="mb-3">
        <p className="text-xl font-bold text-gray-800">{title}</p>
        <p className="text-sm/5 text-gray-700 mt-1">{description}</p>
      </div>

      <div className="flex gap-1 mb-4 flex-wrap">
        <Chip>{location}</Chip>
        <Chip>{type}</Chip>
        <Chip>{experience}</Chip>
        {tags?.map((tag, i) => (
          <Chip key={`tag-${i + 3}`}>{tag}</Chip>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-base font-medium">{salary}</p>
        <Button>Apply</Button>
      </div>
    </div>
  );
};

export default JobPostCard;
