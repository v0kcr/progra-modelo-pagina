import React from 'react'

export default function Perfil() {
  return (
    <div className="enterprise-content">
      <h1>Perfil de la empresa</h1>
      <div className="two-columns" style={{ marginTop: 12 }}>
        <div className="card">
          <h3>PrácticaLima</h3>
          <p className="text-muted">Conectamos empresas con el talento universitario.</p>
        </div>

        <aside className="card">
          <h4>Contacto</h4>
          <p className="text-muted">soporte@practicalima.com</p>
        </aside>
      </div>
    </div>
  )
}
