import React from "react";
import InstructorCard from "./InstructorCard";

const Instructor = ({ data }) => {
  return (
    <div className="bg-secondary pb-20 dark:bg-DarkSecondary">
        <div className="flex px-3 md:px-10 py-20 max-w-[90rem] mx-auto items-center justify-center">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-DarkPrimary dark:text-primary">
            Community Instructor
          </h2>
        </div>
        <div className="flex space-x-10 px-8 md:px-20 overflow-x-scroll">
            {data.teachers.map((item, index) => {
                return (
                    <InstructorCard item={item} key={index} />
                )
            })}
        </div>
    </div>
  );
};

export default Instructor;
