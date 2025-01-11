import * as Glyphs from "./Glyphs";
import * as Stuff from "./Stuff";

export const indexPages = ["stuff", "glyphs"] as const;

export type IndexPages = (typeof indexPages)[number];

export const pageComponents: { [name in IndexPages]: PageComponent } = {
  stuff: Stuff,
  glyphs: Glyphs,
};
