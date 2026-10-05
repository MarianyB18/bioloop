import Icon from '../../../components/Icon/Icon';
import {
  RASTREABILIDADE,
  DOCUMENTOS_PROJETO,
} from '../../../data/carbonoData';

function TraceabilitySection() {
  return (
    <section className="carbono-traceability">
      <div className="container">
        <h2 className="carbono-section-title">Rastreabilidade</h2>

        <div className="carbono-traceability-layout">
          <dl className="carbono-traceability-list">
            <div>
              <dt>Origem dos dados</dt>
              <dd>{RASTREABILIDADE.origemDados}</dd>
            </div>
            <div>
              <dt>Período de medição</dt>
              <dd>{RASTREABILIDADE.periodoMedicao}</dd>
            </div>
            <div>
              <dt>Validação</dt>
              <dd>{RASTREABILIDADE.responsavelValidacao}</dd>
            </div>
            <div>
              <dt>Última auditoria</dt>
              <dd>{RASTREABILIDADE.ultimaAuditoria}</dd>
            </div>
            <div>
              <dt>Registro de origem</dt>
              <dd>{RASTREABILIDADE.registroId}</dd>
            </div>
            <div>
              <dt>Integridade</dt>
              <dd>{RASTREABILIDADE.integridade}</dd>
            </div>
          </dl>

          <div className="carbono-documents">
            <h3>Documentos e registros</h3>
            <ul className="carbono-documents-list">
              {DOCUMENTOS_PROJETO.map((documento) => (
                <li key={documento.nome} className="carbono-document-item">
                  <Icon name="fileText" />
                  <div className="carbono-document-info">
                    <span className="carbono-document-nome">
                      {documento.nome}
                    </span>
                    <span className="carbono-document-data">
                      {documento.data}
                    </span>
                  </div>
                  <button type="button" className="carbono-document-btn">
                    Acessar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TraceabilitySection;
