export default function Home() {
  return (
    <section className="space-y-8">

      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight">
          JONES
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl">
          Software Engineer & Independent Creator.
          Documentários históricos, política e desenvolvimento.
        </p>
      </div>

      <div className="flex gap-4">
        <a
          href="/feed"
          className="bg-[#FFC400] text-black px-6 py-2 font-semibold hover:opacity-80 transition"
        >
          Ver Feed
        </a>

        <a
          href="/videos"
          className="border border-[#FFC400] text-[#FFC400] px-6 py-2 font-semibold hover:bg-[#111] transition"
        >
          Vídeos
        </a>
      </div>

      <div className="border-t border-[#111] pt-8">
        <p className="text-sm text-gray-500">
          JonesHub é minha infraestrutura digital independente.
          Aqui concentro artigos, vídeos e pensamentos.
        </p>
      </div>

    </section>
  );
}
