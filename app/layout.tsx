import { Inter } from "next/font/google";
import "./globals.css";
import React,{ReactNode} from 'react'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zoom-Clone",
  description: "Video conferencing app",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-dark-2`}>
        
        {children}
        
        </body>
        
    </html>
  );
}
