import Icon from '../Icon/Icon';
import './Footer.css';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Cooperativa', href: '/cooperativa' },
  { label: 'Carbono', href: '/carbono' },
  { label: 'Fale conosco', href: '/fale-conosco' },
];

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <Icon name="leaf" className="footer-logo-icon" />
            BioLoop
          </a>
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
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-connect">
          <span className="footer-heading">Conexão</span>
          <p>Tecnologia · Agro · Sustentabilidade</p>
          <a href="/cadastro" className="btn header-cta footer-cta">
            Faça parte da rede
          </a>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {anoAtual} BioLoop. Economia circular que regenera.</p>
      </div>
    </footer>
  );
}

export default Footer;
