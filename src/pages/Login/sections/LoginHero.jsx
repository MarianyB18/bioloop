import maoNoSolo from '../../../assets/images/mao-no-solo.jpg';
import './LoginHero.css';

function LoginHero() {
  return (
    <section className="login-hero">
      <div className="container login-hero-inner">
        <div className="login-hero-text">
          <span className="section-eyebrow">FAÇA PARTE DESSA TRANSFORMAÇÃO</span>
          <h1 className="login-hero-title">Junte-se ao BioLoop!</h1>
          <p className="login-hero-subtitle">
            Cadastre-se agora e tenha acesso a soluções sustentáveis que
            conectam cooperativas, produtores e o mercado de carbono.
          </p>
        </div>

        <div className="login-hero-image">
          <img
            src={maoNoSolo}
            alt="Mãos segurando solo com uma muda de planta"
          />
        </div>
      </div>
    </section>
  );
}

export default LoginHero;
