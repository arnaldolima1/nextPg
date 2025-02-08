import type { ReactNode } from "react";
import { FontProvider } from "./font-provider";
import { ThemeProvider } from "./theme-provider";
import { MountedProvider } from "./mounted-provider";

export function Providers({ children }: { children: ReactNode }) {

  return (
    <ThemeProvider attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange>
      <FontProvider>
        <MountedProvider>
          {children}
        </MountedProvider>
      </FontProvider>
    </ThemeProvider>
  )
}