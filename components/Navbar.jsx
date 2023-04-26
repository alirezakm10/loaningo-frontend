import { useState } from "react";
import Link from "next/link";
import { initialData } from "@/initialData";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { logo, navbar, socialNetworks } = initialData;

  return (
    <nav className="container text-whiteloan py-4 md:py-0 relative z-[1] ">
      <div className=" flex flex-wrap items-center justify-between">
        <a href="https://gotimate.com/" className="flex items-center">
          <div className=" relative z-[1] h-auto  hidden lg:flex">
            {logo}
          </div>
        </a>
        <div className="md:order-2">
          {/* this button is for desktop */}
          <div className="hidden lg:flex">
            <Link href='https://dashv1.gotimate.com/signup' >
            <button
              type="button"
              className="neonBtn"
            >
              Request demo
            </button>
            </Link>
          </div>

          {/* hamburger menu logo and user icon in mobile mode */}
          <div className="w-screen  flex lg:hidden justify-between">
          {logo}
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="flex items-center focus:outline-none mr-10"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="#fff"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* this div is for mobile nav items container */}
          <div
            className={`${
              isNavOpen ? "showMenuNav" : "hideMenuNav"
            } overflow-hidden`}
          >
            {/* mobile close button container */}
            <div
              className="CROSS-ICON absolute top-0 right-0 p-8 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            {/* this is collapsible menu container in mobile */}
            <div className="container px-sm flex flex-col gap-6">
              {logo}
             <ul className="MENU-LINK-MOBILE-OPEN text-lg font-light flex flex-col gap-8 items-start justify-around min-h-[250px] w-full">
                {navbar.links.map((link, i) => (
                  <Link key={i} href={link.route} className="hover:text-blueloan" >{link.title}</Link>
                ))}
              </ul>
                 {/* login signup buttons in mobile menu */}
                 <div className="gap-2 flex mx-auto">
                <Link href='https://dashv1.gotimate.com/signup' >
                <button
                  type="button"
                  className="text-white text-[14px] w-[100px] h-[40px] hover:bg-gray-400 transition-all  focus:outline-none rounded-[10px]"
                >
                 Request demo
                </button>
                </Link>
              </div>
              <div className="flex flex-col items-center gap-3 absolute bottom-[100px] left-0 right-0">
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
                <p className=" ">Gotimate on Socials</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <div className="flex flex-col font-normal p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
             {navbar.links.map((link, i) => (
              <Link
              key={i}
                href={link.route}
                className=" relative z-[1] block custom-visited py-2 pl-3 pr-4  hover:text-blueloan rounded focus:text-gotimate md:p-0 "
                aria-current="page"
              >
                {link.title}
              </Link>
             ))}
          </div>
        </div>
      </div>

      {/* these styles is for mobile menu navbar */}
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #000;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding:30px 10px;
      }
    `}</style>
    </nav>
  );
};

export default Navbar;
