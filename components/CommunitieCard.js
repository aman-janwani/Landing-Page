import Image from "next/image";
import Link from "next/link";
import React from "react";

const CommunitieCard = ({ item }) => {
  return (
    <div className="bg-secondary/30 dark:bg-DarkTertiary rounded-xl min-h-[343px] max-h-[343px] min-w-[255px] max-w-[255px] flex flex-col items-center justify-between scale-95 hover:scale-110 duration-700">
      <div>
        <Image src={item.image} width={255} height={145} objectFit="cover" className="rounded-t-xl" />
      </div>
      <div className="px-2">
        <h2 className="text-lg text-center font-semibold text-DarkPrimary dark:text-primary">{item.name}</h2>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-DarkPrimary line-clamp-3 dark:text-primary">{item.description}</p>
      </div>
      <div className="w-full">
        <Link href={item.link}>
          <button className="bg-[#07C8F91F]/10 hover:bg-[#07C8F91F]/20 duration-500 rounded-b-xl w-full h-[53px] text-[15px] font-semibold text-[#07C8F9]">Join Now</button>
        </Link>
      </div>
    </div>
  );
};

export default CommunitieCard;
