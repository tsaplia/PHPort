import { createContext, useState } from "react";
import { Pages } from "../components/page-classes";

type Sections = "core" | "index" | null;

interface NavContextType {
  section: Sections;
  page: Pages | null;
  setPage(section: Sections, page: Pages | null): void;
}

export const NavContext = createContext<NavContextType | null>(null);

export function NavContextProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState<Pages | null>(null);
  const [section, setSection] = useState<Sections>(null);
  function setLocation(section: Sections, page: Pages | null) {
    setSection(section);
    setPage(page);
  }
  return (
    <NavContext.Provider value={{ section, page, setPage: setLocation }}>
      {children}
    </NavContext.Provider>
  );
}
