import { useState } from 'react';
import Icon from '../../../components/Icon/Icon';
import './ContactForm.css';

const BENEFICIOS = [
  { icon: 'leaf', texto: 'Atendimento rápido e personalizado' },
  { icon: 'shieldCheck', texto: 'Equipe especializada no agronegócio' },
  { icon: 'handshake', texto: 'Soluções sustentáveis para o seu negócio' },
];

function BeneficioItem({ icon, texto }) {
  return (
    <li className="form-benefit-item">
      <span className="form-benefit-icone">
        <Icon name={icon} />
      </span>
      <span>{texto}</span>
    </li>
  );
}

function formatarTelefone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length <= 2) return digits ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function limparNome(value) {
  return value
    .replace(/[^\p{L}\s]/gu, '')
    .replace(/\s{2,}/g, ' ');
}

function ContactForm() {
  const [tipoPublico, setTipoPublico] = useState('cooperativa');
  const [tipoCadastro, setTipoCadastro] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [aceite, setAceite] = useState(false);
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  function limparErro(campo) {
    setErros((estado) => {
      if (!estado[campo]) return estado;
      const novoEstado = { ...estado };
      delete novoEstado[campo];
      return novoEstado;
    });
    setEnviado(false);
  }

  function selecionarCooperativa() {
    setTipoPublico('cooperativa');
    setTipoCadastro('');
    limparErro('tipoCadastro');
  }

  function selecionarEmpresa() {
    setTipoPublico('empresa');
    setTipoCadastro('');
    limparErro('tipoCadastro');
  }

  function validarFormulario() {
    const novosErros = {};
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    const telefoneDigitos = telefone.replace(/\D/g, '');
    const nomeValido = /^[\p{L}]+(?:[\s]+[\p{L}]+)*$/u.test(nome.trim());

    if (!tipoCadastro) novosErros.tipoCadastro = 'Selecione o tipo de cadastro.';
    if (!nome.trim()) {
      novosErros.nome = 'Informe o nome ou razão social.';
    } else if (!nomeValido) {
      novosErros.nome = 'Use apenas letras e espaços.';
    }
    if (!email.trim()) {
      novosErros.email = 'Informe o e-mail.';
    } else if (!emailValido) {
      novosErros.email = 'Digite um e-mail válido, como usuario@dominio.com.';
    }
    if (telefoneDigitos.length !== 11) {
      novosErros.telefone = 'Informe um telefone no formato (00) 00000-0000.';
    }
    if (!assunto) novosErros.assunto = 'Selecione um assunto.';
    if (!mensagem.trim()) novosErros.mensagem = 'Digite sua mensagem.';
    if (!aceite) novosErros.aceite = 'É necessário aceitar os termos.';

    return novosErros;
  }

  function enviarFormulario(event) {
    event.preventDefault();
    const novosErros = validarFormulario();
    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      setEnviado(false);
      return;
    }

    setEnviado(true);
  }

  return (
    <section className="contact-form-section">
      <div className="container contact-form-inner">
        <div className="contact-form-intro">
          <span className="section-eyebrow">FORMULÁRIO DE CONTATO</span>
          <h2>Envie sua mensagem.</h2>
          <p>
            Preencha o formulário ao lado e conte com a nossa equipe para te
            ajudar.
          </p>

          <ul className="form-benefits">
            {BENEFICIOS.map((beneficio) => (
              <BeneficioItem key={beneficio.texto} {...beneficio} />
            ))}
          </ul>
        </div>

        <form className="contact-form-card" onSubmit={enviarFormulario} noValidate>
          <div className="tipo-toggle">
            <button
              type="button"
              className={
                tipoPublico === 'cooperativa'
                  ? 'tipo-btn tipo-btn-active'
                  : 'tipo-btn'
              }
              onClick={selecionarCooperativa}
            >
              <Icon name="users" /> Cooperativa / Produtor
            </button>
            <button
              type="button"
              className={
                tipoPublico === 'empresa' ? 'tipo-btn tipo-btn-active' : 'tipo-btn'
              }
              onClick={selecionarEmpresa}
            >
              <Icon name="building" /> Empresa / Comprador
            </button>
          </div>

          <label className="form-field">
            <span>Tipo de cadastro</span>
            <select
              value={tipoCadastro}
              onChange={(event) => {
                setTipoCadastro(event.target.value);
                limparErro('tipoCadastro');
              }}
              required
              aria-invalid={Boolean(erros.tipoCadastro)}
            >
              <option value="">Selecione</option>
              {tipoPublico === 'cooperativa' ? (
                <>
                  <option value="cooperativa">Cooperativa</option>
                  <option value="produtor">Produtor rural</option>
                </>
              ) : (
                <>
                  <option value="empresa">Empresa</option>
                  <option value="comprador">Comprador de crédito de carbono</option>
                </>
              )}
              <option value="outro">Outro</option>
            </select>
            {erros.tipoCadastro && <small className="form-error">{erros.tipoCadastro}</small>}
          </label>

          <label className="form-field">
            <span>Nome completo / Razão social</span>
            <input
              type="text"
              value={nome}
              onChange={(event) => {
                setNome(limparNome(event.target.value));
                limparErro('nome');
              }}
              placeholder="Digite seu nome completo ou razão social"
              required
              autoComplete="name"
              aria-invalid={Boolean(erros.nome)}
            />
            {erros.nome && <small className="form-error">{erros.nome}</small>}
          </label>

          <div className="form-row">
            <label className="form-field">
              <span>E-mail</span>
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value.trimStart());
                  limparErro('email');
                }}
                placeholder="seu@email.com"
                required
                autoComplete="email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                aria-invalid={Boolean(erros.email)}
              />
              {erros.email && <small className="form-error">{erros.email}</small>}
            </label>

            <label className="form-field">
              <span>Telefone</span>
              <input
                type="tel"
                inputMode="numeric"
                value={telefone}
                onChange={(event) => {
                  setTelefone(formatarTelefone(event.target.value));
                  limparErro('telefone');
                }}
                placeholder="(00) 00000-0000"
                maxLength={15}
                required
                autoComplete="tel"
                aria-invalid={Boolean(erros.telefone)}
              />
              {erros.telefone && <small className="form-error">{erros.telefone}</small>}
            </label>
          </div>

          <label className="form-field">
            <span>Assunto</span>
            <select
              value={assunto}
              onChange={(event) => {
                setAssunto(event.target.value);
                limparErro('assunto');
              }}
              required
              aria-invalid={Boolean(erros.assunto)}
            >
              <option value="">Selecione o assunto</option>
              <option value="duvidas">Dúvidas gerais</option>
              <option value="parceria">Parceria com cooperativa</option>
              <option value="carbono">Projeto de carbono</option>
              <option value="suporte">Suporte técnico</option>
              <option value="outro">Outro assunto</option>
            </select>
            {erros.assunto && <small className="form-error">{erros.assunto}</small>}
          </label>

          <label className="form-field">
            <span>Mensagem</span>
            <textarea
              value={mensagem}
              onChange={(event) => {
                setMensagem(event.target.value);
                limparErro('mensagem');
              }}
              rows={4}
              placeholder="Digite sua mensagem aqui..."
              required
              aria-invalid={Boolean(erros.mensagem)}
            />
            {erros.mensagem && <small className="form-error">{erros.mensagem}</small>}
          </label>

          <label className="form-checkbox">
            <input
              type="checkbox"
              checked={aceite}
              onChange={(event) => {
                setAceite(event.target.checked);
                limparErro('aceite');
              }}
              required
              aria-invalid={Boolean(erros.aceite)}
            />
            <span>
              Declaro que li e aceito os Termos de Uso e a Política de
              Privacidade.
            </span>
          </label>
          {erros.aceite && <small className="form-error form-checkbox-error">{erros.aceite}</small>}

          <button type="submit" className="btn btn-primary form-submit">
            <Icon name="send" /> Enviar mensagem
          </button>

          {enviado && (
            <p className="form-feedback">
              Mensagem enviada! Nossa equipe vai te responder em breve.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
