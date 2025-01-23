import { createContext, useState } from "react";
import { Pages } from "../components/page-classes";

interface PageContextType {
  preview: Pages | null;
  setPreview: (page: Pages | null) => void;
  blur: boolean;
  setBlur: (blur: boolean) => void;
  cords: Cords;
  setCords: (cords: Cords) => void;
}

type Cords = { x: number; y: number };

export const PageContext = createContext<PageContextType | null>(null);

export function PageContextProvider({ children }: { children: React.ReactNode }) {
  const [preview, setPreview] = useState<Pages | null>(null);
  const [blur, setBlur] = useState<boolean>(false);
  const [cords, setCords] = useState<Cords>({ x: 0, y: 0 });

  return (
    <PageContext.Provider value={{ preview, setPreview, blur, setBlur, cords, setCords }}>
      {children}
    </PageContext.Provider>
  );
}
