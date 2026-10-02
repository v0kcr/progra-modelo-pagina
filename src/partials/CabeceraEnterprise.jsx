import './CabeceraEnterprise.css'
import { NavLink } from 'react-router-dom'

export default function CabeceraEnterprise() {
    return (
        <nav className="enterprise-navbar">
            <div className="enterprise-navbar__left">

                <NavLink to="/" className="enterprise-brand">
                    PrácticaLima
                </NavLink>

                <NavLink to="/" className="enterprise-panel">PANEL DE EMPRESA</NavLink>

            </div>

            <div className="enterprise-navbar__right">

                <div className="enterprise-search">
                    <i className="bi bi-search"></i>

                    <input
                        type="text"
                        placeholder="Buscar postulante"
                    />
                </div>

                <div className="dropdown">

                    <button
                        className="enterprise-account dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <span className="enterprise-avatar">PL</span>

                        <span className="enterprise-account-info">
                            <strong>PrácticaLima</strong>
                            <small>Empresa - cuenta verificada</small>
                        </span>
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                            <NavLink className="dropdown-item" to="/perfil">Perfil de empresa</NavLink>
                        </li>

                        <li>
                            <NavLink className="dropdown-item" to="/configuracion">Configuración</NavLink>
                        </li>

                        <li>
                            <hr className="dropdown-divider" />
                        </li>

                        <li>
                            <a className="dropdown-item text-danger" href="/logout">Cerrar sesión</a>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    )
}
