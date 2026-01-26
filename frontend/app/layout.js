import { Geist, Geist_Mono, Playpen_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";

const comic = Playpen_Sans(
  {
    variable : "--font-playpen-sans",
    subsets: ["latin"],

  }
)

export const metadata = {
  title: "Polaroid",
  description: "Your memories deserves to be polaroided",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${comic.variable}`}>
      <body
        className={`${comic.variable} comic antialiased w-screen overflow-x-hidden`}
      >
        <AuthProvider>
          <Navbar/>
          {children}
          
        </AuthProvider>
      </body>
    </html>
  );
}
