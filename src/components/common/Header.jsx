import React, { useState } from "react";
import { Menu, X, Home, DollarSign } from "lucide-react";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Switch } from "../ui/switch";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div
        className="w-full max-w-[1440px] mx-auto 
          px-4 sm:px-6 lg:px-11 py-4 
          flex items-center justify-between"
      >
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/images/img_frame_1707480852.png"
            alt="Finestra Logo"
            className="w-[50px] h-10"
          />
          <h1 className="text-2xl font-medium text-[#08080c]">Finestra</h1>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-16">
          {/* NAV TABS */}
          <Tabs defaultValue="home" className="bg-black p-1 rounded-full">
            <TabsList className="bg-transparent space-x-2 h-auto">
              <TabsTrigger
                value="home"
                className="flex items-center gap-2 rounded-full px-5 py-2 text-white data-[state=active]:bg-[#ff6a6a]"
              >
                <Home size={16} /> Home
              </TabsTrigger>

              {["About Us", "Reviews", "Procedures", "Blog"].map((item) => (
                <TabsTrigger
                  key={item}
                  value={item.toLowerCase()}
                  className="rounded-full px-5 py-2 text-white data-[state=active]:bg-[#ff6a6a]"
                >
                  {item}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-6">
            <Switch className="data-[state=checked]:bg-[#ff6a6a]" />

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#b0e5fc] border-2 border-white rounded-full flex items-center justify-center">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://i.pravatar.cc/40" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </div>

              <span className="text-base font-normal text-[#08080c]">+pro</span>
              <div className="w-7 h-7 border border-gray-400 rounded-full flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-gray-700" />
              </div>
            </div>

            <Button variant="outline" className="rounded-full px-5">
              Sign In
            </Button>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 
          ${open ? "max-h-[500px] py-4" : "max-h-0"}`}
      >
        <div className="flex flex-col items-center gap-5 pb-5 bg-white border-t">
          {/* Mobile Nav Items */}
          <Tabs defaultValue="home" className="bg-black p-1 rounded-2xl">
            <TabsList className="bg-transparent space-x-2 h-auto flex flex-col gap-3 text-lg font-normal">
              <TabsTrigger
                value="home"
                className="flex items-center gap-2 rounded-full px-5 py-2 text-white data-[state=active]:bg-[#ff6a6a]"
              >
                <Home size={16} /> Home
              </TabsTrigger>
              {["About Us", "Reviews", "Procedures", "Blog"].map((item) => (
                <TabsTrigger
                  key={item}
                  value={item.toLowerCase()}
                  className="rounded-full px-5 py-2 text-white data-[state=active]:bg-[#ff6a6a]"
                >
                  {item}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Switch className="data-[state=checked]:bg-[#ff6a6a]" />

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#b0e5fc] border-2 border-white rounded-full flex items-center justify-center">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://i.pravatar.cc/40" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>

            <span className="text-base text-[#08080c]">+pro</span>

            <div className="w-7 h-7 border border-gray-400 rounded-full flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-gray-700" />
            </div>
          </div>

          <Button variant="outline" className="rounded-full px-6">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
