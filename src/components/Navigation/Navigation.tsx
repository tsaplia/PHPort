import React, { useState } from "react";
import { Navtab } from "./Navtab";
import "./Navigation.css";
import { pageComponents, indexPages, IndexPages } from "../Pages/classes";
import * as Core from "./Core";

interface NavigationProps {
  setShowed: React.Dispatch<React.SetStateAction<IndexPages | null>>;
  setPreview: React.Dispatch<React.SetStateAction<IndexPages | null>>;
  setBlur: React.Dispatch<React.SetStateAction<boolean>>;
  showed: IndexPages | null;
  preview: IndexPages | null;
}

function Navigation({ setShowed, setPreview, setBlur, showed, preview }: NavigationProps) {
  const [showCore, setShowCore] = useState<boolean>(false);
  const [hovered, setHovered] = useState<"info" | "index" | "core" | null>(null);

  function bluredEnter(page: "info" | "core") {
    setHovered(page);
    setBlur(true);
  }

  function bluredLeave() {
    setHovered(null);
    setBlur(false);
  }

  function pageClick(elem: IndexPages | "core") {
    if (elem == "core") {
      setShowCore(true);
      setHovered(null);
      setShowed(null);
    } else {
      setShowCore(false);
      setShowed(elem);
      setPreview(null);
    }
  }
  const pageNodes = indexPages.map((p) => {
    return (
      <Navtab
        className="large-tab"
        key={p}
        text={p}
        isActive={showed === p}
        onClick={() => pageClick(p)}
        onEnter={() => setPreview(p)}
        onLeave={() => setPreview(null)}
      />
    );
  });

  return (
    <>
      <div className="navbar">
        <Navtab
          className="small-tab"
          text="CORE"
          isActive={showCore}
          onClick={() => pageClick("core")}
          onEnter={() => bluredEnter("core")}
          onLeave={() => bluredLeave()}
        />
        <div style={{ display: "flex" }} onMouseLeave={() => setHovered(null)}>
          <Navtab
            className="small-tab"
            text="INDEX"
            isActive={showed != null || hovered === "index"}
            onClick={() => {}}
            onEnter={() => setHovered("index")}
            onLeave={() => {}}
          />
          <div className="menu">{(hovered === "index" || showed) && pageNodes}</div>
          {showed && (
            <div className="info-box">
              <div
                className={hovered === "info" ? "active" : ""}
                onMouseEnter={() => bluredEnter("info")}
                onMouseLeave={() => bluredLeave()}
              >
                info {hovered == "info" ? "-" : "*"}
              </div>
              {hovered == "info" && showed && (
                <div className="info">{pageComponents[showed].info}</div>
              )}
            </div>
          )}
        </div>
        {(showCore && !preview || hovered == "core") && (
          <div className="core-box">{showCore ? Core.Main() : Core.Preview()}</div>
        )}
      </div>
    </>
  );
}

export default Navigation;
