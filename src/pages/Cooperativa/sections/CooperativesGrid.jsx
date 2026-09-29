import Icon from '../../../components/Icon/Icon';
import './CooperativesGrid.css';

function CooperativeCard(props) {
  return (
    <li className="coop-card">
      <div className="coop-card-capa">
        <img
          src={props.imagem}
          alt=""
          className="coop-card-capa-imagem"
        />
      </div>

      <div className="coop-card-conteudo">
        <span className="coop-card-icone">
          <Icon name="leaf" />
        </span>

        <h3>{props.nome}</h3>

        <p className="coop-card-local">
          <Icon name="pin" /> {props.municipio} - {props.estado}
        </p>

        <p className="coop-card-descricao">{props.descricao}</p>

        <ul className="coop-card-tags">
          {props.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        {props.disponivel && (
          <span className="coop-card-status">
            <span className="coop-card-status-dot" />
            Disponível
          </span>
        )}
      </div>
    </li>
  );
}

function CooperativesGrid(props) {
  return (
    <section className="coop-grid-section">
      <div className="container">
        {props.cooperativas.length === 0 ? (
          <p className="coop-grid-vazio">
            Nenhuma cooperativa encontrada com esses filtros.
          </p>
        ) : (
          <ul className="coop-grid">
            {props.cooperativas.map((coop) => (
              <CooperativeCard
                key={coop.nome}
                nome={coop.nome}
                municipio={coop.municipio}
                estado={coop.estado}
                descricao={coop.descricao}
                tags={coop.tags}
                disponivel={coop.disponivel}
                imagem={coop.imagem}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default CooperativesGrid;
