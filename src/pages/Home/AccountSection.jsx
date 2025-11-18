import React from "react";
import { Button } from "../../components/ui/button";
import { FaAngleRight } from "react-icons/fa";

const AccountSection = () => {
  return (
    <section className="w-full bg-white py-3 px-5 relative">
      <div className="relative w-full h-[1366px]">
        <div className="absolute inset-0 bg-[#f7f7f7] rounded-3xl"></div>

        <div className="relative z-10 flex flex-col gap-[100px] justify-start items-center w-full h-auto px-4 sm:px-6 lg:px-[106px] py-[121px]">
          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-full">
            {/* Left Side - Account Management */}
            <div className="w-full lg:w-[44%] bg-[#eaeaea8e] rounded-[40px] p-8 lg:p-14">
              <div className="flex flex-col gap-2 justify-center items-center w-full h-auto">
                {/* Connected Account Card */}
                <div className="bg-white rounded-2xl p-5 w-full">
                  <div className="flex justify-center items-center w-full">
                    <span className="text-base font-medium leading-normal text-left text-[#000000] font-[Inter]">
                      Connected Account
                    </span>
                    <div className="flex justify-end items-center flex-1">
                      <span className="text-sm font-medium leading-[17px] text-left text-[#6b7280] font-[Inter]">
                        View All
                      </span>
                      <FaAngleRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 justify-center items-center w-full h-auto mt-8">
                    <div className="flex justify-between items-center w-full mx-2.5">
                      <span className="text-sm font-medium leading-[17px] text-left text-[#08080c] font-[Inter]">
                        USD Account
                      </span>
                      <img
                        src="/images/img_icon_line_dots_vertical_blue_gray_900.svg"
                        alt="Menu"
                        className="w-6 h-6"
                      />
                    </div>

                    <div className="w-full h-0.5 bg-white"></div>

                    <div className="flex gap-4 justify-center items-center w-full mx-3.5">
                      <div className="bg-[#00000033] rounded-[2px] w-[16%] h-auto">
                        <div className="flex justify-start items-center w-full">
                          <img
                            src="/images/img_chips.png"
                            alt="Chip"
                            className="w-3 h-2.5"
                          />
                          <span className="text-[4px] font-medium leading-[6px] text-left text-white font-[Inter] ml-1.5">
                            **** 235
                          </span>
                        </div>
                        <img
                          src="/images/img_paypal_logo.svg"
                          alt="PayPal"
                          className="w-4.5 h-1 mt-3"
                        />
                        <span className="text-[4px] font-normal leading-[6px] text-left text-[#ededed] font-[Inter]">
                          Travel
                        </span>
                      </div>

                      <div className="flex flex-col gap-1 justify-start items-start flex-1">
                        <span className="text-base font-medium leading-normal text-left text-[#08080c] font-[Inter]">
                          Visa
                        </span>
                        <span className="text-xs font-semibold leading-[15px] text-left text-[#6b7280] font-[Inter]">
                          **** **** **** 1990
                        </span>
                      </div>

                      <div className="flex items-center">
                        <span className="text-xl font-medium leading-[25px] text-left text-[#08080c] font-[Inter]">
                          $28,390.
                        </span>
                        <span className="text-xl font-medium leading-[25px] text-left text-[#6b7280] font-[Inter]">
                          20
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expense Breakdown Card */}
                <div className="bg-white rounded-[16px] p-5 lg:p-6 w-full mt-8">
                  <div className="flex flex-col gap-8 justify-start items-center w-full h-auto">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-base font-medium leading-normal text-left text-[#000000] font-[Inter]">
                        Expense Breakdown
                      </span>
                      <img
                        src="/images/img_icon_line_dots_vertical_blue_gray_900.svg"
                        alt="Menu"
                        className="w-6 h-6"
                      />
                    </div>

                    <div className="flex justify-between items-center w-full">
                      {/* Subscriptions */}
                      <div className="flex flex-col justify-start items-start">
                        <span className="text-xs font-medium leading-[15px] text-left text-[#6b7280] font-[Inter] ml-2">
                          Subscriptions
                        </span>
                        <span className="text-sm font-medium leading-[17px] text-left text-[#000000] font-[Inter] ml-2">
                          65.8%
                        </span>
                        <div className="bg-[#ffe0bb] rounded-[30px] mt-1.5">
                          <img
                            src="/images/img_line.png"
                            alt="Progress bar"
                            className="w-full rounded-[30px]"
                          />
                        </div>
                      </div>

                      {/* Software Items */}
                      <div className="flex gap-2">
                        <div className="w-[96px] flex flex-col justify-start items-start">
                          <span className="text-xs font-medium leading-[15px] text-left text-[#6b7280] font-[Inter] ml-1.5">
                            Software
                          </span>
                          <span className="text-sm font-medium leading-[17px] text-left text-[#000000] font-[Inter] ml-1.5">
                            32%
                          </span>
                          <div className="bg-[#e2d9f7] rounded-[30px] mt-1.5">
                            <img
                              src="/images/img_line_deep_purple_100.png"
                              alt="Progress bar"
                              className="w-full rounded-[30px]"
                            />
                          </div>
                        </div>

                        <div className="w-[98px] flex flex-col justify-start items-start">
                          <span className="text-xs font-medium leading-[15px] text-left text-[#6b7280] font-[Inter]">
                            Software
                          </span>
                          <span className="text-sm font-medium leading-[17px] text-left text-[#000000] font-[Inter]">
                            24.8%
                          </span>
                          <div className="bg-[#d2f2fa] rounded-[30px] mt-1.5">
                            <img
                              src="/images/img_line_light_blue_a100.png"
                              alt="Progress bar"
                              className="w-full rounded-[30px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-[46%] flex flex-col gap-[58px] justify-start items-center mt-12 lg:mt-0">
              <div className="flex flex-col gap-7 justify-start items-start w-full mr-0 lg:mr-3">
                <Button
                  text="Account Transfer"
                  text_font_size="text-sm"
                  text_font_family="Helvetica Neue"
                  text_font_weight="font-medium"
                  text_line_height="leading-[18px]"
                  text_text_align="left"
                  text_text_transform="capitalize"
                  text_color="text-[#0e0e0e]"
                  fill_background_color="bg-[#ff5f5f1e]"
                  border_border_radius="rounded-[14px]"
                  padding="6px 10px"
                />

                <h2 className="text-[36px] sm:text-[54px] lg:text-[72px] font-medium leading-[36px] sm:text-[54px] lg:leading-[72px] text-left capitalize text-[#08080c] font-[Helvetica Neue] w-full">
                  Maximizing Efficiency in Daily Finance
                </h2>

                <p className="text-base sm:text-lg font-medium leading-[22px] sm:leading-[27px] text-left text-[#6b7280] font-[Helvetica Neue] w-full lg:w-[86%]">
                  See your whole financial picture in one place, alongside a
                  smarter approach to investing and real human.
                </p>
              </div>

              <div className="flex justify-start items-center w-full">
                <div className="flex justify-start items-center">
                  <button className="border border-[#ededed] rounded-[24px] p-4">
                    <img
                      src="/images/img_frame_1707481153.svg"
                      alt="Feature icon"
                      className="w-[48px] h-[48px]"
                    />
                  </button>
                  <button className="border border-[#ededed] rounded-[24px] p-3 ml-3">
                    <img
                      src="/images/img_icon_blue_gray_900_02.svg"
                      alt="Feature icon"
                      className="w-[48px] h-[48px]"
                    />
                  </button>
                </div>

                <Button
                  text="Learn More"
                  text_font_size="text-base"
                  text_font_family="Helvetica Neue"
                  text_font_weight="font-medium"
                  text_line_height="leading-normal"
                  text_text_align="center"
                  text_color="text-white"
                  fill_background_color="bg-[#ff5f5f]"
                  border_border_radius="rounded-[26px]"
                  padding="14px 26px"
                  className="ml-auto"
                />
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-col gap-[64px] justify-start items-center w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <h2 className="text-[36px] sm:text-[54px] lg:text-[72px] font-medium leading-[36px] sm:text-[54px] lg:leading-[72px] text-left capitalize text-[#08080c] font-[Helvetica Neue] w-full lg:w-[50%] mb-8 lg:mb-0">
                Key Reasons to Choose Us
              </h2>
              <p className="text-base sm:text-lg font-medium leading-[22px] sm:leading-[27px] text-left text-[#6b7280] font-[Helvetica Neue] w-full lg:w-[30%]">
                Whatever your customers payment preferences, we will help you
                find the right solution for your business.
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[54px] w-full mr-0 lg:mr-3.5">
              {/* Customers Card */}
              <div className="w-full lg:w-[324px] bg-white rounded-[24px] p-6">
                <div className="flex flex-col justify-start items-start w-full">
                  <div className="flex gap-2 justify-center items-center bg-[#ff5f5f14] rounded-[4px] mb-3">
                    <img
                      src="/images/img_icon_red_a200_24x24.svg"
                      alt="Customers icon"
                      className="w-6 h-6"
                    />
                    <span className="text-base font-medium leading-normal text-left text-[#ff5f5f] font-[Helvetica Neue]">
                      Customers
                    </span>
                  </div>

                  <div className="flex flex-col gap-0.5 justify-start items-center w-full -mt-3">
                    <div className="flex justify-start items-start w-full">
                      <span className="text-[50px] sm:text-[75px] lg:text-[100px] font-normal leading-[60px] sm:text-[90px] lg:leading-[120px] text-left text-[#1f2937] font-[Helvetica Neue] self-center">
                        20K
                      </span>
                      <span className="text-[25px] sm:text-[37px] lg:text-[50px] font-medium leading-[31px] sm:text-[46px] lg:leading-[62px] text-left text-[#1f2937] font-[Helvetica Neue] mt-2 sm:mt-3 lg:mt-4">
                        +
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-normal leading-[22px] sm:leading-[27px] text-left capitalize text-[#6b7280] font-[Helvetica Neue] w-full mt-8">
                      In 38 countries, we work as one global team to help
                      clients
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact Card */}
              <div className="w-full lg:w-[324px] bg-white rounded-[24px] p-6 lg:p-3">
                <div className="flex flex-col justify-center items-start w-full ml-0 lg:ml-3">
                  <div className="flex gap-2 justify-center items-center bg-[#ff5f5f14] rounded-[4px] mb-3">
                    <img
                      src="/images/img_icon_24x24.svg"
                      alt="Impact icon"
                      className="w-6 h-6"
                    />
                    <span className="text-base font-medium leading-normal text-left text-[#ff5f5f] font-[Helvetica Neue] self-end">
                      Impact
                    </span>
                  </div>

                  <div className="flex flex-col justify-start items-center w-full -mt-3">
                    <div className="flex justify-start items-start w-full">
                      <span className="text-[50px] sm:text-[75px] lg:text-[100px] font-normal leading-[60px] sm:text-[90px] lg:leading-[120px] text-left text-[#1f2937] font-[Helvetica Neue] self-center">
                        98
                      </span>
                      <span className="text-[20px] sm:text-[30px] lg:text-[40px] font-medium leading-[25px] sm:text-[37px] lg:leading-[49px] text-left text-[#1f2937] font-[Helvetica Neue] mt-2 sm:mt-3 lg:mt-4">
                        %
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-normal leading-[22px] sm:leading-[27px] text-left capitalize text-[#6b7280] font-[Helvetica Neue] w-full mt-8">
                      We have worked with 89% of the Global 500 companies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Card */}
              <div className="w-full lg:w-[324px] bg-white rounded-[24px] p-6">
                <div className="flex flex-col justify-center items-start w-full ml-0 lg:ml-6">
                  <div className="flex gap-2 justify-center items-center bg-[#ff5f5f14] rounded-[4px] mb-3">
                    <img
                      src="/images/img_icon_1.svg"
                      alt="Experience icon"
                      className="w-6 h-6"
                    />
                    <span className="text-base font-medium leading-normal text-left text-[#ff5f5f] font-[Helvetica Neue] self-end">
                      Experience
                    </span>
                  </div>

                  <div className="flex flex-col justify-start items-center w-full -mt-3">
                    <div className="flex justify-start items-start w-full">
                      <span className="text-[50px] sm:text-[75px] lg:text-[100px] font-normal leading-[60px] sm:text-[90px] lg:leading-[120px] text-left text-[#1f2937] font-[Helvetica Neue] self-center">
                        89
                      </span>
                      <span className="text-[20px] sm:text-[30px] lg:text-[40px] font-medium leading-[25px] sm:text-[37px] lg:leading-[49px] text-left text-[#1f2937] font-[Helvetica Neue] mt-2 sm:mt-3 lg:mt-4">
                        %
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-normal leading-[22px] sm:leading-[27px] text-left capitalize text-[#6b7280] font-[Helvetica Neue] w-full mt-8">
                      We started with a rebellious mindset and set ourselves the
                      challenge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSection;
