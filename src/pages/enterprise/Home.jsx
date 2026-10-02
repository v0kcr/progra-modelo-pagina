import React from 'react'

export default function Home() {
  return (
    <div className="enterprise-content">
      <h1>Panel de empresa</h1>
      <p className="text-muted">Bienvenido al panel de la empresa. Aquí puedes gestionar tus convocatorias y ver postulantes.</p>

      <section className="dashboard-cards" style={{ marginTop: 20 }}>
        <div className="card" style={{ flex: 1 }}>
          <h3>Convocatorias activas</h3>
          <p className="text-muted">Tienes 3 convocatorias activas.</p>
          <div style={{ marginTop: 12 }}>
            <button className="btn-primary-custom">Crear convocatoria</button>
          </div>
        </div>

        <div className="card" style={{ flex: 1 }}>
          <h3>Postulantes recientes</h3>
          <p className="text-muted">6 postulantes nuevos en la última semana.</p>
          <ul className="list-group" style={{ marginTop: 12 }}>
            <li className="applicant-item">Ana Torres <span className="applicant-meta">Ingeniería — 2 días</span></li>
            <li className="applicant-item">Luis Gómez <span className="applicant-meta">Economía — 5 días</span></li>
          </ul>
        </div>
      </section>
    </div>
  )
}
