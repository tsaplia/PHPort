import { useSaveContext } from "../../lib/use-context";
import { NavContext } from "../../contexts/NavContext";
import { pageComponents } from "../page-classes";
import { useEffect } from "react";
import { Page } from "../peges/Page";

function CorePage() {
  const nav = useSaveContext(NavContext);
  useEffect(() => {
    nav.setPage("core");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Core = pageComponents["core"].Main;
  return (
    <Page>
      <Core />
    </Page>
  );
}

export default CorePage;
