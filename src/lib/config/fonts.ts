import { Inter, JetBrains_Mono, Poppins, Roboto_Mono } from 'next/font/google';

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});


export const fonts = [
  { font: 'jetbrains', label: 'JetBrains Mono' },
  { font: 'poppins', label: 'Poppins' },
  { font: 'inter', label: 'Inter' },
  { font: 'roboto-mono', label: 'Roboto Mono' },
];