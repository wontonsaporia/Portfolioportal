// Shared data model. Works and Projects use the same shape so cards render
// identically; the difference is editorial (Works = finished pieces, Projects =
// ongoing / in-progress / research). Add a new entry by appending to the arrays
// in works.ts / projects.ts — nothing else needs to change.

export type Status = "completed" | "ongoing" | "prototype" | "archived";

export type Category =
  | "Art"
  | "Game"
  | "3DCG"
  | "ZINE"
  | "Workshop"
  | "Web/Tool"
  | "Research";

export type Link = {
  label: string;
  url: string;
};

export type Item = {
  /** Stable slug used for keys and (later) detail-page routes. */
  id: string;
  title: string;
  year: string;
  category: Category;
  status: Status;
  description: string;
  /** Path under /public, or remote URL. Omit to use the generated mark. */
  thumbnail?: string;
  tags: string[];
  links?: Link[];
  /** Surface on the Home "Selected" rail. */
  featured?: boolean;
};

export const STATUS_LABEL: Record<Status, string> = {
  completed: "完成",
  ongoing: "進行中",
  prototype: "試作",
  archived: "保管",
};
