import { useSearchParams } from "react-router-dom";
import { PageContext } from "../../contexts/PageContext";
import { useSaveContext } from "../../lib/use-context";
import { pageComponents } from "../page-classes";

interface Props {
  className?: string;
}
const PagePreview: React.FC<Props> = ({ className = "" }) => {
  const [searchParams] = useSearchParams();
  const size = (searchParams.get("size") ?? 427) + "px";
  const grey = searchParams.get("grey") === "true" ? true : false;

  const page = useSaveContext(PageContext);
  if (!page.preview) return null;

  const PreviewComp = pageComponents[page.preview].Preview;

  return (
    <div className={`${className} fixed`} style={{ width: size, filter: grey ? "grayscale(90%)" : "", top: page.cords.y, left: page.cords.x }}>
      <PreviewComp />
    </div>
  );
};

export default PagePreview;
