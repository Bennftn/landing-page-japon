import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Japan Tours - Discover the Land of the Rising Sun",
  description:
    "Explore Japan with our 10-day guided tour through Osaka, Kyoto, and Tokyo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
