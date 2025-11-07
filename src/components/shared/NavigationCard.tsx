import {
  CircleUserRoundIcon,
  CogIcon,
  HomeIcon,
  UploadIcon,
} from "lucide-react";
import Link from "next/link";

import Image from "@/components/ui/Image";

const UploadButton = () => {
  return (
    <Link
      href="/upload"
      className="flex items-center justify-start gap-2 max-md:bg-gray-50 hover:bg-gray-50 px-2 py-2 rounded-xl active:scale-[0.98] transition-transform will-change-transform"
    >
      <UploadIcon className="size-5 md:size-4" />
      <span className="max-md:hidden select-none">Upload</span>
    </Link>
  );
};

const ProfileButton = () => {
  return (
    <Link href="/profile" className="max-md:order-1">
      <div className="hidden md:flex items-center justify-start gap-2 hover:bg-gray-50 px-2 py-2 rounded-xl active:scale-[0.98] transition-transform will-change-transform">
        <CircleUserRoundIcon className="size-4 mb-0.5" />
        <span className="select-none">Profile</span>
      </div>

      <div className="md:hidden w-8 h-8 overflow-hidden rounded-full border border-gray-300">
        <Image
          src={"/images/pfp.jpg"}
          alt="profile picture"
          width={1024}
          height={1024}
          className="object-center"
        />
      </div>
    </Link>
  );
};

const SettingsButton = () => {
  return (
    <Link
      href="/settings"
      className="flex items-center justify-start gap-2 max-md:bg-gray-50 hover:bg-gray-50 px-2 py-2 rounded-xl active:scale-[0.98] transition-transform will-change-transform"
    >
      <CogIcon className="size-5 md:size-4 max-md:mb-0.5" />
      <span className="max-md:hidden select-none">Settings</span>
    </Link>
  );
};

const HomeButton = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-start gap-2 max-md:bg-gray-50 hover:bg-gray-50 px-2 py-2 rounded-xl active:scale-[0.98] transition-transform will-change-transform"
    >
      <HomeIcon className="size-5 md:size-4 max-md:mb-0.5" />
      <span className="max-md:hidden select-none">Home</span>
    </Link>
  );
};

export const NavigationCard = ({ pathname }: { pathname?: string }) => {
  return (
    <div className="flex max-md:gap-2 max-md:items-center md:w-full md:border md:border-gray-200 md:rounded-2xl md:overflow-hidden md:p-2 md:flex-col bg-white">
      {pathname !== "/" && <HomeButton />}
      {pathname !== "/upload" && <UploadButton />}
      {pathname !== "/profile" && <ProfileButton />}
      {pathname !== "/settings" && <SettingsButton />}
    </div>
  );
};
