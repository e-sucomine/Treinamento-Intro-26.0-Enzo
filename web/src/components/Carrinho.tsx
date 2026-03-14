"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCarrinho } from "@/context/CarrinhoContext";

export default function Carrinho() {
   const { itens } = useCarrinho();
   const [aberto, setAberto] = useState(false);

  return (
    <div className="relative">

      <button onClick={() => setAberto(!aberto)}>
        <ShoppingCart size={32} className="text-white hover:text-blue-300 hover:scale-110 transition-transform duration-200" />
      </button>

      {itens.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
          {itens.length}
        </span>
      )}

      {aberto && (
        <div className="z-11 absolute right-0 mt-3 w-64 bg-white text-black border shadow-lg p-3">
          
          <h3 className="font-bold mb-2">Carrinho</h3>

          {itens.length === 0 ? (
            <p className="text-sm">Carrinho vazio</p>
          ) : (
            <div className="flex flex-col gap-2">
              {itens.map((item,index) => (
                <div
                  key={index}
                  className="flex justify-between text-sm border-b pb-1"
                >
                  <span>{item.nome}</span>
                  <span>R${item.preço}.000,00</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
}