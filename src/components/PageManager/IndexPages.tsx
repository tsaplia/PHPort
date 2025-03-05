import { Navigate, useParams } from "react-router-dom";
import { indexPages, pageComponents, Pages } from "../page-classes";
import { useSaveContext } from "../../lib/use-context";
import { NavContext } from "../../contexts/NavContext";
import { useEffect } from "react";
import { NormalPage } from "../utils/NormalPage";
import { InfiniteScroll } from "../utils/InfiniteScrollPage";

export function RouteChecker() {
  const { page } = useParams<{ page?: string }>();
  if (page && !indexPages.find((p) => p.ready && p.id == page)) {
    return <Navigate to="/" replace />;
  }

  return IndexPages({ page: page ? (page as Pages) : null });
}

function IndexPages({ page }: { page: Pages | null }) {
  const nav = useSaveContext(NavContext);

  useEffect(() => {
    nav.setPage("index", page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (!page) return <NormalPage />;

  const PageComp = pageComponents[page].Main;
  const pageConfigs = indexPages.find((p) => p.name == page)!;
  return (
    <>
      {pageConfigs.ready && pageConfigs.infScroll ? (
        <InfiniteScroll>
          <PageComp />
        </InfiniteScroll>
      ) : (
        <NormalPage>
          <PageComp />
        </NormalPage>
      )}
    </>
  );
}

export default RouteChecker;
