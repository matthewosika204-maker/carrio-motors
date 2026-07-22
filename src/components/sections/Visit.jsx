import React from 'react';

export default function Visit() {
  return (
    <section id="visit" className="visit" aria-labelledby="visit-title">
      <div className="visit__inner">
        <header className="visit__header reveal-on-scroll">
          <p className="visit__label">Visit carrio-motors</p>
          <h2 id="visit-title" className="visit__title">
            See the car before someone else starts it.
          </h2>
        </header>

        <div className="visit__panel reveal-on-scroll">
            <div className="visit__details">
              <p className="visit__section-label">Hours</p>
              <dl className="visit__dl">
                <div className="visit__dl-row">
                  <dt className="visit__dt">Monday – Saturday</dt>
                  <dd className="visit__dd">9:00 AM – 7:00 PM</dd>
                </div>
                <div className="visit__dl-row">
                  <dt className="visit__dt">Sunday</dt>
                  <dd className="visit__dd">Closed</dd>
                </div>
              </dl>
            </div>

            <div className="visit__contact">
              <p className="visit__section-label">Contact</p>
              <address className="visit__address">
                <div className="visit__contact-item">
                  <span className="visit__contact-label">Sales inquiries</span>
                  <a href="mailto:sales@carrio-motors.example" className="visit__contact-link">
                    sales@carrio-motors.example
                  </a>
                </div>
                <div className="visit__contact-item">
                  <span className="visit__contact-label">Call us</span>
                  <a href="tel:+15550190777" className="visit__contact-link">
                    +1 555 019 0777
                  </a>
                </div>
                <div className="visit__contact-item">
                  <span className="visit__contact-label">Location</span>
                  <p className="visit__location">
                    1880 Motor Parkway,<br />
                    Detroit, MI 48226
                  </p>
                </div>
              </address>
            </div>

            <a href="mailto:sales@carrio-motors.example" className="visit__cta">
              Contact sales
            </a>
        </div>

        <div className="visit__media reveal-on-scroll">
            <img
              src="https://images.pexels.com/photos/23939539/pexels-photo-23939539.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200"
              alt="Sleek electric car parked by the waterfront"
              className="visit__image"
            />
          </div>
        
      </div>
    </section>
  );
}