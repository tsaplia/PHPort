export const info =
  "Scully’s Irish Pub \n We’re Irish, that’s why! \nScully’s Irish Pub & Eatery pays homage \n" +
  "to our Irish heritage with traditional \nIrish fare and hefty pints of Guinness, while " +
  "also incorporating the Island's rich history and maritime ties. The location sits yards " +
  "away from the water in an old house and immediately evokes feelings of the *Old Man & the " +
  "Sea*. The space will feel warm and inviting like our guests are family. You could just as " +
  "easily curl up in the corner with a good book and a good bite or throw back Jameson shooters " +
  "with your buddies after a pickleball game. This is a family place tied to legacy, love, and our " +
  "unrelenting desire to cultivate lived spaces where people can come as they are.";

export function Main(): React.ReactElement {
  return (
    <div className="narrow-page">
      <div className="mb-20 small-screen-text">
        Projects and singular explorations are approached with a lack of constraint in mind,
        avoiding rigidity in effort to prioritize creativity in its fullest sense, and making
        decisions based on the value they add, not the investment they return. Site designed by
        Pasha & coded by Yuna 2025©
      </div>
      <div
        className="w-full"
        style={{ background: "linear-gradient(to bottom, red, blue)", minHeight: "150vh" }}
      >
        <span className="ms-6">Glyphs page </span>
        <div style={{ height: "100vh", marginBottom: "10px" }}></div>
        hi
      </div>
    </div>
  );
}

export function Preview() {
  return (
    <div className="w-full p-5">
      <div
        style={{
          background: "linear-gradient(to bottom, white, grey)",
          opacity: "0.3",
          color: "black",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        Glyphs Preview
      </div>
    </div>
  );
}
