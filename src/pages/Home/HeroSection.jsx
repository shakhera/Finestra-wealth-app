import {
  Bell,
  ChevronRight,
  Home,
  LucideBattery,
  LucideCreditCard,
  MoreHorizontal,
  MoreVertical,
  MousePointer2,
  Signal,
  Wifi,
} from "lucide-react";

import { Button } from "../../components/ui/button";
import { LuChevronDown, LuPlus, LuStar, LuYoutube } from "react-icons/lu";
import { useState } from "react";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-linear-to-bl from-red-100 to-sky-100 relative">
      <div className="relative">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 pt-[88px] md:pt-[120px] lg:pt-[70px] ">
          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row justify-center items-end w-full gap-8 lg:gap-0 ">
            <div className="flex flex-col gap-[30px] justify-start items-center w-full lg:w-[78%]">
              <div className="flex flex-col lg:flex-row justify-start items-center w-full ml-0 lg:ml-5">
                <div className="flex flex-col gap-[30px] justify-start items-center w-full">
                  <div className="flex flex-col lg:flex-row justify-start items-center w-full relative">
                    {/* Finance Badge Stack */}
                    <div className="relative w-[116px] h-[58px] mb-8 lg:mb-[42px] lg:self-end order-2 lg:order-1">
                      <div className="absolute bottom-0 left-0 flex justify-center items-center bg-[#fef3b5] rounded-[18px] px-1 py-1 w-auto h-auto">
                        <span className="text-base font-medium leading-[22px] text-center capitalize text-[#010101] font-[Satoshi] px-1">
                          Finance
                        </span>
                      </div>
                      <MousePointer2
                        className="absolute -top-2 -right-2 rotate-90 w-7 h-7 text-black"
                        strokeWidth={2.5}
                      />
                    </div>

                    {/* Main Hero Content */}
                    <div className="flex-1 -ml-0 lg:-ml-6 order-1 lg:order-2">
                      <div className="flex flex-col gap-8 justify-start items-center w-full">
                        <h1 className="text-[50px] sm:text-[70px] md:text-[85px] lg:text-[100px] font-medium leading-[50px] sm:text-[70px] md:leading-[85px] lg:leading-[100px] text-center capitalize text-[#08080c] font-[Helvetica Neue] w-full">
                          Make your money work harder
                        </h1>
                        <p className="text-base sm:text-lg font-normal leading-6 sm:leading-7 text-center text-[#08080ccc] font-[Helvetica Neue] w-full">
                          Initiating a business venture may appear overwhelming,
                          yet our forte lies in simplifying the entire process
                          for you.
                        </p>
                      </div>
                    </div>

                    {/* Business Badge Stack */}
                    <div className="relative w-[106px] h-16 mb-8 lg:mb-[60px] lg:self-end order-3">
                      <div className="absolute bottom-0 right-0 flex justify-center items-center bg-[#f8c9c5] rounded-[18px] px-1 py-1 w-auto h-auto">
                        <span className="text-base font-medium leading-[22px] text-center capitalize text-[#010101] font-[Satoshi] px-1">
                          Business
                        </span>
                      </div>
                      <MousePointer2
                        className="absolute -top-4 -left-5 w-7 h-7 text-black"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button className="bg-black text-white rounded-[26px] px-8 py-4 text-base font-medium">
                      Get Started Free
                    </Button>

                    <Button className="text-black border border-black rounded-[26px] px-8 py-4 text-base font-medium bg-transparent flex gap-2">
                      <LuYoutube />
                      Watch A Demo
                    </Button>
                  </div>

                  {/* Trustpilot Section */}
                  <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[38%] gap-4 sm:gap-0">
                    <div className="flex justify-center items-center gap-2">
                      <div className="text-[#ff5f5f]">
                        <div className="w-8 h-8 flex justify-center items-center">
                          <LuStar className="w-8 h-8" />
                        </div>
                      </div>
                      <span className="text-lg font-medium leading-[22px] text-left text-[#08080c] font-[Inter]">
                        Trustpilot
                      </span>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                      <div className="flex gap-1 px-2 text-[#ff5f5f]">
                        {[1, 2, 3, 4, 5]?.map((star) => (
                          <LuStar />
                        ))}
                      </div>
                      <span className="text-base font-medium leading-normal text-left text-[#08080c] font-[Inter]">
                        3800+ 5 Stars
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Dashboard Preview */}
              <div className="flex justify-start items-end w-full mt-8 lg:mt-8 mr-0 lg:mr-1.5">
                <div className="flex flex-col justify-start items-center w-full ml-0 lg:ml-1.5">
                  <div className="flex justify-end items-center w-full">
                    <div className="w-full lg:w-[50%] bg-white rounded-[40px] shadow-[0px_4px_100px_#11111114] p-3">
                      {/* Mobile Status Bar */}
                      <div className="flex justify-start items-center w-full p-3">
                        <div className="flex justify-start items-center w-full px-[18px]">
                          <span className="text-sm font-medium leading-[17px] text-center text-[#08080c] font-[Inter] self-end">
                            9:41
                          </span>
                        </div>
                        <div className="flex justify-end items-center self-end w-full gap-1">
                          <Signal className="w-3.5 h-2.5 " />
                          <Wifi className="w-3.5 h-2.5 " />
                          <LucideBattery className="w-3.5 h-2.5 " />
                        </div>
                      </div>

                      {/* Dashboard Header */}
                      <div className="flex justify-start items-center w-full mt-4 mx-auto">
                        <div className="flex justify-start items-center w-full">
                          <Home className="w-6 h-6" />
                          <ChevronRight className="w-[18px] h-[18px] ml-4" />
                          <span className="text-xl font-normal leading-[25px] text-left text-[#08080c] font-[Inter] ml-4">
                            Dashboard
                          </span>
                        </div>

                        <div className="w-7 h-7 border border-gray-400 rounded-full flex items-center justify-center">
                          <Bell className="w-4 h-4 rounded-[22px] " />
                        </div>
                      </div>

                      {/* Accounts Section */}
                      <div className="flex flex-col gap-4 justify-start items-start w-full mt-2 mx-6">
                        <h2 className="text-2xl font-medium leading-[30px] text-left text-[#08080c] font-[Inter]">
                          Accounts
                        </h2>

                        <div className="flex justify-start items-center w-full">
                          <div className="flex justify-center items-center w-[44%] bg-[#f6f8fa] border border-[#e5e7eb] rounded-[18px] p-2">
                            <LucideCreditCard className="w-5 h-5" />
                            <div className="flex justify-center items-center flex-1 px-1.5">
                              <MoreHorizontal />
                              <span className="text-base font-normal leading-normal text-left text-[#08080c] font-[Inter] ml-2">
                                874
                              </span>
                              <button
                                onClick={() => setOpen(!open)}
                                className="flex items-center"
                              >
                                <LuChevronDown
                                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                                    open ? "rotate-180" : "rotate-0"
                                  }`}
                                />
                              </button>
                            </div>
                          </div>

                          <div className="flex justify-start items-center flex-1 px-4">
                            <button className="border border-[#e5e7eb] rounded-[18px] p-2.5">
                              <LuPlus className="w-9 h-9" />
                            </button>
                            <div className="w-px h-4 bg-[#d1d5db] ml-3"></div>
                            <button className="bg-[#925fff] rounded-full p-2.5 ml-2.5">
                              <MoreHorizontal className="w-9 h-9" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Financial Cards */}
                      <div className="flex flex-col gap-2 w-full mt-4 ">
                        <div className="bg-[#fcfcfc] rounded-[20px] p-4">
                          <div className="flex justify-between items-start w-full">
                            <span className="text-base font-normal leading-normal text-left text-[#94a3b8] font-[Inter] ml-2 self-end">
                              Monthly Income
                            </span>
                            <MoreVertical className="w-6 h-6 mb-1.5" />
                          </div>
                          <div className="flex justify-start items-start w-full mx-2">
                            <div className="flex items-center">
                              <span className="text-4xl font-semibold leading-[39px] text-left text-[#08080c] font-[Inter]">
                                $78,821.
                              </span>
                              <span className="text-4xl font-semibold leading-[39px] text-left text-[#94a3b8] font-[Inter]">
                                88
                              </span>
                            </div>
                            <div className="bg-[#d6fff3] rounded-[10px] px-1.5 py-0.5 mt-2.5 ml-3">
                              <span className="text-xs font-semibold leading-[15px] text-left text-[#00a470] font-[Inter]">
                                +1.5%
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Monthly Experience Card */}
                        <div className="bg-[#fcfcfc] rounded-[20px] p-4">
                          <div className="flex justify-between items-center w-full">
                            <span className="text-base font-normal leading-normal text-left text-[#94a3b8] font-[Inter] ml-2 self-end">
                              Monthly Experience
                            </span>
                            <MoreVertical className="w-6 h-6 mb-1.5" />
                          </div>
                          <div className="flex justify-start items-center w-full mx-2 mb-2.5">
                            <div className="flex items-center">
                              <span className="text-4xl font-semibold leading-[39px] text-left text-[#08080c] font-[Inter]">
                                $16,325.
                              </span>
                              <span className="text-4xl font-semibold leading-[39px] text-left text-[#94a3b8] font-[Inter]">
                                23
                              </span>
                            </div>
                            <div className="flex justify-center items-center bg-[#d6fff3] rounded-[10px] px-1.5 self-end mb-1 ml-2">
                              <span className="text-xs font-semibold leading-[15px] text-left text-[#00a470] font-[Inter] self-start mb-1">
                                +1.5%
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Monthly Savings Card */}
                        <div className="bg-white rounded-[20px] p-4 opacity-60">
                          <div className="flex justify-between items-center w-full">
                            <span className="text-base font-normal leading-[19px] text-left text-[#94a3b8] font-[Inter] ml-2 self-end">
                              Monthly Savings
                            </span>
                            <MoreVertical className="w-6 h-6 mb-1.5" />
                          </div>
                          <div className="flex justify-start items-center w-full mx-2 mb-2">
                            <div className="flex items-center">
                              <span className="text-4xl font-semibold leading-[38px] text-left text-[#08080c] font-[Inter]">
                                $11,235.
                              </span>
                              <span className="text-4xl font-semibold leading-[38px] text-left text-[#6b7280] font-[Inter]">
                                14
                              </span>
                            </div>
                            <div className="flex justify-center items-center bg-[#d6fff3] rounded-[10px] px-1 py-1 ml-2">
                              <span className="text-xs font-semibold leading-3.5 text-left text-[#00a470] font-[Inter]">
                                +1.5%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center w-full -mt-12  z-50 bg-white p-2 ">
          <h3 className="text-sm sm:text-base font-medium text-black">
            Loved by 25 million+ users
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-4 opacity-40">
            {brands.map((brand, idx) => (
              <div key={idx} className="flex items-center gap-1 text-gray-600">
                {brand.icon}
                <span className="text-sm sm:text-base font-medium">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
