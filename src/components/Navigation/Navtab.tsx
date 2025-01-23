import { useState } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../../contexts/PageContext";
import { useSaveContext } from "../../lib";

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
  const page = useSaveContext(PageContext);
  const [hover, setHover] = useState<boolean>(false);

  function handleEnter() {
    if (!active && onEnter) onEnter();
    setHover(true);
  }

  function handleLeave() {
    if (!active && onLeave) onLeave();
    setHover(false);
  }

  function handleMove(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    page.setCords({ x: e.clientX, y: e.clientY });
  }
  
  if (disabled)
    return (
      <div className="flex text-muted w-auto h-8 cursor-wait select-none leading-none">
        {"// " + text}
      </div>
    );

  return (
    <Link
      to={link ? link : "#"}
      className="flex w-auto h-8 cursor-pointer select-none leading-none"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
    >
      <div className={`${className} ${hover || active ? "text-accent" : ""}`}>{text}</div>
      <div className={active ? "text-accent" : ""}>{active ? "\u2192" : hover ? "-" : "+"}</div>
    </Link>
  );
};
export default Navtab;
