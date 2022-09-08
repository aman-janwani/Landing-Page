import Image from "next/image";
import React from "react";

const LiveFeed = ({ data }) => {
  return (
    <div className="pb-16">
      <div className="flex px-3 md:px-10 py-16 max-w-[90rem] mx-auto items-center justify-center">
        <h2 className="text-[24px] md:text-[32px] font-semibold text-DarkPrimary dark:text-primary">
          Live Feed
        </h2>
      </div>
      <div className="relative w-[22rem] md:w-[35rem] lg:w-[55rem] xl:w-[75rem] h-[20rem] md:h-[30rem] lg:h-[40rem] mx-auto">
        <Image
          src={data.liveFeedLink}
          layout="fill"
          objectFit="fill"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default LiveFeed;
