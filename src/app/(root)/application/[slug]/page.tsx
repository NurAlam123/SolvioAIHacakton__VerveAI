import CompanyName from "@/components/shared/CompanyName";
import ContentArea from "@/components/shared/ContentArea";
import Time from "@/components/Time";
import Label from "@/components/ui/Label";
import { jobPosts } from "@/constant/posts";
import { SmileIcon, TrophyIcon } from "lucide-react";

const application = {
  id: "1b5724a4-9346-43df-a2fa-9f85f077bb96",
  jobID: "e3b0c442-98fc-43c1-b769-d4198c60f277",
  status: "COMPLETED",
  applicant: {
    firstName: "Taher",
    lastName: "Ahmed",
    email: "taher@mail.com",
    phone: "01843493527",
  },
  scores: {
    resumeScore: 85,
    videoScore: 25.15218995814755,
    communicationScore: 47.57609497907377,
    technicalScore: 90,
    overallScore: 70.7880474895369,
  },
  strengths: [
    "Extensive experience with JavaScript frameworks (ReactJS, NodeJS)",
    "Leadership and team management skills",
    "Experience with cloud services (AWS EC2)",
    "Hands-on experience with both front-end and back-end development",
    "Proven problem-solving skills through project work",
  ],
  improvements: [
    "Provide specific examples of communication skills",
    "Include detailed experiences with RESTful APIs",
    "Expand on adaptability and flexibility in diverse projects",
    "Highlight more on time management skills with examples",
    "Detail more on experiences with SQL databases",
  ],
  topReactions: [
    {
      emotion: "Confusion",
      score: 0.33180230544057,
    },
    {
      emotion: "Concentration",
      score: 0.3119993985219057,
    },
    {
      emotion: "Calmness",
      score: 0.2990977568335311,
    },
    {
      emotion: "Disappointment",
      score: 0.2927484294009763,
    },
    {
      emotion: "Boredom",
      score: 0.2717274905637253,
    },
  ],
  createdAt: "2025-11-06T16:09:59.989Z",
  updatedAt: "2025-11-06T16:11:24.772Z",
  completedAt: "2025-11-06T16:11:24.756Z",
};

interface Params {
  slug: string;
}

interface Props {
  params: Promise<Params>;
}

const ApplicationPage = async ({ params }: Props) => {
  const { slug } = await params;

  const filteredJob = jobPosts.filter(({ id }) => id === application.jobID);
  const job = filteredJob.length > 0 && filteredJob[0];

  if (!job) return;

  return (
    <ContentArea title="APPLICATION DETAILS">
      {/* will remove this */}
      <p className="text-sm select-none">
        <strong>applicationID:</strong> {slug}
      </p>

      <div>
        <div>
          {/* TODO: add when the job posted, when user applied and when the application is completed */}
          <p className="text-sm hover:before:content-['Created_At_']">
            <Time time={application.createdAt} />
          </p>
        </div>

        <CompanyName
          name={job.company.name}
          logo="/replit.svg"
          className="py-2 md:py-4"
        />
        <h1 className="text-xl md:text-3xl">{job.title}</h1>
      </div>

      <div>
        <Label className="md:text-base mt-4">STATISTICS</Label>

        <div className="grid md:grid-cols-2 mt-2 gap-2">
          {/* emotions */}
          <div className="bg-gray-100 rounded-2xl">
            <div className="flex gap-2 items-center px-4 py-2">
              <SmileIcon className="size-5" />
              <p className="font-medium">Emotions</p>
            </div>

            <div className="bg-gray-200 rounded-2xl py-4 shadow-sm">
              {application.topReactions.map(({ emotion, score }, i) => (
                <CardData
                  key={`emotion-${i + 1}`}
                  title={emotion}
                  value={score * 100}
                  suffix=" %"
                />
              ))}
            </div>
          </div>

          {/* scores */}
          <div className="bg-gray-100 rounded-2xl">
            <div className="flex gap-2 items-center px-4 py-2">
              <TrophyIcon className="size-5" />
              <p className="font-medium">Scores</p>
            </div>

            <div className="bg-gray-200 rounded-2xl py-4 shadow-sm">
              <CardData title="Resume" value={application.scores.resumeScore} />
              <CardData title="Video" value={application.scores.videoScore} />
              <CardData
                title="Communication"
                value={application.scores.communicationScore}
              />
              <CardData
                title="Technical"
                value={application.scores.technicalScore}
              />
              <CardData
                title="Overall"
                value={application.scores.overallScore}
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Label className="text-base">Strengths</Label>
          <ul className="list-inside list-disc">
            {application.strengths.map((strength, i) => (
              <li
                key={`strength-${i + 1}`}
                className="list-item text-sm md:text-base ml-4"
              >
                {strength}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <Label className="text-base">Improvements</Label>
          <ul className="list-inside list-disc">
            {application.strengths.map((strength, i) => (
              <li
                key={`improve-${i + 1}`}
                className="list-item text-sm md:text-base ml-4"
              >
                {strength}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentArea>
  );
};

const CardData = ({
  title,
  value,
  suffix,
}: {
  title: string;
  value: number;
  suffix?: string;
}) => {
  return (
    <div className="grid grid-cols-2 w-full hover:bg-gray-100 px-4 text-sm md:text-base">
      <p className="font-medium">{title}</p>
      <p className="text-end">
        {Math.round(value * 100) / 100}
        {suffix}
      </p>
    </div>
  );
};

export default ApplicationPage;
