import { services } from '../data/services.js';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container split">
        <div>
          <h2>What we build</h2>
          <p className="split-note">
            Several kinds of work, one team. Tell us the problem and we will tell you which one fits.
          </p>
        </div>
        <ul className="service-list">
          {services.map((service) => (
            <li key={service.name} className="service-item">
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
