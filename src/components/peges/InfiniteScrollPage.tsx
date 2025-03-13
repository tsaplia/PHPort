import { useEffect, useRef } from "react";
import { Page } from "./Page";

export function InfiniteScroll({ children, changing }: { children: React.ReactNode, changing: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const disableScroll = useRef(false);

  useEffect(() => {
    if(changing) {
      disableScroll.current = true;
      if (scrollRef.current) scrollRef.current.scrollTo({ top: 0, behavior: "smooth",  });
    }
  }, [changing]);

  function onScroll() {
    if (!scrollRef.current || disableScroll) return;
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
        id="infinite-scroll"
        className="overflow-y-scroll h-screen w-full animate-fadeIn"
        style={{ scrollbarWidth: "none" }}
        onScroll={onScroll}
        ref={scrollRef}
      >
        {[0, 1, 2, 3].map((i) => (
          <div key={i}>
            <Page>{children}</Page>
          </div>
        ))}
      </div>
    </>
  );
}
