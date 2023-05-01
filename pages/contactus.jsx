import Link from "next/link";
import { useAxios } from '@/hooks/useAxios'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from 'react-i18next'

const contactus = () => {
  const { t } = useTranslation()
  const  { isLoading,postData } = useAxios()

  const formik = useFormik({
    initialValues: {
      email:"",
      name:"",
      description:""
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address.').required('Emaill is required.'),
      name: Yup.string().required('First name is required'),
      description: Yup.string().required('Description is required!')
    }),
    onSubmit: (values) => {
      postData(process.env.contactus,values)
    }
  })


  return (
    <section className="flex flex-col text-whiteloan h-auto">
      {/* this is blured header container */}
      <section className="blured-headpage">
        <nav className="flex justify-center" aria-label="Breadcrumb">
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
                {t('home')}
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
                <p
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-blueloan md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  {t('cuTitleP')}
                </p>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-[52px]">{t('cuTitleP')}</h1>
      </section>

      {/* contact form */}
      {/* full width card one */}
      <section className=" container md:w-[80%] mx-auto flex flex-col md:flex-row text-whiteloan my-[100px] ">
        <div className="flex flex-col justify-center w-full">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col items-start">
              <p className="text-sm py-3">{t('cuSubtitlep')}</p>
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
                    ${formik.touched.name && formik.errors.name && 'border-red-500'}
                  `}
              placeholder={t('cuNamePlaceholder')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
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
              placeholder={t('cuEmailPlaceholder')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <textarea
              className={`text-[14px] placeholder-gray-500
              bg-middarkloan
                    pl-3
                    rounded-[6px]
                    border border-[#212C2E]
                    w-full
                   
                    py-2
                    focus:outline-none focus:border-blueloan
                    card-hover
                    ${formik.touched.description && formik.errors.description && 'border-red-500'}
                  `}
              name="description"
              id="description"
              cols="30"
              rows="10"
              placeholder={t('cuDescPlaceholder')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            <button type="submit" className={`neonBtn w-[162px] mx-auto disabled:bg-gray-400 ${isLoading && 'isLoading'} `} disabled={isLoading} >
              {t('cuSubmitBtn')}
            </button>
          </form>
        </div>
        <div className=" relative hidden md:block  px-[100px] justify-center items-center">
          <h1 className=" text-2xl text-whiteloan font-bold">Contact Us</h1>
          <div className="mb-6">
            <p>{t('emailText')}</p>
            <a href="mailto:info@loaningo.com">{t('emailAddress')}</a>
          </div>
          <div>
            <p>{t('phoneText')}</p>
            <a href="tel:">{t('phoneNumber')}</a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default contactus;
