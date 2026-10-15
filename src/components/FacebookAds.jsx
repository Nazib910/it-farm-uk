import { facebookAds } from '../data/facebookAds.js';
import './FacebookAds.css';

export default function FacebookAds() {
  return (
    <section id="facebook-ads" className="fb-section">
      <div className="container fb-grid">
        <div className="fb-intro">
          <h2>{facebookAds.title}</h2>
          <p>{facebookAds.intro}</p>

          <ul className="fb-included">
            {facebookAds.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="fb-pricing">
          <h3>Monthly plans</h3>

          <ul className="fb-tiers">
            {facebookAds.tiers.map((tier) => (
              <li
                key={tier.id}
                className={tier.highlight ? 'fb-tier fb-tier-highlight' : 'fb-tier'}
              >
                <div className="fb-tier-head">
                  <h4>{tier.name}</h4>
                  <p className="fb-price">
                    £{tier.price}
                    <span> a month</span>
                  </p>
                </div>
                <p className="fb-tier-summary">{tier.summary}</p>
                <p className="fb-tier-fit">{tier.fit}</p>

                <ul className="fb-features">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a className="button" href="#contact">
                  Get a fixed quote
                </a>
              </li>
            ))}
          </ul>

          <p className="fb-note">
            Prices in pounds sterling, excluding VAT. Ad spend is paid to Meta and is not included.
            The one-off setup fee of £{facebookAds.setupFee} covers the account, pixel and tracking
            before the first campaign goes live.
          </p>
        </div>
      </div>
    </section>
  );
}
