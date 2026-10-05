import { ORIGEM_CREDITOS } from '../../../data/carbonoData';

function OriginSection() {
  return (
    <section className="carbono-origin">
      <div className="container">
        <h2 className="carbono-section-title">Origem dos créditos</h2>

        <div className="carbono-origin-layout">
          <dl className="carbono-origin-list">
            <div>
              <dt>Cooperativa</dt>
              <dd>{ORIGEM_CREDITOS.cooperativa}</dd>
            </div>
            <div>
              <dt>Localização</dt>
              <dd>{ORIGEM_CREDITOS.localizacao}</dd>
            </div>
            <div>
              <dt>Material processado</dt>
              <dd>{ORIGEM_CREDITOS.materialProcessado}</dd>
            </div>
            <div>
              <dt>Volume processado</dt>
              <dd>{ORIGEM_CREDITOS.volumeProcessado}</dd>
            </div>
            <div>
              <dt>Créditos gerados</dt>
              <dd>{ORIGEM_CREDITOS.creditosGerados}</dd>
            </div>
          </dl>

          <div className="carbono-origin-distribution">
            <h3>Distribuição por cooperativa</h3>
            <ul className="carbono-origin-distribution-list">
              {ORIGEM_CREDITOS.distribuicao.map((item) => (
                <li
                  key={item.cooperativa}
                  className="carbono-origin-distribution-item"
                >
                  <span className="carbono-origin-distribution-label">
                    {item.cooperativa} · {item.estado}
                  </span>
                  <span className="carbono-origin-bar-track">
                    <span
                      className="carbono-origin-bar-fill"
                      style={{ width: `${item.percentual}%` }}
                    />
                  </span>
                  <span className="carbono-origin-distribution-value">
                    {item.percentual}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OriginSection;
