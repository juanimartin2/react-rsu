import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Footer from "@/componentes/Footer";
import NoLogNavbar from "@/componentes/NoLogNavbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RSU",
  description: "Responsabilidad Social Universitaria - UCC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden p-6 h-screen w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
