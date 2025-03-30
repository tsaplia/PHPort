import Navigation from "../navigation/Navigation";

export function Page({ children }: { children?: React.ReactNode }) {
  return (
    <div>
      <div className="small-screen-text md:hidden">
        <Navigation className="mb-[115px] mt-[117px]" />
      </div>
      <div className="w-full animate-fadeIn">{children}</div>
    </div>
  );
}
