import type { Item } from "./types";

// In-progress constructions, prototypes, and long-running research. The status
// field drives the catalog marks (進行中 / 試作 …), so keep it accurate.
export const projects: Item[] = [
  {
    id: "cube-campaign",
    title: "CUBE CAMPAIGN",
    year: "2025—",
    category: "Game",
    status: "ongoing",
    description:
      "チェスとルービックキューブの機構を組み合わせた戦略パズル。Unity 6.4。v1は機能完成済みで、ストア配信しています。",
    tags: ["Unity", "strategy", "puzzle"],
    featured: true,
  },
  {
    id: "rubik-chess",
    title: "Rubik Chess",
    year: "2025",
    category: "Game",
    status: "prototype",
    description: "盤面を回転させる発想を出発点にしたチェス系の試作。CUBE CAMPAIGNの源流。",
    tags: ["prototype", "board-game"],
  },
  {
    id: "nana-ni-notte",
    title: "ナナにのって",
    year: "2021—",
    category: "Game",
    status: "ongoing",
    description: "進行中のゲーム制作。",
    tags: ["game", "wip"],
  },
  {
    id: "financial-meteorology",
    title: "financial-meteorology",
    year: "進行中",
    category: "Research",
    status: "ongoing",
    description: "気象予報に使われるEnkf等の手法で金融市場の状態推定を試みる研究プロジェクト。",
    tags: ["research", "estimation"],
    featured: true,
  },
  {
    id: "kalman-filter",
    title: "カルマンフィルタ入門",
    year: "進行中",
    category: "Research",
    status: "ongoing",
    description: "状態推定の基礎を、実装しながら学ぶことができるプラットフォームの制作",
    tags: ["research", "estimation"],
  },
 
  {
    id: "art-team-building",
    title: "アート×チームビルディング",
    year: "2025—",
    category: "Workshop",
    status: "ongoing",
    description:
      "アート制作を軸にした企業向けチームビルディング・プログラムの設計と提案。",
    tags: ["教育", "team-building", "OYAA"],
  },

  {
    id: "teaching-portal",
    title: "GitHub Pages 教材ポータル",
    year: "進行中",
    category: "Web/Tool",
    status: "ongoing",
    description: "授業・講座の教材を一箇所に集約する静的サイト型のポータル。",
    tags: ["web", "教育", "static-site"],
  },
];
