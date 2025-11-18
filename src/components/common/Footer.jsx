import {
  ArrowBigUpDash,
  ArrowUpNarrowWide,
  ArrowUpRight,
  ArrowUpWideNarrow,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-bl from-red-100 to-sky-100 rounded-t-[40px] relative overflow-hidden">
      {/* Background Layer */}

      {/* Watermark */}
      <div className="absolute top-36 left-0 w-full flex justify-center z-0">
        <span className="text-[150px] md:text-[350px] font-bold uppercase text-[#0000000c]">
          Finestra
        </span>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-2">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-10">
          <h2 className="text-4xl md:text-7xl font-semibold text-[#08080c] text-center lg:text-left">
            Let's Sit & Talk
          </h2>

          <div className="w-full lg:w-[40%]">
            <div className="flex justify-between items-center">
              <span className="text-xl md:text-3xl text-[#1f2937] opacity-60">
                Enter Your Email
              </span>
              <button>
                <ArrowUpRight className="w-10 h-10" />
              </button>
            </div>
            <div className="w-full h-px bg-gray-400 mt-4"></div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Address */}
          <div>
            <h3 className="text-2xl font-medium mb-3">Address</h3>
            <p className="text-lg text-[#1f2937]">
              475 Cherry Dr, Troy, Michigan 48083 United States (248-823-3200)
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-medium mb-3">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>About</li>
              <li>Pricing</li>
              <li>Jobs</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xl font-medium mb-3">Product</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Sales Software</li>
              <li>Marketplace</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h4 className="text-xl font-medium mb-3">Help Center</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Community</li>
              <li>Knowledge Base</li>
              <li>Academy</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-[#1f2937] gap-6 mt-32">
          <p>© 2024 Copyright By Sansbro - Finestra</p>
          {/* Logo */}

          <img
            src="/images/img_frame_1707480852.png"
            className="w-10 h-8"
            alt="Finestra Logo"
          />

          <div className="flex gap-6 flex-wrap">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Cookies</span>
            <span>Legal</span>
            <span>Recalls</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
