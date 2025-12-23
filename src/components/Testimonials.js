import React from "react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&amp;display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet"
      />
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      <script id="tailwind-config">
        {`tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#2060df",
                        "background-light": "#f6f6f8",
                        "background-dark": "#111621",
                        "surface-dark": "#1a202e",
                        "text-secondary": "#9ea7b7",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
                },
            },
        }`}
      </script>
      <style>
        {`.material-symbols-outlined {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }`}
      </style>
      <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden transition-colors duration-200">
        {/* Top Navigation */}
        <div className="relative flex w-full flex-col">
          <div className="layout-container flex h-full grow flex-col">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#292e38] px-4 lg:px-10 py-4 bg-white dark:bg-background-dark sticky top-0 z-50">
              <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                <div className="size-6 text-primary">
                  <span className="material-symbols-outlined !text-3xl">
                    shield_lock
                  </span>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                  Bloqueador Pro
                </h2>
              </div>
              <div className="flex flex-1 justify-end gap-8 hidden lg:flex">
                <div className="flex items-center gap-9">
                  <Link
                    className="text-slate-600 dark:text-white text-sm font-medium hover:text-primary transition-colors"
                    to="/"
                  >
                    Início
                  </Link>
                  <Link
                    className="text-slate-600 dark:text-white text-sm font-medium hover:text-primary transition-colors"
                    to="/funcionalidades"
                  >
                    Funcionalidades
                  </Link>
                  <Link
                    className="text-primary text-sm font-bold"
                    to="/historias"
                  >
                    Histórias
                  </Link>
                  <Link
                    className="text-slate-600 dark:text-white text-sm font-medium hover:text-primary transition-colors"
                    to="/blog"
                  >
                    Blog
                  </Link>
                  <Link
                    className="text-slate-600 dark:text-white text-sm font-medium hover:text-primary transition-colors"
                    to="/precos"
                  >
                    Preços
                  </Link>
                </div>
                <div className="flex gap-2">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20">
                    <span className="truncate">Começar Agora</span>
                  </button>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-100 dark:bg-[#292e38] text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <span className="truncate">Login</span>
                  </button>
                </div>
              </div>
              <div className="lg:hidden">
                <span className="material-symbols-outlined">menu</span>
              </div>
            </header>
          </div>
        </div>
        {/* Main Content Wrapper */}
        <main className="flex flex-col items-center justify-center w-full px-4 md:px-10 py-10">
          <div className="layout-content-container flex flex-col max-w-[1200px] w-full flex-1 gap-12">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row justify-between gap-8 items-start md:items-center p-4">
              <div className="flex flex-col gap-4 max-w-2xl">
                <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Histórias de{" "}
                  <span className="text-primary">Transformação</span>
                </h1>
                <p className="text-slate-500 dark:text-[#9ea7b7] text-lg font-normal leading-relaxed">
                  A pornografia afeta milhões, mas a recuperação é possível.
                  Veja como nosso bloqueador ajudou pessoas reais a restaurar
                  relacionamentos, foco e autoestima.
                </p>
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium">
                    <span className="material-symbols-outlined text-sm">
                      check_circle
                    </span>
                    <span>15,000+ Vidas Impactadas</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span>4.9/5 Avaliação</span>
                  </div>
                </div>
              </div>
              <button className="hidden md:flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-surface-dark border border-slate-700 hover:border-primary text-white text-sm font-bold transition-all gap-2 group">
                <span>Compartilhe sua história</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </section>
            {/* Featured Case Studies Carousel */}
            <section className="flex flex-col gap-6">
              <div className="flex items-center justify-between px-4">
                <h3 className="text-2xl font-bold dark:text-white">
                  Jornadas em Destaque
                </h3>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full bg-slate-200 dark:bg-[#292e38] hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors">
                    <span className="material-symbols-outlined">
                      chevron_left
                    </span>
                  </button>
                  <button className="p-2 rounded-full bg-slate-200 dark:bg-[#292e38] hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors">
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex overflow-x-auto pb-4 gap-6 snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden px-4">
                {/* Card 1 */}
                <div className="snap-center shrink-0 w-[300px] md:w-[350px] flex flex-col gap-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg relative overflow-hidden group"
                    data-alt="Silhouette of a man looking at a sunrise from a mountain top"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJpavYUV6l0KaEF1ntc0MM9EVM8va_Pe9CazSF0jbmvbq7IHyMb7KepZMTXA3QY6T1JpMdfpxox9p67aazqKNgXJU-EwJTFj5-WBoBQvsnxzjkJDheH0PJDMGN_oqn4BHcVhueFG6u5jv6_NFFdP5Qx_GKZygs4wXx53461dsYfGjK81Hy5HxnZDC9E7raSrVVrakhyyHVJ-mIwUbcnxrjDGcbviXk55HuyiiWDjPnrfF5yWRCHzT7BqC4LbUawgGsNOdjniD0");',
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute bottom-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md">
                      6 Meses Limpo
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">
                      Recuperando o Tempo Perdido
                    </p>
                    <p className="text-slate-500 dark:text-text-secondary text-sm leading-normal line-clamp-3">
                      "Eu não percebia quanto tempo perdia por dia. O bloqueador
                      me deu a pausa necessária para refletir antes de agir.
                      Hoje, terminei minha faculdade."
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="size-8 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-xs font-bold dark:text-white">
                        PS
                      </div>
                      <span className="text-sm font-medium dark:text-slate-300">
                        Pedro S.
                      </span>
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="snap-center shrink-0 w-[300px] md:w-[350px] flex flex-col gap-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg relative overflow-hidden group"
                    data-alt="Hands holding each other representing restored relationship"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwB3s79SLlErooo1ifzKwT7F5EnkRtb5bU8PP1zQemelXNcYmBS5oCGiu1JJx7Xdb53f0vKhep-pXXdokgRRDL1Mgb5cKMSjrgDYmcQzykXenbWKu_gK_XJqgnnlvgyvNy1M_B8dIJN8szUCF63JQjdMtZnFSQY2VzqgJ9I3OGGIxW5eFQzaSgWxG_wFiESi-NyQt3llbn6cE2rxlaDEIQeZJ6VjMbapIbVfuI7q_SUoHd0CxULwiZXmMt1IkVOqj1Hvt9vv8n");',
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute bottom-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                      Casamento Salvo
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">
                      Uma Segunda Chance
                    </p>
                    <p className="text-slate-500 dark:text-text-secondary text-sm leading-normal line-clamp-3">
                      "Minha esposa estava prestes a sair de casa. Instalar o
                      Bloqueador Pro mostrou a ela que eu estava falando sério
                      sobre mudar. Salvou nossa família."
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="size-8 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-xs font-bold dark:text-white">
                        AL
                      </div>
                      <span className="text-sm font-medium dark:text-slate-300">
                        André L.
                      </span>
                    </div>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="snap-center shrink-0 w-[300px] md:w-[350px] flex flex-col gap-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg relative overflow-hidden group"
                    data-alt="Person working focused on a laptop in a bright coffee shop"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA93wXLVhaiHM5r0XBRYCM5nvk3l8__WnrTSsJNAC4I7vOtfi2n4fmmlsSfBKkGwEbDfC8aAoAESEtj7gRzz9QChLU3q5dz8fIrMcIhDFBUAK8bVfyEXqpIk24dzD9ejI5DE33_J5l9PN5yOt-5f8aDP0wltYWuhvtDra9eVJ-0Uv4eWsqOG4T-UH27MASSWuPUpDRWnsXEyE9z5lqPTBT9yI-WM7QRcOzEr9B5zQcOxaFLGPowAxryNZkMu5XsJOatrhUbo9nv");',
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute bottom-3 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                      Foco Total
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">
                      Produtividade no Trabalho
                    </p>
                    <p className="text-slate-500 dark:text-text-secondary text-sm leading-normal line-clamp-3">
                      "Eu procrastinava horas no trabalho. O filtro inteligente
                      bloqueia tudo sem eu precisar configurar mil coisas. Minha
                      carreira decolou."
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="size-8 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-xs font-bold dark:text-white">
                        MC
                      </div>
                      <span className="text-sm font-medium dark:text-slate-300">
                        Maria C.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Testimonial Grid (Main Reviews) */}
            <section className="flex flex-col gap-8">
              <div className="px-4">
                <h3 className="text-2xl font-bold dark:text-white mb-2">
                  Comunidade Ativa
                </h3>
                <p className="text-slate-500 dark:text-text-secondary">
                  Milhares de depoimentos verificados de quem transformou seus
                  hábitos.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {/* Review Item 1 */}
                <div className="flex flex-col gap-4 bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-6xl text-primary">
                      format_quote
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                      data-alt="Abstract blurry avatar representing privacy"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcFdojopvc43ppnO5BxgBR85pf3Mr6u1M8mmHLUzIMV7J6fDCP-y_Fanc_9yVDdZIslZUs6ULtbsGZbNtVScWeWC4ruptrObhpQCdsFkpWitFpL3tgcOl88vcIrrLBKVbYvPNt1FhkBsCxcQbSGqGqDpSBH5DFoBSl2WNVmUVgGvy1bD-FKH_khwa_oY8M1nNCTS8DdsU6UPQ-pahXAAq-m96oJm526u_bOJHNO0auiNWrrGTCPFMV58xOVkILg8BE0n8aravV");',
                      }}
                    ></div>
                    <div className="flex-1 z-10">
                      <div className="flex items-center gap-1">
                        <p className="text-slate-900 dark:text-white text-base font-bold">
                          Ricardo Gomes
                        </p>
                        <span
                          className="material-symbols-outlined text-primary text-sm"
                          title="Usuário Verificado"
                        >
                          verified
                        </span>
                      </div>
                      <p className="text-slate-500 dark:text-text-secondary text-xs">
                        Membro há 1 ano
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-yellow-500">
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed z-10">
                    "Excelente ferramenta. O suporte é rápido e a tecnologia de
                    bloqueio é robusta. Tentei burlar de várias formas nos
                    momentos de fraqueza e não consegui. É a segurança que eu
                    precisava."
                  </p>
                  <div className="flex gap-6 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        thumb_up
                      </span>
                      <span className="text-xs font-medium">124</span>
                    </button>
                    <span className="text-xs ml-auto">2 dias atrás</span>
                  </div>
                </div>
                {/* Review Item 2 */}
                <div className="flex flex-col gap-4 bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-6xl text-primary">
                      format_quote
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 rounded-full size-12 flex items-center justify-center text-primary font-bold text-lg">
                      MD
                    </div>
                    <div className="flex-1 z-10">
                      <div className="flex items-center gap-1">
                        <p className="text-slate-900 dark:text-white text-base font-bold">
                          Marta D.
                        </p>
                        <span
                          className="material-symbols-outlined text-primary text-sm"
                          title="Usuário Verificado"
                        >
                          verified
                        </span>
                      </div>
                      <p className="text-slate-500 dark:text-text-secondary text-xs">
                        Mãe de família
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-yellow-500">
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed z-10">
                    "Mudou a dinâmica da nossa família. Meus filhos estão mais
                    seguros agora e eu tenho paz de espírito sabendo que o
                    conteúdo nocivo está longe da nossa casa."
                  </p>
                  <div className="flex gap-6 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        thumb_up
                      </span>
                      <span className="text-xs font-medium">89</span>
                    </button>
                    <span className="text-xs ml-auto">1 semana atrás</span>
                  </div>
                </div>
                {/* Review Item 3 */}
                <div className="flex flex-col gap-4 bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-6xl text-primary">
                      format_quote
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-500/20 rounded-full size-12 flex items-center justify-center text-purple-500 font-bold text-lg">
                      AN
                    </div>
                    <div className="flex-1 z-10">
                      <div className="flex items-center gap-1">
                        <p className="text-slate-900 dark:text-white text-base font-bold">
                          Anônimo
                        </p>
                        <span
                          className="material-symbols-outlined text-slate-500 text-sm"
                          title="Usuário Verificado"
                        >
                          verified
                        </span>
                      </div>
                      <p className="text-slate-500 dark:text-text-secondary text-xs">
                        Em recuperação
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-yellow-500">
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed z-10">
                    "Eu não acreditava que um software poderia ajudar tanto. A
                    funcionalidade de 'parceiro de responsabilidade' foi crucial
                    para eu me manter no caminho certo."
                  </p>
                  <div className="flex gap-6 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        thumb_up
                      </span>
                      <span className="text-xs font-medium">45</span>
                    </button>
                    <span className="text-xs ml-auto">2 semanas atrás</span>
                  </div>
                </div>
                {/* Review Item 4 */}
                <div className="flex flex-col gap-4 bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-6xl text-primary">
                      format_quote
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                      data-alt="Abstract blurry avatar representing privacy"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAak0Ekei5nGuCjpQCYKq8VHoizBMM0vJDQuJHmjwKX8Jt_MDYMg8nWf648Nd4vrUjw1OOFsZibchquXLZs5ZKZozOqZDXF3xQXjT8-Nv9td8aG1btfKTAnxvkt22DZfWP0YHI-H02fJ5C5bSzXznNi_d85iH7-dmVKd0b2G-Iqpy5mCyxxl1IQ3a-v9LlW5qwTWh5mpRRkXHXe24uIfyYPpEotZrk0EaZkI9mnBsejc5vjXiqa-5a_4bcC8e6AaTysFzDPsqgl");',
                      }}
                    ></div>
                    <div className="flex-1 z-10">
                      <div className="flex items-center gap-1">
                        <p className="text-slate-900 dark:text-white text-base font-bold">
                          Lucas Mendes
                        </p>
                        <span
                          className="material-symbols-outlined text-primary text-sm"
                          title="Usuário Verificado"
                        >
                          verified
                        </span>
                      </div>
                      <p className="text-slate-500 dark:text-text-secondary text-xs">
                        Estudante
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-yellow-500">
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed z-10">
                    "A instalação foi super simples e funciona perfeitamente no
                    meu celular e notebook. Sinto minha mente muito mais clara
                    depois de 30 dias."
                  </p>
                  <div className="flex gap-6 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        thumb_up
                      </span>
                      <span className="text-xs font-medium">21</span>
                    </button>
                    <span className="text-xs ml-auto">3 semanas atrás</span>
                  </div>
                </div>
                {/* Review Item 5 */}
                <div className="flex flex-col gap-4 bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-6xl text-primary">
                      format_quote
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/20 rounded-full size-12 flex items-center justify-center text-green-600 font-bold text-lg">
                      CR
                    </div>
                    <div className="flex-1 z-10">
                      <div className="flex items-center gap-1">
                        <p className="text-slate-900 dark:text-white text-base font-bold">
                          Carlos R.
                        </p>
                        <span
                          className="material-symbols-outlined text-primary text-sm"
                          title="Usuário Verificado"
                        >
                          verified
                        </span>
                      </div>
                      <p className="text-slate-500 dark:text-text-secondary text-xs">
                        Membro há 6 meses
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-yellow-500">
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg">
                      star
                    </span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed z-10">
                    "Recuperei a confiança da minha noiva. É uma ferramenta, não
                    uma mágica, mas é a ferramenta mais eficaz que já
                    encontrei."
                  </p>
                  <div className="flex gap-6 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        thumb_up
                      </span>
                      <span className="text-xs font-medium">67</span>
                    </button>
                    <span className="text-xs ml-auto">1 mês atrás</span>
                  </div>
                </div>
                {/* Review Item 6 */}
                <div className="flex flex-col gap-4 bg-primary text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 opacity-20">
                    <span className="material-symbols-outlined text-9xl">
                      shield
                    </span>
                  </div>
                  <div className="z-10 flex flex-col items-center justify-center text-center h-full gap-4">
                    <h4 className="text-xl font-bold">
                      Sua história começa aqui
                    </h4>
                    <p className="text-blue-100 text-sm">
                      Junte-se a milhares de pessoas que decidiram mudar de vida
                      hoje.
                    </p>
                    <button className="bg-white text-primary px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors w-full">
                      Começar Gratuitamente
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/* Community Visual Grid */}
            <section className="flex flex-col gap-6 py-8">
              <div className="px-4 text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold dark:text-white mb-2">
                  Você não está sozinho
                </h3>
                <p className="text-slate-500 dark:text-text-secondary">
                  Nossa comunidade cresce a cada dia. Pessoas reais, buscando o
                  melhor para si e para suas famílias.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div
                  className="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-square relative overflow-hidden group"
                  data-alt="Abstract blurry gradient blue"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnD8uN1QqZqbnk0Vf3E0E05tavZr_ItplWCuml0l7KJ7exSkuTKOI_zuOxuSlD7ObMEVFikwH_c11ewM73BJ7qCvLwMzm4xTuXguF9Q0BEoPrfDDegW2_1KJAKydPXa_FvY_LXTt75mCDrLFLc909f0xfgeEt4R86wEg9jKkHVrxogB4jYzjajHi2D_98ZzD418rNdMfMWED1bjdge0ZuEptcNj0DmYzDEHxtCXKMcb89pHze6FvP3K-vT8TewZatf9Ahg1S_W");',
                  }}
                >
                  <span className="material-symbols-outlined text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-4xl">
                    lock
                  </span>
                  <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2 z-10">
                    Filipe J.
                  </p>
                </div>
                <div
                  className="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-square relative overflow-hidden group"
                  data-alt="Abstract blurry gradient purple"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAegVr0E4NJHczF_qNg5CR1JlylL8Mh6IK-vBxqIIAAFbZMXCw8Ff7Zs66mpsWGcdojkgaU5nzaTKPu1kw_igbn1aEaMr8VZoEDCNzCyfBhkYQa9pApmTZjtX18-IxZlfaRvj3I771hJ6-YWwQCkJXoEw5wOn1IVPiiaZX4_rV1sjJh7l-9FtFzPfRbdF33yorHGzXgleEBlia_ACgflU3C9rt96F48fOUeZY52T0zhqPZzUidASH0K_FujtlC137JN04fZKQJz");',
                  }}
                >
                  <span className="material-symbols-outlined text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-4xl">
                    lock
                  </span>
                  <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2 z-10">
                    Anônimo
                  </p>
                </div>
                <div
                  className="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-square relative overflow-hidden group"
                  data-alt="Abstract blurry gradient green"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYCvlZQjtNodUYOF3VqhDxxCz-E542hOYd76yg_6C2sLagm6WSje-LD45WaVyOay5zWX118jApWq6NPeJXP3wNMfON1scmw8nuiby-RzivHfUmYjlgo7PVjbmXCrW1dOvT8X7qaOvBcU6ygE2oJ12btlKQ9KqTVHG44b1knqtk0piMVVEGQypNgpwcSzK9YwQrM6DJH1719513Z5MiyQTjsgcZLEiEXdWe99vHT5rvWYPnW8YjboMrn_-rgyih5GSRCXTOM2hT");',
                  }}
                >
                  <span className="material-symbols-outlined text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-4xl">
                    lock
                  </span>
                  <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2 z-10">
                    Roberto M.
                  </p>
                </div>
                <div
                  className="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-square relative overflow-hidden group"
                  data-alt="Abstract blurry gradient dark"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBGDj4ucCBPjxxNcDXSIcjT_1aDpIA-qmmt5a_7fFSLquygdi3zPuuqOOSfPF91PSEQv3Gvj214X-KblTVQ_eUxhYNjovjxVwX4Zx1gHgrhvkPsm-xDOaE6m_Qpz59Rg9MwNsX9qo7pzxT-ssTQiCv3KkwnJonUgNmzi7RINGyn7cL5jBUzpAf3A0GCX5u1UMBdhL9IlxqjJ5_Pn5r_mBA6WZABgfkuRx8L1lnlJMEaTFdB6Oi17YyRoc8_Ph7HBx73YDBHYgF");',
                  }}
                >
                  <span className="material-symbols-outlined text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-4xl">
                    lock
                  </span>
                  <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2 z-10">
                    T. S.
                  </p>
                </div>
                <div
                  className="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-square relative overflow-hidden group"
                  data-alt="Abstract blurry gradient teal"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqsbGCDqU4fNAt97qXpCzpAUNAV_Drezeui4zx0a3WZ9acao_YIGlotn8qxKN9SzihAdzQcQWFhXxxRrA2aJhOKNECkiY6MOdNw_dlL1Au2DXrLeEHpX8r_fo76gLmHkXzcppX5AVn3CZO2O--XqKlqdG4R4a9oguAqpmKuW00bdm83uMOO8xnAxFLlFFJvtw3Gn7HqRCWxFNBEKQjDSEkQdQnDd6k9xPejxQEYyA-IveZR0iOFdOfWy1VxiW1ZoR9vqO_0EK8");',
                  }}
                >
                  <span className="material-symbols-outlined text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-4xl">
                    lock
                  </span>
                  <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2 z-10">
                    Família Souza
                  </p>
                </div>
              </div>
            </section>
            {/* CTA Section */}
            <section className="p-4">
              <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#1a202e] to-[#292e38] rounded-2xl overflow-hidden border border-slate-700">
                <div className="p-8 md:p-12 flex flex-col justify-center gap-6 flex-1">
                  <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">
                    Pronto para escrever sua própria história?
                  </h2>
                  <p className="text-slate-300 text-lg">
                    O primeiro passo é sempre o mais difícil. Deixe que nossa
                    tecnologia facilite o caminho para você.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2">
                      <span>Experimentar Grátis</span>
                      <span className="material-symbols-outlined text-lg">
                        rocket_launch
                      </span>
                    </button>
                    <button className="bg-transparent border border-slate-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                      Ver Planos
                    </button>
                  </div>
                  <p className="text-slate-500 text-xs mt-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      lock
                    </span>
                    Seus dados são criptografados e 100% anônimos.
                  </p>
                </div>
                <div
                  className="hidden md:block w-1/3 bg-cover bg-center relative"
                  data-alt="Peaceful mountain landscape representing freedom"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD51JxfJUDlUeAuOISC-2octeBN6iMYzcuO6QheZDfAzIVWzDn8yfRX7NRyLO87sTVRXpFVdGjYslWLnFNsXeXXq7fGw1wdDxX78G3Bo80VsHU8Dw5kVcWzEv5A6ZR7VXRWBl-SfFml6ZMiBAoLH7huF_dCWpPAYlwUyepKh8NzOU23JVxO1roz9Jc3mBU890Fzv-m7U7Wm34xx38Ye1pLnSDmamIhqgVDXYluwD-loTbQWELBcwjuXwZIMslBFRNjnvF6i7x_R");',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#292e38] to-transparent"></div>
                </div>
              </div>
            </section>
          </div>
        </main>
        {/* Footer */}
        <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-10 px-4">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white">
              <div className="size-5 text-slate-400">
                <span className="material-symbols-outlined">shield_lock</span>
              </div>
              <span className="font-bold">Bloqueador Pro</span>
            </div>
            <div className="flex gap-8 text-slate-500 text-sm">
              <Link
                to="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacidade
              </Link>
              <Link
                to="/terms"
                className="hover:text-primary transition-colors"
              >
                Termos
              </Link>
              <Link
                to="/support"
                className="hover:text-primary transition-colors"
              >
                Suporte
              </Link>
            </div>
            <p className="text-slate-400 text-sm">
              © 2024 Bloqueador Pro. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Testimonials;
