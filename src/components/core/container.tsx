import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center h-screen mx-auto bg-white dark:bg-black">
      {children}
    </div>
  );
}
