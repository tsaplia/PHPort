import Navigation from "./components/navigation/Navigation";
import { PageContextProvider } from "./contexts/PageContext";
import { NavContextProvider } from "./contexts/NavContext";
import PageManager from "./components/page-manager/PageManager";
import PagePreview from "./components/page-preview/PagePreview";

function App() {
  return (
    <>
      <NavContextProvider>
        <PageContextProvider>
          <PageManager className="w-screen h-screen overflow-auto" />
          <Navigation className="fixed z-10 left-[150px] top-[240px] max-md:hidden" />
          <PagePreview className="fixed z-20 hidden md:block" />
        </PageContextProvider>
      </NavContextProvider>
    </>
  );
}

export default App;
