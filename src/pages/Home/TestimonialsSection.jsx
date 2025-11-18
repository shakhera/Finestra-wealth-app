import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    [
      {
        id: 1,
        name: "Megan",
        role: "Student at New York University",
        avatar: "/images/img_olena_sergienko.png",
        avatarBg: "bg-[#ffbc99]",
        testimonial:
          "This cup is fantastic! It is so well insulated. I live in the desert, and it keeps my cold drinks cold in the heat",
      },
      {
        id: 2,
        name: "David K.",
        role: "Recent graduate, Marketing at Sweatpals",
        avatar: "/images/img_customer_1_1.svg",
        avatarBg: "bg-[#f2f2f4]",
        testimonial:
          "I love the color. It's even better in person. I love that iron flask gives you multiple lids as well. It's sturdy. It is kept my cold beverages clothes for way longer than I had expected it to.",
      },
    ],
    [
      {
        id: 3,
        name: "Jerry Tang",
        role: "Recent graduate, Marketing at Sweatpals",
        avatar: "/images/img_olena_sergienko_64x64.png",
        avatarBg: "bg-[#f2f2f4]",
        testimonial:
          "Joining Mate community is the best thing I have ever done. The projects I worked on gave me the experience I needed in content Marketing",
      },
      {
        id: 4,
        name: "Megan",
        role: "Student at New York University",
        avatar: "/images/img_nrd_zmmanliy1d4_unsplash_64x54.png",
        avatarBg: "bg-[#f2f2f4]",
        testimonial:
          "I absolutely love this cup. I have bought several different brands and there is always something I end up not liking about them. This one checks all of the boxes.",
      },
    ],
    [
      {
        id: 5,
        name: "Jerry Tang",
        role: "Recent graduate, Marketing at Sweatpals",
        avatar: "/images/img_oliver_ragfelt.png",
        avatarBg: "bg-[#f2f2f4]",
        testimonial:
          "I love the color. It's even better in person. I love that iron flask gives you multiple lids as well. It's sturdy.",
      },
      {
        id: 6,
        name: "David K.",
        role: "Recent graduate",
        avatar: "/images/img_avatar2_1.png",
        avatarBg: "bg-[#f2f2f4]",
        testimonial:
          "I absolutely love this cup. I have bought several different brands and there is always something",
      },
    ],
  ];

  return (
    <section className="w-full bg-white relative">
      <div className="relative w-full h-[1052px]">
        {/* Background Images */}
        <img
          src="/images/img_ellipse_2994.png"
          alt="Background"
          className="absolute bottom-4 left-0 w-full h-[928px] object-cover"
        />

        {/* Background Vector */}
        <div
          className="absolute top-[19px] left-0 w-full h-[1032px] bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('/images/img_vector_1032x1440.png')`,
          }}
        >
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-[86px]">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-center items-start w-full lg:w-[90%] mx-auto mb-[52px]">
              <div className="flex justify-center items-center w-full lg:w-[980px] mx-auto mb-16 lg:mb-0">
                {/* Decorative Elements */}
                <div className="w-[80px] h-[80px] bg-[#f7f7f7] rounded-[40px] flex justify-center items-center mt-[68px] order-1">
                  <img
                    src="/images/img_twemoji_money_mouth_face.svg"
                    alt="Money face emoji"
                    className="w-[36px] h-[36px]"
                  />
                </div>

                {/* Main Content */}
                <div className="flex flex-col gap-6 justify-start items-center self-center flex-1 px-8 lg:px-14 order-2">
                  <div className="flex flex-col lg:flex-row justify-between items-center w-full mx-auto mr-0 lg:mr-[30px]">
                    <span className="text-lg font-medium leading-[22px] text-left text-[#344054] font-[Helvetica Neue] mb-4 lg:mb-0">
                      Our Customers
                    </span>
                    <span className="text-lg font-medium leading-[22px] text-left text-[#344054] font-[Helvetica Neue] mb-4 lg:mb-0">
                      Talk About IT
                    </span>
                    <span className="text-lg font-medium leading-[22px] text-left text-[#344054] font-[Helvetica Neue]">
                      Better Than Us
                    </span>
                  </div>

                  <div className="flex flex-col gap-8 justify-start items-center w-full mr-0 lg:mr-2.5">
                    <h2 className="text-[36px] sm:text-[54px] lg:text-[72px] font-medium leading-[36px] sm:text-[54px] lg:leading-[72px] text-center capitalize text-[#08080c] font-[Helvetica Neue] w-full">
                      Hear What Customer Have to Say
                    </h2>
                    <p className="text-base sm:text-lg font-normal leading-[22px] sm:leading-[27px] text-center capitalize text-[#6b7280] font-[Helvetica Neue] w-full lg:w-[68%]">
                      See your whole financial picture in one place, alongside a
                      smarter approach to investing and real human.
                    </p>
                  </div>
                </div>

                <div className="w-[80px] h-[80px] bg-[#f7f7f7] rounded-[40px] flex justify-center items-center mt-[46px] order-3">
                  <img
                    src="/images/img_twemoji_money_with_wings.svg"
                    alt="Money with wings emoji"
                    className="w-[36px] h-[36px]"
                  />
                </div>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="flex flex-col lg:flex-row justify-start items-center w-full gap-4">
              {testimonials?.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className={`flex flex-col gap-4 justify-start items-center w-full lg:w-[392px] ${
                    columnIndex === 2
                      ? "mb-0 lg:mb-[86px]"
                      : columnIndex === 0
                      ? "mb-0 lg:mb-[42px]"
                      : ""
                  }`}
                >
                  {column?.map((testimonial, index) => (
                    <div
                      key={testimonial?.id}
                      className="bg-[#f0e5e0] rounded-[12px] p-6 lg:p-8 w-full"
                    >
                      <div className="flex flex-col gap-4 justify-start items-center w-full h-auto">
                        <div className="flex justify-start items-center w-full">
                          <div className="flex gap-4 justify-center items-start w-full">
                            <div
                              className={`w-[64px] h-[64px] ${
                                testimonial?.avatarBg
                              } rounded-[32px] flex justify-center items-center ${
                                index === 0 && columnIndex === 0
                                  ? "self-center"
                                  : ""
                              }`}
                            >
                              <img
                                src={testimonial?.avatar}
                                alt={`${testimonial?.name} avatar`}
                                className="w-[64px] h-[64px] rounded-[32px] object-cover"
                              />
                            </div>
                            <div
                              className={`flex flex-col gap-1 justify-start items-start flex-1 ${
                                index === 0 && columnIndex === 0
                                  ? ""
                                  : index === 1 && columnIndex === 0
                                  ? "self-center"
                                  : index === 0 && columnIndex === 1
                                  ? "self-center"
                                  : index === 1 && columnIndex === 1
                                  ? ""
                                  : index === 0 && columnIndex === 2
                                  ? "self-center"
                                  : index === 1 && columnIndex === 2
                                  ? ""
                                  : ""
                              }`}
                            >
                              <h3 className="text-xl font-medium leading-[25px] text-left text-[#08080c] font-[Helvetica Neue]">
                                {testimonial?.name}
                              </h3>
                              <p
                                className={`text-base font-normal ${
                                  index === 1 && columnIndex === 0
                                    ? "leading-6"
                                    : "leading-5"
                                } text-left text-[#656565] font-[Helvetica Neue] ${
                                  (index === 1 && columnIndex === 0) ||
                                  (index === 1 && columnIndex === 1)
                                    ? "w-full"
                                    : ""
                                }`}
                              >
                                {testimonial?.role}
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="text-base font-normal leading-6 text-left text-[#08080c] font-[Helvetica Neue] w-full">
                          "{testimonial?.testimonial}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
