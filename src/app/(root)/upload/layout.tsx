import Footer from "@/components/shared/Footer";
import { NavigationCard } from "@/components/shared/NavigationCard";
import ProfileCard from "@/components/shared/ProfileCard";

const Right = () => {
  return (
    <div className="h-full rounded-2xl max-md:hidden">
      <div>
        <p className="uppercase text-sm font-semibold text-gray-500 mb-4 select-none">
          PROFILE
        </p>
        <ProfileCard />
      </div>

      <div className="mt-8">
        <p className="uppercase text-sm font-semibold text-gray-500 mb-4 select-none">
          NAVIGATION
        </p>
        <NavigationCard />
      </div>

      <Footer />
    </div>
  );
};

const Middle = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="h-full overflow-hidden px-2">
      <div className="max-md:flex max-md:justify-between max-md:items-center mb-4">
        <p className="uppercase text-sm font-semibold text-gray-500 select-none">
          {title}
        </p>

        {/* Navigation for small screens */}
        <div className="md:hidden">
          <NavigationCard />
        </div>
      </div>

      {children}
    </div>
  );
};

const UploadLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      {/* Job board */}
      <Middle title="UPLOAD">{children}</Middle>

      {/* Profile and Navigation */}
      <Right />
    </>
  );
};

export default UploadLayout;
