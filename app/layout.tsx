import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Sammunat — Web3 Trading Intelligence",
  description: "Modern, responsive landing page built with Next.js + Tailwind.",
  icons: {
    icon: "/vimage.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900`}>
        {children}
      </body>
    </html>
  );
}