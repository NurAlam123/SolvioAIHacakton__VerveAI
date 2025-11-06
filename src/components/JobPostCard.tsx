import type { JobPosts } from "@/constant/posts";
import Time from "./Time";
import Button from "./ui/Button";
import Chip from "./ui/Chip";
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
            className="object-cover size-4 md:size-6"
          />
          <p className="text-sm md:text-base font-medium">{company?.name}</p>
        </div>

        <p className="text-xs md:text-sm text-gray-700 min-w-fit md:mt-1.5 select-none">
          <Time time={createdAt} />
        </p>
      </div>

      <div className="mb-2 md:mb-3">
        <p className="text-lg/5 md:text-xl font-bold text-gray-800">{title}</p>
        <p className="text-xs/3.75 md:text-sm/5 text-gray-700 mt-2 md:mt-1">
          {description}
        </p>
      </div>

      <div className="flex gap-0.5 md:gap-1 mb-4 flex-wrap">
        <Chip>{location}</Chip>
        <Chip>{type}</Chip>
        <Chip>{experience}</Chip>
        {tags?.map((tag, i) => (
          <Chip key={`tag-${i + 3}`}>{tag}</Chip>
        ))}
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <p className="text-sm md:text-base font-medium">{salary}</p>
        <Button>Apply</Button>
      </div>
    </div>
  );
};

export default JobPostCard;
