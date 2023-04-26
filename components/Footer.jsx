import Image from "next/image";
import Link from "next/link";
import { initialData } from "@/initialData";

const Footer = () => {
  const { logo, footer, socialNetworks } = initialData;
  return (
    <section className="w-full bg-middarkloan" >
      <section className="container mx-auto relative overflow-hiddenflex flex-col items-center text-whiteloan">
      <section className="flex flex-col-reverse  items-center md:flex-row py-[100px] md:py-9 gap-3 md:gap-[100px]">
        {/* section one */}
        <div className="w-full flex flex-col items-center md:items-start text-center md:text-start gap-2">
          <h1 className=" text-2xl font-bold">Contact Us</h1>
          <section className="flex gap-6 justify-between" >
          <div className="  flex flex-col leading-8">
              <Link
                href='/'
                className="hover:text-blueloan cursor-pointer"
              >
               Email
              </Link>
              <Link
                href='/'
                className="hover:text-blueloan cursor-pointer"
              >
               info@loaningo.com
              </Link>
          </div>
          <div className="  flex flex-col leading-8">
              <Link
                href='/'
                className="hover:text-blueloan cursor-pointer"
              >
               Phone
              </Link>
              <Link
                href='/'
                className="hover:text-blueloan cursor-pointer"
              >
               (+21)12345678569
              </Link>
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
          <h1 className=" text-2xl font-bold">Fast Link</h1>
          <section className="flex gap-6 justify-between" >
          <div className="  flex flex-col leading-8">
              <Link
                href='/'
                className="hover:text-blueloan cursor-pointer"
              >
               Home
              </Link>
              <Link
                href='/'
                className="hover:text-blueloan cursor-pointer"
              >
               FAQ
              </Link>
          </div>
          <div className="  flex flex-col leading-8">
              <Link
                href='/'
                className="hover:text-blueloan cursor-pointer"
              >
               FAQs
              </Link>
              <Link
                href='/'
                className="hover:text-blueloan cursor-pointer"
              >
               Privacy Policy
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
