
import './FooterEnterprise.css'
import { Link } from 'react-router-dom'

export default function FooterEnterprise() {
  return (
    <footer className="enterprise-footer">

      <div className="footer-content">

        {/* Información de la aplicación */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">PrácticaLima</Link>

          <p>Conectamos empresas con el talento universitario.</p>
        </div>


        {/* Navegación */}
        <div className="footer-links">
          <Link to="/">Panel de empresa</Link>
          <Link to="/postulantes">Postulantes</Link>
          <Link to="/perfil">Mi perfil</Link>
        </div>


        {/* Contacto */}
        <div className="footer-contact">
          <span>¿Necesitas ayuda?</span>
          <a href="mailto:soporte@practicalima.com">Contactar soporte</a>
        </div>

      </div>


      {/* Copyright */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} PrácticaLima. Todos los derechos reservados.</span>

        <span className="footer-version">Portal empresarial</span>
      </div>

    </footer>
  )
}
