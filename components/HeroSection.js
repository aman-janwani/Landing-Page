// import Image from "next/image";
// import React from "react";

// const HeroSection = ({ data }) => {
//   const NewSlogan = data.slogan.split(" ").slice(0, 8);
//   console.log(NewSlogan);
//   return (
//     <div className="px-3 md:px-10 flex flex-col lg:flex-row items-center justify-center py-20">
//       <div className="flex flex-col justify-center">
//         <div>
//           <p className="flex flex-col items-center space-y-5 mb-16 font-extrabold uppercase text-7xl">
//             <span className="glowing-text1">{NewSlogan[0]} {NewSlogan[1]} {NewSlogan[2]}</span>
//             <span className="glowing-text2">{NewSlogan[3]}</span>
//             <span className="glowing-text3">{NewSlogan[4]} {NewSlogan[5]} {NewSlogan[6]} {NewSlogan[7]}</span>
//           </p>
//         </div>
//         <button className="border-2 border-[#8900F2] hover:border-primary dark:hover:border-DarkPrimary hover:bg-gradient-to-r from-[#F20089] to-[#8900F2] px-16 py-3 shadow-2xl drop-shadow-[0px_0px_10px_#8900F2] hover:drop-shadow-[0px_0px_0px] bg-primary dark:bg-DarkPrimary duration-300 rounded-lg font-medium text-DarkPrimary hover:text-primary dark:text-primary max-w-[14rem] mx-auto">
//           Join Now
//         </button>
//       </div>
//       {/* <div>
//         <Image src={data.heroImage} alt="hero" width={500} height={500} />
//       </div> */}
//     </div>
//   );
// };

// export default HeroSection;

import Image from "next/image";
import React from "react";

const HeroSection = ({ data }) => {
  const NewSlogan = data.slogan.split(" ").slice(0, 8);
  console.log(NewSlogan);
  return (
    <div className="px-3 md:px-10 flex flex-col lg:flex-row items-center justify-evenly max-w-[90rem] mx-auto py-20 lg:py-12">
      <div className="flex flex-col justify-center">
        <div className="mb-16">
          <p className="flex flex-col max-w-[50vw] text-center tracking-wide items-center glowing-text3 font-extrabold uppercase text-[1.7rem] md:text-6xl font-['Oswald']">
          <span className="leading-[5rem]">
          {data.slogan}
          </span>
          </p>
        </div>
        <button className="border-2 border-[#8900F2] px-16 py-3 shadow-2xl drop-shadow-[0px_0px_10px_#8900F2] bg-primary dark:bg-DarkPrimary duration-700 rounded-lg font-medium text-DarkPrimary dark:text-primary max-w-[14rem] mx-auto scale-95 hover:scale-110">
          Join Now
        </button>
      </div>
      <div className="py-10 lg:py-0">
        <Image src={data.heroImage} alt="hero" width={500} height={500} />
      </div>
    </div>
  );
};

export default HeroSection;
