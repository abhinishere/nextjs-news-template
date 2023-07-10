import React from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Urbanist } from "next/font/google";
import Footer from "@/components/layout/Footer";

const inter = Urbanist({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function RootLayout({ children }: { children: React.ReactNode }) {
  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400">
        <p>© NS Thingy</p>
      </div>
    </footer>
  );

  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <Header />
        <div className="bg-white max-w-6xl mx-auto container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
