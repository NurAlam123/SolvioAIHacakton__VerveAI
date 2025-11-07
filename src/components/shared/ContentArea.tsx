"use client";

import { usePathname } from "next/navigation";
import { NavigationCard } from "./NavigationCard";

const ContentArea = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const pathname = usePathname();

  return (
    <div className="h-full overflow-hidden px-2">
      <div className="max-md:flex max-md:justify-between max-md:items-center mb-4">
        <p className="uppercase text-sm font-semibold text-gray-500 select-none">
          {title}
        </p>

        {/* Navigation for small screens */}
        <div className="md:hidden">
          <NavigationCard pathname={pathname} />
        </div>
      </div>

      <div className="h-full overflow-y-auto space-y-2 no-scrollbar pb-24 md:pb-16 relative">
        {children}
      </div>
    </div>
  );
};

export default ContentArea;
