import { VideoIcon } from "lucide-react";
import DragAndDropFile from "@/components/DragAndDropFile";
import ContentArea from "@/components/shared/ContentArea";
import Button from "@/components/ui/Button";

export default function Upload() {
  return (
    <ContentArea title="UPLOAD">
      <DragAndDropFile />
      <div className="flex w-full gap-2 px-4">
        <Button
          type="button"
          className="w-full flex justify-center items-center gap-2 rounded-lg will-change-transform"
        >
          <VideoIcon className="size-6" />
          <span className="font-medium">Record Video</span>
        </Button>
        {/* <Button */}
        {/*   type="button" */}
        {/*   className="w-full border flex justify-center items-center gap-2 rounded-lg will-change-transform" */}
        {/* > */}
        {/*   <MicIcon className="size-6" /> */}
        {/*   <span>Record Audio</span> */}
        {/* </Button> */}
      </div>
    </ContentArea>
  );
}
