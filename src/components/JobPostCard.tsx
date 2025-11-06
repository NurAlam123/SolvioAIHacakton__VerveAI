import Chip from "./Chip";
import Button from "./ui/Button";
import Image from "./ui/Image";

const JobPostCard = () => {
  return (
    <div className="w-full max-h-96 min-h-52 bg-gray-100 hover:bg-gray-200/70 p-4 rounded-2xl shadow-2xs">
      <div className="flex justify-between items-start gap-1 mb-2">
        <div className="flex items-center gap-1">
          <Image
            src="/file.svg"
            alt="company logo"
            width={24}
            height={24}
            className="object-cover"
          />
          <p className="text-base font-semibold">Tristero</p>
        </div>

        <p className="text-sm text-gray-700 min-w-fit mt-1.5 select-none">
          4 days ago
        </p>
      </div>

      <div className="">
        <p className="text-xl font-bold text-gray-800">
          Junior Software Engineer
        </p>
      </div>

      <p className="text-sm/5 text-gray-700 mb-1.5">
        We're on the lookout for clever, early stage software engineers. At
        Tristero we build high performance distributed systems, and our
        engineers play a pivotal role in the company's success. We do a lot of
        systems...
      </p>

      <div className="flex gap-1 mb-4">
        <Chip>Remote</Chip>
        <Chip>Full time</Chip>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-base text-gray-700 font-medium">$25k - $30k</p>
        <Button>Apply</Button>
      </div>
    </div>
  );
};

export default JobPostCard;
