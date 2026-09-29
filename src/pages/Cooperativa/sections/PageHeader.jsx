import Icon from '../../../components/Icon/Icon';
import './PageHeader.css';

const DIFERENCIAIS = [
  {
    icone: 'shieldCheck',
    titulo: 'Cooperativas verificadas',
    descricao: 'Todas passam por um processo de validação da BioLoop.',
  },
  {
    icone: 'check',
    titulo: 'Serviços disponíveis',
    descricao: 'Produção, beneficiamento, transporte e muito mais.',
  },
  {
    icone: 'pin',
    titulo: 'Mais proximidade',
    descricao: 'Encontre cooperativas próximas da sua região.',
  },
];

// Cada diferencial recebe seus dados via props — mesmo padrão já usado
// nos cards da Home (ChainStep) e da Fale conosco (ContactChannel).
function DiferencialItem(props) {
  return (
    <li className="diferencial-item">
      <span className="diferencial-icone">
        <Icon name={props.icone} />
      </span>
      <div>
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
      </div>
    </li>
  );
}

function PageHeader() {
  return (
    <section className="coop-page-header">
      <div className="container coop-page-header-inner">
        <div className="coop-page-header-main">
          <span className="section-eyebrow">COOPERATIVAS CADASTRADAS</span>
          <h1>Encontre a cooperativa ideal para o seu projeto.</h1>
          <p>
            Conheça as cooperativas parceiras da BioLoop, prontas para
            oferecer serviços de qualidade, com foco em sustentabilidade,
            rastreabilidade e impacto positivo no campo.
          </p>
        </div>

        <ul className="coop-diferenciais">
          {DIFERENCIAIS.map((item) => (
            <DiferencialItem
              key={item.titulo}
              icone={item.icone}
              titulo={item.titulo}
              descricao={item.descricao}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PageHeader;
