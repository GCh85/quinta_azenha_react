// Não renderiza no ecrã

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {

  const { pathname } = useLocation()

  // pathname executa sempre que o URL muda
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop