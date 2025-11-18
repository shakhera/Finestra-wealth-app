import {
  Layers,
  Command,
  Hourglass,
  CircleOff,
  GalleryHorizontalEnd,
  Quote,
} from "lucide-react";
const BrandSection = () => {
  const brands = [
    { icon: <CircleOff size={20} />, name: "Circooles" },
    { icon: <Quote size={20} />, name: "Quotient" },
    { icon: <Hourglass size={20} />, name: "Hourglass" },
    { icon: <Command size={20} />, name: "Command+R" },
    { icon: <GalleryHorizontalEnd size={20} />, name: "Catalog" },
    { icon: <Layers size={20} />, name: "Layers" },
  ];

  return (
    <>
      <section className="w-full bg-white py-3 p-2 sm:px-3 lg:pb-8 mb-[22px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-[30px] justify-start items-center w-full">
            <h2 className="text-xl font-medium leading-[25px] text-center text-[#08080c] font-[Helvetica Neue]">
              Loved by 25 million+ users
            </h2>

            {/* Brand Logos Grid */}
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 opacity-40">
              {brands.map((brand, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 text-gray-600"
                >
                  {brand.icon}
                  <span className="text-sm sm:text-base font-medium">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandSection;
