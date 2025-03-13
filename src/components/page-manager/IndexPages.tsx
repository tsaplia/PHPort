import { Navigate, useParams } from "react-router-dom";
import { indexPages, pageComponents, Pages } from "../page-classes";
import { useSaveContext } from "../../lib/use-context";
import { NavContext } from "../../contexts/NavContext";
import { useEffect, useState } from "react";
import { Page } from "../peges/Page";
import { InfiniteScroll } from "../peges/InfiniteScrollPage";

export function RouteChecker() {
  const { page } = useParams<{ page?: string }>();
  if (page && !indexPages.find((p) => p.ready && p.id == page)) {
    return <Navigate to="/" replace />;
  }

  return IndexPages({ page: page ? (page as Pages) : null });
}

function IndexPages({ page }: { page: Pages | null }) {
  const nav = useSaveContext(NavContext);
  const [shownPage, setShownPage] = useState<Pages | null>(null);
  const [changing, setChanging] = useState<boolean>(false);

  const pageConfigs = indexPages.find((p) => p.name == shownPage)!;

  useEffect(() => {
    function changePage() {
      nav.setPage("index", page);
      setShownPage(page);
      setChanging(false);
    }

    const scrollElement = document.getElementById("infinite-scroll");
    if (!scrollElement || scrollElement.scrollTop === 0) { 
      return changePage(); 
    }
    // if we need to scroll before changing the page
    setChanging(true);
    setTimeout(() => {
      changePage();
    }, scrollElement.scrollTop / 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (!shownPage) return <Page />;

  const PageComp = pageComponents[shownPage].Main;
  return (
    <>
      {pageConfigs.ready && pageConfigs.infScroll ? (
        <InfiniteScroll changing={changing}>
          <PageComp />
        </InfiniteScroll>
      ) : (
        <Page>
          <PageComp />
        </Page>
      )}
    </>
  );
}

export default RouteChecker;
