import {
  IMPACTO_AMBIENTAL,
  SERIE_EMISSOES_EVITADAS,
} from '../../../data/carbonoData';

function ImpactSection() {
  const maximo = Math.max(
    ...SERIE_EMISSOES_EVITADAS.map((item) => item.valor)
  );

  return (
    <section className="carbono-impact">
      <div className="container">
        <h2 className="carbono-section-title">Impacto Ambiental</h2>

        <ul className="carbono-impact-grid">
          {IMPACTO_AMBIENTAL.map((indicador) => (
            <li key={indicador.rotulo} className="carbono-impact-card">
              <span className="carbono-impact-valor">{indicador.valor}</span>
              <span className="carbono-impact-rotulo">{indicador.rotulo}</span>
            </li>
          ))}
        </ul>

        <div className="carbono-impact-chart">
          <h3>Emissões evitadas por mês (tCO₂e)</h3>
          <ul className="carbono-impact-bars">
            {SERIE_EMISSOES_EVITADAS.map((item) => (
              <li key={item.mes} className="carbono-impact-bar-item">
                <span className="carbono-impact-bar-label">{item.mes}</span>
                <span className="carbono-impact-bar-track">
                  <span
                    className="carbono-impact-bar-fill"
                    style={{ width: `${(item.valor / maximo) * 100}%` }}
                  />
                </span>
                <span className="carbono-impact-bar-value">
                  {item.valor.toLocaleString('pt-BR')}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
