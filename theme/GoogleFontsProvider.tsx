import { Inter, Poppins } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

interface GoogleFontsProviderProps {
  children: ReactNode;
}

export default function GoogleFontsProvider({
  children,
}: GoogleFontsProviderProps) {
  return (
    <body className={`${inter.className} ${poppins.variable}`}>{children}</body>
  );
}
