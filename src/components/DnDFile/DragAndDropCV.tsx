"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  onFileSelect: (value: File) => void;
}

export default function DragAndDropCV({ onFileSelect }: Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (!acceptedFiles?.length) return;
      onFileSelect(acceptedFiles[0]);
      setSelectedFile(acceptedFiles[0]);
    },
    [onFileSelect],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { "application/pdf": [] },
  });

  return (
    <div
      {...getRootProps()}
      className={`border w-full h-24 rounded-2xl bg-gray-100 flex flex-col items-center justify-center border-gray-300 transition cursor-pointer ${
        isDragActive ? "border-blue-400 bg-blue-50" : ""
      }`}
    >
      <input name="resume" {...getInputProps()} />
      <p className="text-gray-600 select-none text-center">
        {isDragActive
          ? "Drop the Resume/CV here..."
          : "Drag and drop your CV/Resume, or click to select"}
      </p>

      {selectedFile && (
        <p className="mt-2 text-sm text-blue-600 font-medium truncate max-w-[90%]">
          📄 {selectedFile.name}
        </p>
      )}
    </div>
  );
}
