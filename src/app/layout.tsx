import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";
import FooterNav from "@/components/FooterNav";
import Loader from "@/components/Loader";

export const metadata = {
  title:
    "Ensio Creative | Branding and Design Agency - Forging Brands that Endure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <Loader />
        <HeaderNav />

        {children}
        <FooterNav />
      </body>
    </html>
  );
}
