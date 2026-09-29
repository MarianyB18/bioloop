import Icon from '../../../components/Icon/Icon';
import { SERVICOS_FILTRO, REGIOES_FILTRO } from '../../../data/cooperatives';
import './SearchFilters.css';

function SearchFilters(props) {
  function aoEnviar(event) {
    event.preventDefault();
    props.aoFiltrar();
  }

  return (
    <section className="search-filters-section">
      <div className="container">
        <form className="search-filters-bar" onSubmit={aoEnviar}>
          <label className="search-filters-input">
            <Icon name="search" />
            <input
              type="text"
              value={props.busca}
              onChange={(event) => props.setBusca(event.target.value)}
              placeholder="Buscar por nome da cooperativa, município ou serviço..."
              aria-label="Buscar por nome da cooperativa, município ou serviço"
            />
          </label>

          <select
            value={props.servico}
            onChange={(event) => props.setServico(event.target.value)}
            aria-label="Filtrar por serviço"
          >
            {SERVICOS_FILTRO.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>

          <select
            value={props.regiao}
            onChange={(event) => props.setRegiao(event.target.value)}
            aria-label="Filtrar por região"
          >
            {REGIOES_FILTRO.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>

          <button type="submit" className="btn btn-primary">
            <Icon name="filter" /> Filtrar
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchFilters;
