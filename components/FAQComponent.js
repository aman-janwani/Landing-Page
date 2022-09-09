import React, { useState } from "react";

const FAQComponent = ({ faq, index }) => {
  const [show, setShow] = useState(false);
  return (
    <div  className={`${show ? ("h-32") : ("h-14")} overflow-y-hidden duration-700 my-5`}>
      <div className="flex justify-between items-center h-14">
        <div className="flex items-start text-DarkPrimary dark:text-primary space-x-3 text-sm sm:text-base md:text-lg font-semibold">
          <span>{index + 1}. </span>
          <h2 className="">{faq.question}</h2>
        </div>
        <div>
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              onClick={() => {
                setShow(!show);
              }}
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 cursor-pointer p-2 rounded-full hover:bg-secondary/40 dark:hover:bg-DarkSecondary/40 text-DarkPrimary dark:text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              onClick={() => {
                setShow(!show);
              }}
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 cursor-pointer p-2 rounded-full hover:bg-secondary/40 dark:hover:bg-DarkSecondary/40 text-DarkPrimary dark:text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>
      </div>
      <p className="text-xs md:text-sm font-normal px-7 text-DarkSecondary dark:text-secondary">
        {faq.answer}
      </p>
    </div>
  );
};

export default FAQComponent;
