import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bakya",
  description: "Find the best captions for your posts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-b from-purple-800 to-blue-800 min-h-screen text-white selection:bg-orange-500 "}>{children}</body>
    </html>
  );
}
