import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  link: string | null;
  active: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  className: string;
  disabled: boolean;
}

const Navtab: React.FC<Props> = ({ text, active, onEnter, onLeave, className, disabled, link }) => {
  const [hover, setHover] = useState<boolean>(false);
  function handleEnter() {
    if (!active && onEnter) onEnter();
    setHover(true);
  }

  function handleLeave() {
    if (!active && onLeave) onLeave();
    setHover(false);
  }
  if (disabled)
    return (
      <div className="flex text-muted w-auto h-[15px] mb-[8px] cursor-wait select-none leading-none">
        {"// " + text}
      </div>
    );

  return (
    <Link
      to={link ? `/${link}` : "#"}
      className="flex w-auto h-4 mb-4 cursor-pointer select-none leading-none"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className={`${className} ${hover || active ? "text-accent" : ""}`}>{text}</div>
      <div className={active ? "text-accent" : ""}>{active ? "\u2192" : hover ? "-" : "+"}</div>
    </Link>
  );
};
export default Navtab;
