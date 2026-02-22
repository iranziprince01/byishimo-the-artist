import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'
import { ScrollToTop } from './components/ScrollToTop'
import { Hero } from './sections/Hero'
import { Biography } from './sections/Biography'
import { MusicPortfolio } from './sections/MusicPortfolio'
import { RecentHighlights } from './sections/RecentHighlights'
import { DigitalPresence } from './sections/DigitalPresence'
import { ArtisticVision } from './sections/ArtisticVision'
import { MediaPressKit } from './sections/MediaPressKit'
import { Gallery } from './sections/Gallery'
import { Testimonials } from './sections/Testimonials'
import { Booking } from './sections/Booking'

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Biography />
        <MusicPortfolio />
        <RecentHighlights />
        <DigitalPresence />
        <ArtisticVision />
        <MediaPressKit />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
