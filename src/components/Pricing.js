import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;display=swap"
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
                "surface-dark": "#1c1f26",
                "border-dark": "#292e38",
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
        {`body {
          font-family: 'Manrope', sans-serif;
        }

        /* Custom scrollbar for table if needed */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #111621;
        }

        ::-webkit-scrollbar-thumb {
          background: #292e38;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #3d4452;
        }`}
      </style>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-x-hidden relative flex min-h-screen w-full flex-col group/design-root">
        {/* Navigation */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-border-dark bg-background-dark/95 backdrop-blur-sm px-6 py-3 lg:px-40">
          <div className="flex items-center gap-4 text-white">
            <div className="size-8 text-primary">
              <svg
                className="w-full h-full"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM21.2 32.8L14.4 26L17.2 23.2L21.2 27.2L30.8 17.6L33.6 20.4L21.2 32.8Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
              PurePath
            </h2>
          </div>
          <div className="hidden lg:flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9">
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
                Funcionalidades
              </Link>
              <Link
                className="text-white text-sm font-medium leading-normal"
                to="/precos"
              >
                Planos
              </Link>
              <Link
                className="text-slate-300 hover:text-white text-sm font-medium leading-normal transition-colors"
                to="/ajuda"
              >
                Ajuda
              </Link>
            </nav>
            <Link
              to="/login"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Entrar</span>
            </Link>
          </div>
          <button className="lg:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>
        <main className="flex-1 flex flex-col items-center">
          {/* Hero Section */}
          <section className="w-full px-6 py-12 lg:px-40 lg:py-16 max-w-[1280px]">
            <div className="flex flex-col items-center text-center gap-6">
              <span className="text-primary font-bold tracking-wider text-sm uppercase">
                Liberdade e Controle
              </span>
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl max-w-3xl">
                Invista na sua recuperação e proteja quem você ama
              </h1>
              <p className="text-slate-400 text-lg font-normal leading-relaxed max-w-2xl">
                Escolha o plano que melhor se adapta à sua jornada. Ferramentas
                poderosas, suporte dedicado e total privacidade para você
                reconstruir seus hábitos.
              </p>
            </div>
          </section>
          {/* Toggle Buttons */}
          <section className="w-full px-6 pb-8 max-w-[1280px] flex justify-center">
            <div className="inline-flex h-12 items-center justify-center rounded-lg bg-surface-dark p-1 border border-border-dark">
              <label className="group flex cursor-pointer h-full items-center justify-center rounded-[4px] px-6 transition-all has-[:checked]:bg-background-dark has-[:checked]:text-white has-[:checked]:shadow-sm text-slate-400">
                <span className="text-sm font-medium">Mensal</span>
                <input
                  className="hidden"
                  name="billing-cycle"
                  type="radio"
                  value="monthly"
                />
              </label>
              <label className="group flex cursor-pointer h-full items-center justify-center rounded-[4px] px-6 transition-all has-[:checked]:bg-background-dark has-[:checked]:text-white has-[:checked]:shadow-sm text-slate-400">
                <span className="text-sm font-medium">
                  Anual{" "}
                  <span className="text-emerald-400 text-xs ml-1 font-bold">
                    -20%
                  </span>
                </span>
                <input
                  checked=""
                  className="hidden"
                  name="billing-cycle"
                  type="radio"
                  value="yearly"
                />
              </label>
            </div>
          </section>
          {/* Pricing Cards */}
          <section className="w-full px-6 py-6 lg:px-40 max-w-[1280px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Free Plan */}
              <div className="flex flex-col gap-6 rounded-xl border border-border-dark bg-surface-dark p-8 hover:border-slate-600 transition-colors">
                <div>
                  <h3 className="text-white text-xl font-bold leading-tight mb-2">
                    Iniciante
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Para quem está começando a jornada.
                  </p>
                </div>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-black tracking-tight">
                    Grátis
                  </span>
                  <span className="text-slate-400 font-medium">/sempre</span>
                </div>
                <button className="w-full cursor-pointer rounded-lg h-12 px-4 bg-border-dark hover:bg-slate-700 text-white text-sm font-bold transition-colors">
                  Começar Agora
                </button>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="material-symbols-outlined text-emerald-400 text-[20px]">
                      check
                    </span>
                    Bloqueio de 2.000+ sites adultos
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="material-symbols-outlined text-emerald-400 text-[20px]">
                      check
                    </span>
                    1 Dispositivo protegido
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="material-symbols-outlined text-emerald-400 text-[20px]">
                      check
                    </span>
                    Filtro de pesquisa segura (Google/Bing)
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 text-sm line-through decoration-slate-600">
                    <span className="material-symbols-outlined text-slate-600 text-[20px]">
                      close
                    </span>
                    Proteção contra desinstalação
                  </div>
                </div>
              </div>
              {/* Recommended Plan */}
              <div className="relative flex flex-col gap-6 rounded-xl border-2 border-primary bg-surface-dark p-8 shadow-[0_0_40px_rgba(32,96,223,0.15)] transform md:-translate-y-4">
                <div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Mais Popular
                  </span>
                </div>
                <div className="mt-2">
                  <h3 className="text-white text-xl font-bold leading-tight mb-2">
                    Recuperação
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Foco total e ferramentas anti-recaída.
                  </p>
                </div>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-black tracking-tight">
                    R$ 29,90
                  </span>
                  <span className="text-slate-400 font-medium">/mês</span>
                </div>
                <button className="w-full cursor-pointer rounded-lg h-12 px-4 bg-primary hover:bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-900/20 transition-colors">
                  Assinar Premium
                </button>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex items-center gap-3 text-white text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      check_circle
                    </span>
                    Proteção impossível de burlar
                  </div>
                  <div className="flex items-center gap-3 text-white text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      check_circle
                    </span>
                    Parceiro de Responsabilidade
                  </div>
                  <div className="flex items-center gap-3 text-white text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      check_circle
                    </span>
                    Botão de Pânico 24h
                  </div>
                  <div className="flex items-center gap-3 text-white text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      check_circle
                    </span>
                    Relatórios de progresso semanais
                  </div>
                  <div className="flex items-center gap-3 text-white text-sm font-medium">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      check_circle
                    </span>
                    Proteção para 3 dispositivos
                  </div>
                </div>
              </div>
              {/* Family Plan */}
              <div className="flex flex-col gap-6 rounded-xl border border-border-dark bg-surface-dark p-8 hover:border-slate-600 transition-colors">
                <div>
                  <h3 className="text-white text-xl font-bold leading-tight mb-2">
                    Família
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Proteção completa para todos em casa.
                  </p>
                </div>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-black tracking-tight">
                    R$ 49,90
                  </span>
                  <span className="text-slate-400 font-medium">/mês</span>
                </div>
                <button className="w-full cursor-pointer rounded-lg h-12 px-4 bg-border-dark hover:bg-slate-700 text-white text-sm font-bold transition-colors">
                  Proteger Família
                </button>
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="material-symbols-outlined text-emerald-400 text-[20px]">
                      check
                    </span>
                    Tudo do plano Recuperação
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="material-symbols-outlined text-emerald-400 text-[20px]">
                      check
                    </span>
                    Até 10 dispositivos
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="material-symbols-outlined text-emerald-400 text-[20px]">
                      check
                    </span>
                    Gerenciamento centralizado (Painel Pai)
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="material-symbols-outlined text-emerald-400 text-[20px]">
                      check
                    </span>
                    Modo Infantil personalizado
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Feature Table */}
          <section className="w-full px-6 py-12 lg:px-40 max-w-[1280px]">
            <h2 className="text-white text-2xl font-bold mb-8 text-center">
              Comparativo Detalhado
            </h2>
            <div className="overflow-hidden rounded-xl border border-border-dark bg-surface-dark shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse">
                  <thead>
                    <tr className="bg-background-dark/50 border-b border-border-dark">
                      <th className="p-4 text-left text-sm font-medium text-slate-400 w-1/3">
                        Recursos
                      </th>
                      <th className="p-4 text-center text-sm font-bold text-white w-1/5">
                        Iniciante
                      </th>
                      <th className="p-4 text-center text-sm font-bold text-primary w-1/5">
                        Recuperação
                      </th>
                      <th className="p-4 text-center text-sm font-bold text-white w-1/5">
                        Família
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-dark">
                    <tr className="hover:bg-background-dark/30 transition-colors">
                      <td className="p-4 text-sm text-slate-300">
                        Bloqueio de Pornografia
                      </td>
                      <td className="p-4 text-center">
                        <span className="material-symbols-outlined text-emerald-400">
                          check
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="material-symbols-outlined text-emerald-400">
                          check
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="material-symbols-outlined text-emerald-400">
                          check
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-background-dark/30 transition-colors">
                      <td className="p-4 text-sm text-slate-300">
                        Bloqueio de Apps Específicos
                      </td>
                      <td className="p-4 text-center">
                        <span className="material-symbols-outlined text-slate-600">
                          remove
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="material-symbols-outlined text-emerald-400">
                          check
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="material-symbols-outlined text-emerald-400">
                          check
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-background-dark/30 transition-colors">
                      <td className="p-4 text-sm text-slate-300">
                        Proteção Anti-Desinstalação
                      </td>
                      <td className="p-4 text-center">
                        <span className="material-symbols-outlined text-slate-600">
                          remove
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="material-symbols-outlined text-emerald-400">
                          check
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="material-symbols-outlined text-emerald-400">
                          check
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-background-dark/30 transition-colors">
                      <td className="p-4 text-sm text-slate-300">
                        Parceiro de Responsabilidade
                      </td>
                      <td className="p-4 text-center">
                        <span className="material-symbols-outlined text-slate-600">
                          remove
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="material-symbols-outlined text-emerald-400">
                          check
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="material-symbols-outlined text-emerald-400">
                          check
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-background-dark/30 transition-colors">
                      <td className="p-4 text-sm text-slate-300">
                        Dispositivos
                      </td>
                      <td className="p-4 text-center text-sm text-slate-400">
                        1
                      </td>
                      <td className="p-4 text-center text-sm text-white font-bold">
                        3
                      </td>
                      <td className="p-4 text-center text-sm text-white font-bold">
                        10
                      </td>
                    </tr>
                    <tr className="hover:bg-background-dark/30 transition-colors">
                      <td className="p-4 text-sm text-slate-300">Suporte</td>
                      <td className="p-4 text-center text-sm text-slate-400">
                        Email
                      </td>
                      <td className="p-4 text-center text-sm text-white font-bold">
                        Chat Prioritário
                      </td>
                      <td className="p-4 text-center text-sm text-white font-bold">
                        Chat Prioritário
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          {/* Testimonials */}
          <section className="w-full px-6 py-16 lg:px-40 bg-surface-dark border-y border-border-dark">
            <div className="max-w-[1280px] mx-auto">
              <h2 className="text-white text-3xl font-bold mb-12 text-center">
                Histórias de quem retomou o controle
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-background-dark p-6 rounded-xl border border-border-dark">
                  <div className="flex gap-1 mb-4 text-amber-400">
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    "Eu tentei de tudo por 5 anos. O recurso de Parceiro de
                    Responsabilidade foi o que finalmente me ajudou a ser
                    honesto comigo mesmo. Estou limpo há 6 meses."
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden"
                      data-alt="User avatar placeholder with abstract gradient"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">Carlos M.</p>
                      <p className="text-slate-500 text-xs">
                        Membro Plano Recuperação
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-background-dark p-6 rounded-xl border border-border-dark">
                  <div className="flex gap-1 mb-4 text-amber-400">
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    "Instalei no celular do meu filho adolescente. A paz de
                    espírito que tenho sabendo que ele está protegido de
                    conteúdos nocivos não tem preço."
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden"
                      data-alt="User avatar placeholder with abstract gradient"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600"></div>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">Ana P.</p>
                      <p className="text-slate-500 text-xs">
                        Membro Plano Família
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-background-dark p-6 rounded-xl border border-border-dark">
                  <div className="flex gap-1 mb-4 text-amber-400">
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    "A proteção anti-desinstalação realmente funciona. Nos
                    momentos de fraqueza, o PurePath foi a barreira que eu
                    precisava para não recair."
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden"
                      data-alt="User avatar placeholder with abstract gradient"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600"></div>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">João S.</p>
                      <p className="text-slate-500 text-xs">
                        Membro Plano Recuperação
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* FAQ */}
          <section className="w-full px-6 py-16 lg:px-40 max-w-[1000px]">
            <h2 className="text-white text-2xl font-bold mb-8 text-center">
              Perguntas Frequentes
            </h2>
            <div className="flex flex-col gap-4">
              <div className="border border-border-dark rounded-lg bg-surface-dark overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-white">
                    <span>Como funciona o parceiro de responsabilidade?</span>
                    <span className="transition group-open:rotate-180">
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </span>
                  </summary>
                  <div className="text-slate-400 text-sm p-5 pt-0 leading-relaxed">
                    Você escolhe um amigo ou familiar de confiança. Se você
                    tentar acessar conteúdo bloqueado ou desinstalar o app, essa
                    pessoa recebe um alerta imediato. Isso cria uma camada
                    social de proteção muito poderosa.
                  </div>
                </details>
              </div>
              <div className="border border-border-dark rounded-lg bg-surface-dark overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-white">
                    <span>
                      A cobrança aparecerá como "Porn Blocker" na fatura?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </span>
                  </summary>
                  <div className="text-slate-400 text-sm p-5 pt-0 leading-relaxed">
                    Absolutamente não. Sua privacidade é nossa prioridade. A
                    cobrança aparecerá no seu cartão de crédito de forma
                    discreta como "PP Services" ou "PurePath Tech".
                  </div>
                </details>
              </div>
              <div className="border border-border-dark rounded-lg bg-surface-dark overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-white">
                    <span>Posso cancelar a qualquer momento?</span>
                    <span className="transition group-open:rotate-180">
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </span>
                  </summary>
                  <div className="text-slate-400 text-sm p-5 pt-0 leading-relaxed">
                    Sim. Você pode cancelar sua assinatura a qualquer momento
                    através do painel de controle. Oferecemos também uma
                    garantia de reembolso de 30 dias se você não estiver
                    satisfeito.
                  </div>
                </details>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="w-full border-t border-border-dark bg-background-dark py-12 px-6 lg:px-40">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-sm">
              <div className="flex items-center gap-2 text-white">
                <div className="size-6 text-primary">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM21.2 32.8L14.4 26L17.2 23.2L21.2 27.2L30.8 17.6L33.6 20.4L21.2 32.8Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-lg font-bold">PurePath</h2>
              </div>
              <p className="text-slate-400 text-sm">
                Construindo um futuro livre de vícios através da tecnologia e
                comunidade. Sua liberdade é nossa missão.
              </p>
            </div>
            <div className="flex flex-wrap gap-12">
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-bold text-sm">Produto</h4>
                <Link
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                  to="/funcionalidades"
                >
                  Funcionalidades
                </Link>
                <Link
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                  to="/precos"
                >
                  Planos
                </Link>
                <Link
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                  to="/families"
                >
                  Para Famílias
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-white font-bold text-sm">Suporte</h4>
                <Link
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                  to="/ajuda"
                >
                  Central de Ajuda
                </Link>
                <Link
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                  to="/ajuda"
                >
                  Contato
                </Link>
                <Link
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                  to="/privacy"
                >
                  Política de Privacidade
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-border-dark text-center md:text-left">
            <p className="text-slate-600 text-xs">
              © 2024 PurePath Inc. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Pricing;
