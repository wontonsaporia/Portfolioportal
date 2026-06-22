import { projects } from "../data/projects";
import Card from "../components/Card";

export default function Projects() {
  const ongoing = projects.filter((p) => p.status === "ongoing").length;

  return (
    <section className="wrap section">
      <div className="section__head">
        <h2 className="section__title">Projects</h2>
        <span className="section__count">
          {projects.length} 件 / 進行中 {ongoing}
        </span>
      </div>
      <p className="section__lead">
        進行中の構想・試作・研究。
        <span className="status status--ongoing" style={{ marginLeft: ".6rem" }}>
          <span className="status__dot" /> 進行中
        </span>
      </p>
      <div className="grid">
        {projects.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
