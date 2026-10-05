import { KPIS_CONTRATO } from '../../../data/carbonoData';

function KpiSummary() {
  return (
    <section className="carbono-summary">
      <div className="container">
        <h2 className="carbono-section-title">Resumo do contrato</h2>

        <ul className="carbono-summary-grid">
          {KPIS_CONTRATO.map((kpi) => (
            <li key={kpi.rotulo} className="carbono-kpi">
              <span className="carbono-kpi-valor">{kpi.valor}</span>
              <span className="carbono-kpi-rotulo">{kpi.rotulo}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default KpiSummary;
