import { CONTRATO_ATIVO } from '../../../data/carbonoData';

function ContractPanel() {
  const percentualUtilizado = Math.round(
    (CONTRATO_ATIVO.volumeUtilizado / CONTRATO_ATIVO.volumeContratado) * 100
  );

  return (
    <section className="carbono-contract">
      <div className="container">
        <h2 className="carbono-section-title">Contrato ativo</h2>

        <div className="carbono-contract-card">
          <dl className="carbono-contract-list">
            <div>
              <dt>Contrato</dt>
              <dd>{CONTRATO_ATIVO.id}</dd>
            </div>
            <div>
              <dt>Projeto</dt>
              <dd>{CONTRATO_ATIVO.projeto}</dd>
            </div>
            <div>
              <dt>Contratante</dt>
              <dd>{CONTRATO_ATIVO.contratante}</dd>
            </div>
            <div>
              <dt>Responsável</dt>
              <dd>{CONTRATO_ATIVO.responsavel}</dd>
            </div>
            <div>
              <dt>Início</dt>
              <dd>{CONTRATO_ATIVO.inicio}</dd>
            </div>
            <div>
              <dt>Término</dt>
              <dd>{CONTRATO_ATIVO.termino}</dd>
            </div>
            <div>
              <dt>Volume contratado</dt>
              <dd>
                {CONTRATO_ATIVO.volumeContratado.toLocaleString('pt-BR')} tCO₂e
              </dd>
            </div>
            <div>
              <dt>Utilizado</dt>
              <dd>
                {CONTRATO_ATIVO.volumeUtilizado.toLocaleString('pt-BR')} tCO₂e
              </dd>
            </div>
            <div>
              <dt>Saldo</dt>
              <dd>
                {CONTRATO_ATIVO.volumeRestante.toLocaleString('pt-BR')} tCO₂e
              </dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd className="carbono-contract-status">
                {CONTRATO_ATIVO.status}
              </dd>
            </div>
          </dl>

          <div className="carbono-contract-progress">
            <span className="carbono-contract-progress-label">
              Volume utilizado: {percentualUtilizado}% de{' '}
              {CONTRATO_ATIVO.volumeContratado.toLocaleString('pt-BR')} tCO₂e
              contratados
            </span>
            <span className="carbono-contract-progress-track">
              <span
                className="carbono-contract-progress-fill"
                style={{ width: `${percentualUtilizado}%` }}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContractPanel;
