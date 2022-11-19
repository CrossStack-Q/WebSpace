import React from "react";
import icon from "../../blockchain.png"

function Header() {
  return (
    <header className="bg-transparent bg-opacity-10 backdrop-blur-lg top-0 sticky -mt-8 flex justify-between items-center text-white p-4">
      <div className="flex gap-4">
        <div className="relative w-8 h-8 ">
            <img src={icon}   alt="now" />
            </div>
        <p className="text-xl font-bold">
        Webspace
        </p>
        </div>
      <div >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;
