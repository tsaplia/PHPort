import { useState } from "react";
import "./Navigation.css";
import { indexPages } from "../Pages/classes";
import { usePageContext } from "../../context/PageContext";

function Navigation() {
  const { show, setShow, setPreview } = usePageContext();

  return (
    <div className="navbar">
      <Navtab
        className="small-tab"
        text="CORE"
        isActive={show === "core"}
        onClick={() => setShow("core")}
        onEnter={() => setPreview("core")}
        onLeave={() => setPreview(null)}
      />
      <IndexMenu />
    </div>
  );
}

function IndexMenu() {
  const { show, setShow, setPreview } = usePageContext();
  const [hovered, setHovered] = useState<boolean>(false);

  const childShowed = !!indexPages.find((p) => p.name === show);

  const pageNodes = indexPages.map((p) => (
    <>
      {p.ready ? (
        <Navtab
          className="large-tab"
          key={p.name}
          text={p.name}
          isActive={show === p.name}
          onClick={() => setShow(p.name)}
          onEnter={() => setPreview(p.name)}
          onLeave={() => setPreview(null)}
        />
      ) : (
        <div className="navtab todo">//{p.name}</div>
      )}
    </>
  ));

  return (
    <div style={{ display: "flex" }} onMouseLeave={() => setHovered(false)}>
      <Navtab
        className="small-tab"
        text="INDEX"
        isActive={childShowed || hovered}
        onClick={() => {}}
        onEnter={() => setHovered(true)}
        onLeave={() => {}}
      />
      <div className="menu">{(childShowed || hovered) && pageNodes}</div>
      {/* {childShowed && (
            <div className="info-box">
              <div
                className={hovered === "info" ? "active" : ""}
                onMouseEnter={() => bluredEnter("info")}
                onMouseLeave={() => bluredLeave()}
              >
                info {hovered == "info" ? "-" : "*"}
              </div>
              {hovered == "info" && showed && (
                <div className="info">{pageComponents[showed].info}</div>
              )}
            </div>
          )} */}
    </div>
  );
}

interface NavtabProps {
  text: string;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
  className: string;
}

export function Navtab({ text, isActive, onClick, onEnter, onLeave, className }: NavtabProps) {
  const [hover, setHover] = useState<boolean>(false);
  function handle(action: "enter" | "leave" | "click") {
    if (action === "enter") onEnter(), setHover(true);
    else if (action == "leave") onLeave(), setHover(false);
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

export default Navigation;
