import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";
import FooterNav from "@/components/FooterNav";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  // metadataBase: new URL("https://ensiocreative.co"),
  title: "Ensio Creative | Branding and Design Agency - Forging Brands that Endure",
  description:
    "Ensio Creative is a strategy-led branding and design agency forging brands that endure. We partner with ambitious brands and visionary teams to sharpen positioning and build lasting influence.",
  openGraph: {
    title: "Ensio Creative | Branding and Design Agency - Forging Brands that Endure",
    description: "Ensio Creative is a strategy-led branding and design agency forging brands that endure. We partner with ambitious brands and visionary teams to sharpen positioning and build lasting influence.",
    url: "https://ensiocreative.co/",
    siteName: "Ensio Creative",
    images: [
      {
        url: "https://ensiocreative.co/og-image_044714.jpg",
        width: 1200,
        height: 630,
        alt: "EnsioCreative logo on black background",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ensio Creative | Branding and Design Agency - Forging Brands that Endure",
    description: "Ensio Creative is a strategy-led branding and design agency forging brands that endure. We partner with ambitious brands and visionary teams to sharpen positioning and build lasting influence.",
    images: ["https://ensiocreative.co/og-image_044714.jpg"],
    site: "@ensiocreative"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        {/* <Loader /> */}
        <HeaderNav />

        {children}
        <FooterNav />
      </body>
    </html>
  );
}
