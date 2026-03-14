"use client";

import { createContext, useContext, useState } from "react";

type Produto = {
  nome: string;
  preço: number;
};


type CarrinhoContextType = {
  itens: Produto[];
  adicionarItem: (produto: Produto) => void;
  removerItem: (nome: string) => void;
};

const CarrinhoContext = createContext<CarrinhoContextType | null>(null);

export function CarrinhoProvider({ children }: { children: React.ReactNode }) {
  const [itens, setItens] = useState<Produto[]>([]);

  function adicionarItem(produto: Produto) {
    setItens([...itens, produto]);
  }

  function removerItem(nome: string) {
    setItens(itens.filter((item) => item.nome !== nome));
  }

  return (
    <CarrinhoContext.Provider value={{ itens, adicionarItem, removerItem }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho precisa estar dentro de CarrinhoProvider");
  }
  return context;
}