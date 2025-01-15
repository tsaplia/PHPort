import { useRef } from "react";

export function InfiniteScroll({ children }: {children: React.ReactNode}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  function onScroll() {
      if (!scrollRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const pageHeight = scrollHeight / 3;
    if (scrollTop + clientHeight >= 2*pageHeight) {
      scrollRef.current.scrollTop = scrollTop - pageHeight;
    }
  }
  return (
    <div
      onScroll={onScroll}
      ref={scrollRef}
      style={{ height: "100vh", overflowY: "scroll", scrollbarWidth: "none" }}
    >
      {children}
      {children}
      {children}
    </div>
  );
}
