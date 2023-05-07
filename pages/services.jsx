import Image from "next/image";
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const services = () => {
  const { t } = useTranslation()

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
                  {t('srTitleP')}
                </p>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-3xl font-bold">{t('srTitleP')}</h1>
      </section>

      <div className=" container mx-auto text-center flex flex-col gap-4 mb-[100px]">
        <h1 className="text-3xl font-bold">{t('RoadMapTitleP')}</h1>
        <p>{t('RoadMapSubtitle')}</p>
      </div>

      {/* roadmap illustration start */}
      <section className="relative mx-auto  w-full h-auto">
        <img
          src="roadmap-desktop.svg"
          className="hidden md:block"
          width="100%"
          height="100%"
        />
        <img
          src="roadmap-mobile.svg"
          className="md:hidden"
          width="100%"
          height="100%"
        />
      </section>
      {/* roadmap illustration end */}

      <div className=" container mx-auto text-center flex flex-col gap-4 mt-[100px]">
        <h1 className="text-3xl font-bold">Services</h1>
        <p>{t('srSubtitle')}</p>
      </div>

{/* full width card one */}
      <section className=" container mx-auto flex flex-col-reverse md:flex-row text-whiteloan my-[50px] ">
        <div className="flex flex-col justify-center flex-1">
          <h1 className="text-3xl">{t('srCard1Title')}</h1>
          <p className="text-sm" >{t('srCard1Content')}</p>
          <Link href='/requestdemo' >
          <button
            type="button"
            className="border-none stroke-white flex items-center justify-center gap-2 mt-[20px] mb-[50px] hover:text-blueloan hover:stroke-blueloan "
          >
            {t('moreAboutUsBtn')}
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
        <div className=" relative flex-1 w-full justify-center items-center">
          <img src="/ethereum.svg" width="100%" height="100%" className="px-6" />
        </div>
      </section>


      {/* full width card two */}
      <section className=" container mx-auto flex flex-col-reverse md:flex-row text-whiteloan my-[50px]">
        <div className="flex flex-col justify-center flex-1">
          <h1 className="text-3xl">{t('srCard2Title')}</h1>
          <p className="text-sm">{t('srCard2Content')}</p>
          <Link href='/requestdemo' >
          <button
            type="button"
            className="border-none stroke-white flex items-center justify-center gap-2 mt-[20px] mb-[100px] hover:text-blueloan hover:stroke-blueloan "
          >
            {t('moreAboutUsBtn')}
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
        <div className=" relative flex-1 w-full justify-center items-center">
          <img src="/stake-box.svg" width="100%" height="100%" className="px-6" />
        </div>
      </section>
    </section>
  );
};

export default services;
