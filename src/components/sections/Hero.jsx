export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__background">
        <img
          src="https://images.pexels.com/photos/31160273/pexels-photo-31160273.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
          alt="Modern electric car moving quickly on a highway"
          className="hero__bg-image"
        />
        <div className="hero__gradient" aria-hidden="true" />
      </div>

      <div className="hero__content">
        <div className="hero__copy">
          <p className="hero__label">carrio-motors</p>
          <h1 id="hero-title" className="hero__title">
            Drive something with a pulse.
          </h1>
          <p className="hero__description">
            A modern performance dealership for handpicked sports cars, electric grand tourers,
            and luxury machines ready for the road today.
          </p>
          <div className="hero__actions">
            <a href="#lineup" className="hero__cta-primary">
              Explore cars
              <span className="hero__cta-arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a href="#visit" className="hero__cta-secondary">
              Book a viewing
            </a>
          </div>
        </div>

        <div className="hero__scroll-indicator" aria-hidden="true">
          <span className="hero__scroll-line" />
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </div>
      </div>
    </section>
  );
}