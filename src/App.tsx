import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import { PageManager } from "./components/PageManager/PageManager";
import { PageContext } from "./context/PageContext";
import { Pages } from "./components/Pages";
import { Route, Routes } from "react-router-dom";

function App() {
  const [preview, setPreview] = useState<Pages | null>(null);
  const [show, setShow] = useState<Pages | null>(null);
  const [blur, setBlur] = useState<boolean>(false);

  return (
    <PageContext.Provider value={{ preview, setPreview, show, setShow, blur, setBlur }}>
      <Routes>
        <Route path="/:page?" element={<PageManager/>}/>
      </Routes>
      <Navigation />
    </PageContext.Provider>
  );
}

export default App;
