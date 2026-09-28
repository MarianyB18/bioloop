import Icon from '../../../components/Icon/Icon';
import './Hero.css';

function Hero() {
  return (
    <section className="fc-hero">
      <div className="fc-hero-overlay" aria-hidden="true" />
      <div className="container fc-hero-inner">
        <span className="eyebrow fc-hero-eyebrow">
          <Icon name="mail" /> FALE CONOSCO
        </span>

        <h1 className="fc-hero-title">Estamos prontos para te atender!</h1>

        <p className="fc-hero-subtitle">
          Tire suas dúvidas, envie sua mensagem ou fale com a nossa equipe.
          Será um prazer conversar com você!
        </p>
      </div>
    </section>
  );
}

export default Hero;
