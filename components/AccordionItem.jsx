import React, {useState} from 'react'





const AccordionItem = ({question, answer}) => {
  const minusIcon = '-'
const plusIcon = '+'
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded((current) => !current)
  return (
    <div className=" my-4 md:my-6 shadow-sm cursor-pointer rounded-lg bg-dimdarkloan " onClick={toggleExpanded}>
    <div className="px-6 text-whiteloan text-[17px] flex justify-between items-center h-20 select-none ">
      <h5 className="flex-2 w-full md:w-full">
        {question}
      </h5>
      <div>{expanded ? 
      <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0H0V2H12V0Z" fill="#2DC8FA"/>
      </svg>
      
      : 
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5H7V0H5V5H0V7H5V12H7V7H12V5Z" fill="#AAA8B1"/>
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