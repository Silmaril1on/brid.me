import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "BRID | Home",
  description: "Generated by create next app",
};

const myFont = localFont({ src: "../public/font/NeutralFace.otf" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={myFont.style} className="flex justify-center">
        {children}
      </body>
    </html>
  );
}
