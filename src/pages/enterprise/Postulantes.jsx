import React from 'react'

export default function Postulantes() {
  return (
    <div className="enterprise-content">
      <h1>Postulantes</h1>
      <p className="text-muted">Gestiona los postulantes que han aplicado a tus ofertas.</p>

      <div className="card" style={{ marginTop: 12 }}>
        <ul className="list-group">
          <li className="applicant-item">
            <div>
              <strong>Juan Pérez</strong>
              <div className="applicant-meta">Ingeniería — CV recibido</div>
            </div>
            <div>
              <button className="btn-primary-custom">Ver</button>
            </div>
          </li>
          <li className="applicant-item">
            <div>
              <strong>Ana Ruiz</strong>
              <div className="applicant-meta">Marketing — Entrevista agendada</div>
            </div>
            <div>
              <button className="btn-primary-custom">Ver</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
