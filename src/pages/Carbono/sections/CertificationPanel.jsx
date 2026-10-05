import { CERTIFICACAO_PROJETO } from '../../../data/carbonoData';

function CertificationPanel() {
  return (
    <section className="carbono-certification">
      <div className="container">
        <h2 className="carbono-section-title">Certificação e Verificação</h2>

        <div className="carbono-certification-card">
          <div className="carbono-certification-logo-slot">
            <img
              src={CERTIFICACAO_PROJETO.logo}
              alt={`Logo ${CERTIFICACAO_PROJETO.selo}`}
              className="carbono-certification-logo"
            />
          </div>

          <div className="carbono-certification-info">
            <strong>{CERTIFICACAO_PROJETO.selo}</strong>
            <dl className="carbono-certification-list">
              <div>
                <dt>Número do projeto</dt>
                <dd>{CERTIFICACAO_PROJETO.numeroProjeto}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{CERTIFICACAO_PROJETO.status}</dd>
              </div>
              <div>
                <dt>Última verificação</dt>
                <dd>{CERTIFICACAO_PROJETO.ultimaVerificacao}</dd>
              </div>
              <div>
                <dt>Validade</dt>
                <dd>{CERTIFICACAO_PROJETO.validade}</dd>
              </div>
            </dl>
          </div>
        </div>

        <p className="carbono-section-note">
          Dados demonstrativos para protótipo. Selo fictício da identidade
          visual da plataforma BioLoop.
        </p>
      </div>
    </section>
  );
}

export default CertificationPanel;
