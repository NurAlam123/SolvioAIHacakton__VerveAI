import { cn } from "@/lib/utils";

const Button = ({
  className,
  type,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type={type}
      className={cn(
        "text-sm font-medium text-gray-50 rounded-md bg-black px-6 py-2 flex items-center justify-center active:scale-[0.98] transition-transform ease-in-out hover:bg-black/80",
        className,
      )}
      {...props}
    >
      Apply
    </button>
  );
};

export default Button;
