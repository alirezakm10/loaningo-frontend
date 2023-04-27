import { useFormik } from "formik";
import * as Yup from "yup";

const requestdemo = () => {
  return (
    <section className="flex flex-col text-whiteloan h-auto">
      {/* full width card one */}
      <section className=" container mx-auto flex flex-col md:flex-row text-whiteloan my-9">
        <div className="flex flex-col justify-center px-6 flex-1">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.20833 6.08301C6.40417 6.08301 5.75 6.73717 5.75 7.54217C5.75 8.34634 6.40417 8.99968 7.20833 8.99968C8.0125 8.99968 8.66667 8.34634 8.66667 7.54217C8.66667 6.73717 8.0125 6.08301 7.20833 6.08301ZM7.20833 10.2497C5.715 10.2497 4.5 9.03551 4.5 7.54217C4.5 6.04801 5.715 4.83301 7.20833 4.83301C8.70167 4.83301 9.91667 6.04801 9.91667 7.54217C9.91667 9.03551 8.70167 10.2497 7.20833 10.2497Z"
                      fill="#BDBDBD"
                    />
                    <mask
                      id="mask0_93_4199"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="15"
                      height="17"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.333008 0.666504H14.0826V16.9165H0.333008V0.666504Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_93_4199)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.20801 1.9165C4.10634 1.9165 1.58301 4.464 1.58301 7.594C1.58301 11.5765 6.26967 15.4565 7.20801 15.6632C8.14634 15.4557 12.833 11.5757 12.833 7.594C12.833 4.464 10.3097 1.9165 7.20801 1.9165ZM7.20801 16.9165C5.71301 16.9165 0.333008 12.2898 0.333008 7.594C0.333008 3.774 3.41717 0.666504 7.20801 0.666504C10.9988 0.666504 14.083 3.774 14.083 7.594C14.083 12.2898 8.70301 16.9165 7.20801 16.9165Z"
                        fill="#BDBDBD"
                      />
                    </g>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <a
                    href="#"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Request demo
                  </a>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl">Request Demo</h1>
          <p>
            If you're a sales or marketing professional, you might be searching
            for an effective tool to collect demo requests from your leads and
            website visitors. We might be a bit biased, but we believe that
            Paperform might be a perfect solution. Want to know why? Check out
            the form template
          </p>
        </div>

        {/* form */}
        <div className=" relative flex-1 w-full justify-center items-center">
          <form className="flex flex-col gap-3">
            <div className="flex flex-col items-start">
              <p className="text-sm py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing .
              </p>
            </div>
            <input
              id="name"
              type="name"
              name="name"
              className={`text-[14px] placeholder-gray-500
              bg-middarkloan
                pl-3
                    rounded-[6px]
                    border border-[#212C2E]
                    w-full
                    h-[40px]
                    py-2
                    focus:outline-none focus:border-blueloan
                    card-hover
                  `}
              placeholder="Your Name"
            />

<div className="flex gap-2" >
<input
              id="firstname"
              type="firstname"
              name="firstname"
              className={`text-[14px] placeholder-gray-500
              bg-middarkloan
                    pl-3
                    rounded-[6px]
                    border border-[#212C2E]
                    w-full
                    h-[40px]
                    py-2
                    focus:outline-none focus:border-blueloan
                    card-hover
                  `}
              placeholder="First Name"
            />  <input
            id="lastname"
            type="lastname"
            name="lastname"
            className={`text-[14px] placeholder-gray-500
            bg-middarkloan
                  pl-3
                  rounded-[6px]
                  border border-[#212C2E]
                  w-full
                  h-[40px]
                  py-2
                  focus:outline-none focus:border-blueloan
                  card-hover
                `}
            placeholder="Last Name"
          />
</div>

            <input
              id="occupation"
              type="occupation"
              name="occupation"
              className={`text-[14px] placeholder-gray-500
              bg-middarkloan
                    pl-3
                    rounded-[6px]
                    border border-[#212C2E]
                    w-full
                    h-[40px]
                    py-2
                    focus:outline-none focus:border-blueloan
                    card-hover
                  `}
              placeholder="Occupation"
            />

{/* lets create temrs and service */}
<div className="flex gap-2 px-1" >
  <input 
  type="checkbox"
  name="terms"
  value="checked"
  className="accent-black"
  />
  <p>I agree with terms & condition</p>
</div>



            <button type="submit" className="neonBtn w-[162px] mx-auto">
              Submit Form
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default requestdemo;
