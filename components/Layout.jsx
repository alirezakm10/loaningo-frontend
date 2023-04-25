import Navbar from './Navbar'
import Footer from './Footer'
import Cta from './Cta'

const Layout = ({children}) => {
  return (
    <>
    <main className='overflow-hidden flex flex-col items-center py-4' >
<Navbar />
    {children}
    <Cta />
    <Footer />
    </main>
    </>
  )
}

export default Layout