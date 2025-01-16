import { useState } from "react";
import { indexPages } from "../Pages/classes";
import { usePageContext } from "../../context/PageContext";

function Navigation() {
  const { show, setShow, setPreview } = usePageContext();

  return (
    <div className="fixed z-10 flex flex-col left-[10vw] top-[14vw]">
      <Navtab
        _class="w-tab-small"
        text="CORE"
        active={show === "core"}
        onClick={() => setShow("core")}
        onEnter={() => setPreview("core")}
        onLeave={() => setPreview(null)}
        disabled={false}
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
    <Navtab
      _class="w-tab"
      key={p.name}
      text={p.name}
      active={show === p.name}
      onClick={() => {
        if (p.ready) setShow(p.name);
      }}
      onEnter={() => {
        if (p.ready) setPreview(p.name);
      }}
      onLeave={() => setPreview(null)}
      disabled={!p.ready}
    />
  ));

  return (
    <div className="flex" onMouseLeave={() => setHovered(false)}>
      <Navtab
        _class="w-tab-small"
        text="INDEX"
        active={childShowed || hovered}
        onClick={() => {}}
        onEnter={() => setHovered(true)}
        onLeave={() => {}}
        disabled={false}
      />
      <div className="flex flex-col ms-[2.5vw] w-tab">{(childShowed || hovered) && pageNodes}</div>
      {/* {childShowed && (
            <div _class="info-box">
              <div
                _class={hovered === "info" ? "active" : ""}
                onMouseEnter={() => bluredEnter("info")}
                onMouseLeave={() => bluredLeave()}
              >
                info {hovered == "info" ? "-" : "*"}
              </div>
              {hovered == "info" && showed && (
                <div _class="info">{pageComponents[showed].info}</div>
              )}
            </div>
          )} */}
    </div>
  );
}

interface NavtabProps {
  text: string;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
  _class: string;
  disabled: boolean;
}

export function Navtab({ text, active, onClick, onEnter, onLeave, _class, disabled }: NavtabProps) {
  const [hover, setHover] = useState<boolean>(false);
  function handle(action: "enter" | "leave" | "click") {
    if (action === "enter") onEnter(), setHover(true);
    else if (action == "leave") onLeave(), setHover(false);
    else if (action === "click") onClick();
  }

  if (disabled) return <div className="flex text-muted w-auto">// {text}</div>;

  return (
    <div
      className="flex w-auto"
      onMouseEnter={() => handle("enter")}
      onMouseLeave={() => handle("leave")}
      onClick={() => handle("click")}
    >
      <div className={`${_class} ${hover || active ? "text-accent" : ""}`}>{text}</div>
      <div className={active ? "text-accent" : ""}>{active ? "→" : hover ? "-" : "+"}</div>
    </div>
  );
}

export default Navigation;
