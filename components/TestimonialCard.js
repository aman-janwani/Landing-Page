import Image from "next/image";
import React from "react";

const TestimonialCard = ({ item }) => {
  return (
    <div className="bg-secondary dark:bg-DarkSecondary mt-14 md:flex relative min-w-[320px] max-w-[320px] min-h-[210px] max-h-[210px] rounded-2xl cursor-pointer scale-90 hover:scale-100 duration-700">
      <div className="absolute top-0 -mr-16 -mt-8 left-0 h-32">
        <Image
          src={item.image}
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      <div className=" flex flex-col justify-evenly py-5 space-y-5 lg:space-y-0 lg:py-0 items-end rounded-2xl px-7">
        <div className="px-8 mx-auto max-w-[15rem]">
          <h2 className="text-lg font-semibold text-DarkPrimary dark:text-primary">{item.name}</h2>
          <p className="text-sm font-semibold text-DarkSecondary dark:text-secondary">{item.position}</p>
        </div>
        <div className="static">
          <p className="text-sm font-medium line-clamp-5 tracking-wide text-DarkSecondary dark:text-secondary">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
