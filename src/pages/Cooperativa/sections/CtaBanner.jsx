import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon/Icon';
import './CtaBanner.css';

function CtaBanner() {
  return (
    <section className="coop-cta-section">
      <div className="container coop-cta-inner">
        <div className="coop-cta-icon" aria-hidden="true">
          <Icon name="users" />
        </div>

        <div className="coop-cta-text">
          <span className="eyebrow coop-cta-eyebrow">
            JUNTE-SE À REDE BIOLOOP
          </span>
          <h2>
            Trabalhe com quem acredita em um futuro mais sustentável.
          </h2>
        </div>

        <Link to="/cadastro" className="btn header-cta coop-cta-btn">
          Cadastrar cooperativa <Icon name="arrowRight" />
        </Link>
      </div>
    </section>
  );
}

export default CtaBanner;
