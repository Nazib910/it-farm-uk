import { siteConfig } from '../data/siteConfig.js';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-legal">
          <p>
            © {year} {siteConfig.businessName}. Serving businesses across the United Kingdom.
          </p>
          <p>
            {siteConfig.legalName}
            {siteConfig.companyNumber ? `, company no. ${siteConfig.companyNumber}` : ''}
            . Registered office: {siteConfig.registeredAddress}
          </p>
        </div>
        <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </div>
    </footer>
  );
}
