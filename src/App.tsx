import Navigation from "./components/Navigation/Navigation";
import { PageContextProvider } from "./contexts/PageContext";
import { NavContextProvider } from "./contexts/NavContext";
import PageManager from "./components/PageManager/PageManager";
import PagePreview from "./components/Preview/PagePreview";

function App() {
  return (
    <>
      <NavContextProvider>
        <PageContextProvider>
          <Navigation className="fixed z-10 left-[150px] top-[240px]"/>
          <PagePreview className="w-screen min-h-screen fixed" />
          <PageManager className="w-screen min-h-screen fixed" />
        </PageContextProvider>
      </NavContextProvider>
    </>
  );
}

export default App;
