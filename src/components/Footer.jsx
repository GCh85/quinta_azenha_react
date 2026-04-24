import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="py-4 border-top footer-quinta">
      <div className="container">
        <div className="row g-4 mb-3">

          {/* coluna 1 - Nome, descrição e redes sociais */}
          <div className="col-md-5">
            <h5 className="text-white fw-bold mb-2">Quinta da Azenha</h5>
            <p className="small footer-texto">
              Produtores de vinho Arinto DOC Bucelas.<br />
              Bucelas · Lisboa · Portugal
            </p>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="footer-social"><i className="bi bi-facebook"></i></a>
              <a href="#" className="footer-social"><i className="bi bi-instagram"></i></a>
              <a href="#" className="footer-social"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>

          {/* coluna 2 - Link para não recarregar a página */}
          <div className="col-md-3">
            <h6 className="text-uppercase small mb-3 footer-titulo">Navegar</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none small footer-link">Início</Link></li>
              <li><Link to="/vinhos" className="text-decoration-none small footer-link">Vinhos</Link></li>
              <li><Link to="/experiencias" className="text-decoration-none small footer-link">Experiências</Link></li>
              <li><Link to="/contacto" className="text-decoration-none small footer-link">Contacto</Link></li>
            </ul>
          </div>

          {/* coluna 3 - contacto */}
          <div className="col-md-4">
            <h6 className="text-uppercase small mb-3 footer-titulo">Contacto</h6>
            <p className="small mb-0 footer-texto">visitas@quintaazenha.pt</p>
            <p className="small mb-0 footer-texto">+351 219 000 000</p>
            <p className="small footer-texto">Ter-Dom: 10h-18h</p>
          </div>

        </div>

        <div className="border-top pt-3 d-flex justify-content-between flex-wrap gap-2 footer-divider">
          {/* new Date.getFullYear calcula e actualiza ano*/}
          <small className="footer-copyright">
            © {new Date().getFullYear()} Quinta da Azenha · Bucelas · Portugal
          </small>
        </div>

      </div>
    </footer>
  )
}

export default Footer