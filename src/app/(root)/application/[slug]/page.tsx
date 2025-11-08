import { SmileIcon, TrophyIcon } from "lucide-react";
import CompanyName from "@/components/shared/CompanyName";
import ContentArea from "@/components/shared/ContentArea";
import Time from "@/components/Time";
import Label from "@/components/ui/Label";
import { API_URL } from "@/constant";
import { jobPosts } from "@/constant/posts";

interface Params {
  slug: string;
}

interface Props {
  params: Promise<Params>;
}

const ApplicationPage = async ({ params }: Props) => {
  const { slug: applicationID } = await params;
  const res = await fetch(`${API_URL}/api/job-application/${applicationID}`, {
    next: { revalidate: 30 },
  });

  const applicationRes = await res.json();

  if (applicationRes.error === "Application not found")
    return <p>404 | No application found</p>;

  const application = applicationRes.data;

  const filteredJob = jobPosts.filter(
    ({ id }) => id === "e3b0c442-98fc-43c1-b769-d4198c60f277",
  );
  const job = filteredJob.length > 0 && filteredJob[0];

  if (!job) return;

  return (
    <ContentArea title="APPLICATION DETAILS">
      {/* will remove this */}
      {/* <p className="text-sm select-none"> */}
      {/*   <strong>applicationID:</strong> {applicationID} */}
      {/* </p> */}

      <div>
        <div>
          {/* TODO: add when the job posted, when user applied and when the application is completed */}
          <p className="text-sm">
            Created <Time time={application.createdAt} />
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

            {application.topReactions ? (
              <div className="bg-gray-200 rounded-2xl py-4 shadow-sm">
                {application.topReactions.map(
                  (
                    { emotion, score }: { emotion: string; score: number },
                    i: number,
                  ) => (
                    <CardData
                      key={`emotion-${i + 1}`}
                      title={emotion}
                      value={score * 10}
                      suffix=" %"
                    />
                  ),
                )}
              </div>
            ) : (
              <p className="text-center p-8">
                This might take a few moments to process...
              </p>
            )}
          </div>

          {/* scores */}
          <div className="bg-gray-100 rounded-2xl">
            <div className="flex gap-2 items-center px-4 py-2">
              <TrophyIcon className="size-5" />
              <p className="font-medium">Scores</p>
            </div>

            {application.scores ? (
              <div className="bg-gray-200 rounded-2xl py-4 shadow-sm">
                <CardData
                  title="Resume"
                  value={application.scores.resumeScore}
                />
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
            ) : (
              <p className="text-center p-8">
                This might take a few moments to process...
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Label className="text-base">Strengths</Label>
          {application.strengths ? (
            <ul className="list-inside list-disc">
              {application.strengths.map((strength: string, i: number) => (
                <li
                  key={`strength-${i + 1}`}
                  className="list-item text-sm md:text-base ml-4"
                >
                  {strength}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center p-8">
              This might take a few moments to process...
            </p>
          )}
        </div>

        <div className="mt-4">
          <Label className="text-base">Improvements</Label>
          {application.improvements ? (
            <ul className="list-inside list-disc">
              {application.improvements.map((improv: string, i: number) => (
                <li
                  key={`improve-${i + 1}`}
                  className="list-item text-sm md:text-base ml-4"
                >
                  {improv}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center p-8">
              This might take a few moments to process...
            </p>
          )}
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
