import Image from "next/image";
import React, { useState } from "react";

const About = ({ data }) => {
  const [isHover, setIsHover ] = useState(false);
  return (
    <div className="bg-secondary dark:bg-DarkSecondary">
      <div className="flex flex-col lg:flex-row items-center justify-between px-3 md:px-10 py-10 max-w-[90rem] mx-auto">
        <div className="flex flex-col items-center lg:items-start space-y-14 lg:space-y-28">
          <div className="flex items-center space-x-3">
            <Image src={data.logo} alt="logo" width={70} height={70} />
            <p className="text-xl md:text-3xl text-DarkSecondary dark:text-primary duration-700 font-semibold">
              {data.name}
            </p>
          </div>
          <div className="text-base md:text-xl text-justify max-w-md lg:max-w-2xl tracking-wide text-DarkPrimary dark:text-primary font-semibold">
            {data.description}
          </div>
          <div>
            <button onMouseEnter={()=> {
                setIsHover(true);
            }} onMouseLeave={() => {
                setIsHover(false);
            }} className={`${isHover ? ("animateButton") : ("")} scale-95 hover:scale-100 bg-gradient-to-r from-[#F20089] to-[#8900F2] px-16 py-3 rounded-lg font-medium text-primary duration-700`}>
              Join Now
            </button>
          </div>
        </div>
        <div>
          <Image
            src={data.descriptionImage}
            alt="logo"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
