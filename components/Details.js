import React, { useState } from "react";

const Details = ({ data }) => {

  return (
    <div className="px-3 md:px-10 py-14 md:py-28 lg:max-h-screen max-w-[90rem] mx-auto">
      <div className="flex items-center justify-center">
        <h2 className="text-[24px] md:text-[32px] font-semibold text-DarkPrimary dark:text-primary">
          What Is {data.name}?
        </h2>
      </div>
      <div className="grid grid-cols-1 my-24 lg:grid-cols-2 gap-16">
        {data.about.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-row space-x-5 px-1 lg:px-10"
            >
              <div style={{
                backgroundColor: item.color,
              }} className={`h-10 w-10 my-1 rounded-md`} />
              <div className="flex flex-col space-y-2">
                <p className="text-DarkPrimary dark:text-primary font-semibold text-lg md:text-2xl">
                  {item.title}
                </p>
                <p className="text-DarkSecondary/80 dark:text-secondary/80 font-medium text-base max-w-[280px] md:max-w-[337px]">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
