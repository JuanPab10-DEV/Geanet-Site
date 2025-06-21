import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default Layout 