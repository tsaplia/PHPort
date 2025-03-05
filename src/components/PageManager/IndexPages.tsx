import { Navigate, useParams } from "react-router-dom";
import { indexPages, pageComponents, Pages } from "../page-classes";
import { useSaveContext } from "../../lib/use-context";
import { NavContext } from "../../contexts/NavContext";
import { useEffect } from "react";

export function RouteChecker() {
  const { page } = useParams<{ page?: string }>();
  if (page && !indexPages.find((p) => p.ready && p.id == page)) {
    return <Navigate to="/" replace/>;
  }

  return IndexPages({ page: page ? page as Pages : null });
}

function IndexPages({page}: {page: Pages | null}) {
  const nav = useSaveContext(NavContext);

  useEffect(() => {
    nav.setPage("index", page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (!page) return null;
  const PageComp = pageComponents[page].Main;
  return <PageComp />;
}

export default RouteChecker;
