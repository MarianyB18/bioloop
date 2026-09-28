import CertificationBadges from '../../../components/CertificationBadges/CertificationBadges';
import { SELOS_CARBONO } from '../../../data/certifications';
import './CertificationsSection.css';

// Mesmo componente de certificações usado na Home (CertificationBadges +
// SELOS_CARBONO) — só o texto de cabeçalho muda, conforme o mockup da
// tela Fale conosco.
function CertificationsSection() {
  return (
    <section className="fc-certifications-section">
      <div className="container">
        <div className="fc-certifications-heading">
          <div className="fc-certifications-title">
            <span className="section-eyebrow">CERTIFICAÇÕES DE CARBONO</span>
            <h2>Veracidade da solução, com certificações internacionais.</h2>
          </div>

          <p>
            Nosso processo é auditado e certificado por instituições
            reconhecidas, garantindo a rastreabilidade e a credibilidade dos
            créditos gerados.
          </p>
        </div>

        <CertificationBadges selos={SELOS_CARBONO} apenasLogos />
      </div>
    </section>
  );
}

export default CertificationsSection;
