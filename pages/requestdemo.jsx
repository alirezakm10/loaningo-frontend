import { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from 'next/link'
import { useAxios } from "@/hooks/useAxios";
import { useTranslation } from ''


const requestdemo = () => {
  const {data, isLoading, isError, requestDemo} = useAxios()
  const formik = useFormik({
    initialValues: {
      email:"",
      first_name:"",
      last_name:"",
      occupation:"",
       terms: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address.').required('Emaill is required.'),
      first_name: Yup.string().required('First name is required'),
      last_name: Yup.string().required('Last name is required'),
      occupation: Yup.string().required('occupation name is required'),
      terms: Yup.array().required("Terms of service must be checked! "),
    }),
    onSubmit: (values) => {
      requestDemo(process.env.requestdemo,values)
    }
  })
  return (

      <section className=" container mx-auto py-[100px] flex flex-col gap-9 justify-center items-center md:flex-row text-whiteloan">
        <div className="flex flex-col gap-2 px-6 flex-1">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blueloan dark:text-gray-400 dark:hover:text-white"
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
                </Link>
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
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blueloan md:ml-2 dark:text-gray-400 dark:hover:text-white"
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
          <div className="flex gap-7" >
          <Link href='/aboutus' >
          <button
            type="submit"
            className="border-none cursor-pointer stroke-white flex items-center justify-center gap-2 mt-[20px] mb-[50px] hover:text-blueloan hover:stroke-blueloan "
          >
            Learn More
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
          </Link>
          <Link href='/services' >
          <button
            type="button"
            className="border-none stroke-white flex items-center justify-center gap-2 mt-[20px] mb-[50px] hover:text-blueloan hover:stroke-blueloan "
          >
            Our Services
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
          </Link>
          </div>
        </div>

        {/* form */}
        <div className=" relative flex-1 w-full justify-center items-center">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 ">
            <div className="flex flex-col items-start">
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing .
              </p>
            </div>
            <input
              id="email"
              type="email"
              name="email"
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
                    ${formik.touched.email && formik.errors.email && 'border-red-500'}
                  `}
              placeholder="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <div className="flex gap-2">
              <input
                id="first_name"
                type="text"
                name="first_name"
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
                    ${formik.touched.first_name && formik.errors.first_name && 'border-red-500'}
                  `}
                placeholder="First Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                id="last_name"
                type="text"
                name="last_name"
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
                  ${formik.touched.last_name && formik.errors.last_name && 'border-red-500'}
                `}
                placeholder="Last Name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <input
              id="occupation"
              type="text"
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
                    ${formik.touched.occupation && formik.errors.occupation && 'border-red-500'}
                  `}
              placeholder="Occupation"
              value={formik.values.occupation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {/* lets create temrs and service */}
            <div className="flex gap-2 px-1">
              <input
                type="checkbox"
                name="terms"
                value="checked"
                className="accent-black"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className={`${formik.touched.terms && formik.errors.terms && 'text-red-500'}`}>I agree with terms & condition</p>
            </div>

            <button type="submit" className="neonBtn w-[162px] mx-auto">
              Submit Form
            </button>
          </form>
        </div>
      </section>

  );
};

export default requestdemo;
