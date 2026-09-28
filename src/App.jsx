import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// App agora é só a "casca" fixa do site (Header + Footer). O conteúdo de
// cada rota é injetado no lugar do <Outlet/>, exatamente como no material
// de aula (Código-fonte 29).
function App() {
  return (
    <>
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
