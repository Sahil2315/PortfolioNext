import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahil Nigam Portfolio",
  description: "Welcome to My Portfolio Website",
  icons: ["/SLogo.svg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`fonter antialiased`}>{children}</body>
    </html>
  );
}
