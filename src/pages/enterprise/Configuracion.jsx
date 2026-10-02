import React from 'react'

export default function Configuracion() {
  return (
    <div className="enterprise-content">
      <h1>Configuración</h1>
      <div className="card" style={{ marginTop: 12 }}>
        <label className="text-muted">Nombre de la empresa</label>
        <div style={{ marginTop: 8 }}>
          <input className="form-control" defaultValue="PrácticaLima" />
        </div>
        <div style={{ marginTop: 12 }}>
          <button className="btn-primary-custom">Guardar</button>
        </div>
      </div>
    </div>
  )
}
