import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";
import { initialData } from "@/initialData";
import { useRouter } from 'next/router'

const Faq = () => {
  const router = useRouter()
  const [faqPage, setFaqPage] = useState(false)
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(true);
  };
  const { faq } = initialData;

  useEffect(() => {
    if(router.pathname.includes('/faq')){
        setFaqPage(true)
    }
  },[])

  return (
    <section className={`relative container  text-whiteloan ${faqPage ? 'mt-[20px]':'my-[100px] py-4'} z-[1]`}>
      { faqPage && 
      <nav className="flex justify-center mb-[50px]" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
          <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.20833 6.08301C6.40417 6.08301 5.75 6.73717 5.75 7.54217C5.75 8.34634 6.40417 8.99968 7.20833 8.99968C8.0125 8.99968 8.66667 8.34634 8.66667 7.54217C8.66667 6.73717 8.0125 6.08301 7.20833 6.08301ZM7.20833 10.2497C5.715 10.2497 4.5 9.03551 4.5 7.54217C4.5 6.04801 5.715 4.83301 7.20833 4.83301C8.70167 4.83301 9.91667 6.04801 9.91667 7.54217C9.91667 9.03551 8.70167 10.2497 7.20833 10.2497Z" fill="#BDBDBD"/>
<mask id="mask0_93_4199" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="17">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.333008 0.666504H14.0826V16.9165H0.333008V0.666504Z" fill="white"/>
</mask>
<g mask="url(#mask0_93_4199)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.20801 1.9165C4.10634 1.9165 1.58301 4.464 1.58301 7.594C1.58301 11.5765 6.26967 15.4565 7.20801 15.6632C8.14634 15.4557 12.833 11.5757 12.833 7.594C12.833 4.464 10.3097 1.9165 7.20801 1.9165ZM7.20801 16.9165C5.71301 16.9165 0.333008 12.2898 0.333008 7.594C0.333008 3.774 3.41717 0.666504 7.20801 0.666504C10.9988 0.666504 14.083 3.774 14.083 7.594C14.083 12.2898 8.70301 16.9165 7.20801 16.9165Z" fill="#BDBDBD"/>
</g>
</svg>
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">FAQ</a>
          </div>
        </li>
        {/* <li aria-current="page">
          <div className="flex items-center">
            <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
          </div>
        </li> */}
      </ol>
    </nav>
      }
      <section className="flex flex-col h-auto gap-2 relative overflow-hidden items-center">
        {/* start of faq details */}
        <div className="flex flex-col items-center mb-[60px]">
          <h1 className="text-6xl font-bold">{faq.title}</h1>
          <p className="text-gray-500 pt-8 pb-4 text-center leading-8">
            {faq.content}
          </p>
          {/* below div is search input div */}
          { faqPage &&  
          <div className="relative w-[90%] md:w-[60%] mt-[60px]">
            <div
              className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-whiteloan
                  "
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_93_4218"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.330078 0.330566H15.2332V15.2338H0.330078V0.330566Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_93_4218)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.7823 1.47832C4.30612 1.47832 1.47804 4.30563 1.47804 7.78181C1.47804 11.258 4.30612 14.0861 7.7823 14.0861C11.2577 14.0861 14.0858 11.258 14.0858 7.78181C14.0858 4.30563 11.2577 1.47832 7.7823 1.47832ZM7.7821 15.2338C3.67312 15.2338 0.330078 11.8908 0.330078 7.78182C0.330078 3.67284 3.67312 0.330566 7.7821 0.330566C11.8911 0.330566 15.2333 3.67284 15.2333 7.78182C15.2333 11.8908 11.8911 15.2338 7.7821 15.2338Z"
                    fill="#AFAFAF"
                  />
                </g>
                <mask
                  id="mask1_93_4218"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="12"
                  y="12"
                  width="5"
                  height="5"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.3662 12.7559H16.5529V16.9348H12.3662V12.7559Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask1_93_4218)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9281 16.9348C15.7689 16.9348 15.6089 16.874 15.4864 16.7523L12.5498 13.824C12.3056 13.5798 12.3048 13.184 12.5489 12.9398C12.7923 12.694 13.1881 12.6957 13.4331 12.9382L16.3698 15.8673C16.6139 16.1115 16.6148 16.5065 16.3706 16.7507C16.2489 16.874 16.0881 16.9348 15.9281 16.9348Z"
                    fill="#AFAFAF"
                  />
                </g>
              </svg>
            </div>
            <input
              id="email"
              type="email"
              name="email"
              className={`text-[14px] placeholder-gray-500
              bg-middarkloan
                    pl-10
                    pr-4
                    rounded-[6px]
                    border border-[#212C2E]
                    w-full
                    h-[40px]
                    py-2
                    focus:outline-none focus:border-blueloan
                    card-hover
                  `}
                  placeholder="Search .."
            />
          </div>}
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
        <p className="text-lg">Don’t find your answer ?</p>
        <button className="mt-[25px] h-[45px] px-3   border border-white rounded-[4px] mx-auto">
          See All Questions
        </button>
      </section>
    </section>
  );
};

export default Faq;
