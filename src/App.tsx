import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Music } from './pages/Music'
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
          <Route path="booking" element={<Booking />} />
          {/* Legacy URLs → home section anchors (content lives on Home) */}
          <Route path="experience" element={<Navigate to="/music" replace />} />
          <Route path="highlights" element={<Navigate to={{ pathname: '/', hash: 'highlights' }} replace />} />
          <Route path="vision" element={<Navigate to={{ pathname: '/', hash: 'vision' }} replace />} />
          <Route path="press" element={<Navigate to={{ pathname: '/', hash: 'press' }} replace />} />
          <Route path="gallery" element={<Navigate to={{ pathname: '/', hash: 'gallery' }} replace />} />
          <Route path="testimonials" element={<Navigate to={{ pathname: '/', hash: 'testimonials' }} replace />} />
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
