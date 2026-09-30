import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saiyoojyam Ladies Hostels",
  description: "Comfortable, safe, and welcoming living spaces for working women in Kakkanad & Infopark.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased font-sans">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
