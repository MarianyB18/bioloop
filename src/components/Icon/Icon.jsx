// Componente de ícone único e reutilizável.
// Em vez de criar um arquivo .svg para cada ícone, ele recebe o nome do
// ícone desejado via props e desenha o path correspondente.
function Icon(props) {
  const paths = {
    leaf: (
      <path d="M5 13c0-5 4-9 14-9 0 10-4 14-9 14-2 0-3-.5-4-1m-1-4c3 3 8 6 12 8M5 13c-1-3-1-6 1-9" />
    ),
    flask: (
      <path d="M9 3h6M10 3v6.2L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.2V3M7.5 15h9" />
    ),
    droplet: (
      <path d="M12 3s6 7.1 6 11.5a6 6 0 0 1-12 0C6 10.1 12 3 12 3Z" />
    ),
    cloud: (
      <path d="M7 18a4.5 4.5 0 0 1-.7-8.94A5.5 5.5 0 0 1 17.2 8.02 4 4 0 0 1 16.5 16v0" />
    ),
    shieldCheck: (
      <path d="M12 3l7 3v5c0 4.8-3 8.4-7 10-4-1.6-7-5.2-7-10V6l7-3Zm-3 9 2.2 2.2L15.5 10" />
    ),
    check: <path d="M4 12.5 9 17 20 6" />,
    arrowRight: <path d="M4 12h15M13 6l6 6-6 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
  };

  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="presentation"
      aria-hidden="true"
    >
      {paths[props.name]}
    </svg>
  );
}

export default Icon;
