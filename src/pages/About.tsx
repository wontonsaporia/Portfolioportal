import { about, site } from "../data/profile";

export default function About() {
  return (
    <section className="wrap section">
      <div className="section__head">
        <h2 className="section__title">About</h2>
        <span className="section__count">プロフィール</span>
      </div>

      <div className="about">
        <div className="about__bio">
          {about.bio.map((p, i) => (
            <p key={i} className={i === about.bio.length - 1 ? "about__lead" : ""}>
              {p}
            </p>
          ))}

          <div style={{ marginTop: "2.5rem" }}>
            <span className="eyebrow">略歴</span>
            <div style={{ marginTop: "1rem" }}>
              {about.history.map((h, i) => (
                <div key={i} className="history__row">
                  <span className="history__year">{h.year}</span>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside>
          <dl className="deflist">
            <div className="deflist__row">
              <dt className="deflist__key">活動領域</dt>
              <dd className="deflist__val">
                <div className="chips">
                  {about.areasOfWork.map((a) => (
                    <span key={a} className="chip">
                      {a}
                    </span>
                  ))}
                </div>
              </dd>
            </div>
            <div className="deflist__row">
              <dt className="deflist__key">使用ツール</dt>
              <dd className="deflist__val">
                <div className="chips">
                  {about.tools.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </dd>
            </div>
            <div className="deflist__row">
              <dt className="deflist__key">関心領域</dt>
              <dd className="deflist__val">
                <div className="chips">
                  {about.interests.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </dd>
            </div>
            <div className="deflist__row">
              <dt className="deflist__key">連絡先</dt>
              <dd className="deflist__val">
                <div className="footer__links" style={{ flexWrap: "wrap" }}>
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
                </div>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
