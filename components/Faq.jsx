import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { initialData } from "@/initialData";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(true);
  };
  const { faq } = initialData
 

  return (
    <section className="relative  my-[100px] py-4 z-[1]">
      {/* top right illustration */}
      <div className="absolute top-[-40px] left-[-61px] ">
        <svg
          width="110"
          height="110"
          viewBox="0 0 110 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1" clipPath="url(#clip0_30_1123)">
            <path
              d="M110 48.6447L110 0L61.1255 -4.27274e-06L61.1255 48.6447L110 48.6447Z"
              fill="#637381"
            />
            <path
              opacity="0.5"
              d="M110 110L110 61.3552L61.1255 61.3552L61.1255 110L110 110Z"
              fill="#637381"
            />
            <path
              d="M48.8744 110L48.8745 61.3552L-1.14441e-05 61.3552L-1.56967e-05 110L48.8744 110Z"
              fill="#637381"
            />
          </g>
          <defs>
            <clipPath id="clip0_30_1123">
              <rect
                width="110"
                height="110"
                fill="white"
                transform="translate(110 110) rotate(-180)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <section className="flex flex-col md:flex-row h-auto gap-2 relative overflow-hidden items-start  ">
        {/* start of faq details */}
        <div className="md:w-1/2">
          <h1 className="text-6xl text-[#1F2D3D] font-bold">{faq.title}</h1>
          <h1 className="text-6xl text-[#1F2D3D] font-bold">{faq.breaktitle}</h1>
          <p className="text-gray-500 pt-8 pb-4 leading-8">
            {faq.content}
          </p>
          <button
            type="button"
            className="flex gap-2 items-center text-darkgot text-[14px] w-[157px] h-[40px] stroke-darkgot hover:stroke-gotimate hover:text-gotimate transition-all rounded-[10px]"
          >
            {faq.buttons[0].title}
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.625 1.125L6 5.5L1.625 9.875"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* end of faq details */}

        {/* start of accordions contariner */}
        <div className="md:w-1/2">
          {faq.accordionData.map((data, index) => {
            return (
              <AccordionItem
                key={index}
                open={index === open}
                toggle={() => toggle(index)}
                question={data.question}
                answer={data.answer}
              />
            );
          })}
        </div>
        {/* end of accordions container */}
      </section>
    </section>
  );
};

export default Faq;
