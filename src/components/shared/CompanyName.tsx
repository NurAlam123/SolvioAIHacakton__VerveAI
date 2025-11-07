import { cn } from "@/lib/utils";
import Image from "../ui/Image";

const CompanyName = ({
  name,
  logo,
  className,
}: { name: string; logo: string } & React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Image
        src={logo}
        alt="company logo"
        width={24}
        height={24}
        className="object-cover size-4 md:size-6"
      />

      <p className="text-sm md:text-base font-medium">{name}</p>
    </div>
  );
};

export default CompanyName;
