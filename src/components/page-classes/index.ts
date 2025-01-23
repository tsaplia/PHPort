import * as Glyphs from "./Glyphs";
import * as Stuff from "./Stuff";
import * as Core from "./Core";
import * as Tortik from "./Tortik";

export const indexPages = [
  { name: "tortik", ready: true, id: "tortik" },
  { name: "fish eye", ready: true, id: "stuff" },
  { name: "bot works", ready: true, id: "glyphs" },
  { name: "test", ready: false },
  { name: "stuff-24", ready: false },
] as const;

export const pageComponents = {
  stuff: Stuff,
  glyphs: Glyphs,
  core: Core,
  tortik: Tortik
} as const;

export type Pages = keyof typeof pageComponents;
