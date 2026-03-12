export default function Sobre() {
  return (
    <div className="relative min-h-screen content-center">
      <img
        src="evolucao.jpg"
        alt="dinossauro saindo do fóssil para vida"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="flex-col relative z-10 flex justify-center items-center p-60 bg-black/80 border border-white text-white">
        <div className=" flex-col max-w-4xl rounded-lg bg-black border border-black p-10 flex justify-center items-center">
          <h1 className="text-8xl font-serif">Sobre</h1>
          <h3 className="text-center text-[20px] font-serif">
            Somos uma empresa que ajuda pessoas e empresas que precisam, gostam ou desejam possuir um animal pré-histórico a realizar seus sonhos!
            Há mais de 40 anos damos vida às criaturas mais fascinantes que a Terra já produziu, tendo grande destaque no mundo cinematográfio com participação
            em filmes como Kink Kong e a franquia mundialmente conhecida Jurassic Park. Agora, você também pode adquirir o seu próprio ser pré-histórico e fazer parte da história!
          </h3>
        </div>
      </div>
    </div>
  )
}