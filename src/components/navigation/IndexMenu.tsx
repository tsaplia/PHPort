import { PageContext } from "../../contexts/PageContext";
import { indexPages, PageConfig } from "../page-classes";
import Navtab from "./Navtab";
import { useSaveContext } from "../../lib/use-context";
import { NavContext } from "../../contexts/NavContext";
import DisabledTab from "./DisabledTab";

const readyPages = indexPages.filter((p) => p.ready).map((p) => p.name);

const IndexMenu: React.FC = () => {
  const { section, page } = useSaveContext(NavContext);
  const { preview, applyPreview, blur, setBlur } = useSaveContext(PageContext);

  const showPreview = readyPages.find((p) => p === preview);

  function getTab(config: PageConfig) {
    if (config.ready) {
      return (
        <Navtab
          key={config.name}
          text={config.name}
          active={page === config.name}
          link={config.ready ? "/index/" + (page === config.name ? "" : config.id) : null}
          onEnter={() => {
            if (config.ready) {
              applyPreview(config.id);
            }
          }}
          onLeave={() => applyPreview(null)}
          pageTab
        />
      );
    }
    return <DisabledTab key={config.name} text={config.name} />;
  }

  return (
    <>
      <div className="flex group">
        <Navtab
          className="w-[65px]"
          text="index"
          active={section == "index"}
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
          {indexPages.map((p) => getTab(p))}
        </div>
      </div>
    </>
  );
};

export default IndexMenu;
