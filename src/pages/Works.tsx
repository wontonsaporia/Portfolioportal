import { works } from "../data/works";
import { workCategories } from "../data/profile";
import Card from "../components/Card";

export default function Works() {
  return (
    <section className="wrap section">
      <div className="section__head">
        <h2 className="section__title">Works</h2>
        <span className="section__count">{works.length} 件</span>
      </div>
      <p className="section__lead">
        完成した制作物の一覧。アート、3DCG、ワークショップ、Web／ツールなどを横断して掲載します。
      </p>
      <div className="legend">
        {workCategories.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      <div className="grid">
        {works.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
