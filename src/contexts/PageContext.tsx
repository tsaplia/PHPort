import { createContext, useState } from "react";
import { Pages } from "../components/page-classes";

interface PageContextType {
  preview: Pages | null;
  setPreview: (page: Pages | null) => void;
  blur: boolean;
  setBlur: (blur: boolean) => void;
}

export const PageContext = createContext<PageContextType | null>(null);

export function PageContextProvider({ children }: { children: React.ReactNode }) {
  const [preview, _setPreview] = useState<Pages | null>(null);
  const [blur, setBlur] = useState<boolean>(false);

  function setPreview(page: Pages | null) {
    _setPreview(page);
    setBlur(page ? true : false);
  }

  return (
    <PageContext.Provider value={{ preview, setPreview, blur, setBlur }}>
      {children}
    </PageContext.Provider>
  );
}
