import { ArrowRight } from "lucide-react";
import React from "react";

const ButtonCard = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded-full flex items-center justify-center gap-1 px-4 py-2.5"
    >
      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  );
};

export default ButtonCard;
