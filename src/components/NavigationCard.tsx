import { CircleUserRoundIcon, CogIcon, UploadIcon } from "lucide-react";

const NavigationCard = () => {
  return (
    <div className="w-full border border-gray-200 rounded-2xl overflow-hidden p-2 flex flex-col">
      <button
        type="button"
        className="flex items-center justify-start gap-2 hover:bg-gray-50 px-2 py-2 rounded-xl active:scale-[0.98] transition-transform will-change-transform"
      >
        <UploadIcon className="size-4" />
        <span>Upload</span>
      </button>
      <button
        type="button"
        className="flex items-center justify-start gap-2 hover:bg-gray-50 px-2 py-2 rounded-xl active:scale-[0.98] transition-transform will-change-transform"
      >
        <CircleUserRoundIcon className="size-4 mb-0.5" />
        <span>Profile</span>
      </button>
      <button
        type="button"
        className="flex items-center justify-start gap-2 hover:bg-gray-50 px-2 py-2 rounded-xl active:scale-[0.98] transition-transform will-change-transform"
      >
        <CogIcon className="size-4 mb-0.5" />
        <span>Settings</span>
      </button>
    </div>
  );
};

export default NavigationCard;
