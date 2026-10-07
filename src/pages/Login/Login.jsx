import { useSearchParams } from 'react-router-dom';
import './Login.css';
import LoginForm from './sections/LoginForm';
import CadastroForm from './sections/CadastroForm';



function Login() {
  const [searchParams, setSearchParams] = useSearchParams();

  const mode = searchParams.get('modo') === 'cadastro' ? 'cadastro' : 'login';

  function alternarModo(novoModo) {
    setSearchParams(novoModo === 'cadastro' ? { modo: 'cadastro' } : {}, {
      replace: true,
    });
  }

  return (
    <section className="login-section">
      <div className="container login-wrapper">
        <div className="login-card">
         

          <div className="login-tabs">
            <button
              type="button"
              className={mode === 'login' ? 'login-tab login-tab-active' : 'login-tab'}
              aria-pressed={mode === 'login'}
              onClick={() => alternarModo('login')}
            >
              Entrar
            </button>
            <button
              type="button"
              className={mode === 'cadastro' ? 'login-tab login-tab-active' : 'login-tab'}
              aria-pressed={mode === 'cadastro'}
              onClick={() => alternarModo('cadastro')}
            >
              Criar conta
            </button>
          </div>

          {mode === 'login' ? (
            <LoginForm onAlternarModo={alternarModo} />
          ) : (
            <CadastroForm onAlternarModo={alternarModo} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;
