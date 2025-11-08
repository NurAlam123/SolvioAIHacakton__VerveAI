import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Time from "@/components/Time";
import Image from "@/components/ui/Image";
import Label from "@/components/ui/Label";
import { API_URL } from "@/constant";
import { cn } from "@/lib/utils";
import type { JobType } from "@/types";

const CompanyApplicationsPage = async () => {
  const res = await fetch(`${API_URL}/api/job-applications`);
  if (!res.ok) return <p>Something wrong while fetching data...</p>;

  const { data: resData, success } = await res.json();
  if (!success) return <p>Something wrong... Try again later</p>;
  const jobs: JobType[] = resData.applications;
  const sortedJobs = jobs.sort((a, b) => b.overallScore - a.overallScore);

  return (
    <div className="">
      <Label>TOP APPLICATIONS</Label>
      <div className="space-y-2 mt-4">
        {sortedJobs.map(
          ({ id, title, createdAt, overallScore, firstName, lastName }) => (
            <div
              key={id}
              className="space-y-2 bg-gray-50 p-4 rounded-2xl relative"
            >
              <UserName
                name={`${firstName} ${lastName}`}
                logo="/images/pfp.jpg"
              />
              <div>
                <p className="text-base md:text-lg font-medium">
                  {title || "Senior Machine Learning Engineer (Generative AI)"}
                </p>

                <p className="text-sm text-gray-600 max-md:mt-1">
                  <Time time={createdAt} />
                </p>
              </div>

              <div className="flex justify-between items-end-safe">
                <p className="mt-4 text-lg">
                  <span className="font-bold">Score:</span>{" "}
                  {Math.round(overallScore * 100) / 100}
                </p>

                <Link
                  href={`/application/${id}`}
                  className="flex gap-1 group text-gray-600 select-none mr-4 text-sm md:text-base items-center"
                >
                  Details{" "}
                  <ArrowRightIcon className="group-hover:translate-x-2 transition-transform ease-out" />{" "}
                </Link>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

const UserName = ({
  logo,
  name,
  className,
  ...props
}: { logo: string; name: string } & React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <div className="size-6 md:size-8 overflow-hidden rounded-2xl">
        <Image
          src={logo}
          alt="company logo"
          width={24}
          height={24}
          className="object-cover w-full h-full"
        />
      </div>

      <p className="text-sm md:text-base font-medium">{name}</p>
    </div>
  );
};

export default CompanyApplicationsPage;
