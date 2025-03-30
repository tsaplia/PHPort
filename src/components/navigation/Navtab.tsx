import { useState } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../../contexts/PageContext";
import { useSaveContext } from "../../lib";

interface Props {
  text: string;
  link?: string | null;
  active: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  className?: string;
  pageTab?: boolean;
}

const Navtab: React.FC<Props> = ({ text, active, onEnter, onLeave, className, link, pageTab }) => {
  const pageCtx = useSaveContext(PageContext);

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
    pageCtx.setCords({ x: e.clientX, y: e.clientY });
  }

  function getIcon() {
    if (pageTab) return active ? "■" : "";
    if (active) return <span className="-rotate-90 inline-block">{hover ? "\u2191" : "\u2193"}</span>;
    return hover ? "*" : "+";
  }

  return (
    <Link
      to={link ? `${link}` : "#"}
      className={`${className || ""} flex h-4 mb-4 cursor-pointer select-none leading-none`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
    >
      <div className={`me-auto ${className} ${hover || active ? "text-accent" : ""}`}>{text}</div>
      <div className={active || hover ? "text-accent" : ""}>{getIcon()}</div>
    </Link>
  );
};
export default Navtab;
