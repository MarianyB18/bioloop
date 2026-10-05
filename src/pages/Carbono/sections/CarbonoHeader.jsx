import { PROJETO_CARBONO } from '../../../data/carbonoData';

function CarbonoHeader() {
  return (
    <section className="carbono-header">
      <div className="container carbono-header-inner">
        <div className="carbono-header-main">
          <span className="section-eyebrow">CENTRAL DE ANÁLISE</span>
          <h1>Créditos de Carbono</h1>
          <p className="carbono-header-projeto">{PROJETO_CARBONO.nome}</p>
          <p className="carbono-header-contrato">
            Contrato #{PROJETO_CARBONO.contratoId}
          </p>
          <p className="carbono-header-responsavel">
            Responsável: {PROJETO_CARBONO.responsavel}
          </p>
          <p className="carbono-header-cooperativa">
            Cooperativa: {PROJETO_CARBONO.cooperativa}
          </p>
        </div>

        <div className="carbono-status">
          <span className="carbono-status-badge">{PROJETO_CARBONO.status}</span>
          <span className="carbono-status-update">
            Última atualização: {PROJETO_CARBONO.ultimaAtualizacao}
          </span>
        </div>
      </div>
    </section>
  );
}

export default CarbonoHeader;
