import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className=" bg-[#0f0a18] py-2.5 common-padding h-11 z-50 sticky top-0 left-0 flex justify-between shadow-md gap-2 flex-wrap ">
      <div className="flex md:gap-20 sm:gap-10 gap-4">
        <a
          href="mailto:info@itechdigit.com"
          className="text-white text-sm  flex items-center gap-1"
        >
          <Mail />
          <p className="sm:block hidden   font-normal">info@itechdigit.com</p>
        </a>

        <a
          href="tel:7010189969"
          className="text-white text-sm  flex items-center gap-1"
        >
          <Phone />{" "}
          <p className="sm:block hidden font-normal">+91: 7010189969</p>
        </a>
      </div>

      <div className="flex gap-6 text-white">
        <Link target="_blank" href={"https://facebook.com/"}>
          <Facebook />
        </Link>
        <Link target="_blank" href={"https://www.instagram.com/"}>
          <Instagram />
        </Link>

        <Link target="_blank" href={"https://x.com/home?lang=en"}>
          <Twitter />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
