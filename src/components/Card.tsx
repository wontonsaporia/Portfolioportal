import type { Item } from "../data/types";
import { STATUS_LABEL } from "../data/types";

function MarkThumb({ title, category }: { title: string; category: string }) {
  // First glyph of the title as a quiet letterform, with a small "seal" that
  // shows the category — stands in for a real thumbnail without looking broken.
  const glyph = Array.from(title)[0] ?? "·";
  const seal = category.replace("/", "").slice(0, 3).toUpperCase();
  return (
    <div className="markthumb" aria-hidden="true">
      <span className="markthumb__glyph">{glyph}</span>
      <span className="markthumb__seal">{seal}</span>
    </div>
  );
}

export default function Card({ item }: { item: Item }) {
  return (
    <article className="card">
      <div className="card__thumb">
        {item.thumbnail ? (
          <img src={item.thumbnail} alt={item.title} loading="lazy" />
        ) : (
          <MarkThumb title={item.title} category={item.category} />
        )}
      </div>

      <div className="card__body">
        <div className="card__meta">
          <span>
            {item.year} · {item.category}
          </span>
          <span className={`status status--${item.status}`}>
            <span className="status__dot" />
            {STATUS_LABEL[item.status]}
          </span>
        </div>

        <h3 className="card__title">{item.title}</h3>
        <p className="card__desc">{item.description}</p>

        {item.tags.length > 0 && (
          <div className="card__tags">
            {item.tags.map((t) => (
              <span key={t}>#{t}</span>
            ))}
          </div>
        )}

        {item.links && item.links.length > 0 && (
          <div className="card__links">
            {item.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
