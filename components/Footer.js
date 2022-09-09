import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Footer = ({ data }) => {
  const router = useRouter();
  return (
    <div className="bg-secondary dark:bg-DarkSecondary">
      <div className="flex flex-col py-14 lg:flex-row justify-between items-start px-3 md:px-[6rem] max-w-[30rem] md:max-w-[90rem] mx-auto">
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
            );
          })}
        </div>
      </div>
      <div className="w-full bg-tertiary dark:bg-DarkPrimary flex justify-center">
        {router.pathname === "/" ? (
          <button
            onClick={() => {
              router.push("/music");
            }}
            className="text-DarkPrimary dark:text-primary px-5 py-2 border-2 border-secondary dark:border-DarkSecondary mx-auto my-5 rounded-lg hover:bg-DarkPrimary hover:text-primary dark:hover:bg-primary dark:hover:text-DarkPrimary duration-500"
          >
            <p className="text-sm md:text-base text-center font-medium">
              Check For Music Data
            </p>
          </button>
        ) : (
          <button
            onClick={() => {
              router.push("/");
            }}
            className="text-DarkPrimary dark:text-primary px-5 py-2 border-2 border-secondary dark:border-DarkSecondary mx-auto my-5 rounded-lg hover:bg-DarkPrimary hover:text-primary dark:hover:bg-primary dark:hover:text-DarkPrimary duration-500"
          >
            <p className="text-sm md:text-base text-center font-medium">
              Check For Coder Data
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
