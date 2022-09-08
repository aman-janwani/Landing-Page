import Image from "next/image";
import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

const NavBar = ({ data }) => {
  const [colorTheme, setTheme] = useDarkMode();
  const [isHover , setIsHover] = useState(false)
  return (
    <div className=" max-w-[90rem] mx-auto px-3 md:px-10 flex items-center space-x-3 justify-between duration-700">
      <div className="flex items-center space-x-3">
        <Image src={data.logo} alt="logo" width={46} height={46} />
        <p className="text-sm md:text-xl text-DarkPrimary dark:text-primary duration-700 font-semibold">{data.name}</p>
      </div>
      <div className="flex items-center justify-between space-x-5 md:space-x-10">
        {colorTheme === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setTheme("light")}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-primary p-2 duration-700 rounded-full hover:bg-DarkSecondary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setTheme("dark")}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 p-2 text-DarkPrimary duration-700 rounded-full hover:bg-secondary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        )}
        <button  onMouseEnter={()=> {
                setIsHover(true);
            }} onMouseLeave={() => {
                setIsHover(false);
            }}  className={`${isHover ? ("animateButton") : ("")} scale-95 hover:scale-100 duration-700 bg-gradient-to-r from-[#F20089] to-[#8900F2] px-6 md:px-12 py-2 md:py-3 rounded-lg font-medium text-primary`}>Login</button>
      </div>
    </div>
  );
};

export default NavBar;
