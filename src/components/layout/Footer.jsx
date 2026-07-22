export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { href: '#lineup', label: 'Lineup' },
      { href: '#service', label: 'Service' },
    ],
    contact: [
      { href: 'mailto:sales@carrio-motors.example', label: 'sales@carrio-motors.example' },
      { href: 'tel:+15550190777', label: '+1 555 019 0777' },
    ],
    hours: [
      { label: 'Monday – Saturday' },
      { label: '9:00 AM – 7:00 PM' },
    ],
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" className="footer__logo" aria-label="Carrio Motors home">
              carrio motors
            </a>
            <p className="footer__tagline">
              Curated performance, electric, and luxury vehicles. Private
              appointments. Nationwide enclosed delivery.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__nav-section">
              <h3 className="footer__nav-title">Explore</h3>
              <ul className="footer__nav-list">
                {footerLinks.explore.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="footer__nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__nav-section">
              <h3 className="footer__nav-title">Contact</h3>
              <ul className="footer__nav-list">
                {footerLinks.contact.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="footer__contact-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__nav-section">
              <h3 className="footer__nav-title">Hours</h3>
              <ul className="footer__hours-list">
                {footerLinks.hours.map((item, index) => (
                  <li key={index}>{item.label}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__divider" />
        <div className="footer__bottom">
          <p>© {currentYear} carrio motors. All rights reserved.</p>
          <p>Built for the open road.</p>
        </div>
      </div>
    </footer>
  );
}