import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = ({ data }) => {
  return (
    <div className="bg-primary pb-16 dark:bg-DarkPrimary">
      <div className="flex px-3 md:px-10 py-20 max-w-[90rem] mx-auto items-center justify-center">
        <h2 className="text-[24px] md:text-[32px] font-semibold text-DarkPrimary dark:text-primary">
        Testimonials
        </h2>
      </div>
      {/* Testimonial Cards */}
      <div className="flex space-x-24 px-8 md:px-20 overflow-x-scroll">
      {data.testimonials.map((item, index) => {
            return (
                <TestimonialCard item={item} key={index} />
            )
      })}
      </div>
    </div>
  );
};

export default Testimonials;
