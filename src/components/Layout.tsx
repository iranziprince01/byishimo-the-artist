import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollProgress } from './ScrollProgress'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main
        id="main-content"
        className="m-0 min-w-0 w-full"
      >
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
