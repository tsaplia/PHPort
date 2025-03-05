import { NavContext } from "../../contexts/NavContext";
import { PageContext } from "../../contexts/PageContext";
import { useSaveContext } from "../../lib";
import { pageComponents } from "../page-classes";
import Navtab from "./Navtab";

const CoreMenu: React.FC = () => {
  const { applyPreview, preview } = useSaveContext(PageContext);
  const { section } = useSaveContext(NavContext);

  const CorePreview = pageComponents["core"].Preview;
  return <>
    <Navtab
      className="w-[65px]"
      text="core"
      active={section === "core"}
      link={section === "core" ? "/" : "/core"}
      onEnter={() => applyPreview("core")}
      onLeave={() => applyPreview(null)}
      disabled={false}
    />
    {preview === "core" && <CorePreview/>}
  </>
};

export default CoreMenu;
