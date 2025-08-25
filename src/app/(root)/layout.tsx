import Footer from '@/components/layouts/footer'
import Navbar from '@/components/layouts/navbar'
import '@/styles/globals.css'
import dynamic from 'next/dynamic'

const ScrollTop = dynamic(() =>
  import('@/components/scroll-top').then((mod) => mod.ScrollTop)
)
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      {children}
      <ScrollTop />
    </>
  )
}
