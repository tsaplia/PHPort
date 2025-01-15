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
        <div className={`container ${blur || Preview ? "blurred" : ""}`}>
          <Main />
        </div>
      )}
      {Preview && (
        <div className="container">
          <Preview />
        </div>
      )}
    </>
  );
}
