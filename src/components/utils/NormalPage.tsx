import Navigation from "../Navigation/Navigation";

export function NormalPage({ children }: { children?: React.ReactNode }) {
  return (
    <div style={{ scrollbarWidth: "none" }}>
      <div className="small-screen-text md:hidden"><Navigation className="mb-[115px] mt-[117px]"/></div>
      <div className="w-full animate-fadeIn">{children}</div>
    </div>
  );
}
