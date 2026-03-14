import type { Metadata } from "next";
import Carrinho from "@/components/Carrinho";
import { CarrinhoProvider } from "@/context/CarrinhoContext";
import Link from "next/link";


export const metadata: Metadata = {
  title: "DinOvo",
  description: "Loja virtual de venda de ovos de dinossauros",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`min-h-screen flex flex-col`}>
        <CarrinhoProvider>
          <nav className="flex justify-between items-center p-4 bg-black">
            
            <div className="flex flex-row items-center gap-2">
              <h2 className="text-center text-4xl font-semibold text-white">DinOvo</h2>
            </div>
            
            <div className="flex flex-row items-center gap-2">
              <div className="flex gap-4 text-white text-center">

                <Link href="/" className="hover:scale-110 transition-transform duration-200"> 
                  Home
                </Link>

                <Link href="/produtos" className="hover:scale-110 transition-transform duration-200"> 
                  Podutos
                </Link>

                <Link href="/sobre" className="hover:scale-110 transition-transform duration-200"> 
                  Sobre
                </Link>

              </div>
            </div>

            <div className="text-white flex flex-row justify-around gap-4">
              <Link href="/login" className="hover:scale-110 transition-transform duration-200"> 
                  Login
                </Link>
              <Carrinho />
            </div>

          </nav>

          {children}

          <footer className="mt-auto flex flex-col items-center p-4 bg-black text-white">
            <p>© 2026 DinOvo</p>
          </footer>
        </CarrinhoProvider>
      </body>
    </html>
  );
}