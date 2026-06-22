import type { Category } from "./types";

export const site = {
  // Wordmark in the nav. Keep it short.
  mark: "KO",
  // Hero statement, split into lines for the display type.
  statementLines: ["つくる、教える、", "考える。"],
  eyebrow: "制作 / 教育 / 研究 — 活動の台帳",
  intro:
    "アート、3DCG、ゲーム開発、教育実践、研究ノートを横断して活動しています。完成物だけでなく、企画・試作・思考の過程も同じ価値の成果物として記録する場所です。",
  // Footer / About contact links. Replace with your real URLs.
  contacts: [
    { label: "Email", url: "kouoishi01@outlook.jp" },
    { label: "GitHub", url: "https://github.com/wontonsaporia" },
    { label: "X", url: "https://x.com/" },
  ],
};

// Activity areas surfaced on Home. Notes / Teaching are routed to placeholders
// for now (MVP scope), matching the requirements doc.
export const areas: { label: string; sub: string; to: string }[] = [
  { label: "Works", sub: "完成した制作物", to: "/works" },
  { label: "Projects", sub: "進行中の構想・試作", to: "/projects" },
  { label: "Notes", sub: "研究ノート・思考メモ", to: "/notes" },
  { label: "Teaching", sub: "講座・ワークショップ", to: "/teaching" },
];

export const about = {
  bio: [
    "3DCG・アートの指導を軸に、大学やアートスクールで教育に携わっています。制作の現場と教える現場を往復しながら、ゲーム開発やツール制作、研究ノートの蓄積を続けています。",
    "関心は、情報のかたち（情報設計・可視化）と、つくることそのものの過程にあります。",
  ],
  // Free-form, label → value. Edit freely.
  areasOfWork: ["アート / 日本画", "3DCG / モデリング", "ゲーム開発", "教育・講座設計", "研究ノート"],
  tools: ["Unity", "Blender", "NomadSculpt", "Figma", "Obsidian", "React / Vite"],
  interests: ["情報設計", "可視化", "哲学", "アニメ", "ゲームデザイン"],
  history: [
    { year: "現在", text: "大学・アートスクールで3DCG／アートを指導。技術顧問。" },
    { year: "—", text: "ゲーム開発（CUBE CAMPAIGN ほか）と研究ノートを並行して継続。" },
  ],
};

// Categories shown as labels on the Works page (no filtering yet — MVP).
export const workCategories: Category[] = [
  "Art",
  "Game",
  "3DCG",
  "ZINE",
  "Workshop",
  "Web/Tool",
];
