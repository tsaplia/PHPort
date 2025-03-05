import Navigation from "./components/Navigation/Navigation";
import { PageContextProvider } from "./contexts/PageContext";
import { NavContextProvider } from "./contexts/NavContext";
import PageManager from "./components/PageManager/PageManager";
import PagePreview from "./components/PagePreview/PagePreview";

function App() {
  return (
    <>
      <NavContextProvider>
        <PageContextProvider>
          <PageManager className="w-screen min-h-screen fixed" />
          <Navigation className="fixed z-10 left-[252px] top-[406px]"/>
          <PagePreview className="fixed z-20"/>
        </PageContextProvider>
      </NavContextProvider>
    </>
  );
}

export default App;
