import ProductLayout from "@/components/product/productLayout/ProductLayout";
import Header from "../components/header/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { Source_Sans_3 } from 'next/font/google'
import FilterPath from "@/components/filter/FilterPath";

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-sans',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>
        <Header/>
        <FilterPath/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
