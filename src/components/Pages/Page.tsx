import { pageComponents, Pages } from "./classes";
import "./Page.css"

interface PageProps {
  page: Pages;
  mode: "normal" | "preview" | "blur";
}

export function Page({ page, mode }: PageProps) {
  return (
    <div className="container">
      <div className={`content ${mode == "blur" ? "blurred" : ""}`}>
        {mode == "preview" ? pageComponents[page].Preview() : pageComponents[page].Main()}
      </div>
    </div>
  );
}
