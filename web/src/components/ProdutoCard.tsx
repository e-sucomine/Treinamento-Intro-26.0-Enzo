import React from 'react';
import { number, string } from 'zod';

type ProdutoCardProps = {
  nome: string;
  preço: number;
  peso: number;
  comprimento: number;
}

export default function ProdutoCard({ nome, preço, peso, comprimento }: ProdutoCardProps) {
  return (
    <div className='border border-black rounded-lg w-60 overflow-hidden'>
      <img
        src="Braquiossauro.png"
        alt={nome}
        className='w-full h-40 object-cover'
      />

      <div className='p-3 bg-white'>
        <h2 className='text-lg font-bold'>{nome}</h2>
        <h3>Preço: R${preço},00</h3>
        <p>Peso: {peso}kg</p>
        <p>Comprimento: {comprimento}m</p>
      </div>
    </div>
  );
}