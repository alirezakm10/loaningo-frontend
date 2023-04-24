import React, {useState} from 'react'





const AccordionItem = ({question, answer}) => {
  const minusIcon = '-'
const plusIcon = '+'
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded((current) => !current)
  return (
    <div className=" my-4 md:my-6 shadow-sm cursor-pointer rounded-lg bg-white " onClick={toggleExpanded}>
    <div className="px-6 text-left flex justify-between items-center h-20 select-none ">
      <h5 className="flex-2 w-full md:w-full">
        {question}
      </h5>
      <div>{expanded ? 
      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.5039 16.4473C23.447 16.4473 23.5039 16.4473 23.5039 16.4473H11.4958C10.9267 16.4473 10.5283 16.9025 10.5283 17.4717C10.5283 18.0408 10.9836 18.4391 11.5527 18.4391H23.5608C24.1299 18.4391 24.5283 17.9838 24.5283 17.4147C24.4714 16.9025 24.0161 16.4473 23.5039 16.4473Z" fill="#05697E"/>
      <path d="M17.4715 0C7.79675 0 0 7.79675 0 17.4715C0 27.1463 7.79675 35 17.4715 35C27.1463 35 35 27.1463 35 17.4715C35 7.79675 27.1463 0 17.4715 0ZM17.4715 33.0081C8.93496 33.0081 1.99187 26.0081 1.99187 17.4715C1.99187 8.93496 8.93496 1.99187 17.4715 1.99187C26.0081 1.99187 33.0081 8.93496 33.0081 17.4715C33.0081 26.0081 26.0081 33.0081 17.4715 33.0081Z" fill="#05697E"/>
      </svg>
      
      : 
      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_70_671)">
      <path d="M23.2972 16.5156H18.4847V11.7031C18.4847 11.1562 18.0472 10.7734 17.5003 10.7734C16.9534 10.7734 16.5706 11.2109 16.5706 11.7578V16.5703H11.7581C11.2112 16.5703 10.8284 17.0078 10.8284 17.5547C10.8284 18.1016 11.2659 18.4844 11.8128 18.4844H16.6253V23.2969C16.6253 23.8438 17.0628 24.2266 17.6097 24.2266C18.1566 24.2266 18.5394 23.7891 18.5394 23.2422V18.4297H23.3519C23.8987 18.4297 24.2816 17.9922 24.2816 17.4453C24.2269 16.9531 23.7894 16.5156 23.2972 16.5156Z" fill="#05697E"/>
      <path d="M17.5003 0.710938C8.20343 0.710938 0.711243 8.20312 0.711243 17.5C0.711243 26.7969 8.20343 34.3438 17.5003 34.3438C26.7972 34.3438 34.3441 26.7969 34.3441 17.5C34.3441 8.20312 26.7972 0.710938 17.5003 0.710938ZM17.5003 32.4297C9.29718 32.4297 2.62531 25.7031 2.62531 17.5C2.62531 9.29688 9.29718 2.625 17.5003 2.625C25.7034 2.625 32.43 9.29688 32.43 17.5C32.43 25.7031 25.7034 32.4297 17.5003 32.4297Z" fill="#05697E"/>
      </g>
      <defs>
      <clipPath id="clip0_70_671">
      <rect width="35" height="35" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      
      }</div>
    </div>
    <div className={`px-6 break-all pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${expanded ? "max-h-auto" : "max-h-0"}`}>
      <p className="pb-4 text-left text-gray-500 leading-8 ">
        {answer}
      </p>
    </div>
  </div>
  )
}

export default AccordionItem