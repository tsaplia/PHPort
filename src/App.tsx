import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import { Page } from "./components/Pages/Page";
import { IndexPages } from "./components/Pages/classes";

function App() {
  const [preview, setPreview] = useState<IndexPages | null>(null);
  const [showed, setShowed] = useState<IndexPages | null>(null);
  const [blur, setBlur] = useState<boolean>(false);

  return (
    <>
      {(preview || showed)&& (
        <Page
          page={(preview || showed) as IndexPages}
          mode={preview ? "preview" : blur ? "blur" : "normal"}
        />
      )}
      <Navigation
        setShowed={setShowed}
        showed={showed}
        preview={preview}
        setBlur={setBlur}
        setPreview={setPreview}
      />
    </>
  );
}

export default App;
