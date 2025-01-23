import { Route, Routes, useLocation } from "react-router-dom";
import "./PageManager.css";
import React, { useEffect } from "react";
import { useSaveContext } from "../../lib/use-context";
import { PageContext } from "../../contexts/PageContext";
import CorePage from "./CorePage";
import IndexPages from "./IndexPages";

interface Props {
  className?: string;
}

const PageManager: React.FC<Props> = ({ className = "" }) => {
  const page = useSaveContext(PageContext);
  const location = useLocation();

  useEffect(() => {
    page.setPreview(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <div className={`${className} ${page.blur ? "-z-1 opacity-50 blur-md" : ""}`}>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/core" element={<CorePage />} />
          <Route path="/index/:page?" element={<IndexPages />} />
        </Routes>
      </div>
    </>
  );
};

export default PageManager;
