import { usePageContext } from "../../context/PageContext";
import { pageComponents } from "./classes";
import "./PageManager.css";

export function PageManager() {
  const { show, preview, blur } = usePageContext();
  if (!show && !preview) return null;
  const Preview = preview && preview !== show ? pageComponents[preview].Preview : null;
  const Main = show ? pageComponents[show].Main : null;

  return (
    <>
      {Main && (
        <div
          className={`w-screen min-h-screen fixed 
            ${blur || Preview ? "-z-1 opacity-50 blur-md" : ""}`}
        >
          <Main />
        </div>
      )}
      {Preview && (
        <div className="w-screen min-h-screen fixed">
          <Preview />
        </div>
      )}
    </>
  );
}
