import { HISTORICO_PROJETO } from '../../../data/carbonoData';

function HistoryTimeline() {
  return (
    <section className="carbono-timeline">
      <div className="container">
        <h2 className="carbono-section-title">Histórico do projeto</h2>

        <ul className="carbono-timeline-list">
          {HISTORICO_PROJETO.map((item) => (
            <li key={`${item.data}-${item.evento}`} className="carbono-timeline-item">
              <span className="carbono-timeline-date">{item.data}</span>
              <span className="carbono-timeline-event">{item.evento}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HistoryTimeline;
