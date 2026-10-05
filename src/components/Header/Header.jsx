import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import './Header.css';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Cooperativa', href: '/cooperativa' },
  { label: 'Carbono', href: '/carbono' },
  { label: 'Fale conosco', href: '/fale-conosco' },
];

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function alternarMenu() {
    setMenuAberto(!menuAberto);
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-logo">
          <Icon name="leaf" className="header-logo-icon" />
          BioLoop
        </Link>

        <nav className={menuAberto ? 'header-nav header-nav-open' : 'header-nav'}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    isActive ? 'nav-link nav-link-active' : 'nav-link'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="header-actions">
            <Link to="/login" className="btn header-login">
              Login
            </Link>
            <Link to="/login?modo=cadastro" className="btn header-cta">
              Cadastro
            </Link>
          </div>
        </nav>

        <button
          type="button"
          className="header-menu-toggle"
          onClick={alternarMenu}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          <Icon name={menuAberto ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}

export default Header;
