import { NavContext } from "../../contexts/NavContext";
import { PageContext } from "../../contexts/PageContext";
import { useSaveContext } from "../../lib/use-context";
import IndexMenu from "./IndexMenu";
import Navtab from "./Navtab";

interface Props {
  className?: string;
}

export const Navigation: React.FC<Props> = ({ className = "" }) => {
  const { setPreview } = useSaveContext(PageContext);
  const { section } = useSaveContext(NavContext);

  return (
    <div className={"flex flex-col " + className}>
      <Navtab
        className="w-smtab"
        text="core"
        active={section === "core"}
        link="core"
        onEnter={() => setPreview("core")}
        onLeave={() => setPreview(null)}
        disabled={false}
      />
      <IndexMenu />
    </div>
  );
};

export default Navigation;
