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
          <PageManager className="w-screen min-h-screen absolute" />
          <Navigation className="fixed z-10 left-[150px] top-[240px] max-md:hidden"/>
          <PagePreview className="fixed z-20 hidden md:block"/>
        </PageContextProvider>
      </NavContextProvider>
    </>
  );
}

export default App;
