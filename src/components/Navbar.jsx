import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Navbar comum a todas as páginas
// Está no App.jsx fora das routes por isso aparece sempre

function Navbar() {

  // Controla se o menu mobile está aberto ou fechado
  // Em desktop o Bootstrap ignora este estado - para mobile
  const [menuAberto, setMenuAberto] = useState(false)

  // URL actual para link activo
  const location = useLocation()

  // Se for a pág atual -> nav-link active . Senão -> nav-link
  function classeLinkAtivo(caminho) {
    if (location.pathname === caminho) {
      return 'nav-link active'
    } else {
      return 'nav-link'
    }
  }

  // Menu ficava aberto. Fecha ao clicar num link
  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <nav className="navbar navbar-expand-md navbar-quinta fixed-top">
      <div className="container">

        <Link className="navbar-brand" to="/" onClick={fecharMenu}>
          Quinta da Azenha
        </Link>

        {/* Inverte o estado: true -> false (fecha) . false -> true (abre) */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Abrir menu"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop -> navbar-expand-md (sempre visível)  
            Mobile -> show do BS abre/fecha o menu */}
        <div className={`collapse navbar-collapse ${menuAberto ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-md-center gap-md-1">

            <li className="nav-item">
              <Link className={classeLinkAtivo('/')} to="/" onClick={fecharMenu}>Início</Link>
            </li>
            <li className="nav-item">
              <Link className={classeLinkAtivo('/vinhos')} to="/vinhos" onClick={fecharMenu}>Vinhos</Link>
            </li>
            <li className="nav-item">
              <Link className={classeLinkAtivo('/experiencias')} to="/experiencias" onClick={fecharMenu}>Experiências</Link>
            </li>
            <li className="nav-item">
              <Link className={classeLinkAtivo('/contacto')} to="/contacto" onClick={fecharMenu}>Contacto</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar