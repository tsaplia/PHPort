import { PageContext } from "../../contexts/PageContext";
import { useSaveContext } from "../../lib/use-context";
import { pageComponents } from "../page-classes";

interface Props {
  className?: string;
}
const PagePreview: React.FC<Props> = ({ className = "" }) => {
  const page = useSaveContext(PageContext);
  if (!page.preview) return null;
  const PreviewComp = pageComponents[page.preview].Preview;
  return (
    <div
      className={"fixed w-[427px] " + className}
      style={{ top: page.cords.y + 10, left: page.cords.x + 10 }}
    >
      <PreviewComp />
    </div>
  );
};

export default PagePreview;
