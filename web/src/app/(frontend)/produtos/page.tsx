"user client";
import React from 'react';
import ProdutoCard from "@/components/ProdutoCard";


export default function produtos() {
  return (
    <div className="relative min-h-screen">
      <img
        src="evolucao.jpg"
        alt="dinossauro saindo do fóssil para vida"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
      />

      <div className='relative z-10 flex flex-row justify-around items-center min-h-screen'>
        <div>
          <ProdutoCard
            nome="Braquiossauro"
            preço={100.000}
            peso={8000}
            comprimento={12}
          />
        </div>

        <div className='relative z-10'>
          <ProdutoCard
            nome="Velociraptor"
            preço={100.000}
            peso={8000}
            comprimento={12}
          />
        </div>

        <div className='relative z-10'>
          <ProdutoCard
            nome="Triceratops"
            preço={100.000}
            peso={8000}
            comprimento={12}
          />
        </div>
      </div>
    </div>
  )
}