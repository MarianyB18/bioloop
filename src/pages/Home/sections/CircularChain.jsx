import Icon from '../../../components/Icon/Icon';
import './CircularChain.css';

const ETAPAS = [
  {
    numero: '01',
    icone: 'leaf',
    titulo: 'Resíduo',
    descricao:
      'A biomassa ganha um novo destino, evitando o descarte e reduzindo emissões.',
  },
  {
    numero: '02',
    icone: 'flask',
    titulo: 'Bioinsumo',
    descricao:
      'Tecnologia local converte o resíduo em fertilizante rico em nutrientes.',
  },
  {
    numero: '03',
    icone: 'droplet',
    titulo: 'Solo',
    descricao:
      'Fertilidade volta para o campo, com mais qualidade e produtividade.',
  },
  {
    numero: '04',
    icone: 'cloud',
    titulo: 'Carbono',
    descricao:
      'Remoção durável de carbono, com certificação e geração de créditos.',
  },
  {
    numero: '05',
    icone: 'shieldCheck',
    titulo: 'Comprovação',
    descricao:
      'Rastreabilidade e verificação por certificadoras internacionais.',
  },
];

function ChainStep(props) {
  return (
    <li className="chain-step">
      <div className="chain-step-card">
        <span className="chain-step-icone">
          <Icon name={props.icone} />
        </span>

        <span className="chain-step-numero">{props.numero}</span>

        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
      </div>

      {!props.ultimo && (
        <span className="chain-step-seta">
          <Icon name="arrowRight" />
        </span>
      )}
    </li>
  );
}

function CircularChain() {
  return (
    <section id="cadeia" className="chain-section">
      <div className="container">
        <div className="chain-heading">
          <div className="chain-heading-main">
            <span className="section-eyebrow">CIRCULAR POR NATUREZA</span>
            <h2>Uma cadeia onde nada se perde.</h2>
          </div>

          <p>
            Conectamos cooperativas, produtores e empresas em uma jornada
            rastreável — da biomassa ao impacto positivo comprovado.
          </p>
        </div>

        <ul className="chain-list">
          {ETAPAS.map((etapa, indice) => (
            <ChainStep
              key={etapa.numero}
              numero={etapa.numero}
              icone={etapa.icone}
              titulo={etapa.titulo}
              descricao={etapa.descricao}
              ultimo={indice === ETAPAS.length - 1}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CircularChain;
