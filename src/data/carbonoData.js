import CarbonField from '../assets/images/certifications/carbon-field.png';

export const PROJETO_CARBONO = {
  nome: 'Projeto de Compensação de Carbono BioLoop',
  contratoId: 'CARB-2026-001',
  status: 'ATIVO',
  responsavel: 'Marina Duarte · Coordenadora de Créditos de Carbono',
  cooperativa: 'Coop. Ciclo Verde · Toledo - PR',
  ultimaAtualizacao: '05/10/2026',
};

export const CERTIFICACAO_PROJETO = {
  selo: 'CarbonField',
  logo: CarbonField,
  numeroProjeto: 'CF-BR-2026-0842',
  status: 'Projeto verificado',
  ultimaVerificacao: '18/09/2026',
  validade: '31/12/2026',
};

export const KPIS_CONTRATO = [
  { rotulo: 'Créditos gerados', valor: '8.420 tCO₂e' },
  { rotulo: 'Créditos disponíveis', valor: '5.050' },
  { rotulo: 'Créditos comercializados', valor: '3.370' },
  { rotulo: 'CO₂e compensado', valor: '3.370 t' },
  { rotulo: 'Período do contrato', valor: '2026' },
  { rotulo: 'Status', valor: 'ATIVO' },
];

export const CONTRATO_ATIVO = {
  id: 'CARB-2026-001',
  projeto: 'Projeto de Compensação de Carbono BioLoop',
  contratante: 'Agroindustrial Cerrado Verde S.A.',
  responsavel: 'Marina Duarte · Coordenadora de Créditos de Carbono',
  inicio: '01/01/2026',
  termino: '31/12/2026',
  volumeContratado: 5000,
  volumeUtilizado: 3370,
  volumeRestante: 1630,
  status: 'ATIVO',
};

export const IMPACTO_AMBIENTAL = [
  { rotulo: 'CO₂e evitado', valor: '8.420 t' },
  { rotulo: 'Resíduos recuperados', valor: '2.840 t' },
  { rotulo: 'Materiais reciclados', valor: '1.120 t' },
  { rotulo: 'Redução estimada', valor: '18,7%' },
  { rotulo: 'Equivalência ambiental', valor: '378.900 árvores' },
  { rotulo: 'Impacto acumulado', valor: '12.480 tCO₂e' },
];

export const ORIGEM_CREDITOS = {
  cooperativa: 'Coop. Ciclo Verde',
  localizacao: 'Toledo - PR',
  materialProcessado: 'Resíduos orgânicos e biomassa',
  volumeProcessado: '2.840 t',
  creditosGerados: '8.420 tCO₂e',
  distribuicao: [
    { cooperativa: 'Coop. Ciclo Verde', estado: 'PR', percentual: 42 },
    { cooperativa: 'Coop. Agroflorestal do Vale', estado: 'MT', percentual: 31 },
    { cooperativa: 'Coop. AgroVerde', estado: 'GO', percentual: 27 },
  ],
};

export const HISTORICO_PROJETO = [
  { data: '05/10/2026', evento: 'Atualização de inventário de emissões' },
  { data: '18/09/2026', evento: 'Verificação dos dados ambientais' },
  { data: '02/09/2026', evento: 'Emissão de novos créditos' },
  { data: '15/08/2026', evento: 'Auditoria documental' },
  { data: '01/01/2026', evento: 'Início do contrato CARB-2026-001' },
];

export const RASTREABILIDADE = {
  origemDados: 'Registros operacionais das cooperativas parceiras BioLoop',
  periodoMedicao: '01/01/2026 a 30/09/2026',
  responsavelValidacao: 'Equipe de verificação BioLoop',
  ultimaAuditoria: '15/08/2026',
  registroId: 'BIO-CARB-2026-0842-A1',
  integridade: 'Dados verificados · documentação disponível',
};

export const DOCUMENTOS_PROJETO = [
  { nome: 'Certificado de emissão de créditos', data: '02/09/2026' },
  { nome: 'Relatório de auditoria', data: '15/08/2026' },
  { nome: 'Inventário de emissões', data: '05/10/2026' },
  { nome: 'Documento de verificação', data: '18/09/2026' },
  { nome: 'Contrato CARB-2026-001', data: '01/01/2026' },
];

export const PADROES_REFERENCIA = [
  { nome: 'Verra', descricao: 'Verified Carbon Standard (VCS)' },
  { nome: 'Gold Standard', descricao: 'Gold Standard for the Global Goals' },
];

export const ALERTAS_OPERACIONAIS = [
  { tipo: 'ok', texto: 'Certificação válida' },
  { tipo: 'ok', texto: 'Dados atualizados em 05/10/2026' },
  { tipo: 'ok', texto: 'Auditoria concluída' },
  { tipo: 'atencao', texto: 'Próxima verificação em 28 dias' },
];

export const SERIE_EMISSOES_EVITADAS = [
  { mes: 'Jan', valor: 420 },
  { mes: 'Fev', valor: 580 },
  { mes: 'Mar', valor: 760 },
  { mes: 'Abr', valor: 910 },
  { mes: 'Mai', valor: 1040 },
  { mes: 'Jun', valor: 1180 },
  { mes: 'Jul', valor: 1240 },
  { mes: 'Ago', valor: 1290 },
  { mes: 'Set', valor: 1000 },
];
