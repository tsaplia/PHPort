import { useState } from "react";
import { usePageContext } from "../../context/PageContext";
import { indexPages } from "../Pages";
import Navtab from "./Navbar";

function IndexMenu() {
  const { show, setPreview } = usePageContext();
  const [hovered, setHovered] = useState<boolean>(false);

  const childShowed = !!indexPages.find((p) => p.name === show);

  return (
    <div className="flex" onMouseLeave={() => setHovered(false)}>
      <Navtab
        _class="w-smtab"
        text="INDEX"
        active={childShowed || hovered}
        onEnter={() => setHovered(true)}
        onLeave={() => {}}
        disabled={false}
        link={null}
      />
      {(childShowed || hovered) && (
        <div className="flex flex-col ms-[36px] w-tab animate-fadeIn">
          {indexPages.map((p) => (
            <Navtab
              _class="w-tab"
              key={p.name}
              text={p.name}
              active={show === p.name}
              link={p.ready ? p.id : null}
              onEnter={() => {
                if (p.ready) setPreview(p.name);
              }}
              onLeave={() => setPreview(null)}
              disabled={!p.ready}
            />
          ))}
        </div>
      )}
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

export default IndexMenu;
