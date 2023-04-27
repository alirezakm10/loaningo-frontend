import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Cta from './Cta'
import { useRouter } from 'next/router'

const Layout = ({children}) => {
  const router = useRouter()
  
  return (
    <>
    <div className="sky-gradient" ></div>
    <main className='relative z-[1] overflow-hidden flex flex-col items-center py-4' >

<Navbar />
    {children}
    { router.pathname.includes('requestdemo') ? '' : <Cta /> }
    <Footer />
    </main>
    </>
  )
}

export default Layout