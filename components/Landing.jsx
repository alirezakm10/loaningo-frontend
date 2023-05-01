import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const Landing = () => {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col items-center text-[14px]">


      {/* mission Segment start */}
      <section className=" container flex flex-col text-center text-whiteloan my-[60px]">
        <div className="flex flex-col gap-4 mb-[100px]">
          <h1 className="text-3xl font-bold">
           {t('missionTitle')}
          </h1>
          <p>
           {t('missionSubTitle')}
          </p>
        </div>
        {/* card container */}
        <div className="flex flex-col md:flex-row gap-[70px]">
          <div className='flex-1' >
            <h1 >{t('missionCard1')}</h1>
            <p>{t('missionCard1body')}</p>
          </div>
          <div className='flex-1'>
            <h1>{t('missionCard2')}</h1>
            <p>{t('missionCard2body')}</p>
          </div>
          <div className='flex-1'>
            <h1>{t('missionCard3')}</h1>
            <p>{t('missionCard3body')}</p>
          </div>
        </div>
      </section>
      {/* mission Segment end */}



      {/* how it works start*/}
      {/* below is whole container for css techniques */}
      <section className="relative flex flex-col items-center">
        {/* this section is line illustration container with absolute pos */}
        <section className="absolute top-[470px] md:top-[450px] lg:top-[410px]">
          <svg
            width="1920"
            height="136"
            viewBox="0 0 1920 136"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M-23 134C711.463 -42.1906 1141.64 -41.809 1943 134"
              stroke="#E9EBEC"
              strokeWidth="3"
              strokeDasharray="8 13"
            />
          </svg>
        </section>

        <section className=" container flex flex-col text-center text-whiteloan my-[100px]">
          <div className="flex flex-col gap-4 my-8 mb-[100px]">
            <h1 className="text-3xl text-whiteloan font-bold">{t('hiwTitle')}</h1>
            <p>{t('hiwSubtitle')}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-[60px]">
            <div className="flex flex-col gap-6 relative md:top-[30px] flex-1">
              <div className="under-neon-circle">
                <span className="neon-circle">{t('hiwNumOne')}</span>
              </div>
              <h1 className="my-0">{t('hiwTitleOne')}</h1>
              <p>{t('hiwContentOne')}</p>
            </div>
            <div className="flex flex-col gap-6 flex-1">
              <div className="under-neon-circle">
                <span className="neon-circle">{t('hiwNumTwo')}</span>
              </div>
              <h1 className="my-0">{t('hiwTitleTwo')}</h1>
              <p>{t('hiwContentTwo')}</p>
            </div>
            <div className="flex flex-col gap-6 relative md:top-[30px] flex-1">
              <div className="under-neon-circle">
                <span className="neon-circle">{t('hiwNumThree')}</span>
              </div>
              <h1 className="my-0">{t('hiwTitleThree')}</h1>
              <p>{t('hiwContentThree')}</p>
            </div>
          </div>
        </section>
      </section>
     {/* how it works end */}

      {/* why should choose us start */}
      <section className="container flex flex-col md:flex-row w-full text-whiteloan my-[100px]">
        <div className="flex flex-col justify-center flex-1">
          <p className="text-blueloan text-lg">{t('advSuptitle')}</p>
          <h1 className=" text-3xl my-2">{t('advTitle')}</h1>
          <p className="  my-2 md:w-[90%]">{t('advContent')}</p>
        </div>
        <div className="flex w-full flex-col flex-1 justify-center items-center gap-[40px] py-[60px] rounded-[10px] bg-dimdarkloan">
          {/* card start */}
          <section className="flex gap-7 items-center w-[90%] md:w-[60%]">
            <div className="flex justify-center items-center bg-dimdarkloan rounded-full w-[50px] h-[50px] dark-icon-container" >
            <Image src='/icons/shield.svg' priority width='30' height='30'  />
            </div>
            <div className="flex flex-col" >
                <h1 className="text-lg my-0">{t('advCard1title')}</h1>
                <p className="text-[12px]" >{t('advCard1body')}</p>
            </div>
          </section>
          {/* card end */}
          <section className="flex items-center gap-7  w-[90%] md:w-[60%]">
            <i className="flex justify-center items-center bg-dimdarkloan rounded-full w-[50px] h-[50px] dark-icon-container " >
                <Image src='/icons/speed.svg' responsive='true' width='30' height='30'  />
            </i>
            <div className="flex flex-col" >
                <h1 className="text-lg my-0">{t('advCard2title')}</h1>
                <p className="text-[12px]" >{t('advCard2body')}</p>
            </div>
          </section>
          <section className="flex gap-7 items-center w-[90%] md:w-[60%]">
            <i className="flex justify-center items-center bg-dimdarkloan rounded-full w-[50px] h-[50px] dark-icon-container " >
            <Image src='/icons/statistics.svg' responsive='true' width='30' height='30'  />
            </i>
            <div className="flex flex-col" >
                <h1 className="text-lg my-0">{t('advCard3title')}</h1>
                <p className="text-[12px]" >{t('advCard3body')}</p>
            </div>
          </section>
          <section className="flex gap-7 items-center w-[90%] md:w-[60%]">
            <i className="flex justify-center items-center bg-dimdarkloan rounded-full w-[50px] h-[50px] dark-icon-container " >
            <Image src='/icons/paper.svg' responsive='true' width='30' height='30'  />
            </i>
            <div className="flex flex-col" >
                <h1 className="text-lg my-0">{t('advCard4title')}</h1>
                <p className="text-[12px]" >{t('advCard4body')}</p>
            </div>
          </section>
        </div>
      </section>
      {/* why should choose us end */}


      {/* Service summary start */}
      <section className=" container flex flex-col text-center text-whiteloan">
        <div className="flex flex-col gap-4 my-8 mb-[100px]">
          <h1 className="text-4xl text-whiteloan font-bold">{t('serviceTitle')}</h1>
          <p>{t('serviceSubtitle')}</p>
        </div>

        <div className='flex flex-col md:flex-row gap-[40px]' >
            {/* card start */}
            <div className='h-[160px] p-3 gap-5 flex items-center flex1 bg-dimdarkloan rounded-[10px] text-whiteloan card-hover' >
            <Image src='/icons/loan.svg' priority width='50' height='50'  />
            <div className='flex flex-col text-left'>
                <h1 className='text-lg font-bold my-0' >{t('serviceCardOneTitle')}</h1>
                <p className='text-[12px]' >{t('serviceCardOneContent')}</p>
            </div>
            </div>
            {/* card end */}
            <div className='h-[160px] p-3 gap-5 flex items-center flex1 bg-dimdarkloan rounded-[10px] text-whiteloan card-hover ' >
            <Image src='/icons/stake.svg' priority width='50' height='50'  />
            <div className='flex flex-col text-left ' >
                <h1 className='text-lg font-bold my-0' >{t('serviceCardTwoTitle')}</h1>
                <p className='text-[12px]' >{t('serviceCardTwoContent')}</p>
            </div>
            </div>
        </div>
    <Link href='/services' >
        <button className=" baseBtn mt-[45px] h-[45px] px-5   border border-white rounded-[4px] mx-auto" >{t('servcieBtn')}</button>
    </Link>
        </section>
      {/* Service summary end */}

      {/* how it works end */}
    </section>
  );
};

export default Landing;
