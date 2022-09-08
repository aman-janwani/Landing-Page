import React from "react";
import FAQComponent from "./FAQComponent";

const FAQs = ({data}) => {
  return (
    <div className="bg-primary pb-16 dark:bg-DarkPrimary px-3 md:px-32 max-w-[30rem] md:max-w-[90rem] mx-auto">
      <div className="flex px-3 md:px-10 py-20 items-center justify-center">
        <h2 className="text-[24px] md:text-[32px] font-semibold text-DarkPrimary dark:text-primary">
        Frequently Asked Questions
        </h2>
      </div>
      <div>
        {/* FAQs */}
        {data.FAQs.map((faq, index) => {
            return (
                <FAQComponent faq={faq} index={index} key={index} />
            )
        })}
      </div>
    </div>
  );
};

export default FAQs;
