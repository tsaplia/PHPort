import * as Glyphs from "./Glyphs";
import * as Stuff from "./Stuff";
import * as Core from "./Core"

export const indexPages = [
  { name: "stuff", ready: true },
  { name: "glyphs", ready: true },
  { name: "test", ready: false },
] as const;

export const pageComponents = {
  stuff: Stuff,
  glyphs: Glyphs,
  core: Core,
} as const;

export type Pages = keyof typeof pageComponents;
