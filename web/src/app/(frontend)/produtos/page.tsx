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

      <div className='relative z-10 grid grid-cols-3 gap-4 justify-items-center items-center min-h-screen p-4'>
        <div>
          <ProdutoCard
            nome="Braquiossauro"
            preço={350}
            peso={50000}
            comprimento={24}
            imagem="/Braquiossauro.png"
          />
        </div>

        <div className='relative z-10'>
          <ProdutoCard
            nome="Velociraptor"
            preço={500.000}
            peso={20}
            comprimento={2}
            imagem="/Velociraptor.png"
          />
        </div>

        <div className='relative z-10'>
          <ProdutoCard
            nome="Triceratops"
            preço={200.000}
            peso={10000}
            comprimento={8}
            imagem="/Tricerátops.png"
          />
        </div>

        <div className='relative z-10'>
          <ProdutoCard
            nome="Anquilossauro"
            preço={250.000}
            peso={8000}
            comprimento={9}
            imagem="/Anquilossauro.jpg"
          />
        </div>

        <div className='relative z-10'>
          <ProdutoCard
            nome="Tiranossauro"
            preço={900.000}
            peso={8000}
            comprimento={12}
            imagem="/Tiranossauro.jpg"
          />
        </div>

        <div className='relative z-10'>
          <ProdutoCard
            nome="Pteranodon"
            preço={450.000}
            peso={35}
            comprimento={8}
            imagem="/Pterossauro.jpg"
          />
        </div>
      </div>
    </div>
  )
}