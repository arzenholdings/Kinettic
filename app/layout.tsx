import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kinetic Moto Sports — Electric Motion. Activated.",
  description:
    "High-performance electric motos, e-bikes, parts, financing, and support for the next generation of riders. Based in Washington / Pacific Northwest.",
  keywords: [
    "electric moto",
    "e-bike",
    "Sur Ron",
    "Talaria",
    "Ventus",
    "electric dirt bike",
    "powersports",
    "Pacific Northwest",
  ],
  openGraph: {
    title: "Kinetic Moto Sports",
    description: "Electric Motion. Activated.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-graphite-950 font-sans text-white antialiased">
        <Header />
        <main className="relative pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
