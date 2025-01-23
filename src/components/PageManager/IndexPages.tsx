import { redirect, useParams } from "react-router-dom";
import { indexPages, pageComponents, Pages } from "../page-classes";
import { useSaveContext } from "../../lib/use-context";
import { NavContext } from "../../contexts/NavContext";
import { useEffect } from "react";

function IndexPages() {
  const nav = useSaveContext(NavContext);

  const { page: pageParam } = useParams<{ page?: string }>();
  if (pageParam && indexPages.find((p) => p.ready && p.id == pageParam)) {
    redirect("/");
  }
  const page = pageParam ? (pageParam as Pages) : null;
  useEffect(() => {
    nav.setPage("index", page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (!page) return null;
  const Comp = pageComponents[page].Main;
  return <Comp />;
}

export default IndexPages;
