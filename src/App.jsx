import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

// Por enquanto só a Home está pronta. Quando as demais telas
// (Cooperativa, Carbono, Fale conosco, Cadastro) forem entrando, este é
// o lugar para trocar <Home /> por react-router-dom (createBrowserRouter +
// RouterProvider), exatamente como no material de aula.
function App() {
  return (
    <>
      <Header />
      <main className="app-main">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
