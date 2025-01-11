import { useState } from "react";

interface NavtabProps {
  text: string;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
  className: string;
}

export function Navtab({ text, isActive, onClick, onEnter, onLeave, className }: NavtabProps) {
  const [hover, setHover] = useState(false);
  function handle(action: "enter" | "leave" | "click") {
    if (action == "enter") setHover(true);
    else if (action == "leave") setHover(false);
    if (isActive) return;
    if (action === "enter") onEnter();
    else if (action == "leave") onLeave();
    else if (action === "click") onClick();
  }

  return (
    <div
      className="navtab"
      onMouseEnter={() => handle("enter")}
      onMouseLeave={() => handle("leave")}
      onClick={() => handle("click")}
    >
      <div className={`${className} ${hover || isActive ? "active" : ""}`}>{text}</div>
      <div className={isActive ? "active" : ""}>{isActive ? "→" : hover ? "-" : "+"}</div>
    </div>
  );
}
