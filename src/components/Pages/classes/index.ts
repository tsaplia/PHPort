import * as Glyphs from "./Glyphs"
import * as Stuff from "./Stuff"

export const pageComponents: {[name: string]: PageComponent} = {
    stuff: Stuff,
    glyphs: Glyphs
} 

export const pageList = ["stuff", "glyphs"]
export type Pages = (typeof pageList)[number];