import React, { useState } from "react";
import { Navtab } from "./Navtab";
import "./Navigation.css";
import { pageComponents, pageList, Pages } from "../Pages/classes";

interface NavigationProps {
  setShowed: React.Dispatch<React.SetStateAction<Pages | null>>;
  setPreview: React.Dispatch<React.SetStateAction<Pages | null>>;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
  showed: Pages | null;
  showInfo: boolean;
}

function Navigation({ setShowed, setPreview, setShowInfo, showed, showInfo }: NavigationProps) {
  const [menu, setMenu] = useState(false);

  const pageNodes = pageList.map((p) => {
    return (
      <Navtab
        className="large-tab"
        key={p}
        text={p}
        isActive={showed === p}
        onClick={() => {
          setShowed(p);
          setPreview(null);
        }}
        onEnter={() => setPreview(p)}
        onLeave={() => setPreview(null)}
      />
    );
  });

  function closeMenu() {
    if (!showed) setMenu(false);
  }

  return (
    <>
      <div className="navbar">
        <Navtab
          className="small-tab"
          text="CORE"
          isActive={false}
          onClick={() => {}}
          onEnter={() => {}}
          onLeave={() => {}}
        />
        <div style={{ display: "flex" }} onMouseLeave={closeMenu}>
          <Navtab
            className="small-tab"
            text="INDEX"
            isActive={menu}
            onClick={() => {}}
            onEnter={() => {
              setMenu(true);
              setShowed(null);
            }}
            onLeave={() => {}}
          />
          <div className="menu">{menu && pageNodes}</div>
          {showed && (
            <div className="info-box">
              <div
                className={showInfo ? "active" : ""}
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
              >
                info {showInfo ? "-" : "*"}
              </div>
              {showInfo && <div className="info">{pageComponents[showed].info}</div>}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navigation;
