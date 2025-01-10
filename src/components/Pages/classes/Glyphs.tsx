import { InfiniteScroll } from "./utils";

export const info =
  "Scully’s Irish Pub \n We’re Irish, that’s why! \nScully’s Irish Pub & Eatery pays homage \n" +
  "to our Irish heritage with traditional \nIrish fare and hefty pints of Guinness, while " +
  "also incorporating the Island's rich history and maritime ties. The location sits yards " +
  "away from the water in an old house and immediately evokes feelings of the *Old Man & the " +
  "Sea*. The space will feel warm and inviting like our guests are family. You could just as " +
  "easily curl up in the corner with a good book and a good bite or throw back Jameson shooters " +
  "with your buddies after a pickleball game. This is a family place tied to legacy, love, and our " +
  "unrelenting desire to cultivate lived spaces where people can come as they are.";

export function Main() {
  const pageContent = (
    <div style={{ background: "linear-gradient(to bottom, red, blue)", minHeight: "150vh" }}>
      test page !<div style={{ height: "100vh", marginBottom: "10px" }}></div>
      hi
    </div>
  );
  return <InfiniteScroll page={pageContent} />;
}

export function Preview() {
  return (
    <>
      <div>Glyphs Preview</div>
    </>
  );
}
