import { Inter } from "next/font/google";
import "./globals.css";
import React,{ReactNode} from 'react'
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zoom-Clone",
  description: "Video conferencing app",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
<ClerkProvider appearance={{
  layout:{
   logoImageUrl:'icons/yoom-logo.svg',
   socialButtonsVariant:'iconButton'
  },
  variables:{
    colorText:'#fff',
    colorPrimary:"#0E78F9",
    colorBackground:"#1c1f2e",
    colorInputBackground:"#252a41",
    colorInputText:"#fff"
  }
}}>
      <body className={`${inter.className} bg-dark-2`}>
        
        {children}
        
        </body>
        </ClerkProvider>
    </html>
  );
}
