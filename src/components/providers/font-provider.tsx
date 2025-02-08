"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Font = 'poppins' | 'jetbrains' | 'inter' | 'roboto_mono';

interface FontContextType {
  currentFont: Font;
  setFont: (font: Font) => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export function FontProvider({ children }: { children: ReactNode }) {
  const [currentFont, setCurrentFont] = useState<Font>('jetbrains');

  // Aplica a fonte globalmente sempre que ela mudar
  useEffect(() => {
    document.body.style.fontFamily = `var(--font-${currentFont})`;
  }, [currentFont]);

  const setFont = (font: Font) => {
    setCurrentFont(font);
    localStorage.setItem('preferredFont', font);
  };

  // Recupera a preferência salva ao carregar
  useEffect(() => {
    const savedFont = localStorage.getItem('preferredFont') as Font;
    if (savedFont) {
      setCurrentFont(savedFont);
    }
  }, []);

  return (
    <FontContext.Provider value={{ currentFont, setFont }}>
      {children}
    </FontContext.Provider>
  );
}

export const useFont = () => {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error('useFont must be used within a FontProvider');
  }
  return context;
};