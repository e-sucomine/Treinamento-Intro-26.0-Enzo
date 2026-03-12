import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./global.css";
import Background from "@/components/background";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Dinovo",
  description: "Loja virtual de venda de ovos de dinossauros",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="min-h-screen flex flex-col">

        <nav className="flex flex-col items-center gap-2 p-4 bg-black">
          <h2 className="text-center text-4xl font-semibold text-white">DinOvo</h2>
          <div className="flex gap-4 text-white">
            <a href="/">Home</a>
            <a href="/produtos">Produtos</a>
            <a href="/sobre">Sobre</a>
          </div>
        </nav>
        
          {children}
       
        <footer className="mt-auto flex flex-col items-center p-4 bg-black text-white">
          <p>© 2026 DinOvo</p>
        </footer>

      </body>
    </html>
  );
}
