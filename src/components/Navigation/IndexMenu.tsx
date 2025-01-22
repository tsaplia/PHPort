import { PageContext } from "../../contexts/PageContext";
import { indexPages } from "../page-classes";
import Navtab from "./Navtab";
import { useSaveContext } from "../../lib/use-context";
import { NavContext } from "../../contexts/NavContext";

function IndexMenu() {
  const { section, page } = useSaveContext(NavContext);
  const { setPreview } = useSaveContext(PageContext);

  return (
    <div className="flex group">
      <Navtab
        className="w-smtab"
        text="INDEX"
        active={section == "index"}
        disabled={false}
        link={"index"}
      />

      <div
        className={`flex flex-col ms-[36px] w-tab animate-fadeIn group-hover:block 
          ${section == "index" ? "block" : "hidden"}`}
      >
        {indexPages.map((p) => (
          <Navtab
            className="w-tab"
            key={p.name}
            text={p.name}
            active={page === p.name}
            link={p.ready ? "index/" + p.id : null}
            onEnter={() => {
              if (p.ready) setPreview(p.name);
            }}
            onLeave={() => setPreview(null)}
            disabled={!p.ready}
          />
        ))}
      </div>

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
