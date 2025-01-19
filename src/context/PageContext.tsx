import { createContext, useContext } from "react";
import { Pages } from "../components/Pages";

interface PageContextType {
  show: Pages | null;
  setShow: UseStateSetter<Pages | null>;
  preview: Pages | null;
  setPreview: UseStateSetter<Pages | null>;
  blur: boolean;
  setBlur: UseStateSetter<boolean>;
}

export const PageContext = createContext<PageContextType | null>(null);

export function usePageContext() {
  const object = useContext(PageContext);
  if (!object) {
    throw new Error("usePageContext must be used within a Provider");
  }
  return object;
}
