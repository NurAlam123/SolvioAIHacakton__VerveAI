import { NavigationCard } from "./NavigationCard";

const ContentArea = ({
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

export default ContentArea;
