import { cn } from "@/lib/utils";

const Label = ({
  className,
  children,
}: React.HTMLProps<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "font-medium mb-1 uppercase text-sm text-gray-500 select-none",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Label;
