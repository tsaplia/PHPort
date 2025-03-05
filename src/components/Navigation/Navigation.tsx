import CoreMenu from "./CoreMenu";
import IndexMenu from "./IndexMenu";

interface Props {
  className?: string;
}

export const Navigation: React.FC<Props> = ({ className = "" }) => {
  return (
    <div className={"flex flex-col " + className}>
      <CoreMenu/>
      <IndexMenu />
    </div>
  );
};

export default Navigation;
