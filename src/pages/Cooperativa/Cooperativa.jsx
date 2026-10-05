import { useState } from 'react';
import PageHeader from './sections/PageHeader';
import SearchFilters from './sections/SearchFilters';
import CooperativesGrid from './sections/CooperativesGrid';
import CtaBanner from './sections/CtaBanner';
import { COOPERATIVAS } from '../../data/cooperatives';

function Cooperativa() {
  const [busca, setBusca] = useState('');
  const [servico, setServico] = useState('todos');
  const [regiao, setRegiao] = useState('todas');

  const [filtrosAplicados, setFiltrosAplicados] = useState({
    busca: '',
    servico: 'todos',
    regiao: 'todas',
  });

  function aplicarFiltros() {
    setFiltrosAplicados({
      busca,
      servico,
      regiao,
    });
  }

  const termo = filtrosAplicados.busca.trim().toLowerCase();

  const cooperativasFiltradas = COOPERATIVAS.filter((coop) => {
    const textoPesquisavel = [
      coop.nome,
      coop.municipio,
      coop.estado,
      coop.servico,
      ...coop.tags,
    ]
      .join(' ')
      .toLowerCase();

    const combinaBusca =
      termo === '' || textoPesquisavel.includes(termo);

    const combinaServico =
      filtrosAplicados.servico === 'todos' ||
      coop.servico === filtrosAplicados.servico;

    const combinaRegiao =
      filtrosAplicados.regiao === 'todas' ||
      coop.estado === filtrosAplicados.regiao;

    return combinaBusca && combinaServico && combinaRegiao;
  });

  return (
    <>
      <PageHeader />
      <SearchFilters
        busca={busca}
        setBusca={setBusca}
        servico={servico}
        setServico={setServico}
        regiao={regiao}
        setRegiao={setRegiao}
        aoFiltrar={aplicarFiltros}
      />
      <CooperativesGrid cooperativas={cooperativasFiltradas} />
      <CtaBanner />
    </>
  );
}

export default Cooperativa;
