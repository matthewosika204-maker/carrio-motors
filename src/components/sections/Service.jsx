import { services } from '@/data/vehicles';

export default function Service() {
  return (
    <section id="service" className="service" aria-labelledby="service-title">
      <div className="service__background" aria-hidden="true">
        <img
          src="https://images.pexels.com/photos/17632052/pexels-photo-17632052.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1800"
          alt="Luxury sports cars inside a modern dealership"
          className="service__bg-image"
        />
        <div className="service__overlay" />
      </div>

      <div className="service__content">
        <header className="service__header reveal-on-scroll">
          <p className="service__label">Concierge buying</p>
          <h2 id="service-title" className="service__title">
            The showroom moves at your speed.
          </h2>
          <p className="service__description">
            carrio-motors pairs real inventory with a guided buying process, clear history checks,
            financing support, and delivery planning from the first call.
          </p>
        </header>

        <ul className="service__features" role="list" aria-label="Concierge services">
          {services.map((service, index) => (
            <li
              key={service}
              className="service__feature reveal-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="service__feature-name">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}