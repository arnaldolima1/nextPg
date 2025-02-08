import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container flex justify-center items-center h-screen">
      {children}
    </div>
  );
}
