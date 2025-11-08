import NextImage, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

const Image = ({ className, src, alt, ...props }: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={cn("select-none pointer-events-none object-cover", className)}
      draggable="false"
      {...props}
    />
  );
};

export default Image;
