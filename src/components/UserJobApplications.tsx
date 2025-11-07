import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { API_URL } from "@/constant";
import CompanyName from "./shared/CompanyName";
import Time from "./Time";

interface JobType {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: string;
  overallScore: number;
  createdAt: string;
  completedAt: string;
  company: {
    name: string;
    icon: string;
    companyID: string;
  };
}

const UserJobApplications = async () => {
  const res = await fetch(`${API_URL}/api/job-applications`);
  if (!res.ok) return <p>Something wrong while fetching data...</p>;

  const { data: resData, success } = await res.json();
  if (!success) return <p>Something wrong... Try again later</p>;
  const jobs: JobType[] = resData.applications;

  return (
    <div className="space-y-2 mt-4">
      {jobs.map(({ id, title, createdAt, overallScore }) => (
        <div key={id} className="space-y-2 bg-gray-50 p-4 rounded-2xl relative">
          <CompanyName name={"Replit"} logo="/replit.svg" />
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
      ))}
    </div>
  );
};

export default UserJobApplications;
