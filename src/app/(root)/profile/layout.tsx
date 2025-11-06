import Footer from "@/components/shared/Footer";
import { NavigationCard } from "@/components/shared/NavigationCard";

const Right = () => {
  return (
    <div className="h-full rounded-2xl max-md:hidden">
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

const ProfileLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      {/* Profile */}
      <Middle title="PROFILE">{children}</Middle>

      {/* Navigation & Footer */}
      <Right />
    </>
  );
};

export default ProfileLayout;
