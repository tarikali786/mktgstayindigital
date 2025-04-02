import { ArrowRight } from "lucide-react";
import React from "react";

const ButtonCard = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-[#103ce7] to-[#64e9ff] text-white rounded-full flex items-center justify-center gap-1 px-4 py-2.5"
    >
      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  );
};

export default ButtonCard;
