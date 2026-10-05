import Icon from '../../../components/Icon/Icon';
import { ALERTAS_OPERACIONAIS } from '../../../data/carbonoData';

function StatusAlerts() {
  return (
    <section className="carbono-alerts">
      <div className="container">
        <h2 className="carbono-section-title">Status operacional</h2>

        <ul className="carbono-alerts-list">
          {ALERTAS_OPERACIONAIS.map((alerta) => (
            <li
              key={alerta.texto}
              className={`carbono-alert carbono-alert-${alerta.tipo}`}
            >
              <Icon name={alerta.tipo === 'ok' ? 'check' : 'alert'} />
              <span>{alerta.texto}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default StatusAlerts;
