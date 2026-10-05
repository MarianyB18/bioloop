import CertificationBadges from '../../../components/CertificationBadges/CertificationBadges';
import { SELOS_CARBONO } from '../../../data/certifications';
import { PADROES_REFERENCIA } from '../../../data/carbonoData';

function StandardsSection() {
  return (
    <section className="carbono-standards">
      <div className="container">
        <h2 className="carbono-section-title">Certificação e padrões</h2>

        <CertificationBadges selos={SELOS_CARBONO} />

        <ul className="carbono-standards-references">
          {PADROES_REFERENCIA.map((padrao) => (
            <li key={padrao.nome} className="carbono-standards-reference">
              <strong>{padrao.nome}</strong>
              <span>{padrao.descricao}</span>
              <span className="carbono-standards-tag">
                Referência de padrão de mercado
              </span>
            </li>
          ))}
        </ul>

        <p className="carbono-section-note">
          Referências de padrões internacionais apenas para contextualização.
          Este protótipo apresenta dados demonstrativos e não representa
          certificação emitida por essas organizações.
        </p>
      </div>
    </section>
  );
}

export default StandardsSection;
