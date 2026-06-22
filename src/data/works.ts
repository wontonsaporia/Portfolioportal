import type { Item } from "./types";

// Finished, presentable pieces. Replace placeholder copy with your own and drop
// thumbnails into /public, then set `thumbnail: "your-file.jpg"`.
export const works: Item[] = [
  {
    id: "mugen-enten",
    title: "無限遠点",
    year: "2024",
    category: "Art",
    status: "completed",
    description: "",
    tags: ["painting", "perspective"],
    featured: true,
  },
  {
    id: "nihonga-series",
    title: "日本画作品",
    year: "2023",
    category: "Art",
    status: "completed",
    description: "岩絵具と膠による日本画の制作。",
    tags: ["日本画", "analog"],
    featured: true,
  },
  {
    id: "participatory-art",
    title: "参加型アート作品",
    year: "2022",
    category: "Workshop",
    status: "completed",
    description: "鑑賞者の関与によって完成する参加型の制作・展示。",
    tags: ["participatory", "installation"],
  },
  {
    id: "3dcg-donut-trca",
    title: "3DCG講座「ドーナツ×トレカ」",
    year: "2024",
    category: "3DCG",
    status: "completed",
    description:
      "小中学生向けの3DCG入門講座。ドーナツのモデリングからトレカ風の出力までを一連で扱う。",
    tags: ["教育", "Blender", "NomadSculpt"],
    featured: true,
  },
  {
    id: "newspaper-workshop",
    title: "新聞づくりワークショップ",
    year: "2025",
    category: "Workshop",
    status: "completed",
    description:
      "新聞制作を通じたチームビルディング型ワークショップ。企画・取材・編集・紙面化を体験する。",
    tags: ["教育", "team-building", "Canva"],
  },
  {
    id: "warehouse-mvp",
    title: "大学倉庫管理システム MVP",
    year: "2025",
    category: "Web/Tool",
    status: "completed",
    description: "備品・教材の在庫を管理する学内向けの軽量Webツール。",
    tags: ["web", "tool", "MVP"],
  },
  {
    id: "qr-tool",
    title: "QRコード生成・配布ツール",
    year: "2024",
    category: "Web/Tool",
    status: "completed",
    description: "授業・配布物向けにQRコードをまとめて生成・出力するツール。",
    tags: ["web", "tool", "QR"],
  },
];
