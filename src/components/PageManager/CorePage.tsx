import { useSaveContext } from "../../lib/use-context";
import { NavContext } from "../../contexts/NavContext";
import { pageComponents } from "../page-classes";
import { useEffect } from "react";

function CorePage() {
  const nav = useSaveContext(NavContext);
  useEffect(() => {
    nav.setPage("core", null);
  }, []);
  const Core = pageComponents["core"].Main;
  return <Core />;
}

export default CorePage;
