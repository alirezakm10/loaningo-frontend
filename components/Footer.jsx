import Image from "next/image";
import Link from "next/link";
import { initialData } from "@/initialData";
import { useTranslation } from 'react-i18next'


const Footer = () => {
  const { t } = useTranslation()
  const { logo, footer, socialNetworks } = initialData;
  return (
    <section className="w-full bg-middarkloan">
      <section className="container mx-auto relative overflow-hiddenflex flex-col items-center text-whiteloan">
      <section className="flex flex-col-reverse  items-center md:flex-row py-[100px] md:py-9 gap-3 md:gap-[100px]">
        {/* section one */}
        <div className="w-full flex flex-col items-center md:items-start text-center md:text-start gap-2">
          <h1 className=" text-2xl font-bold">{t('footerSec1Title')}</h1>
          <section className="flex gap-6 justify-between" >
          <div className="  flex flex-col leading-8">
              <p
                className="hover:text-blueloan cursor-pointer"
              >
               {t('emailText')}
              </p>
              <a
              href="mailto:info@loaningo.com"
                className="hover:text-blueloan cursor-pointer"
              >
               {t('emailAddress')}
              </a>
          </div>
          <div className="  flex flex-col leading-8">
              <p
                className="hover:text-blueloan cursor-pointer"
              >
               {t('phoneText')}
              </p>
              <p
                className="hover:text-blueloan cursor-pointer"
              >
               {t('phoneNumber')}
              </p>
          </div>
          </section>
        </div>

        {/* section two */}
      <div className="relative w-full flex flex-col items-center justify-center  text-center  gap-5 base-gradient">
          <Link href="/">{logo}</Link>
          <div className="flex gap-5 items-center">
            <Link href={socialNetworks.instagram.href}>
              {socialNetworks.instagram.icon}
            </Link>
            <Link href={socialNetworks.youtube.href}>
              {socialNetworks.youtube.icon}
            </Link>
            <Link href={socialNetworks.facebook.href}>
              {socialNetworks.facebook.icon}
            </Link>
          </div>
        </div>

        {/* section three */}
        <div className="w-full hidden md:flex flex-col">
          <h1 className=" text-2xl font-bold">{t('footerSec2Title')}</h1>
          <section className="flex gap-6 justify-between" >
          <div className="  flex flex-col leading-8">
              <Link
                href='/'
                className="hover:text-blueloan cursor-pointer"
              >
               {t('home')}
              </Link>
              <Link
                href='/faq'
                className="hover:text-blueloan cursor-pointer"
              >
               {t('faq')}
              </Link>
          </div>
          <div className="  flex flex-col leading-8">
              <Link
                href='/aboutus'
                className="hover:text-blueloan cursor-pointer"
              >
               {t('aboutus')}
              </Link>
              <Link
                href='/services'
                className="hover:text-blueloan cursor-pointer"
              >
               {t('services')}
              </Link>
          </div>
          </section>
        </div>
      </section>
      <hr className=" w-[100%] mt-[46px] bg-[#B7B6B6] opacity-10 "/>
      <p className="text-center mt-4  ">
        {footer.copyright.title}
      </p>
    </section>
    </section>
  );
};

export default Footer;
