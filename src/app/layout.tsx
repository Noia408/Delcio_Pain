import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delcio Pain",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="bg-[#111111] w-screen h-screen max-h-screen overflow-hidden p-[2vw] max-sm:p-[8vw] max-sm:pb-[16vw]">
        {children}
      </body>
    </html>
  );
}
