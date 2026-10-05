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
    pin: (
      <>
        <path d="M12 21s-7-6.4-7-11a7 7 0 0 1 14 0c0 4.6-7 11-7 11Z" />
        <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      </>
    ),
    phone: (
      <path d="M6 3.5c1 0 2.7 2 2.7 3.2 0 .8-1.4 1.6-1.4 2.4 0 1.6 3 4.6 4.6 4.6.8 0 1.6-1.4 2.4-1.4 1.2 0 3.2 1.7 3.2 2.7 0 1.7-1.6 3-3.3 3C9.5 18 3 11.5 3 6.8 3 5.1 4.3 3.5 6 3.5Z" />
    ),
    mail: <path d="M4 6h16v12H4V6Zm0 0 8 7 8-7" />,
    whatsapp: <path d="M4 4h16v12H8l-4 4V4Z" />,
    send: <path d="M4 12 20 4l-6 16-3-7-7-3Z" />,
    users: (
      <>
        <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
        <path d="M13 15c2.8 0 5 1.8 5 5" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V6l7-3 7 3v15" />
        <path d="M4 21h16" />
        <path d="M9 9h1M9 13h1M14 9h1M14 13h1" />
        <path d="M9 21v-4h5v4" />
      </>
    ),
    handshake: (
      <>
        <path d="m4 11 3-3 4 4 2-2 4 4-3 3-4-4-2 2-4-4Z" />
        <path d="M7 8 9 6h3l2 2M17 8l3 3-3 3" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
    filter: <path d="M4 5h16l-6 7v6l-4 2v-8L4 5Z" />,
    fileText: (
      <>
        <path d="M6 3h8l5 5v13H6V3Z" />
        <path d="M14 3v5h5" />
        <path d="M9 12h6M9 16h6" />
      </>
    ),
    alert: (
      <>
        <path d="M12 4 2.5 20h19L12 4Z" />
        <path d="M12 10v5" />
        <path d="M12 17.8h.01" />
      </>
    ),
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
