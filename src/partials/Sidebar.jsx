// src/partials/SideBarEnterprise.jsx

import { NavLink } from 'react-router-dom'
import './SidebarEnterprise.css'

export default function SidebarEnterprise() {
  return (
    <aside className="enterprise-sidebar">

      <nav className="sidebar-nav">

        {/* CONVOCATORIAS */}
        <div className="sidebar-group">

          <div className="sidebar-group-title">
            CONVOCATORIAS
          </div>

          <NavLink
            to="/enterprise"
            className="sidebar-link"
          >
            Mis convocatorias
          </NavLink>

          <NavLink
            to="/enterprise/nueva-convocatoria"
            className="sidebar-link"
          >
            Nueva convocatoria
          </NavLink>

          <NavLink
            to="/enterprise/bandeja"
            className="sidebar-link"
          >
            Bandeja de postulantes
          </NavLink>

        </div>


        {/* EMPRESA */}
        <div className="sidebar-group">

          <div className="sidebar-group-title">
            EMPRESA
          </div>

          <NavLink
            to="/enterprise/perfil"
            className="sidebar-link"
          >
            Perfil de la empresa
          </NavLink>

          <NavLink
            to="/enterprise/resenas"
            className="sidebar-link"
          >
            Reseñas recibidas
          </NavLink>

        </div>


        {/* CUENTA */}
        <div className="sidebar-group">

          <div className="sidebar-group-title">
            CUENTA
          </div>

          <NavLink
            to="/enterprise/cambiar-password"
            className="sidebar-link"
          >
            Cambiar contraseña
          </NavLink>

          <NavLink
            to="/logout"
            className="sidebar-link"
          >
            Cerrar sesión
          </NavLink>

        </div>

      </nav>

    </aside>
  )
}