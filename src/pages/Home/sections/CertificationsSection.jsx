import CertificationBadges from '../../../components/CertificationBadges/CertificationBadges';
import { SELOS_CARBONO } from '../../../data/certifications';
import './CertificationsSection.css';

function CertificationsSection() {
  return (
    <section className="certifications-section">
      <div className="container">
        <div className="certifications-heading">
          <div className="certifications-title">
            <span className="section-eyebrow">
              CERTIFICAÇÕES E PADRÕES INTERNACIONAIS
            </span>
            <h2>Solução validada e reconhecida.</h2>
          </div>

          <p>
            Trabalhamos com certificadoras de carbono de referência global,
            garantindo a rastreabilidade, a integridade e a credibilidade dos
            créditos gerados.
          </p>
        </div>

        <CertificationBadges selos={SELOS_CARBONO} />
      </div>
    </section>
  );
}

export default CertificationsSection;
