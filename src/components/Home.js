import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-white font-display overflow-x-hidden">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#282e39] bg-[#111318]/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-[960px] items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <div className="flex items-center justify-center rounded-lg bg-primary/20 p-2 text-primary">
              <span className="material-symbols-outlined text-2xl">
                security
              </span>
            </div>
            <h2 className="text-xl font-bold tracking-tight">BlockList</h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <div className="flex items-center gap-6">
              <a
                className="text-gray-300 hover:text-primary text-sm font-medium transition-colors"
                href="#problem"
              >
                O Problema
              </a>
              <a
                className="text-gray-300 hover:text-primary text-sm font-medium transition-colors"
                href="#solution"
              >
                Solução
              </a>
              <Link
                className="text-gray-300 hover:text-primary text-sm font-medium transition-colors"
                to="/recursos"
              >
                Recursos
              </Link>
            </div>
            <button className="flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 shadow-[0_0_15px_rgba(19,91,236,0.5)]">
              <span>Baixar Bloqueador</span>
            </button>
          </div>
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center overflow-hidden pt-20 pb-32">
        {/* Abstract Background Glow */}
        <div className="absolute top-[-10%] left-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"></div>
        <div className="layout-content-container flex flex-col max-w-[960px] px-6 z-10 w-full">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-6 md:w-1/2">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Tecnologia de Proteção Ativa v2.0
              </div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Recupere o Controle da{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Sua Mente
                </span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-[500px]">
                A pornografia silenciosamente drena sua energia, dopamina e
                foco. Nossa tecnologia cria uma barreira invisível para ajudar
                você a construir uma vida livre.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-bold text-white transition-all hover:bg-primary/90 hover:scale-[1.02]">
                  <span className="material-symbols-outlined text-[20px]">
                    download
                  </span>
                  <span>Baixar Agora</span>
                </button>
                <button className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg border border-[#3b4354] bg-[#1c1f27] px-6 text-base font-bold text-white transition-all hover:bg-[#282e39]">
                  <Link
                    to="/funcionalidades"
                    className="flex items-center gap-2"
                  >
                    <span>Como Funciona</span>
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_forward
                    </span>
                  </Link>
                </button>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                <div className="flex -space-x-2">
                  <div
                    className="h-8 w-8 rounded-full border-2 border-[#111318] bg-gray-600 bg-cover bg-center"
                    data-alt="Avatar of user 1"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbzvkiEEJpm7obGrhCI1wnpuHP51yyDpWpL2LRbCUnzEQEzZTg3K-9umO7LXa2FzElloNLxcSWauKNWYsCS5qA2g_WayXEIOaZ2m-SiIbRhnLMwY7ORZHIa7yZbW8PaZTZtNWj5f1vf-vUe8G2-PiwSZz0LyRXZyfpq8VnhmzAZvgBymHCXF8ZaAfzXf1Vc01dFpH_YtvRpCxPbu657uwUmwsnjokqH885D1UNTONoz27PbO9--EeukvzLt7mfcRH66crtxNHg")',
                    }}
                  ></div>
                  <div
                    className="h-8 w-8 rounded-full border-2 border-[#111318] bg-gray-500 bg-cover bg-center"
                    data-alt="Avatar of user 2"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6N4sx_UYnexmyKDQFHZ9rbYPS5_BltohgPZX0tGcUNVhIEMhF4qH2_Ia6HEw4YVTwms5A3MhCo4a8-rHX2MvBkvfv1eq1_KKLawMxZxua5aWM5gA8rGWgSgmXI37VYtxL6TwA3_41tK0mdujwGj4zeG32sXVdMEYq1uDHMiJF-rfCuycGjgs_VbRC8luJJZdwEosdCuGutQWE0UHxZXZYqkiH87S1Er4ruM5mkJl7KmHH8a2avFnejUutRf6nf2JLXVsrELK8")',
                    }}
                  ></div>
                  <div
                    className="h-8 w-8 rounded-full border-2 border-[#111318] bg-gray-400 bg-cover bg-center"
                    data-alt="Avatar of user 3"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBf-dOl4oXjvcubJKaRhSurjo5jIqTD8iyz69j3efTOa3STZgiIibco1OTfx7n8Y3sTjUzsVDMumIr5sdT8QnUqNQdFwUs5k2Lspf-ZCgixnpeQGrg_KMlXoozCemFXd7I1AWFTIuwnHQAmwXhg6UdB73rY2AnSmb6x5xdZAk72ci_RbUF62CUkl711HLqymRvM5Y7fz9-RaH_kCtCDNlu1_tA9fwJwDfIFNJQ7etYW15IHFwdwptOli14G-k_Ie8BmDLWVtyog")',
                    }}
                  ></div>
                </div>
                <p>
                  Junte-se a{" "}
                  <span className="text-white font-bold">50.000+</span> homens
                  focados.
                </p>
              </div>
            </div>
            {/* Hero Image/Visual */}
            <div className="relative mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#282e39] bg-[#1c1f27] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c1f27] to-[#111318] z-0"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                  <span className="material-symbols-outlined text-6xl text-primary drop-shadow-[0_0_15px_rgba(19,91,236,0.8)]">
                    shield_lock
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 h-16 bg-[#282e39]/50 backdrop-blur-sm rounded-lg border border-[#3b4354] flex items-center px-4 gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="h-2 w-2/3 bg-gray-600 rounded"></div>
                    <div className="h-2 w-1/3 bg-gray-700 rounded"></div>
                  </div>
                  <span className="text-xs text-green-400 font-mono">
                    PROTECTED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Stats Section */}
      <section className="border-y border-[#282e39] bg-[#161a23]">
        <div className="mx-auto flex max-w-[960px] flex-wrap justify-center gap-8 px-6 py-10 md:justify-between">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p className="text-3xl font-bold text-white">50k+</p>
            <p className="text-sm font-medium text-gray-400">
              Usuários Protegidos
            </p>
          </div>
          <div className="h-12 w-px bg-[#282e39] hidden md:block"></div>
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p className="text-3xl font-bold text-white">2M+</p>
            <p className="text-sm font-medium text-gray-400">
              Sites Bloqueados
            </p>
          </div>
          <div className="h-12 w-px bg-[#282e39] hidden md:block"></div>
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p className="text-3xl font-bold text-white">500k</p>
            <p className="text-sm font-medium text-gray-400">
              Horas de Foco Recuperadas
            </p>
          </div>
          <div className="h-12 w-px bg-[#282e39] hidden md:block"></div>
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p className="text-3xl font-bold text-white">4.9/5</p>
            <p className="text-sm font-medium text-gray-400">Avaliação Média</p>
          </div>
        </div>
      </section>
      {/* Problem Section */}
      <section className="py-20 px-6" id="problem">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-12 flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Por que é hora de parar?
            </h2>
            <p className="max-w-[700px] text-lg text-gray-400">
              Entenda os efeitos nocivos do consumo excessivo de conteúdo adulto
              no seu cérebro e na sua vida diária. Não é apenas um hábito, é um
              dreno biológico.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl border border-[#3b4354] bg-[#1c1f27] p-6 transition-all hover:border-primary/50">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10 text-red-500 group-hover:bg-red-500/20 group-hover:text-red-400 transition-colors">
                <span className="material-symbols-outlined">
                  psychology_alt
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Dopamina Desregulada
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                O excesso de estímulo artificial inunda seu sistema de
                recompensa, fazendo com que prazeres simples da vida pareçam sem
                graça.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-[#3b4354] bg-[#1c1f27] p-6 transition-all hover:border-primary/50">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20 group-hover:text-orange-400 transition-colors">
                <span className="material-symbols-outlined">
                  visibility_off
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Perda de Foco Aguda
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                A "névoa mental" torna difícil manter a concentração em tarefas
                importantes, prejudicando seu desempenho profissional.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-[#3b4354] bg-[#1c1f27] p-6 transition-all hover:border-primary/50">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                <span className="material-symbols-outlined">
                  sentiment_dissatisfied
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Isolamento Emocional
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                O conteúdo artificial cria expectativas irreais, gerando
                ansiedade social e distanciamento em relacionamentos reais.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Solution/Features Section */}
      <section className="bg-[#161a23] py-20 px-6" id="solution">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block font-bold text-primary uppercase tracking-wider text-sm">
              A Solução Definitiva
            </span>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Blindagem total contra recaídas
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-gray-400">
              Ferramentas poderosas projetadas para garantir que sua força de
              vontade tenha um backup tecnológico.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#111318] border border-[#282e39]">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                <div className="h-full w-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-gray-600">
                    dns
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded">
                  DNS SHIELD
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Bloqueio a Nível de DNS
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Filtra o conteúdo malicioso antes mesmo de chegar ao seu
                  dispositivo. Funciona em todos os navegadores, sem exceção.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#111318] border border-[#282e39]">
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent"></div>
                <div className="h-full w-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-gray-600">
                    lock
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 bg-red-600/90 text-white text-xs font-bold px-2 py-1 rounded">
                  LOCKED
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Proteção Anti-Desinstalação
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  O modo "Hardcore" impede a desinstalação ou alteração das
                  configurações sem a senha de um parceiro de responsabilidade.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#111318] border border-[#282e39]">
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent"></div>
                <div className="h-full w-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-gray-600">
                    monitoring
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 bg-green-600/90 text-white text-xs font-bold px-2 py-1 rounded">
                  GROWTH
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Relatórios de Progresso
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Acompanhe seus dias limpos e veja visualmente como seu cérebro
                  está se recuperando com o tempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA / Bottom Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111318] to-[#135bec]/10"></div>
        <div className="relative mx-auto flex max-w-[800px] flex-col items-center text-center z-10">
          <div className="mb-6 rounded-full bg-primary/20 p-4 ring-1 ring-primary/40">
            <span className="material-symbols-outlined text-4xl text-primary">
              rocket_launch
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-extrabold text-white md:text-5xl">
            Comece sua nova vida hoje
          </h2>
          <p className="mb-10 text-xl text-gray-300 max-w-[600px]">
            Não deixe mais um dia passar sendo controlado por impulsos. Instale
            o MindGuard e experimente a liberdade real.
          </p>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <button className="flex h-14 w-full items-center justify-center rounded-xl bg-primary px-8 text-lg font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-1 sm:w-auto">
              Baixar Gratuitamente
            </button>
            <button className="flex h-14 w-full items-center justify-center rounded-xl border border-[#3b4354] bg-[#1c1f27] px-8 text-lg font-bold text-white transition-all hover:bg-[#282e39] sm:w-auto">
              Ver Planos Premium
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Compatível com Windows, macOS, Android e iOS.
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-[#282e39] bg-[#0f1115] pt-16 pb-8 px-6">
        <div className="mx-auto max-w-[960px]">
          <div className="grid gap-10 md:grid-cols-4 lg:grid-cols-5 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 text-white mb-4">
                <span className="material-symbols-outlined text-primary">
                  security
                </span>
                <h3 className="text-xl font-bold">MindGuard</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Ajudando homens e mulheres a recuperarem o controle de suas
                vidas digitalmente. Privacidade em primeiro lugar.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold mb-1">Produto</h4>
              <Link
                className="text-gray-400 hover:text-primary text-sm transition-colors"
                to="/download"
              >
                Download
              </Link>
              <Link
                className="text-gray-400 hover:text-primary text-sm transition-colors"
                to="/recursos"
              >
                Recursos
              </Link>
              <Link
                className="text-gray-400 hover:text-primary text-sm transition-colors"
                to="/precos"
              >
                Preços
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold mb-1">Recursos</h4>
              <Link
                className="text-gray-400 hover:text-primary text-sm transition-colors"
                to="/recursos"
              >
                Blog
              </Link>
              <Link
                className="text-gray-400 hover:text-primary text-sm transition-colors"
                to="/historias"
              >
                Comunidade
              </Link>
              <Link
                className="text-gray-400 hover:text-primary text-sm transition-colors"
                to="/ajuda"
              >
                Ajuda
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold mb-1">Legal</h4>
              <a
                className="text-gray-400 hover:text-primary text-sm transition-colors"
                href="#"
              >
                Privacidade
              </a>
              <a
                className="text-gray-400 hover:text-primary text-sm transition-colors"
                href="#"
              >
                Termos
              </a>
            </div>
          </div>
          <div className="border-t border-[#282e39] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © 2025 BlockList Inc. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a
                className="text-gray-500 hover:text-white transition-colors"
                href="#"
              >
                <span className="sr-only">Twitter</span>
                <span className="text-xs font-bold">TW</span>
              </a>
              <a
                className="text-gray-500 hover:text-white transition-colors"
                href="#"
              >
                <span className="sr-only">Instagram</span>
                <span className="text-xs font-bold">IG</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
