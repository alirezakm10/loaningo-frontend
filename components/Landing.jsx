import Image from 'next/image'

const Landing = () => {
  return (
    <section className="flex flex-col items-center text-[14px]">
      {/* mission Segment start */}
      <section className=" container flex flex-col text-center text-whiteloan">
        <div className="flex flex-col gap-4 my-8">
          <h1 className="text-3xl text-whiteloan font-bold">
            Mission Statement
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* card container */}
        <div className="flex gap-[40px]">
          <div>
            <h1>Ut enim ad minim</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod .
            </p>
          </div>
          <div>
            <h1>Duis aute irure</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sit
              vitae, nemo amet enim et quibusdam temporibus. Odio, nisi velit.
            </p>
          </div>
          <div>
            <h1>Voluptate in this</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .
            </p>
          </div>
        </div>
      </section>
      {/* mission Segment end */}

      {/* how it works start */}
      {/* below is whole container for css techniques */}
      <section className="relative flex flex-col items-center">
        {/* this section is line illustration container with absolute pos */}
        <section className="absolute top-[300px]">
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
              stroke-width="3"
              stroke-dasharray="8 13"
            />
          </svg>
        </section>

        <section className=" container flex flex-col text-center text-whiteloan my-[100px]">
          <div className="flex flex-col gap-4 my-8">
            <h1 className="text-3xl text-whiteloan font-bold">How its Works</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex gap-[40px]">
            <div className="flex flex-col gap-6">
              <div className="under-neon-circle">
                <span className="neon-circle">01</span>
              </div>
              <h1>Ut enim ad minim</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod .
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="under-neon-circle">
                <span className="neon-circle">02</span>
              </div>
              <h1>Duis aute irure</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut sit
                vitae, nemo amet enim et quibusdam temporibus. Odio, nisi velit.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="under-neon-circle">
                <span className="neon-circle">01</span>
              </div>
              <h1>Voluptate in this</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                .
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* why should choose us start */}
      <section className="container flex flex-col md:flex-row w-full text-whiteloan ">
        <div className="flex flex-col justify-center flex-1">
          <p className="text-blueloan text-lg">Why should choose us ?</p>
          <h1 className=" text-3xl my-2">Our Advantages</h1>
          <p className="text-sm my-2 md:w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col flex-1 gap-[40px] py-[60px] rounded-[10px] justify-center items-center bg-dimdarkloan">
          {/* card start */}
          <section className="flex gap-7 w-[60%]">
            <div className="flex justify-center items-center bg-dimdarkloan rounded-full w-[50px] h-[50px] dark-icon-container" >
            <Image src='/icons/shield.svg' priority width='30' height='30'  />
            </div>
            <div className="flex flex-col gap-1" >
                <h1 className="text-lg">Asset security</h1>
                <p className="text-[12px]" >Ut enim ad minim nostrud exercitation</p>
            </div>
          </section>
          {/* card end */}
          <section className="flex gap-7  w-[60%]">
            <i className="flex justify-center items-center bg-dimdarkloan rounded-full w-[50px] h-[50px] dark-icon-container " >
                <Image src='/icons/speed.svg' responsive width='30' height='30'  />
            </i>
            <div className="flex flex-col gap-1" >
                <h1 className="text-lg">Instant service</h1>
                <p className="text-[12px]" >laboris nisi ut commodo consequat.</p>
            </div>
          </section>
          <section className="flex gap-7  w-[60%]">
            <i className="flex justify-center items-center bg-dimdarkloan rounded-full w-[50px] h-[50px] dark-icon-container " >
            <Image src='/icons/statistics.svg' responsive width='30' height='30'  />
            </i>
            <div className="flex flex-col gap-1" >
                <h1 className="text-lg">Flexibility</h1>
                <p className="text-[12px]" >Ut enim ad minim nostrud exercitation</p>
            </div>
          </section>
          <section className="flex gap-7  w-[60%]">
            <i className="flex justify-center items-center bg-dimdarkloan rounded-full w-[50px] h-[50px] dark-icon-container " >
            <Image src='/icons/paper.svg' responsive width='30' height='30'  />
            </i>
            <div className="flex flex-col gap-1" >
                <h1 className="text-lg">Asset security</h1>
                <p className="text-[12px]" >Ut enim eniam, quis nostrud exercitation</p>
            </div>
          </section>
          
        </div>
      </section>
      {/* why should choose us end */}



      {/* Service summary start */}
      <section className=" container flex flex-col text-center text-whiteloan">
        <div className="flex flex-col gap-4 my-8">
          <h1 className="text-3xl text-whiteloan font-bold">
          Service Summary
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-[40px]' >
            {/* card start */}
            <div className='h-[160px] p-6 gap-5 flex items-center flex1 bg-dimdarkloan rounded-[10px] text-whiteloan' >
            <Image src='/icons/shield.svg' priority width='50' height='50'  />
            <div className='flex flex-col text-left gap-4' >
                <h1 className='text-lg font-bold' >Loan</h1>
                <p className='text-[12px]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente id quos earum cupiditate amet voluptates?</p>
            </div>
            </div>
            {/* card end */}
            <div className='h-[160px] p-6 gap-5 flex items-center flex1 bg-dimdarkloan rounded-[10px] text-whiteloan' >
            <Image src='/icons/shield.svg' priority width='50' height='50'  />
            <div className='flex flex-col text-left gap-4' >
                <h1 className='text-lg font-bold' >Loan</h1>
                <p className='text-[12px]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente id quos earum cupiditate amet voluptates?</p>
            </div>
            </div>
        </div>

        <button className="mt-[45px] h-[45px] w-[114px] text-sm border border-white rounded-[4px] mx-auto" >Services Page</button>
        </section>
      {/* Service summary end */}

      {/* how it works end */}
    </section>
  );
};

export default Landing;
