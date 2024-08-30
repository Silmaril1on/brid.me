import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "BRID | Home",
  description: "Creative Agency",
};

const myFont = localFont({ src: "../public/font/NeutralFace.otf" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={myFont.style} className="flex justify-center">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
