import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
export const metadata: Metadata = {
  title: "Foodtuck Restraunt",
  description: "This is Restraunt website",
};

export default function RootLayout({children,}:{ children: React.ReactNode}) 
{
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
