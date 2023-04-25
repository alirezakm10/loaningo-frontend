import Link from 'next/link'

const Cta = () => {
  return (
<section className='flex w-full bg-dimdarkloan py-9 ' >
<section className='container mx-auto flex flex-col md:flex-row items-center justify-center text-whiteloan' >
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-blueloan text-lg">Wanna a crypto loan      --------</p>
          <h1 className=" text-3xl my-2">Call To Action</h1>
          <p className="text-sm my-2 md:w-[90%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className='flex justify-center flex-1' >
        <div className="flex gap-7">
          <Link href='/' >
          <button
            type="button"
            className="neonBtn"
          >
            Request a demo
          </button>
          </Link>
          <Link href='/' >
          <button
            type="button"
            className="baseBtn"
          >
            Learn About
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