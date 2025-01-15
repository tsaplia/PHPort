import testImg from "@assets/pages/stuff/test.png";

export const info =
  "Scully’s Bottie Pub \n We’re Irish, that’s why! \nScully’s Irish Pub & Eatery pays homage \n" +
  "to our Irish heritage with traditional \nIrish fare and hefty pints of Guinness, while " +
  "also incorporating the Island's rich history and maritime ties. The location sits yards " +
  "away from the water in an old house and immediately evokes feelings of the *Old Man & the " +
  "Sea*. The space will feel warm and inviting like our guests are family. You could just as " +
  "easily curl up in the corner with a good book and a good bite or throw back Jameson shooters " +
  "with your buddies after a pickleball game. This is a family place tied to legacy, love, and our " +
  "unrelenting desire to cultivate lived spaces where people can come as they are.";

export function Main() {
  return (
    <div style={{ color: "limegreen" }} className="centered-page narrow-page">
      <div>
        <img src={testImg} alt="" />
      </div>
    </div>
  );
}

export function Preview() {
  return (
    <div className="centered-page narrow-page">
      <div>
        <img style={{ filter: "grayscale(90%)" }} src={testImg} alt="" />
      </div>
    </div>
  );
}
