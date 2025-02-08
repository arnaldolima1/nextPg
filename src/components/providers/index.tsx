"use client";
import { Toaster } from "sonner";
import type { ReactNode } from "react";
import { FontProvider } from "./font-provider";
import { ThemeProvider } from "./theme-provider";
import { MountedProvider } from "./mounted-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <FontProvider>
        <MountedProvider>
          {children}
          <Toaster richColors />
        </MountedProvider>
      </FontProvider>
    </ThemeProvider>
  );
}
