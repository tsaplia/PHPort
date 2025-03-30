import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useSaveContext } from "../../lib/use-context";
import { PageContext } from "../../contexts/PageContext";
import CorePage from "./CorePage";
import IndexPages from "./IndexPages";
import { Page } from "../peges/Page";
import { NavContext } from "../../contexts/NavContext";

interface Props {
  className?: string;
}

const PageManager: React.FC<Props> = ({ className = "" }) => {
  const pageCtx = useSaveContext(PageContext);
  const navCtx = useSaveContext(NavContext);
  const location = useLocation();

  useEffect(() => {
    pageCtx.applyPreview(null);
    if (location.pathname === "/") navCtx.setPage(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <div className={`${className} ${pageCtx.blur ? "md:opacity-50 md:blur-md" : ""}`}>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/core" element={<CorePage />} />
          <Route path="/index/:page?" element={<IndexPages />} />
        </Routes>
      </div>
    </>
  );
};

export default PageManager;
