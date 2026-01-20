import type { Metadata } from "next";
import "./globals.css";

import { Archivo_Black, Playfair_Display } from "next/font/google";;
import SmoothScroll from "@/components/SmoothScroll";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Savoré",
  description: "Warm minimal restaurant website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${archivoBlack.variable} ${playfairDisplay.variable} font-body bg-[#F6F1EB] overflow-x-hidden`}>
  
      <SmoothScroll>
          {children}
       </SmoothScroll>
      </body>
    </html>
  );
}
 