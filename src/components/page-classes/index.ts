import * as Glyphs from "./Glyphs";
import * as Stuff from "./Stuff";
import * as Core from "./Core";

type PageConfig =
  | { name: string; ready: true; id: Pages; infScroll?: boolean }
  | { name: string; ready: false };

export const indexPages: PageConfig[] = [
  { name: "stuff", ready: true, id: "stuff" },
  { name: "glyphs", ready: true, id: "glyphs", infScroll: true },
  { name: "test", ready: false },
] as const;

export const pageComponents = {
  stuff: Stuff,
  glyphs: Glyphs,
  core: Core,
} as const;

export type Pages = keyof typeof pageComponents;
