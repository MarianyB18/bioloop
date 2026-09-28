import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon/Icon';
import './ImpactBanner.css';

const BENEFICIOS = [
  'Dados operacionais em uma única jornada',
  'Benefícios econômicos claros ao produtor',
  'Carbono com transparência e credibilidade',
];

function ChecklistItem(props) {
  return (
    <li className="checklist-item">
      <span className="checklist-icone">
        <Icon name="check" />
      </span>
      {props.texto}
    </li>
  );
}

function ImpactBanner() {
  return (
    <section className="impact-banner">
      <div className="container impact-inner">
        <div
          className="impact-media"
          role="img"
          aria-label="Mãos com solo fértil e muda de planta"
        />

        <div className="impact-content">
          <span className="eyebrow impact-eyebrow">
            IMPACTO QUE VOCÊ PODE MEDIR
          </span>
          <h2>Rastreabilidade do começo ao recomeço.</h2>
          <p>
            Cada lote registra origem, processamento, destino e carbono
            removido. Evidências sólidas para decisões melhores.
          </p>

          <ul className="impact-checklist">
            {BENEFICIOS.map((texto) => (
              <ChecklistItem key={texto} texto={texto} />
            ))}
          </ul>

          <Link to="/carbono" className="btn btn-impact">
            Conheça nosso Carbono <Icon name="arrowRight" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ImpactBanner;
