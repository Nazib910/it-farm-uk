import { siteConfig } from '../data/siteConfig.js';

const links = [
  { href: '#facebook-ads', label: 'Facebook ads' },
  { href: '#services', label: 'Services' },
  { href: '#scripts', label: 'Scripts' },
  { href: '#process', label: 'How we work' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand">
          {siteConfig.businessName}
        </a>
        <nav aria-label="Main">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
