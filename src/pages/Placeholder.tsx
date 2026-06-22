export default function Placeholder({
  title,
  note,
}: {
  title: string;
  note: string;
}) {
  return (
    <section className="wrap placeholder">
      <span className="eyebrow">準備中</span>
      <h1 className="placeholder__title">{title}</h1>
      <p className="placeholder__text">{note}</p>
    </section>
  );
}
