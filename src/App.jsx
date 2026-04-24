// Define estrutura global - Navbar e Footer (aparecem sempre) + Routes (o que muda por URL)

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Vinhos from './pages/Vinhos'
import Experiencias from './pages/Experiencias'
import Contacto from './pages/Contacto'

function App() {
  return (
    <BrowserRouter>

      {/* ScrollToTop e Navbar fora das Routes - todas as páginas */}
      <ScrollToTop />
      <Navbar />

      {/* Decide que componente renderiza consoante o URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vinhos" element={<Vinhos />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      {/* Footer fora das routes - aparece sempre */}
      <Footer />

    </BrowserRouter>
  )
}

export default App