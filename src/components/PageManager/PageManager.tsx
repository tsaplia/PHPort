import { useParams } from "react-router-dom";
import { usePageContext } from "../../context/PageContext";
import { pageComponents, Pages } from "../Pages";
import "./PageManager.css";
import { useEffect } from "react";

export function PageManager() {
  const { page: pageParam } = useParams<{ page: string }>();
  const { preview, blur, setShow } = usePageContext();

  const page: Pages | null =
    pageParam && Object.keys(pageComponents).includes(pageParam) ? (pageParam as Pages) : null;
  useEffect(() => {
    setShow(page || null);
  }, [page]);

  if (!page && !preview) return null;
  const Preview = preview && preview !== page ? pageComponents[preview].Preview : null;
  const Main = page ? pageComponents[page].Main : null;
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
