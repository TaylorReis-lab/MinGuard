import React from "react";
import { Link } from "react-router-dom";

const Download = () => {
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
                        "surface-dark": "#1c212e",
                        "border-dark": "#292e38",
                    },
                    fontFamily: {
                        "display": ["Manrope", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }`}
      </script>
      <style>
        {`.material-symbols-outlined {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        body {
            font-family: 'Manrope', sans-serif;
        }`}
      </style>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased overflow-x-hidden">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-dark bg-background-dark px-6 py-4 lg:px-20 sticky top-0 z-50">
          <div className="flex items-center gap-3 text-white">
            <div className="flex items-center justify-center size-8 bg-primary rounded-lg text-white">
              <span className="material-symbols-outlined text-[20px]">
                shield_lock
              </span>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              Guardião Digital
            </h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <nav className="flex items-center gap-8">
              <Link
                className="text-slate-300 hover:text-white text-sm font-medium leading-normal transition-colors"
                to="/"
              >
                Início
              </Link>
              <Link
                className="text-slate-300 hover:text-white text-sm font-medium leading-normal transition-colors"
                to="/funcionalidades"
              >
                Como Funciona
              </Link>
              <Link
                className="text-slate-300 hover:text-white text-sm font-medium leading-normal transition-colors"
                to="/historias"
              >
                Comunidade
              </Link>
              <Link
                className="text-slate-300 hover:text-white text-sm font-medium leading-normal transition-colors"
                to="/recursos"
              >
                Blog
              </Link>
            </nav>
            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Área do Membro</span>
            </button>
          </div>
          <div className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </div>
        </header>
        <main className="flex-1 flex flex-col">
          <section className="flex flex-col justify-center py-12 md:py-20 lg:py-24 px-6 lg:px-40">
            <div className="layout-content-container flex flex-col max-w-[1200px] mx-auto w-full">
              <div className="@container">
                <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
                  <div className="flex flex-col gap-8 flex-1 w-full lg:max-w-[600px]">
                    <div className="flex flex-col gap-4 text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                        <span className="material-symbols-outlined text-primary text-[16px]">
                          verified
                        </span>
                        <span className="text-primary text-xs font-bold uppercase tracking-wide">
                          Versão 2.4 Disponível
                        </span>
                      </div>
                      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
                        Sua jornada para a liberdade começa aqui.
                      </h1>
                      <h2 className="text-slate-400 text-lg font-medium leading-relaxed max-w-[540px]">
                        Baixe o nosso bloqueador inteligente. É rápido, leve e
                        completamente privado. Conheça o <b>Guardião</b>, seu
                        parceiro na luta por uma vida digital mais saudável.
                      </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex h-14 min-w-[200px] cursor-pointer items-center justify-center gap-3 rounded-xl bg-primary hover:bg-blue-600 transition-all text-white px-6 shadow-lg shadow-blue-900/20">
                        <span className="material-symbols-outlined">
                          download
                        </span>
                        <div className="flex flex-col items-start">
                          <span className="text-base font-bold leading-none">
                            Baixar Agora
                          </span>
                          <span className="text-[10px] opacity-80 font-normal leading-tight mt-0.5">
                            Para Windows 10/11
                          </span>
                        </div>
                      </button>
                      <button className="flex h-14 min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-border-dark bg-surface-dark hover:bg-slate-800 transition-all text-white px-6">
                        <span className="text-sm font-bold">
                          Outras Versões
                        </span>
                      </button>
                    </div>
                    <p className="text-slate-500 text-sm">
                      * Ao baixar, você concorda com nossos{" "}
                      <a className="text-primary hover:underline" href="#">
                        Termos de Uso
                      </a>{" "}
                      e{" "}
                      <a className="text-primary hover:underline" href="#">
                        Política de Privacidade
                      </a>
                      .
                    </p>
                  </div>
                  <div className="w-full flex-1 flex justify-center lg:justify-end relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="relative w-full aspect-square max-w-[480px] rounded-2xl overflow-hidden bg-gradient-to-br from-surface-dark to-background-dark border border-border-dark shadow-2xl flex items-center justify-center">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        data-alt="3D stylized friendly blue robot mascot character giving a thumbs up, warm lighting, dark background, encouraging expression"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaSdMGYZO-vJ9LhAqJ9pFMfc3wsN1PW5bWOj3EYG0NMztY7VdYzWAg8Ln7AaZJjG2EAL77hiriiPRUfh7IxmoSx6JzCiCUZ0xxiQ8D3-mCWRpbCBcqkLlUBD0PqHUhz89nVLmgg8pZKA3wQmBncQN1eKLbBlm536rrvXzarrg1WrYxD-Rql6fEZclOW1mlItz2D69cB89qeWdvL_Tn5aFQki34a4DeY2mYbhpwe5cvef3WdqsRSK_QDlvHWq5Uy_-wrZZuLF-y")',
                        }}
                      ></div>
                      <div className="absolute bottom-6 left-6 right-6 bg-background-dark/90 backdrop-blur-md border border-border-dark p-4 rounded-xl shadow-lg flex items-center gap-3">
                        <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined">
                            chat
                          </span>
                        </div>
                        <div>
                          <p className="text-white text-sm font-bold">
                            "Estou aqui para te ajudar!"
                          </p>
                          <p className="text-slate-400 text-xs">
                            Seu assistente de instalação
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="border-y border-border-dark bg-surface-dark/50 py-10 px-6 lg:px-40">
            <div className="layout-content-container max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center md:items-start gap-2 p-4">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <span className="material-symbols-outlined">group</span>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">
                      Comunidade
                    </p>
                  </div>
                  <p className="text-white text-3xl font-black tracking-tight">
                    50.000+
                  </p>
                  <p className="text-slate-400 text-sm font-medium">
                    Pessoas protegidas diariamente
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-start gap-2 p-4 border-t md:border-t-0 md:border-l border-border-dark">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <span className="material-symbols-outlined">block</span>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">
                      Proteção
                    </p>
                  </div>
                  <p className="text-white text-3xl font-black tracking-tight">
                    2 Milhões
                  </p>
                  <p className="text-slate-400 text-sm font-medium">
                    Sites bloqueados automaticamente
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-start gap-2 p-4 border-t md:border-t-0 md:border-l border-border-dark">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <span className="material-symbols-outlined">star</span>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">
                      Confiança
                    </p>
                  </div>
                  <p className="text-white text-3xl font-black tracking-tight">
                    4.9/5
                  </p>
                  <p className="text-slate-400 text-sm font-medium">
                    Avaliação média dos usuários
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="border-b border-border-dark bg-background-dark relative py-16 px-6 lg:px-40 overflow-hidden"
            id="avaliacoes"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="layout-content-container max-w-[1200px] mx-auto flex flex-col gap-12">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="flex flex-col gap-4 max-w-[600px]">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-border-dark w-fit">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      favorite
                    </span>
                    <span className="text-slate-300 text-xs font-bold uppercase tracking-wide">
                      Amado pela comunidade
                    </span>
                  </div>
                  <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                    O que dizem sobre o Guardião
                  </h2>
                  <p className="text-slate-400 text-lg">
                    Histórias reais de quem recuperou o controle e a liberdade
                    digital.
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-surface-dark border border-primary/20 p-4 rounded-xl shadow-lg max-w-sm">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">smart_toy</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">
                      Dica do Guardião:
                    </p>
                    <p className="text-slate-400 text-xs">
                      "Ler depoimentos aumenta sua motivação em 80%!"
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-4 rounded-2xl bg-surface-dark border border-border-dark p-6 hover:border-primary/40 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-0.5 text-yellow-500">
                      <span className="material-symbols-outlined text-[20px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px]">
                        star
                      </span>
                    </div>
                    <span className="text-slate-500 text-xs font-medium">
                      Hoje
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    "Simplesmente mudou minha vida. A interface é limpa e o
                    mascote realmente ajuda a não se sentir sozinho no processo.
                    Recomendo demais!"
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border-dark">
                    <div className="size-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                      TR
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-bold">
                        Thiago R.
                      </span>
                      <span className="text-slate-500 text-[10px]">
                        Usuário Verificado
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-2xl bg-surface-dark border border-border-dark p-6 hover:border-primary/40 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-0.5 text-yellow-500">
                      <span className="material-symbols-outlined text-[20px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px]">
                        star
                      </span>
                    </div>
                    <span className="text-slate-500 text-xs font-medium">
                      Ontem
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    "Instalação super rápida. O bloqueador é leve e não pesa no
                    PC. A sensação de paz mental não tem preço."
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border-dark">
                    <div className="size-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                      ML
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-bold">
                        Maria L.
                      </span>
                      <span className="text-slate-500 text-[10px]">
                        Usuário Verificado
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-2xl bg-surface-dark border border-border-dark p-6 hover:border-primary/40 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-0.5 text-yellow-500">
                      <span className="material-symbols-outlined text-[20px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px]">
                        star
                      </span>
                      <span className="material-symbols-outlined text-[20px]">
                        star_half
                      </span>
                    </div>
                    <span className="text-slate-500 text-xs font-medium">
                      Há 3 dias
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    "O suporte é excelente e a ferramenta cumpre o que promete.
                    Finalmente consegui focar nos meus projetos pessoais."
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border-dark">
                    <div className="size-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">
                      JP
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-bold">
                        João P.
                      </span>
                      <span className="text-slate-500 text-[10px]">
                        Usuário Premium
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 md:py-24 px-6 lg:px-40 bg-background-dark">
            <div className="layout-content-container flex flex-col max-w-[1200px] mx-auto gap-16">
              <div className="text-center max-w-[720px] mx-auto flex flex-col gap-4">
                <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                  Instalação Simples e Segura
                </h2>
                <p className="text-slate-400 text-lg">
                  Em apenas três passos, você terá o Guardião ativo e protegendo
                  sua navegação. O mascote guiará você durante todo o processo.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 md:p-8 hover:border-primary/50 transition-colors group">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">
                      download
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-xl font-bold">
                      1. Baixe o Instalador
                    </h3>
                    <p className="text-slate-400 text-base leading-relaxed">
                      Clique no botão de download acima. O arquivo é leve
                      (apenas 45MB) e livre de qualquer software indesejado.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 md:p-8 hover:border-primary/50 transition-colors group">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">
                      install_desktop
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-xl font-bold">
                      2. Instale no PC
                    </h3>
                    <p className="text-slate-400 text-base leading-relaxed">
                      Execute o arquivo baixado. Siga as instruções na tela — é
                      rápido e não requer conhecimentos técnicos.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 md:p-8 hover:border-primary/50 transition-colors group">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">
                      shield_person
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-xl font-bold">
                      3. Ative sua Proteção
                    </h3>
                    <p className="text-slate-400 text-base leading-relaxed">
                      Crie sua conta segura e configure suas preferências.
                      Pronto! Você está no controle novamente.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border-dark bg-surface-dark/30 p-8 mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-slate-400">
                    info
                  </span>
                  <h3 className="text-white text-lg font-bold">
                    Informações Técnicas
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-12">
                  <div className="flex flex-col gap-1">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                      Versão Atual
                    </p>
                    <p className="text-white font-medium">2.4.0 (Estável)</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                      Tamanho do Arquivo
                    </p>
                    <p className="text-white font-medium">45.2 MB</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                      Compatibilidade
                    </p>
                    <p className="text-white font-medium">
                      Windows 10/11, macOS 13+
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                      Última Atualização
                    </p>
                    <p className="text-white font-medium">
                      12 de Outubro, 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="border-t border-border-dark bg-background-dark py-12 px-6 lg:px-40">
          <div className="layout-content-container max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3 text-white">
              <div className="flex items-center justify-center size-6 bg-slate-700 rounded text-white">
                <span className="material-symbols-outlined text-[16px]">
                  shield_lock
                </span>
              </div>
              <span className="font-bold text-slate-200">Guardião Digital</span>
            </div>
            <div className="flex gap-8">
              <Link
                className="text-slate-500 hover:text-white text-sm transition-colors"
                to="/ajuda"
              >
                Suporte
              </Link>
              <a
                className="text-slate-500 hover:text-white text-sm transition-colors"
                href="#"
              >
                Privacidade
              </a>
              <a
                className="text-slate-500 hover:text-white text-sm transition-colors"
                href="#"
              >
                Termos
              </a>
              <Link
                className="text-slate-500 hover:text-white text-sm transition-colors"
                to="/ajuda"
              >
                Contato
              </Link>
            </div>
            <div className="text-slate-600 text-sm">
              © 2023 Guardião Digital. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Download;
