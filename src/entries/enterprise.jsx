// src/entries/enterprise.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CabeceraEnterprise from '../partials/CabeceraEnterprise'
import SidebarEnterprise from '../partials/SideBarEnterprise'
import FooterEnterprise from '../partials/FooterEnterprise'
import Home from '../pages/enterprise/Home'
import Ofertas from '../pages/enterprise/Ofertas'
import Postulantes from '../pages/enterprise/Postulantes'
import Mensajes from '../pages/enterprise/Mensajes'
import Perfil from '../pages/enterprise/Perfil'
import Configuracion from '../pages/enterprise/Configuracion'
import Ayuda from '../pages/enterprise/Ayuda'
import './enterprise.css'

// (Page components are imported from src/pages/enterprise)

// 3. Montaje en el DOM
const container = document.getElementById('root')

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <BrowserRouter basename="/enterprise">
        <div className="enterprise-page">
          <CabeceraEnterprise />

          <div className="enterprise-main" style={{ display: 'flex', minHeight: 'calc(100vh - 72px - 120px)' }}>
            <SidebarEnterprise />

            <main style={{ flex: 1, background: '#f7f9fb' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nueva-convocatoria" element={<Ofertas />} />
                <Route path="/bandeja" element={<Postulantes />} />
                <Route path="/ofertas" element={<Ofertas />} />
                <Route path="/postulantes" element={<Postulantes />} />
                <Route path="/mensajes" element={<Mensajes />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/resenas" element={<Perfil />} />
                <Route path="/configuracion" element={<Configuracion />} />
                <Route path="/ayuda" element={<Ayuda />} />
              </Routes>
            </main>
          </div>

          <FooterEnterprise />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  )
}