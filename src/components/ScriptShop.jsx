import { scripts } from '../data/scripts.js';
import { siteConfig } from '../data/siteConfig.js';

export default function ScriptShop({ onAsk }) {
  return (
    <section id="scripts" className="section section-dark">
      <div className="container">
        <div className="shop-heading">
          <h2>Ready-made scripts</h2>
          <p>Fixed prices, set up for your tools. Want a change first? Ask before you buy.</p>
        </div>

        <ul className="script-list">
          {scripts.map((item) => (
            <li key={item.id} className="script-row">
              <div className="script-text">
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </div>
              <div className="script-buy">
                <span className="script-price">
                  {siteConfig.currencySymbol}
                  {item.price}
                </span>
                {item.buyUrl ? (
                  <a className="button button-primary" href={item.buyUrl}>
                    Buy now
                  </a>
                ) : (
                  <button
                    type="button"
                    className="button button-outline"
                    onClick={() => onAsk(item.name)}
                  >
                    Ask about this
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
