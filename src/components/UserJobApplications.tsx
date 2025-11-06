import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import Time from "./Time";
import Image from "./ui/Image";

const jobs = [
  {
    id: "1b5724a4-9346-43df-a2fa-9f85f077bb96",
    title: "Senior Machine Learning Engineer (Generative AI)",
    firstName: "Taher",
    lastName: "Ahmed",
    email: "taher@mail.com",
    phone: "01843493527",
    status: "COMPLETED",
    overallScore: 70.7880474895369,
    createdAt: "2025-11-06T16:09:59.989Z",
    completedAt: "2025-11-06T16:11:24.756Z",
    company: {
      name: "Synapse AI Labs",
      icon: "https://placehold.co/40x40/791bc0/ffffff?text=SL",
      companyID: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    },
  },
  {
    id: "1b5f41ab-6b41-4a26-ad3d-d0750f2bb97f",
    title: "Junior Data Scientist (Predictive Analytics)",
    firstName: "Taher",
    lastName: "Ahmed",
    email: "taher@mail.com",
    phone: "01843493527",
    status: "COMPLETED",
    overallScore: 70.7880474895369,
    createdAt: "2025-11-06T13:01:10.038Z",
    completedAt: "2025-11-06T13:02:34.053Z",
    company: {
      name: "Quantum Dynamics",
      icon: "https://placehold.co/40x40/00c2a2/1a1f2c?text=QD",
      companyID: "b2c3d4e5-f6a7-8901-2345-67890abcdef1",
    },
  },
];

const UserJobApplications = () => {
  return (
    <div className="space-y-2 mt-4">
      {jobs.map(({ id, title, createdAt, company, overallScore }) => (
        <div key={id} className="space-y-1 bg-gray-50 p-4 rounded-2xl relative">
          <div className="flex gap-1">
            <Image
              src="/file.svg"
              alt="company"
              width={64}
              height={64}
              className="size-4 md:size-6"
            />

            <p className="text-sm md:text-base font-medium">{company?.name}</p>
          </div>
          <div>
            <p className="text-base md:text-lg font-medium">{title}</p>
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
