import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import "./modal.css";
import Nav from "./_reuse-components/Nav";

const Nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "ဦး‌ဖေသန်းညျွန့်",
  description: "Medicines Price List",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Nunito.className}>
        {children}
        <Nav />
      </body>
    </html>
  );
}
