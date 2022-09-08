import React from "react";
import CommunitieCard from "./CommunitieCard";

const Communities = ({ data }) => {
  return (
    <div className="bg-primary pb-16 dark:bg-DarkPrimary">
      <div className="flex px-3 md:px-10 py-20 max-w-[90rem] mx-auto items-center justify-center">
        <h2 className="text-[24px] md:text-[32px] font-semibold text-DarkPrimary dark:text-primary">
        Communities
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto max-w-xs md:max-w-[40rem] lg:max-w-[60rem] xl:max-w-[80rem] gap-10 px-8">
        {data.communities.map((item, index) => {
            return (
                <CommunitieCard item={item} key={index} />
            );
        })}
      </div>
    </div>
  );
};

export default Communities;
