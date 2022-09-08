import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({ data }) => {
  return (
    <div className="bg-secondary py-14 dark:bg-DarkSecondary">
      <div className="flex flex-col lg:flex-row justify-between items-start px-3 md:px-[6rem] max-w-[30rem] md:max-w-[90rem] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-3">
          <Image src={data.logo} alt="logo" width={60} height={60} />
          <p className="text-lg md:text-2xl text-DarkSecondary dark:text-primary duration-700 font-semibold">
            {data.name}
          </p>
        </div>
        {/* Links  */}
        <div className="pt-10 px-10 grid gap-4 grid-cols-2">
            {data.footer.map((item, index) => {
                return (
                    <Link key={index} href={item.link}>
                        <p className="text-sm cursor-pointer hover:brightness-110 scale-95 hover:scale-100 md:text-base text-DarkSecondary dark:text-primary duration-500 font-medium">
                            {item.name}
                        </p>
                    </Link>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
