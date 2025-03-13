import CoreMenu from "./CoreMenu";
import IndexMenu from "./IndexMenu";

interface Props {
  className?: string;
}

export const Navigation: React.FC<Props> = ({ className = "" }) => {
  return (
    <nav className={"flex flex-col " + className}>
      <CoreMenu/>
      <IndexMenu />
    </nav>
  );
};

export default Navigation;
