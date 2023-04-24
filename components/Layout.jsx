import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <main className='overflow-hidden flex flex-col items-center py-4' >
<Navbar />
    {children}
    <Footer />
    </main>
    </>
  )
}

export default Layout