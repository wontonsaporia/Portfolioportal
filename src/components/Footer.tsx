import { site } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__mark">{site.mark}</div>
        <nav className="footer__links" aria-label="Contact">
          {site.contacts.map((c) => (
            <a
              key={c.label}
              href={c.url}
              target={c.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {c.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="wrap">
        <p className="footer__note">© {year} {site.mark} — built with React + Vite, hosted on GitHub Pages.</p>
      </div>
    </footer>
  );
}
