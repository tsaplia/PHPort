import { PageContext } from "../../contexts/PageContext";
import { indexPages } from "../page-classes";
import Navtab from "./Navtab";
import { useSaveContext } from "../../lib/use-context";
import { NavContext } from "../../contexts/NavContext";

const readyPages = indexPages.filter((p) => p.ready).map((p) => p.name);

const IndexMenu: React.FC = () => {
  const { section, page } = useSaveContext(NavContext);
  const { preview, applyPreview, blur, setBlur } = useSaveContext(PageContext);

  const showPreview = readyPages.find((p) => p === preview);
  return (
    <>
      <div className="flex group">
        <Navtab
          className="w-[65px]"
          text="index"
          active={section == "index"}
          disabled={false}
          link={section == "index" ? "/" : "/index"}
          onEnter={() => setBlur(false)}
          onLeave={() => setBlur(false)}
        />

        <div
          className={
            `${section == "index" ? "visible" : "invisible"} ` +
            `${blur && !showPreview ? "blured" : ""}` +
            `flex flex-col ms-12 min-w-[105px] animate-fadeIn group-hover:visible`
          }
        >
          {indexPages.map((p) => (
            <Navtab
              key={p.name}
              text={p.name}
              active={page === p.name}
              link={p.ready ? "/index/" + (page === p.name ? "" : p.id) : null}
              onEnter={() => {
                if (p.ready) {
                  applyPreview(p.id);
                }
              }}
              onLeave={() => applyPreview(null)}
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
    </>
  );
};

export default IndexMenu;
