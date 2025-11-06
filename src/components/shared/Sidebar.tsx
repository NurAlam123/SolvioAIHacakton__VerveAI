"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import { NavigationCard } from "./NavigationCard";
import ProfileCard from "./ProfileCard";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full rounded-2xl max-md:hidden">
      {pathname !== "/profile" && (
        <div>
          <p className="uppercase text-sm font-semibold text-gray-500 mb-4 select-none">
            PROFILE
          </p>
          <ProfileCard />
        </div>
      )}

      <div className="mt-8">
        <p className="uppercase text-sm font-semibold text-gray-500 mb-4 select-none">
          NAVIGATION
        </p>
        <NavigationCard pathname={pathname} />
      </div>

      <Footer />
    </div>
  );
};

export default Sidebar;
