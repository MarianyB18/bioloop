import './CertificationBadges.css';

function CertificationBadges({ selos }) {
  return (
    <ul className="badges-grid">
      {selos.map((selo) => (
        <li key={selo.sigla} className="badge-card">
          
          <div className="badge-logo-slot">
            <img
              src={selo.logo}
              alt={`Logo ${selo.sigla}`}
              className="badge-logo"
            />
          </div>

          <span className="badge-sigla">
            {selo.sigla}
          </span>

          <span className="badge-legenda">
            {selo.legenda}
          </span>

        </li>
      ))}
    </ul>
  );
}

export default CertificationBadges;