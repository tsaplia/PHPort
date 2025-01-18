import { useRef } from "react";

export function InfiniteScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  function onScroll() {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const pageHeight = scrollHeight / 3;
    if (scrollTop + clientHeight >= 2 * pageHeight) {
      scrollRef.current.scrollTop = scrollTop - pageHeight;
    }
  }
  return (
    <div
      className="overflow-y-scroll h-screen w-full"
      style={{ scrollbarWidth: "none" }}
      onScroll={onScroll}
      ref={scrollRef}
    >
      {children}
      {children}
      {children}
    </div>
  );
}
