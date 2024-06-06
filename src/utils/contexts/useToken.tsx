import { useContext } from "react";
import TokenContext from "./token";

export function useToken() {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error("ERROR, useToken must be used within TokenContext");
  }
  return context;
}
