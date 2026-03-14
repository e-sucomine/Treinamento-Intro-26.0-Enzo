import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/evolucao.jpg"
        alt="Dinossauro saindo do fóssil para vida"
        width={640}
        height={640}
        className="hpointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
      />
    </div>
  )
}