import './SideBarEnterprise.css'
import { NavLink } from 'react-router-dom'

export default function SidebarEnterprise() {
  const linkClass = ({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`

  return (
    <aside className="enterprise-sidebar">

      {/* Menú principal */}
      <nav className="sidebar-nav">

        <NavLink to="/" end className={linkClass}>
          <span className="sidebar-icon">⌂</span>
          <span>Inicio</span>
        </NavLink>

        <NavLink to="/ofertas" className={linkClass}>
          <span className="sidebar-icon">▤</span>
          <span>Mis ofertas</span>
        </NavLink>

        <NavLink to="/postulantes" className={linkClass}>
          <span className="sidebar-icon">♙</span>
          <span>Postulantes</span>
        </NavLink>

        <NavLink to="/mensajes" className={linkClass}>
          <span className="sidebar-icon">✉</span>
          <span>Mensajes</span>
        </NavLink>

      </nav>


      {/* Parte inferior */}
      <div className="sidebar-bottom">

        <NavLink to="/configuracion" className={linkClass}>
          <span className="sidebar-icon">⚙</span>
          <span>Configuración</span>
        </NavLink>

        <NavLink to="/ayuda" className={linkClass}>
          <span className="sidebar-icon">?</span>
          <span>Ayuda</span>
        </NavLink>

      </div>

    </aside>
  )
}
