import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUMEN — Precision Spatial Computing",
  description: "Next-generation spatial intelligence and real-time environment simulation.",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#050505] text-white antialiased">
      <body className="h-full min-h-screen bg-[#050505] selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
