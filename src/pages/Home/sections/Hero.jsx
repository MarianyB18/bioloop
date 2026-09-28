import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon/Icon';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-inner">
        <span className="eyebrow hero-eyebrow">
          <Icon name="leaf" /> ECONOMIA CIRCULAR NO CAMPO
        </span>

        <h1 className="hero-title">
          Do resíduo
          <br />
          ao valor.
        </h1>

        <p className="hero-subtitle">
          Tecnologia que transforma resíduos agroindustriais em bioinsumos,
          carbono removido e renda para o campo.
        </p>

        <div className="hero-actions">
          <Link to="/cadastro" className="btn btn-onlight">
            Quero fazer parte <Icon name="arrowRight" />
          </Link>
          <a href="#cadeia" className="btn btn-outline-onbrand">
            Conheça a BioLoop
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
