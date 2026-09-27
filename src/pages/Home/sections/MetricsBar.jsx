import './MetricsBar.css';

import { METRICAS_HOME } from '../../../data/metrics';


// Cada MetricItem recebe seu valor e rótulo via props — o componente pai
// (MetricsBar) é quem detém a lista e distribui os dados para os filhos.
function MetricItem(props) {
  return (
    <div className="metric-item">
      <span className="metric-valor">{props.valor}</span>
      <span className="metric-rotulo">{props.rotulo}</span>
    </div>
  );
}

function MetricsBar() {
  return (
    <section className="metrics-bar">
      <div className="container metrics-inner">
        {METRICAS_HOME.map((metrica) => (
          <MetricItem
            key={metrica.rotulo}
            valor={metrica.valor}
            rotulo={metrica.rotulo}
          />
        ))}
      </div>
    </section>
  );
}

export default MetricsBar;
