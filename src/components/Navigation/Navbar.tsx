import { useState } from "react";
import { Link } from "react-router-dom";
import { Pages } from "../Pages";

interface NavtabProps {
  text: string;
  link: Pages | null;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
  _class: string;
  disabled: boolean;
}

export function Navtab({ text, active, onEnter, onLeave, _class, disabled, link }: NavtabProps) {
  const [hover, setHover] = useState<boolean>(false);
  function handle(action: "enter" | "leave") {
    if (action === "enter") {
      onEnter();
      setHover(true);
    } else if (action == "leave") {
      onLeave();
      setHover(false);
    }
  }

  if (disabled)
    return (
      <div className="flex text-muted w-auto h-[15px] mb-[8px] cursor-wait select-none">
        {"// " + text}
      </div>
    );

  return (
    <Link
      to={link ? `/${link}` : "#"}
      className="flex w-auto h-[15px] mb-[8px] cursor-pointer select-none"
      onMouseEnter={() => handle("enter")}
      onMouseLeave={() => handle("leave")}
    >
      <div className={`${_class} ${hover || active ? "text-accent" : ""}`}>{text}</div>
      <div className={active ? "text-accent" : ""}>{active ? "\u2192" : hover ? "-" : "+"}</div>
    </Link>
  );
}
export default Navtab;
