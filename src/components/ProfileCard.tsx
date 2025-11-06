import Image from "./ui/Image";

const ProfileCard = () => {
  return (
    <div className="w-full border border-gray-200 rounded-2xl overflow-hidden">
      <div className="relative">
        <div className="aspect-[2.7/1] w-full h-24 overflow-hidden">
          <Image
            src={"/images/cover.gif"}
            alt="cover"
            width={1080}
            height={400}
            className="object-center"
          />
        </div>

        <div>
          <div className="w-16 h-16 overflow-hidden rounded-full relative top-0 left-2 -translate-y-1/2 border border-gray-300">
            <Image
              src={"/images/pfp.jpg"}
              alt="profile picture"
              width={1024}
              height={1024}
              className="object-center"
            />
          </div>

          <div className="-mt-8 px-2 pb-4">
            <p className="font-medium">Kodom Ali</p>
            <p className="text-sm">21 {"//"} SWE @BaperHotel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
