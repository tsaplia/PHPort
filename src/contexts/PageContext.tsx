import { createContext, useState } from "react";
import { Pages } from "../components/page-classes";

type Cords = { x: number; y: number };

interface PageContextType {
  blur: boolean;
  preview: Pages | null;
  cords: Cords;
  setCords: (cords: Cords) => void;
  setBlur: (blur: boolean) => void;
  applyPreview: (preview?: Pages | null) => void;
}

export const PageContext = createContext<PageContextType | null>(null);

export function PageContextProvider({ children }: { children: React.ReactNode }) {
  const [blur, setBlur] = useState<boolean>(false);
  const [preview, setPreview] = useState<Pages | null>(null);
  const [cords, setCords] = useState<Cords>({ x: 0, y: 0 });

  function applyPreview(preview: Pages | null = null) {
    setPreview(preview);
    setBlur(!!preview);
  }
  return (
    <PageContext.Provider value={{ blur, preview, applyPreview, setBlur, cords, setCords }}>
      {children}
    </PageContext.Provider>
  );
}
