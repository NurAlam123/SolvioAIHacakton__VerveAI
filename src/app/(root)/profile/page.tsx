import ContentArea from "@/components/shared/ContentArea";
import UserJobApplications from "@/components/UserJobApplications";
import Image from "@/components/ui/Image";

const ProfilePage = () => {
  return (
    <ContentArea title="PROFILE">
      <div className="h-full overflow-y-auto space-y-2 no-scrollbar pb-24 md:pb-16 relative">
        <div>
          <div className="aspect-[2.7/1] w-full h-32 sm:h-48 overflow-hidden rounded-[48px] [corner-shape:squircle]">
            <Image
              src={"/images/cover.gif"}
              alt="cover"
              width={1080}
              height={400}
              className="object-center"
              loading="eager"
            />
          </div>
          <div>
            <div className="size-36 overflow-hidden rounded-[48px] [corner-shape:squircle] relative top-0 left-2 md:left-4 -translate-y-1/2 border border-gray-300">
              <Image
                src={"/images/pfp.jpg"}
                alt="profile picture"
                width={420}
                height={420}
                className="object-center"
                loading="lazy"
              />
            </div>

            <div className="-mt-16 px-2 md:px-4">
              <p className="font-medium text-xl md:text-2xl">Kodom Ali</p>
              <p className="text-sm md:text-base text-gray-700">
                20 {"//"} SWE @BaperHotel
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-2">
          <p className="uppercase text-sm font-semibold text-gray-500 select-none">
            APPLICATIONS
          </p>

          <UserJobApplications />
        </div>
      </div>
    </ContentArea>
  );
};

export default ProfilePage;
