import { NavLink } from "react-router-dom";
import { site } from "../data/profile";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/works", label: "Works" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <NavLink to="/" className="nav__mark" aria-label="Home">
          {site.mark}
          <span>●</span>
        </NavLink>
        <nav aria-label="Primary">
          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) => (isActive ? "is-active" : "")}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
