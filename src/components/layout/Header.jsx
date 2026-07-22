export default function Header() {
  const navLinks = [
    { href: '#lineup', label: 'Lineup' },
    { href: '#service', label: 'Service' },
    { href: '#visit', label: 'Visit' },
  ];

  return (
    <header className="header" role="banner">
      <div className="header__inner">
        <a href="#top" className="header__logo" aria-label="Carrio Motors home">
          carrio motors
        </a>
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <a href={link.href} className="header__nav-link" role="menuitem">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}