import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
