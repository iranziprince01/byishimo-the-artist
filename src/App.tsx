import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Music } from './pages/Music'
import { Experience } from './pages/Experience'
import { Booking } from './pages/Booking'
import { Concerts } from './pages/Concerts'
import { Partnerships } from './pages/Partnerships'
import { ComingSoon } from './pages/ComingSoon'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="music" element={<Music />} />
          <Route path="experience" element={<Experience />} />
          <Route path="booking" element={<Booking />} />
          <Route path="highlights" element={<Experience />} />
          <Route path="vision" element={<Experience />} />
          <Route path="press" element={<Experience />} />
          <Route path="gallery" element={<Experience />} />
          <Route path="testimonials" element={<Experience />} />
          <Route path="concerts" element={<Concerts />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="branding" element={<ComingSoon />} />
          <Route path="merch" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
