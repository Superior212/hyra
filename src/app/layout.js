import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'



export const metadata = {
  title: 'Hyra',
  description: 'Discover a world where education meets excitement',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="md:mt-28 mt-[6rem]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
