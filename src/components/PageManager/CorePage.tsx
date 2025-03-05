import { useSaveContext } from "../../lib/use-context";
import { NavContext } from "../../contexts/NavContext";
import { pageComponents } from "../page-classes";
import { useEffect } from "react";
import { NormalPage } from "../utils/NormalPage";

function CorePage() {
  const nav = useSaveContext(NavContext);
  useEffect(() => {
    nav.setPage("core", null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Core = pageComponents["core"].Main;
  return <NormalPage><Core /></NormalPage>;
}

export default CorePage;
