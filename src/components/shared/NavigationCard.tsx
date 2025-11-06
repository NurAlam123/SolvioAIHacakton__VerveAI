import { CircleUserRoundIcon, CogIcon, UploadIcon } from "lucide-react";
import Link from "next/link";
import Image from "@/components/ui/Image";

export const NavigationCard = () => {
  return (
    <div className="w-full border border-gray-200 rounded-2xl overflow-hidden p-2 flex flex-col bg-white">
      <Link
        href="/upload"
        className="flex items-center justify-start gap-2 hover:bg-gray-50 px-2 py-2 rounded-xl active:scale-[0.98] transition-transform will-change-transform"
      >
        <UploadIcon className="size-4" />
        <span>Upload</span>
      </Link>
      <Link
        href="/profile"
        className="flex items-center justify-start gap-2 hover:bg-gray-50 px-2 py-2 rounded-xl active:scale-[0.98] transition-transform will-change-transform"
      >
        <CircleUserRoundIcon className="size-4 mb-0.5" />
        <span>Profile</span>
      </Link>
      <Link
        href="/settings"
        className="flex items-center justify-start gap-2 hover:bg-gray-50 px-2 py-2 rounded-xl active:scale-[0.98] transition-transform will-change-transform"
      >
        <CogIcon className="size-4 mb-0.5" />
        <span>Settings</span>
      </Link>
    </div>
  );
};

export const NavigationCardMobile = () => {
  return (
    <div className="flex md:hidden gap-2 items-center">
      <button
        type="button"
        className="bg-gray-50 px-2 py-2 rounded-xl active:scale-[0.98] transition-transform will-change-transform"
      >
        <UploadIcon className="size-5" />
      </button>

      <button
        type="button"
        className="bg-gray-50 px-2 py-2 rounded-xl active:scale-[0.98] transition-transform will-change-transform"
      >
        <CogIcon className="size-5" />
      </button>

      <div className="w-8 h-8 overflow-hidden rounded-full border border-gray-300">
        <Image
          src={"/images/pfp.jpg"}
          alt="profile picture"
          width={1024}
          height={1024}
          className="object-center"
        />
      </div>
    </div>
  );
};
