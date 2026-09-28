import Icon from '../../../components/Icon/Icon';
import { CANAIS_CONTATO } from '../../../data/contactChannels';
import './ContactChannels.css';

function ContactChannel(props) {
  return (
    <li className="channel-card">
      <span className="channel-icone">
        <Icon name={props.icone} />
      </span>
      <h3>{props.titulo}</h3>
      <p className="channel-linha">{props.linha1}</p>
      <p className="channel-linha channel-linha-secundaria">{props.linha2}</p>
      <a
        href={props.href}
        className="channel-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.acao} <Icon name="arrowRight" />
      </a>
    </li>
  );
}

function ContactChannels() {
  return (
    <section className="channels-section">
      <div className="container">
        <ul className="channels-grid">
          {CANAIS_CONTATO.map((canal) => (
            <ContactChannel
              key={canal.titulo}
              icone={canal.icone}
              titulo={canal.titulo}
              linha1={canal.linha1}
              linha2={canal.linha2}
              acao={canal.acao}
              href={canal.href}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ContactChannels;
