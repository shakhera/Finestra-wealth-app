import { Button } from "../../components/ui/button";
import { FaAngleRight, FaGripLinesVertical } from "react-icons/fa";
import { Gift, MoreHorizontal, Users } from "lucide-react";
import { RiGlobalLine } from "react-icons/ri";

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
                      <MoreHorizontal className="w-6 h-6" />
                    </div>

                    <div className="flex gap-4 justify-center items-center w-full mx-3.5">
                      <div className="bg-[#00000033] rounded-[2px] w-[16%] h-auto">
                        <div className="flex justify-start items-center w-full">
                          <img
                            src="/images/visa-card.png"
                            alt="Chip"
                            className="h-10"
                          />
                        </div>
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
                <div className="bg-white rounded-2xl p-5 lg:p-6 w-full mt-8">
                  <div className="flex flex-col gap-8 justify-start items-center w-full h-auto">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-base font-medium leading-normal text-left text-[#000000] font-[Inter]">
                        Expense Breakdown
                      </span>
                      <MoreHorizontal className="w-6 h-6" />
                    </div>

                    <div className="flex justify-between items-center w-full gap-2">
                      {/* Subscriptions */}
                      <div className="flex flex-col justify-start items-start ">
                        <span className="text-xs font-medium leading-[15px] text-left text-[#6b7280] font-[Inter] ml-2">
                          Subscriptions
                        </span>
                        <span className="text-sm font-medium leading-[17px] text-left text-[#000000] font-[Inter] ml-2">
                          65.8%
                        </span>
                        <div className="bg-[#ffe0bb] rounded-[30px] mt-1.5 ">
                          <img
                            src="/images/line1.png"
                            alt="Progress bar"
                            className="w-full h-14 rounded-[30px] "
                          />
                        </div>
                      </div>

                      {/* Software Items */}
                      <div className="flex gap-2">
                        <div className="w-24 flex flex-col justify-start items-start">
                          <span className="text-xs font-medium leading-[15px] text-left text-[#6b7280] font-[Inter] ml-1.5">
                            Software
                          </span>
                          <span className="text-sm font-medium leading-[17px] text-left text-[#000000] font-[Inter] ml-1.5">
                            32%
                          </span>
                          <div className="bg-[#e2d9f7] rounded-[30px] mt-1.5">
                            <img
                              src="/images/line2.png"
                              alt="Progress bar"
                              className="w-full h-14 rounded-[30px]"
                            />
                          </div>
                        </div>

                        <div className="w-24 flex flex-col justify-start items-start">
                          <span className="text-xs font-medium leading-[15px] text-left text-[#6b7280] font-[Inter]">
                            Software
                          </span>
                          <span className="text-sm font-medium leading-[17px] text-left text-[#000000] font-[Inter]">
                            24.8%
                          </span>
                          <div className="bg-[#d2f2fa] rounded-[30px] mt-1.5">
                            <img
                              src="/images/line3.png"
                              alt="Progress bar"
                              className="w-full h-14 rounded-[30px]"
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
                <div className=" bg-[#f8c9c5] rounded-[18px] px-1 py-1 ">
                  <span className="text-lg font-medium leading-[22px] text-center capitalize text-[#010101] font-[Satoshi] px-1">
                    Account Transfer
                  </span>
                </div>

                <h2 className="text-xl md:text-3xl lg:text-7xl font-medium leading-9 sm:text-[54px] lg:leading-[72px] text-left capitalize text-[#08080c] font-[Helvetica Neue] w-full">
                  Maximizing Efficiency in Daily Finance
                </h2>

                <p className="text-base sm:text-lg font-medium leading-[22px] sm:leading-[27px] text-left text-[#6b7280] font-[Helvetica Neue] w-full lg:w-[86%]">
                  See your whole financial picture in one place, alongside a
                  smarter approach to investing and real human.
                </p>
              </div>

              <div className="flex justify-start items-center w-full">
                <div className="flex justify-start items-center">
                  <button className="border border-[#cecdcd] rounded-full p-4 ">
                    <img
                      src="/images/menu-free-icon.png"
                      alt="Feature icon"
                      className="w-8 h-8 "
                    />
                  </button>
                  <button className="border border-[#cecdcd] rounded-full p-3 ml-3">
                    <Gift className="w-8 h-8" />
                  </button>
                </div>

                <Button className="bg-[#ff5f5f] text-white rounded-[26px] px-10 py-6 text-base font-medium ml-auto">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-col gap-16 justify-start items-center w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <h2 className="text-xl md:text-3xl lg:text-7xl font-medium leading-9 sm:text-[54px] lg:leading-[72px] text-left capitalize text-[#08080c] font-[Helvetica Neue] w-full lg:w-[50%] mb-8 lg:mb-0">
                Key Reasons to Choose Us
              </h2>
              <p className="text-lg lg:text-sm font-medium leading-[22px] sm:leading-[27px] text-left text-[#6b7280] font-[Helvetica Neue] w-full lg:w-[30%]">
                Whatever your customers payment preferences, we will help you
                find the right solution for your business.
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[54px] w-full mr-0 lg:mr-3.5">
              {/* Customers Card */}
              <div className="w-full lg:w-[324px] bg-white rounded-3xl p-6">
                <div className="flex flex-col justify-start items-start w-full">
                  <div className="flex gap-2 justify-center items-center bg-[#ff5f5f14] rounded-1 mb-3">
                    <Users className="w-6 h-6" />
                    <span className="text-base font-medium leading-normal text-left text-[#ff5f5f] font-[Helvetica Neue]">
                      Customers
                    </span>
                  </div>

                  <div className="flex flex-col gap-0.5 justify-start items-center w-full -mt-3">
                    <div className="flex justify-start items-start w-full">
                      <span className="text-4xl md:text-5xl lg:text-8xl font-normal leading-[60px] sm:text-[90px] lg:leading-[120px] text-left text-[#1f2937] font-[Helvetica Neue] self-center">
                        20K
                      </span>
                      <span className="text-2xl md:text-3xl lg:text-5xl font-medium leading-[31px] sm:text-[46px] lg:leading-[62px] text-left text-[#1f2937] font-[Helvetica Neue] mt-2 sm:mt-3 lg:mt-4">
                        +
                      </span>
                    </div>
                    <p className="text-lg lg:text-sm font-medium leading-[22px] sm:leading-[27px] text-left capitalize text-[#6b7280] font-[Helvetica Neue] w-full mt-8">
                      In 38 countries, we work as one global team to help
                      clients
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact Card */}
              <div className="w-full lg:w-[324px] bg-white rounded-3xl p-6 lg:p-3">
                <div className="flex flex-col justify-center items-start w-full ml-0 lg:ml-3">
                  <div className="flex gap-2 justify-center items-center bg-[#ff5f5f14] rounded-1 mb-3">
                    <RiGlobalLine className="w-6 h-6" />
                    <span className="text-base font-medium leading-normal text-left text-[#ff5f5f] font-[Helvetica Neue] self-end">
                      Impact
                    </span>
                  </div>

                  <div className="flex flex-col justify-start items-center w-full -mt-3">
                    <div className="flex justify-start items-start w-full">
                      <span className="text-4xl md:text-5xl lg:text-8xl font-normal leading-[60px] sm:text-[90px] lg:leading-[120px] text-left text-[#1f2937] font-[Helvetica Neue] self-center">
                        98
                      </span>
                      <span className="text-2xl md:text-3xl lg:text-5xl font-medium leading-[25px] sm:text-[37px] lg:leading-[49px] text-left text-[#1f2937] font-[Helvetica Neue] mt-2 sm:mt-3 lg:mt-4">
                        %
                      </span>
                    </div>
                    <p className="text-lg lg:text-sm font-medium leading-[22px] sm:leading-[27px] text-left capitalize text-[#6b7280] font-[Helvetica Neue] w-full mt-8">
                      We have worked with 89% of the Global 500 companies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Card */}
              <div className="w-full lg:w-[324px] bg-white rounded-3xl p-6">
                <div className="flex flex-col justify-center items-start w-full ml-0 lg:ml-6">
                  <div className="flex gap-2 justify-center items-center bg-[#ff5f5f14] rounded-1 mb-3">
                    <FaGripLinesVertical className="w-6 h-6" />
                    <span className="text-base font-medium leading-normal text-left text-[#ff5f5f] font-[Helvetica Neue] self-end">
                      Experience
                    </span>
                  </div>

                  <div className="flex flex-col justify-start items-center w-full -mt-3">
                    <div className="flex justify-start items-start w-full">
                      <span className="text-4xl md:text-5xl lg:text-8xl font-normal leading-[60px] sm:text-[90px] lg:leading-[120px] text-left text-[#1f2937] font-[Helvetica Neue] self-center">
                        89
                      </span>
                      <span className="text-2xl md:text-3xl lg:text-5xl font-medium leading-[25px] sm:text-[37px] lg:leading-[49px] text-left text-[#1f2937] font-[Helvetica Neue] mt-2 sm:mt-3 lg:mt-4">
                        %
                      </span>
                    </div>
                    <p className="text-lg lg:text-sm font-medium leading-[22px] sm:leading-[27px] text-left capitalize text-[#6b7280] font-[Helvetica Neue] w-full mt-8">
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
