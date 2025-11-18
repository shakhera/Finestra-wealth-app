import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Button } from "../../components/ui/button";
import { BarChart2, ChartBar, LineChart, Plus, Settings } from "lucide-react";
import { FaAngleRight } from "react-icons/fa";

const FeaturesSection = () => {
  // Sample data for the chart
  const chartData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 280 },
    { name: "May", value: 590 },
    { name: "Jun", value: 320 },
    { name: "Jul", value: 480 },
    { name: "Aug", value: 380 },
    { name: "Sep", value: 430 },
    { name: "Oct", value: 520 },
    { name: "Nov", value: 350 },
    { name: "Dec", value: 460 },
  ];

  return (
    <section className="w-full bg-white pb-4">
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-[70px]">
        <div className="flex flex-col gap-8 justify-start items-center w-full">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-start items-center w-full">
            <div className="flex flex-col gap-6 justify-start items-start w-full lg:flex-1">
              <h2 className="text-4xl lg:text-2xl lg:text-[60px] font-medium leading-9 lg:leading-[72px] text-left capitalize text-[#08080c] font-[Helvetica Neue] w-full lg:w-[40%]">
                Manage money wisely
              </h2>
              <p className="text-lg lg:text-sm font-medium leading-6 sm:leading-[30px] text-left text-[#6b7280] font-[Helvetica Neue] w-full lg:w-[58%]">
                Master the Art of Financial Management: Strategies and Tools to
                Optimize Your Budget, Build Wealth, and Secure a Stable
                Financial Future
              </p>
            </div>

            <div className="flex flex-col gap-2.5 justify-start items-start self-end w-full lg:w-[14%] mt-8 lg:mt-0">
              <Button className="bg-black text-white rounded-[26px] px-8 py-4 text-base font-medium">
                Get Started Free
              </Button>

              <span className="text-sm font-medium leading-normal text-left capitalize text-[#6b7280] font-[Helvetica Neue]">
                explore more about us
              </span>
            </div>
          </div>

          {/* Features Content */}
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            {/* Left Feature Card */}
            <div className="w-full lg:w-[748px] bg-[#f6f6f6] rounded-3xl p-6">
              <div className="flex flex-col lg:flex-row justify-start items-center w-full">
                <div className="w-full lg:w-[30%] mb-8 lg:mb-0">
                  <Button className="text-[#ff5f5f] border border-[#ff5f5f] rounded-[26px] px-8 py-4 text-base font-medium bg-transparent flex gap-2 mb-[170px]">
                    Learn More
                  </Button>

                  <h3 className="text-3xl lg:text-xl font-bold leading-6 sm:leading-[29px] text-left capitalize text-[#08080c] font-[Helvetica Neue] w-full lg:w-[86%] mb-4">
                    Manage your money wisely
                  </h3>
                  <p className="text-sm font-normal leading-[18px] text-left text-[#6b7280] font-[Helvetica Neue] w-full lg:w-[82%]">
                    Master the Art of Financial Management
                  </p>
                </div>

                {/* Chart Container */}
                <div className="w-full lg:flex-1 bg-white rounded-3xl p-5">
                  <div className="flex flex-col gap-2 justify-start items-center w-full mb-4">
                    <div className="flex justify-between items-center w-full">
                      <h4 className="text-2xl font-medium leading-[30px] text-left text-[#000000] font-[Helvetica Neue]">
                        Expanse Statistic
                      </h4>
                      <div className="flex justify-center items-center bg-[#f6f6f6] rounded-[22px]">
                        <div className=" flex justify-between items-center p-1 pr-2 gap-2">
                          <Button
                            variant="ghost"
                            className="p-12 flex items-center justify-between gap-3 rounded-full px-5 py-2 bg-white text-black text-sm font-medium hover:bg-[#f9f9f9]
      "
                          >
                            <span className="flex items-center gap-2">
                              <BarChart2 size={16} className="text-[#1a1b1c]" />
                              Bar chart
                            </span>
                          </Button>
                          <LineChart size={16} className="text-[#1a1b1c]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chart Component */}
                  <div className="w-full h-[258px] ">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={chartData}
                        role="img"
                        aria-label="Expense statistics bar chart"
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#4F46E5" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Feature Card */}
            <div className="w-full lg:w-[532px] bg-[#f6f6f6] rounded-3xl p-6">
              <div className="flex flex-col justify-start items-center w-full mb-4">
                <div className="flex justify-center items-center w-full mb-8">
                  <h3 className="text-[20px] sm:text-[28px] font-normal leading-[27px] sm:leading-[34px] text-left capitalize text-[#08080c] font-[Helvetica Neue] self-start">
                    Quick Transfer
                  </h3>
                  <div className="flex justify-end items-center flex-1 gap-3">
                    <span className="text-lg font-medium leading-[22px] text-center text-[#08080c] font-[Helvetica Neue]">
                      All
                    </span>

                    <div className=" bg-[#f8c9c5] rounded-[18px] px-1 py-1 ">
                      <span className="text-lg font-bold leading-[22px] text-center capitalize text-[#010101] font-[Satoshi] px-1">
                        Contacts
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-[22px] justify-center items-center w-full mt-10">
                  <div className="flex flex-col gap-3 justify-start items-end flex-1">
                    <div className="w-20 h-20 border border-[#898989] rounded-[40px] flex justify-center items-center">
                      <Plus className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-normal leading-[22px] text-left capitalize text-[#08080c] font-[Helvetica Neue]">
                      Add New
                    </span>
                  </div>

                  {/* Contact 1 */}
                  <div className="flex flex-col gap-3 justify-start items-end flex-1">
                    <div className="w-20 h-20 bg-[#00000033] border-2 border-white rounded-[40px]"></div>
                    <span className="text-lg font-normal leading-[22px] text-left capitalize text-[#08080c99] font-[Helvetica Neue]">
                      Albert Sky
                    </span>
                  </div>

                  {/* Contact 2 */}
                  <div className="flex flex-col gap-3 justify-start items-center flex-1">
                    <div className="w-20 h-20 bg-[#00000033] border-2 border-white rounded-[40px]"></div>
                    <span className="text-lg font-normal leading-[22px] text-left capitalize text-[#08080c99] font-[Helvetica Neue]">
                      Edwer san
                    </span>
                  </div>

                  {/* Contact 3 */}
                  <div className="flex flex-col gap-3 justify-start items-center flex-1">
                    <div className="w-20 h-20 bg-[#00000033] border-2 border-white rounded-[40px]"></div>
                    <span className="text-lg font-normal leading-[22px] text-left capitalize text-[#08080c99] font-[Helvetica Neue]">
                      Erwan Why
                    </span>
                  </div>

                  {/* More Button */}
                  <button className="border border-[#2121217f] rounded-full p-2.5">
                    <FaAngleRight className="w-12 h-12" />
                  </button>
                </div>

                {/* Transfer Amount */}
                <div className="flex justify-between items-start w-full mt-[72px]">
                  <div className="flex items-center">
                    <span className="text-[28px] sm:text-[56px] font-medium leading-[34px] sm:leading-[67px] text-center text-[#212121] font-[Helvetica Neue]">
                      $349.
                    </span>
                    <span className="text-[28px] sm:text-[56px] font-medium leading-[34px] sm:leading-[67px] text-center text-[#21212199] font-[Helvetica Neue]">
                      00
                    </span>
                  </div>

                  <Button className="bg-[#ff5f5f] text-white rounded-[26px] px-10 py-6 text-base font-medium">
                    Send
                  </Button>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-[#08080c28] mt-1.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
