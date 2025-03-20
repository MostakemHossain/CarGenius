import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter= Inter({
  subsets: ["latin"],

})

export const metadata = {
  title: "CarGenius",
  description: "Smart AI for smarter car deals",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className} `}
      >
        <Header/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
