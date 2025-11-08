import ContentArea from "@/components/shared/ContentArea";
import Image from "@/components/ui/Image";

const CompanyLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ContentArea title="COMPANY">
      <div>
        <div className="aspect-[2.7/1] w-full h-32 sm:h-48 overflow-hidden rounded-[48px] [corner-shape:squircle]">
          <Image
            src={"/images/company_cover_cropped.png"}
            alt="cover"
            width={1080}
            height={400}
            className="object-top w-full h-full"
            loading="eager"
          />
        </div>
        <div>
          <div className="size-24 overflow-hidden rounded-[48px] [corner-shape:squircle] relative top-0 left-2 md:left-4 -translate-y-1/2 bg-[#001021] shadow-xs p-2">
            {/* TODO: remove bg color nad padding - needed only for demo */}
            <Image
              src={"/replit.svg"}
              alt="profile picture"
              width={120}
              height={120}
              className="object-center object-contain w-full h-full"
              loading="lazy"
            />
          </div>

          <div className="-mt-10 px-2 md:px-4">
            <p className="font-medium text-xl md:text-2xl">Replit</p>
            <p className="text-sm md:text-base text-gray-700">
              Turn your ideas into apps
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-2">{children}</div>
    </ContentArea>
  );
};

export default CompanyLayout;
