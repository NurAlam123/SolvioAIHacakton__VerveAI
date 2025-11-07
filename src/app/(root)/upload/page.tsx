"use client";

import { FileTextIcon } from "lucide-react";
import { useState } from "react";

import DragAndDropCV from "@/components/DnDFile/DragAndDropCV";
import DragAndDropVideoFile from "@/components/DnDFile/DragAndDropVideoFile";
import ContentArea from "@/components/shared/ContentArea";
import Button from "@/components/ui/Button";
import { API_URL } from "@/constant";
import { useRouter } from "next/navigation";

export default function Upload() {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!cvFile || !videoFile) return;

    const data = new FormData();
    data.append("firstName", "Kodom");
    data.append("lastName", "Ali");
    data.append("email", "kodomalinai@gmail.com");
    data.append("phone", "+8801700000000");
    data.append("resume", cvFile);
    data.append("video", videoFile);

    setUploading(true);

    const res = await fetch(`${API_URL}/api/job-application`, {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      const { message, data } = await res.json();
      const applicationID = data.applicationId;

      console.log("✅", message);
      setUploading(false);
      router.push(`/application/${applicationID}`);
    } else {
      console.error("❌ Upload failed", res);
      setUploading(false);
    }
  };

  return (
    <ContentArea title="UPLOAD">
      <form className="space-y-2" onSubmit={onSubmit}>
        <DragAndDropVideoFile onFileSelect={setVideoFile} />
        <DragAndDropCV onFileSelect={setCvFile} />
        <div>
          <Button
            disabled={!cvFile || !videoFile || uploading}
            type="submit"
            className="w-full flex justify-center items-center gap-2 rounded-lg will-change-transform disabled:bg-black/40 disabled:cursor-not-allowed"
          >
            <FileTextIcon className="size-6" />
            <span className="font-medium">
              {uploading ? "Uploading..." : "Upload"}
            </span>
          </Button>
        </div>

        {/* <div className="flex w-full gap-2 px-4"> */}
        {/*   <Button */}
        {/*     type="button" */}
        {/*     className="w-full flex justify-center items-center gap-2 rounded-lg will-change-transform" */}
        {/*   > */}
        {/*     <VideoIcon className="size-6" /> */}
        {/*     <span className="font-medium">Record Video</span> */}
        {/*   </Button> */}
        {/* <Button */}
        {/*   type="button" */}
        {/*   className="w-full border flex justify-center items-center gap-2 rounded-lg will-change-transform" */}
        {/* > */}
        {/*   <MicIcon className="size-6" /> */}
        {/*   <span>Record Audio</span> */}
        {/* </Button> */}
        {/* </div> */}
      </form>
    </ContentArea>
  );
}
