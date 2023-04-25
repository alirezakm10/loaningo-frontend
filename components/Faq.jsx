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
    <section className="relative container  my-[100px] py-4 z-[1]">
<section className="flex flex-col h-auto gap-2 relative overflow-hidden items-center">
        {/* start of faq details */}
        <div className="flex flex-col items-center" >
          <h1 className="text-6xl text-whiteloan font-bold">{faq.title}</h1>
          <p className="text-gray-500 pt-8 pb-4 text-center leading-8">
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
        <div className="">
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
