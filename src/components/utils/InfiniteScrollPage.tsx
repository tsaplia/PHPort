import { useRef } from "react";
import Navigation from "../Navigation/Navigation";

export function InfiniteScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  function onScroll() {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const pageHeight = scrollHeight / 4;
    if (scrollTop + clientHeight >= 3 * pageHeight) {
      scrollRef.current.scrollTop = scrollTop - pageHeight;
    }
    if (scrollTop < pageHeight) {
      scrollRef.current.scrollTop = scrollTop + pageHeight;
    }
  }

  return (
    <>
      <div
        className="overflow-y-scroll h-screen w-full animate-fadeIn"
        style={{ scrollbarWidth: "none" }}
        onScroll={onScroll}
        ref={scrollRef}
      >
        {[0, 1, 2, 3].map((i) => (
          <div key={i}>
            <div className="small-screen-text md:hidden"><Navigation className="mb-[115px] mt-[117px]"/></div>
            {children}
          </div>
        ))}
      </div>
    </>
  );
}
