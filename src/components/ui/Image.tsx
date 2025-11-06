import NextImage, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

const Image = ({ className, src, alt, ...props }: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={cn(className, "select-none pointer-events-none")}
      draggable="false"
      {...props}
    />
  );
};

export default Image;
