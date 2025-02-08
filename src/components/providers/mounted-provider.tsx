'use client'
import { useTheme } from "next-themes";
import { createContext, useEffect, useState } from "react";

interface MountedContextProps {
  isMounted: boolean,
  setIsMounted: (isMounted: boolean) => void
}

const MountedContext = createContext<MountedContextProps | null>(null);

export function MountedProvider({ children }: { children: React.ReactNode }) {

  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) setIsMounted(true);
  }, [theme]);

  if (!isMounted) return null;

  return (
    <MountedContext.Provider value={{ isMounted, setIsMounted }}>
      {children}
    </MountedContext.Provider>
  )
}