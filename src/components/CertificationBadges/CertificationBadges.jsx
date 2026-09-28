import './CertificationBadges.css';

function CertificationBadges({ selos, apenasLogos = false }) {
  return (
    <ul className={apenasLogos ? 'badges-grid badges-grid-logos-only' : 'badges-grid'}>
      {selos.map((selo) => (
        <li key={selo.sigla} className="badge-card">
          <div className="badge-logo-slot">
            <img
              src={selo.logo}
              alt={`Logo ${selo.sigla}`}
              className="badge-logo"
            />
          </div>

          {!apenasLogos && (
            <>
              <span className="badge-sigla">{selo.sigla}</span>
              <span className="badge-legenda">{selo.legenda}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default CertificationBadges;
