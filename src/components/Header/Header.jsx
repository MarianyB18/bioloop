import { useState } from 'react';
import Icon from '../Icon/Icon';
import './Header.css';

const NAV_ITEMS = [
  { label: 'Home', href: '/', active: true },
  { label: 'Cooperativa', href: '/cooperativa' },
  { label: 'Carbono', href: '/carbono' },
  { label: 'Fale conosco', href: '/fale-conosco' },
];

// Recebe os dados do link como props — nunca hardcoded direto no menu.
function NavLink(props) {
  return (
    <li>
      <a
        href={props.href}
        className={props.active ? 'nav-link nav-link-active' : 'nav-link'}
      >
        {props.label}
      </a>
    </li>
  );
}

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function alternarMenu() {
    setMenuAberto(!menuAberto);
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="header-logo">
          <Icon name="leaf" className="header-logo-icon" />
          BioLoop
        </a>

        <nav className={menuAberto ? 'header-nav header-nav-open' : 'header-nav'}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                label={item.label}
                href={item.href}
                active={item.active}
              />
            ))}
          </ul>

          <a href="/cadastro" className="btn header-cta">
            Cadastro
          </a>
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
