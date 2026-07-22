import { useMemo, useState } from 'react';
import { vehicles } from '@/data/vehicles';

export default function Lineup() {
  const [activeVehicle, setActiveVehicle] = useState(vehicles[0].name);

  const selectedVehicle = useMemo(
    () => vehicles.find((v) => v.name === activeVehicle) ?? vehicles[0],
    [activeVehicle]
  );

  return (
    <section id="lineup" className="lineup" aria-labelledby="lineup-title">
      <div className="lineup__inner">
        <header className="lineup__header reveal-on-scroll">
          <p className="lineup__label">Current lineup</p>
          <h2 id="lineup-title" className="lineup__title">
            Three ways to leave ordinary behind.
          </h2>
        </header>

        <div className="lineup__grid">
          <nav className="lineup__nav" aria-label="Vehicle selection">
            {vehicles.map((vehicle) => {
              const isActive = vehicle.name === selectedVehicle.name;
              return (
                <button
                  key={vehicle.name}
                  type="button"
                  onClick={() => setActiveVehicle(vehicle.name)}
                  className={`lineup__nav-item ${isActive ? 'lineup__nav-item--active' : ''}`}
                  aria-pressed={isActive}
                  aria-current={isActive ? 'true' : 'false'}
                >
                  <span className="lineup__nav-type">{vehicle.type}</span>
                  <span className="lineup__nav-name-row">
                    <span className="lineup__nav-name">{vehicle.name}</span>
                    <span className="lineup__nav-view">View</span>
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="lineup__stage animate-stage-in">
            <div className="lineup__image-wrapper">
              <img
                src={selectedVehicle.image}
                alt={selectedVehicle.alt}
                className="lineup__image"
              />
            </div>
            <div className="lineup__details">
              <span className="lineup__price">{selectedVehicle.price}</span>
              <span className="lineup__range">{selectedVehicle.range}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}