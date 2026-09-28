import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import './Footer.css';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Cooperativa', href: '/cooperativa' },
  { label: 'Carbono', href: '/carbono' },
  { label: 'Fale conosco', href: '/fale-conosco' },
];

const SAC_LINKS = [
  {
    icon: 'phone',
    text: '(64) 3601-1500',
    href: 'tel:+556436011500',
  },
  {
    icon: 'mail',
    text: 'sac@bioloop.coop.br',
    href: 'mailto:sac@bioloop.coop.br',
  },
  {
    icon: 'pin',
    text: 'Av. Presidente Vargas, Nº 1.876 · Jd. Goiás · Rio Verde - GO',
    href: 'https://maps.google.com/?q=Av.+Presidente+Vargas,+1876,+Rio+Verde+GO',
  },
];

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Icon name="leaf" className="footer-logo-icon" />
            BioLoop
          </Link>
          <p>
            Transformando resíduos em fertilidade, carbono e valor para o
            campo.
          </p>
        </div>

        <div className="footer-nav">
          <span className="footer-heading">Navegue</span>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-connect">
          <span className="footer-heading">Conexão</span>
          <p>Tecnologia · Agro · Sustentabilidade</p>
          <Link to="/cadastro" className="btn header-cta footer-cta">
            Faça parte da rede
          </Link>
        </div>

        <div className="footer-sac">
          <span className="footer-heading">SAC</span>
          <ul className="footer-sac-list">
            {SAC_LINKS.map((item) => (
              <li key={item.text}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <Icon name={item.icon} />
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {anoAtual} BioLoop. Economia circular que regenera.</p>
      </div>
    </footer>
  );
}

export default Footer;
