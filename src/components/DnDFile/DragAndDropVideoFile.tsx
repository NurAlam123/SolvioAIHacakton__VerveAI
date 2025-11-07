"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  onFileSelect: (value: File) => void;
}

export default function DragAndDropVideoFile({ onFileSelect }: Props) {
  const [uploaded, setUploaded] = useState(false);
  // const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  // const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (!acceptedFiles?.length) return;

      const selectedFile = acceptedFiles[0];
      onFileSelect(selectedFile);
      setUploaded(true);

      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);

      // // Simulate upload progress (replace this with actual upload logic)
      // setUploadProgress(0);
      // const interval = setInterval(() => {
      //   setUploadProgress((prev) => {
      //     if (prev >= 100) {
      //       clearInterval(interval);
      //       return 100;
      //     }
      //     return prev + 10;
      //   });
      // }, 200);
    },
    [onFileSelect],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { "video/*": [] },
  });

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {uploaded ? (
        <>
          {previewUrl && (
            /* biome-ignore lint/a11y/useMediaCaption: preview video without captions */
            <video
              controls
              className="rounded-xl w-full max-w-lg max-h-[620px] border border-gray-200"
            >
              <source src={previewUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {/* <div className="w-full max-w-lg h-3 bg-gray-200 rounded-full overflow-hidden"> */}
          {/*   <div */}
          {/*     className="h-full bg-blue-500 transition-all duration-200" */}
          {/*     style={{ width: `${uploadProgress}%` }} */}
          {/*   /> */}
          {/* </div> */}

          {/* <p className="text-gray-700 text-sm"> */}
          {/*   {uploadProgress < 100 */}
          {/*     ? `Uploading... ${uploadProgress}%` */}
          {/*     : "Upload complete!"} */}
          {/* </p> */}
        </>
      ) : (
        <div
          {...getRootProps()}
          className={`border w-full h-64 rounded-2xl bg-gray-100 flex items-center justify-center border-gray-300 transition ${
            isDragActive ? "border-blue-400 bg-blue-50" : ""
          }`}
        >
          <input name="video" {...getInputProps()} />
          <p className="text-gray-600 select-none">
            {isDragActive
              ? "Drop the video here..."
              : "Drag and drop a video, or click to select"}
          </p>
        </div>
      )}
    </div>
  );
}
