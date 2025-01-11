import { IndexPages, pageComponents } from "./classes";
import "./Page.css";

interface PageProps {
  page: IndexPages;
  mode: "normal" | "preview" | "blur";
}

export function Page({ page, mode }: PageProps) {
  return (
    <div className={`container ${mode == "blur" ? "blurred" : ""}`}>
      {mode == "preview" ? pageComponents[page].Preview() : pageComponents[page].Main()}
    </div>
  );
}
