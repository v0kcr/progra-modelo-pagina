import React from 'react'

export default function Ofertas() {
  return (
    <div className="enterprise-content">
      <div className="two-columns">
        <div>
          <h1>Mis ofertas</h1>
          <p className="text-muted">Lista de ofertas publicadas por la empresa.</p>

          <div className="card" style={{ marginTop: 12 }}>
            <h4>Desarrollador Junior</h4>
            <p className="text-muted">Publicado hace 5 días — 10 postulantes</p>
            <div style={{ marginTop: 12 }}>
              <button className="btn-primary-custom">Ver postulantes</button>
            </div>
          </div>
        </div>

        <aside className="card">
          <h4>Acciones</h4>
          <div style={{ marginTop: 8 }}>
            <button className="btn-primary-custom">Nueva oferta</button>
          </div>
        </aside>
      </div>
    </div>
  )
}
