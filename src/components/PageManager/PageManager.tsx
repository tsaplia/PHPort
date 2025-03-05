import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useSaveContext } from "../../lib/use-context";
import { PageContext } from "../../contexts/PageContext";
import CorePage from "./CorePage";
import IndexPages from "./IndexPages";
import { NormalPage } from "../utils/NormalPage";

interface Props {
  className?: string;
}

const PageManager: React.FC<Props> = ({ className = "" }) => {
  const pageCtx = useSaveContext(PageContext);
  const location = useLocation();

  useEffect(() => {
    pageCtx.applyPreview(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <div className={`${className} ${pageCtx.blur ? "md:-z-1 md:opacity-50 md:blur-md" : ""}`}>
        <Routes>
          <Route path="/" element={<NormalPage />} />
          <Route path="/core" element={<CorePage />} />
          <Route path="/index/:page?" element={<IndexPages />} />
        </Routes>
      </div>
    </>
  );
};

export default PageManager;
