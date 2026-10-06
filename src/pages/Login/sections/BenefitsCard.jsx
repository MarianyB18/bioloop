import Icon from '../../../components/Icon/Icon';
import './BenefitsCard.css';

const BENEFICIOS = [
  {
    icone: 'leaf',
    titulo: 'Acesso a cooperativas cadastradas',
    descricao: 'Conecte-se a cooperativas verificadas em todo o país.',
  },
  {
    icone: 'shieldCheck',
    titulo: 'Soluções sustentáveis',
    descricao: 'Serviços com foco em sustentabilidade e rastreabilidade.',
  },
  {
    icone: 'cloud',
    titulo: 'Créditos de carbono',
    descricao: 'Participe do mercado de créditos de carbono.',
  },
  {
    icone: 'users',
    titulo: 'Rede de parceiros',
    descricao: 'Conecte-se com produtores e compradores do agronegócio.',
  },
];

function BeneficioItem(props) {
  return (
    <li className="login-benefit-item">
      <span className="login-benefit-icone">
        <Icon name={props.icone} />
      </span>
      <div>
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
      </div>
    </li>
  );
}

function BenefitsCard() {
  return (
    <aside className="login-benefits-card">
      <span className="login-benefits-card-icone">
        <Icon name="leaf" />
      </span>

      <h2 className="login-benefits-card-title">
        Por que se cadastrar no BioLoop?
      </h2>

      <ul className="login-benefits-list">
        {BENEFICIOS.map((item) => (
          <BeneficioItem
            key={item.titulo}
            icone={item.icone}
            titulo={item.titulo}
            descricao={item.descricao}
          />
        ))}
      </ul>

      <p className="login-benefits-card-nota">
        Juntos por um futuro mais sustentável!
      </p>
    </aside>
  );
}

export default BenefitsCard;
