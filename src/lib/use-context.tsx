import React, { useContext } from "react";

export function useSaveContext<T>(context: React.Context<T>) {
  const object = useContext(context);
  if (!object) {
    throw new Error("useContext must be used within a Provider");
  }
  return object;
}
