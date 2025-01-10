import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Page } from "./components/Pages/Page";
import { Pages } from "./components/Pages/classes";

function App() {
  const [preview, setPreview] = useState<Pages | null>(null);
  const [showed, setShowed] = useState<Pages | null>(null);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <>
      {(preview || showed) && (
        <Page
          page={(preview || showed) as Pages}
          mode={preview ? "preview" : showInfo ? "blur" : "normal"}
        />
      )}
      <Navigation
        setShowed={setShowed}
        showed={showed}
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        setPreview={setPreview}
      />
    </>
  );
}

export default App;
