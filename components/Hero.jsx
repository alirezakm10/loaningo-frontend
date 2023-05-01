import React from "react";
import { initialData } from "@/initialData";
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()
  const { hero } = initialData
  
  return (
    <div className="flex flex-col w-full relative overflow-hidden">  
       {/* place of dotted illustration */}

       <div className="hero-illustration" ></div>
  

      <div className="container mx-auto" >
      <section className="flex flex-col justify-center items-center gap-5 relative text-whiteloan py-[100px]">      
      <h1 className="text-4xl md:text-[52px] font-bold my-0 ">
      {t('heroHeaderTitle')}
      </h1>
      <h1 className="text-3xl md:text-[48px] font-bold my-0 ">
      {t('heroHeaderBreakTitle')}
      </h1>
        <p className="text-gray-500 text-center py-4 lg:w-1/2">
          {t('heroHeaderContent')}
        </p>
        <div className="flex gap-7">
          <Link href={hero.buttons[0].url} >
          <button
            type="button"
            className="neonBtn"
          >
            {t('requestDemoBtn')}
          </button>
          </Link>
          <Link href='/aboutus' >
          <button
            type="button"
            className="baseBtn"
          >
              {t('learnAboutBtn')}
          </button>
          </Link>
        </div>
      </section>

      {/* second section of hero header */}
      <section className="flex flex-col md:flex-row text-whiteloan ">
        <div className="flex flex-col justify-center flex-1" >
        <p className="text-blueloan" >{t('hero2suptitle')}</p>
        <h1 className=" text-3xl md:text-[52px] my-2 md:my-8" >{t('hero2title')}</h1>
        <p>{t("hero2content")}</p>
        <button className="mt-[45px] mx-auto md:mx-0  w-[178px] baseBtn" >More about us</button>
        </div>
        <div className=" relative flex-1 w-full justify-center items-center">
          <img src='/earth.svg' width="100%" height="100%" className="px-6" />
        </div>
      </section>
      </div>
    </div>
  );
};

export default Hero;
