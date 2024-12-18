import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { Roboto_Slab } from "next/font/google";

import "./globals.css";
import MenuBar from "@/components/shared/navigationMenu/NaviBar";
import GProvider from "@/providers/Provider";
import GoTop from "@/components/shared/GoTop";
import ScrollToTop from "@/components/shared/ScrollToTop";
import Footer from "@/components/shared/Footer";
import { Suspense } from "react";
import LoadingBlur from "@/components/shared/LoadingBlur";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--inter",
});
const roboto_slab = Roboto_Slab({
  weight: "400",
  subsets: ["latin"],
  variable: "--roboto_slab",
});
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--roboto",
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--poppins",
});

export const metadata: Metadata = {
  title: "Plantify",
  description: "Share your idea and advice about your gardening",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.className} ${roboto_slab.variable} ${roboto.variable} ${inter.variable} antialiased`}
    >
      <body>
        <GProvider>
          <MenuBar />
          <Suspense fallback={<LoadingBlur />}>
            <div className="pb-[360px]">{children}</div>
          </Suspense>
          <ScrollToTop />
          <GoTop />
          <Footer />
        </GProvider>
      </body>
    </html>
  );
}
