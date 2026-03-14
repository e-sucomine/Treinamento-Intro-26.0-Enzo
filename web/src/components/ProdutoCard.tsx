"use client";

import React, { useState} from 'react';
import { useCarrinho } from "@/context/CarrinhoContext";
import Image from "next/image";

type ProdutoCardProps = {
  nome: string;
  preço: number;
  peso: number;
  comprimento: number;
  imagem: string;
}

export default function ProdutoCard({ nome, preço, peso, comprimento, imagem }: ProdutoCardProps) {
  const { adicionarItem, removerItem } = useCarrinho();
  const [adicionado, setAdicionado] = useState(false);

  function clicarBotao() {
    if (!adicionado) {
      adicionarItem({
        nome,
        preço,
      });
      setAdicionado(true);
    } else {
      removerItem(nome);
      setAdicionado(false);
    }
  }

  return (
    <div className='border border-black rounded-lg w-72 overflow-hidden'>
      <Image
        src={imagem}
        alt={nome}
        width={640}
        height={640}
        className="w-full h-48 object-cover"
      />

      <div className='p-3 bg-white font-serif'>
        <h2 className='text-lg font-bold'>{nome}</h2>
        <h3>Preço: R${preço}.000,00</h3>
        <p>Peso: {peso}kg</p>
        <p>Comprimento: {comprimento}m</p>
        <div className="flex justify-center mt-2">
          <button
            onClick={clicarBotao} 
            className={`px-5 py-2 rounded-2xl font-semibold transition
              ${adicionado
                ? "bg-red-600 border-red-900 text-white hover:bg-red-700"
                : "bg-green-600 border-green-900 text-white hover:bg-green-700"
              }`}
            >
            {adicionado ? "Cancelar" : "Comprar"}
          </button>
        </div>
      </div>
    </div>
  );
}