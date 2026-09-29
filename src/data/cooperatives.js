import visaoAlto from '../assets/images/visao-alto.jpg';
import usinaBiochar from '../assets/images/usina-biochar.png';
import maoNoSolo from '../assets/images/mao-no-solo.jpg';

export const SERVICOS_FILTRO = [
  { value: 'todos', label: 'Todos os serviços' },
  { value: 'graos', label: 'Grãos' },
  { value: 'frutas-hortalicas', label: 'Frutas e hortaliças' },
  { value: 'leite-derivados', label: 'Leite e derivados' },
  { value: 'agroflorestal', label: 'Agroflorestal' },
  { value: 'artesanato', label: 'Artesanato' },
  { value: 'biomassa', label: 'Biomassa e compostagem' },
];

export const REGIOES_FILTRO = [
  { value: 'todas', label: 'Todas as regiões' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'PR', label: 'Paraná' },
];

export const COOPERATIVAS = [
  {
    nome: 'Coop. AgroVerde',
    imagem: visaoAlto,
    municipio: 'Ipameri',
    estado: 'GO',
    descricao:
      'Produção e beneficiamento de grãos, com foco em qualidade e sustentabilidade. Atua com pequenos e médios produtores da região.',
    servico: 'graos',
    tags: ['Grãos', 'Armazenamento', 'Transporte'],
    disponivel: true,
  },
  {
    nome: 'Coop. Sabores do Cerrado',
    imagem: maoNoSolo,
    municipio: 'Rio Verde',
    estado: 'GO',
    descricao:
      'Especializada no processamento de frutas e hortaliças, oferecendo produtos de alto valor agregado.',
    servico: 'frutas-hortalicas',
    tags: ['Frutas e hortaliças', 'Processamento', 'Embalagem'],
    disponivel: true,
  },
  {
    nome: 'Coop. Pecuária Forte',
    imagem: visaoAlto,
    municipio: 'Uruaçu',
    estado: 'GO',
    descricao:
      'Atua na produção de leite e derivados, com foco no bem-estar animal e na sustentabilidade da cadeia produtiva.',
    servico: 'leite-derivados',
    tags: ['Leite', 'Derivados', 'Transporte'],
    disponivel: true,
  },
  {
    nome: 'Coop. Agroflorestal do Vale',
    imagem: maoNoSolo,
    municipio: 'Alta Floresta',
    estado: 'MT',
    descricao:
      'Produz, maneja e cultiva sistemas agroflorestais, contribuindo para a recuperação de áreas degradadas e a produção sustentável.',
    servico: 'agroflorestal',
    tags: ['Mudas', 'Agroflorestal', 'Reflorestamento'],
    disponivel: true,
  },
  {
    nome: 'Coop. Raízes do Campo',
    imagem: usinaBiochar,
    municipio: 'Jataí',
    estado: 'GO',
    descricao:
      'Produz artesanato e produtos de sociobiodiversidade, valorizando a cultura local e o trabalho das famílias rurais.',
    servico: 'artesanato',
    tags: ['Artesanato', 'Produtos da sociobiodiversidade', 'Comércio'],
    disponivel: true,
  },
  {
    nome: 'Coop. Ciclo Verde',
    imagem: visaoAlto,
    municipio: 'Toledo',
    estado: 'PR',
    descricao:
      'Especializada na gestão de resíduos orgânicos e na captação de biomassa, promovendo a economia circular no campo.',
    servico: 'biomassa',
    tags: ['Biomassa', 'Compostagem', 'Resíduos orgânicos'],
    disponivel: true,
  },
];
