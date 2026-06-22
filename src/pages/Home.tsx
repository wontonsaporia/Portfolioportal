import { Link } from "react-router-dom";
import { site, areas } from "../data/profile";
import { works } from "../data/works";
import { projects } from "../data/projects";
import Card from "../components/Card";

export default function Home() {
  const featured = [...projects, ...works].filter((i) => i.featured).slice(0, 6);

  return (
    <>
      <section className="wrap hero">
        <span className="eyebrow">{site.eyebrow}</span>
        <h1 className="hero__statement">
          {site.statementLines.map((line, i) => (
            <span key={i} style={{ display: "block" }}>
              {line}
            </span>
          ))}
        </h1>
        <p className="hero__intro">{site.intro}</p>

        <nav className="areas" aria-label="活動領域">
          {areas.map((a) => (
            <Link key={a.to} to={a.to} className="area">
              <span className="area__label">
                {a.label}
                <span className="area__arrow">→</span>
              </span>
              <span className="area__sub">{a.sub}</span>
            </Link>
          ))}
        </nav>
      </section>

      <section className="wrap section">
        <div className="section__head">
          <h2 className="section__title">Selected</h2>
          <span className="section__count"> / {featured.length} 件</span>
        </div>
        <div className="grid">
          {featured.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
