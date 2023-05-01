import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const Cta = () => {
  const { t } = useTranslation()

  return (
<section className='flex w-full bg-dimdarkloan py-[80px] md:py-9 mt-9 ' >
<section className='container mx-auto flex flex-col md:flex-row gap-9 items-center justify-center text-whiteloan' >
        <div className="flex flex-1 flex-col justify-center">
       <div className='flex items-center gap-5'>
       <p className="text-lg">{t('ctaSuptitle')}</p>
          <svg width="73" height="2" viewBox="0 0 73 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="73" height="2" fill="#F8F8F8"/>
</svg>
       </div>
          <h1 className=" text-3xl my-2">{t('ctaTitle')}</h1>
          <p className="  my-2 md:w-[90%]">{t('ctaSubtitle')}</p>
        </div>
        <div className='flex justify-center flex-1' >
        <div className="flex gap-7">
          <Link href='/requestdemo' >
          <button
            type="button"
            className="neonBtn"
          >
           {t('requestDemo')}
          </button>
          </Link>
          <Link href='/aboutus' >
          <button
            type="button"
            className="baseBtn"
          >
            {t('learnAbout')}
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
    </section>
</section>
  )
}

export default Cta