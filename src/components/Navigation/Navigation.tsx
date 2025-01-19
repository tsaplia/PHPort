import { usePageContext } from "../../context/PageContext";
import IndexMenu from "./IndexMenu";
import Navtab from "./Navbar";

function Navigation() {
  const { show, setPreview } = usePageContext();

  return (
    <div className="fixed z-10 flex flex-col left-[150px] top-[240px]">
      <Navtab
        _class="w-smtab"
        text="CORE"
        active={show === "core"}
        link="core"
        onEnter={() => setPreview("core")}
        onLeave={() => setPreview(null)}
        disabled={false}
      />
      <IndexMenu />
    </div>
  );
}

export default Navigation;
