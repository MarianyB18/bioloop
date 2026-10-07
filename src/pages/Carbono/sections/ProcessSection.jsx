import Icon from '../../../components/Icon/Icon';

const ETAPAS = [
  {
    numero: '01',
    titulo: 'Receber resíduos',
    descricao:
      'Resíduos agroindustriais como casca, bagaço, palha e dejetos são coletados e encaminhados para a unidade de processamento.',
    imagemAlt: 'Resíduos agroindustriais sendo coletados',
  },
  {
    numero: '02',
    titulo: 'Preparar biomassa',
    descricao:
      'Os resíduos são triturados, secos e padronizados para garantir eficiência no processo de pirólise.',
    imagemAlt: 'Biomassa triturada e preparada para pirólise',
  },
  {
    numero: '03',
    titulo: 'Produzir biochar',
    descricao:
      'A biomassa é submetida à pirólise controlada entre 300 e 700°C, com pouco ou nenhum oxigênio, gerando biochar, bio-óleo e syngás (reaproveitado para alimentar o forno).',
    imagemAlt: 'Forno de pirólise produzindo biochar',
  },
  {
    numero: '04',
    titulo: 'Aplicar no solo',
    descricao:
      'O biochar é usado como condicionador de solo e base para biofertilizante, contribuindo para a saúde do solo e a produtividade das lavouras.',
    imagemAlt: 'Biochar aplicado no solo de uma lavoura',
  },
  {
    numero: '05',
    titulo: 'Certificar e comercializar',
    descricao:
      'Toda a produção é registrada e auditada por certificadoras independentes, como Puro.earth ou Verra, gerando créditos de carbono (CORCs) que são comercializados com empresas compradoras.',
    imagemAlt: 'Certificação e comercialização de créditos de carbono',
  },
];

function ProcessSection() {
  return (
    <section className="carbono-process" id="processo">
      <div className="container carbono-process-inner">
        <span className="section-eyebrow carbono-process-eyebrow">
          NOSSO PROCESSO
        </span>

        <h2 className="carbono-process-title">
          Do resíduo ao carbono certificado.
        </h2>

        <p className="carbono-process-subtitle">
          Um ciclo completo que transforma resíduos agroindustriais em biochar,
          com rastreabilidade e verificação independente.
        </p>

        <ol className="carbono-process-steps">
          {ETAPAS.map((etapa) => (
            <li key={etapa.numero} className="carbono-process-step">
              <div
                className="carbono-process-step-media"
                role="img"
                aria-label={etapa.imagemAlt}
              />
              <span className="carbono-process-step-number">
                {etapa.numero}
              </span>
              <h3 className="carbono-process-step-title">{etapa.titulo}</h3>
              <p className="carbono-process-step-description">
                {etapa.descricao}
              </p>
            </li>
          ))}
        </ol>

        <div className="carbono-process-arrows" aria-hidden="true">
          {ETAPAS.slice(1).map((etapa) => (
            <span
              key={etapa.numero}
              className="carbono-process-arrow"
            >
              <Icon name="arrowRight" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
