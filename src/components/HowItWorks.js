import React from "react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
      <div className="relative flex min-h-screen w-full flex-col group/design-root">
        {/* Navbar */}
        <div className="layout-container flex h-auto flex-col">
          <div className="w-full flex justify-center bg-background-light dark:bg-background-dark border-b border-solid border-[#e5e7eb] dark:border-[#282e39]">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <header className="flex items-center justify-between whitespace-nowrap px-4 py-3 md:px-10">
                <div className="flex items-center gap-4 text-[#111418] dark:text-white">
                  <div className="size-8 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">
                      shield_lock
                    </span>
                  </div>
                  <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                    PurityGuard
                  </h2>
                </div>
                <div className="hidden md:flex flex-1 justify-end gap-8">
                  <div className="flex items-center gap-9">
                    <Link
                      className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                      to="/"
                    >
                      Início
                    </Link>
                    <Link
                      className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                      to="/funcionalidades"
                    >
                      Funcionalidades
                    </Link>
                    <Link
                      className="text-sm font-medium leading-normal text-primary font-bold"
                      to="/how-it-works"
                    >
                      Como Funciona
                    </Link>
                    <Link
                      className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                      to="/blog"
                    >
                      Blog
                    </Link>
                  </div>
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                    <span className="truncate">Baixar Agora</span>
                  </button>
                </div>
                {/* Mobile Menu Icon (Placeholder) */}
                <div className="md:hidden text-[#111418] dark:text-white">
                  <span className="material-symbols-outlined">menu</span>
                </div>
              </header>
            </div>
          </div>
        </div>
        {/* Hero Section */}
        <div className="layout-container flex flex-col">
          <div className="w-full flex justify-center py-5 md:py-10">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-10">
              <div className="@container">
                <div className="flex flex-col gap-6 py-10 @[864px]:flex-row items-center">
                  <div className="w-full @[864px]:w-1/2 flex flex-col gap-6">
                    <div className="flex flex-col gap-4 text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit border border-primary/20">
                        <span className="material-symbols-outlined text-primary text-sm">
                          verified
                        </span>
                        <span className="text-primary text-xs font-bold uppercase tracking-wide">
                          Tecnologia Comprovada
                        </span>
                      </div>
                      <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                        Entenda como a tecnologia te protege
                      </h1>
                      <h2 className="text-base font-normal leading-normal text-[#637588] dark:text-[#9da6b9]">
                        Simples, rápido e invisível. Veja como retomar o
                        controle da sua navegação e foco em apenas três etapas
                        claras.
                      </h2>
                    </div>
                    <div className="flex gap-4">
                      <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
                        <span className="truncate">Começar Agora</span>
                      </button>
                      <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#282e39] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#3b4354] transition-colors">
                        <span className="truncate">Ver Demo</span>
                      </button>
                    </div>
                  </div>
                  <div className="w-full @[864px]:w-1/2 mt-8 @[864px]:mt-0 @[864px]:pl-10">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl shadow-2xl ring-1 ring-white/10"
                      data-alt="Abstract 3D illustration showing a shield protecting digital data flow"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkxB194YkqiRGgTsLdGAw7yJAO1jzqKNjEY0nPAGu0HrZQUppWzOm8Pf8L3r4TICrBaOXPv1MGzfZO3PMyAvbkPQGX03YhsfQvCJ7SQAcFFcYEbRjwYt-D6rEAgpTpw-SvoP5Z33FWXo1mkmUd2i3dIplECyTcPx4UJd3nis5XnyvrCrgNQFIN_aI7iFLJ0acEhmNlHF363VFcNS-GVt_6ifACADRegTHxQX6YSuxGuARLjwXNBlSa0V7VnsOlok6mrkYeMMd0")',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Header */}
        <div className="layout-container flex flex-col">
          <div className="w-full flex justify-center">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-10">
              <div className="border-t border-dashed border-[#282e39] my-4"></div>
              <h2 className="text-2xl md:text-[32px] font-bold leading-tight tracking-[-0.015em] py-8 text-center">
                Como funciona em 3 passos
              </h2>
            </div>
          </div>
        </div>
        {/* Step 1: Installation */}
        <div className="layout-container flex flex-col">
          <div className="w-full flex justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-10">
              <div className="flex flex-col gap-10 py-6 @container">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white font-bold text-xl">
                      1
                    </div>
                    <h3 className="text-primary font-bold uppercase tracking-wider text-sm">
                      O Início
                    </h3>
                  </div>
                  <h1 className="tracking-light text-3xl font-bold leading-tight max-w-[720px]">
                    Instalação Simples e Segura
                  </h1>
                  <p className="text-base font-normal leading-normal text-[#637588] dark:text-[#9da6b9] max-w-[720px]">
                    Baixe nosso aplicativo para desktop ou mobile. A instalação
                    é leve, não coleta dados pessoais e é concluída em poucos
                    segundos, sem necessidade de conhecimentos técnicos.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-1 gap-4 rounded-xl border border-[#e5e7eb] dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] p-6 flex-col hover:border-primary/50 transition-colors group">
                    <div className="text-[#111418] dark:text-white group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-4xl">
                        download_for_offline
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-lg font-bold leading-tight">
                        Download Criptografado
                      </h2>
                      <p className="text-[#637588] dark:text-[#9da6b9] text-sm font-normal leading-normal">
                        Link direto e verificado, livre de malwares ou
                        bloatwares.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-4 rounded-xl border border-[#e5e7eb] dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] p-6 flex-col hover:border-primary/50 transition-colors group">
                    <div className="text-[#111418] dark:text-white group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-4xl">
                        devices
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-lg font-bold leading-tight">
                        Multi-plataforma
                      </h2>
                      <p className="text-[#637588] dark:text-[#9da6b9] text-sm font-normal leading-normal">
                        Proteção unificada para Windows, Mac, Android e iOS.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-4 rounded-xl border border-[#e5e7eb] dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] p-6 flex-col hover:border-primary/50 transition-colors group">
                    <div className="text-[#111418] dark:text-white group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-4xl">
                        speed
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-lg font-bold leading-tight">
                        Ultra Leve
                      </h2>
                      <p className="text-[#637588] dark:text-[#9da6b9] text-sm font-normal leading-normal">
                        Otimizado para não consumir bateria ou memória RAM.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Step 2: Configuration */}
        <div className="layout-container flex flex-col bg-[#f0f2f5] dark:bg-[#161b26] my-10 py-10">
          <div className="w-full flex justify-center">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-10">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex flex-col gap-6 flex-1 order-2 md:order-1">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-lg ring-1 ring-black/10 dark:ring-white/10"
                    data-alt="Screenshot of a dashboard interface with toggle switches for different settings"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfiWBie1WrsAvyZQRUyaA3STMGV9FQXkMdP6dyk2JPxwiS2NFmbOBv-PvE3G-XQKZCkx7a2Tpf17BD6kysKAY74QD3etILa3V0iSdXJ_OuC4dlS5DhtsMvTEbepL94c06oxGrBmslR-SC4_EJng979S2B91MAFFgyC6otisAl83qeOyY_Mq8tpX4aMthQa8uwNSPHNnRnTyA3AeSOD5sC8nVd14j0z7wdIQmqyRdl11B9vw0j2ciYp_t6rU7jfYzF-3lBrRMHJ")',
                    }}
                  ></div>
                  <div className="flex gap-4 justify-center">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        tune
                      </span>
                      <span className="text-sm font-medium">
                        Níveis de Filtro
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        schedule
                      </span>
                      <span className="text-sm font-medium">
                        Horários de Foco
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 flex-1 order-1 md:order-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white font-bold text-xl">
                        2
                      </div>
                      <h3 className="text-primary font-bold uppercase tracking-wider text-sm">
                        Personalização
                      </h3>
                    </div>
                    <h1 className="tracking-light text-3xl font-bold leading-tight">
                      Você define as regras
                    </h1>
                    <p className="text-base font-normal leading-normal text-[#637588] dark:text-[#9da6b9]">
                      Cada jornada é única. Escolha quais categorias de sites
                      bloquear, configure exceções para trabalho ou estudo, e
                      defina a dificuldade para desativar a proteção (Modo
                      Estrito).
                    </p>
                  </div>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-3 text-[#111418] dark:text-white">
                      <span className="material-symbols-outlined text-green-500">
                        check_circle
                      </span>
                      <span>
                        Bloqueio por categorias (Adulto, Apostas, Jogos)
                      </span>
                    </li>
                    <li className="flex items-center gap-3 text-[#111418] dark:text-white">
                      <span className="material-symbols-outlined text-green-500">
                        check_circle
                      </span>
                      <span>Lista de permissões e bloqueios manuais</span>
                    </li>
                    <li className="flex items-center gap-3 text-[#111418] dark:text-white">
                      <span className="material-symbols-outlined text-green-500">
                        check_circle
                      </span>
                      <span>
                        Proteção contra desinstalação (Proteção por Senha)
                      </span>
                    </li>
                  </ul>
                  <button className="flex w-fit cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#282e39] dark:bg-[#3b4354] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:brightness-110 transition-all mt-2">
                    <span className="truncate">Ver Guia de Configuração</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Step 3: Protection (Inverted Layout) */}
        <div className="layout-container flex flex-col mb-10">
          <div className="w-full flex justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-10">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex flex-col gap-6 flex-1">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white font-bold text-xl">
                        3
                      </div>
                      <h3 className="text-primary font-bold uppercase tracking-wider text-sm">
                        Proteção Ativa
                      </h3>
                    </div>
                    <h1 className="tracking-light text-3xl font-bold leading-tight">
                      Navegação Limpa e Segura
                    </h1>
                    <p className="text-base font-normal leading-normal text-[#637588] dark:text-[#9da6b9]">
                      Uma vez ativado, o PurityGuard roda silenciosamente em
                      segundo plano. Nossa IA analisa o conteúdo em tempo real,
                      bloqueando imagens e sites impróprios antes mesmo que
                      carreguem.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-[#f0f2f5] dark:bg-[#1c1f27] border border-[#e5e7eb] dark:border-[#3b4354]">
                      <span className="material-symbols-outlined text-primary mb-2 text-3xl">
                        smart_toy
                      </span>
                      <h4 className="font-bold text-sm">IA em Tempo Real</h4>
                      <p className="text-xs text-[#637588] dark:text-[#9da6b9] mt-1">
                        Analisa pixels e texto instantaneamente
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-[#f0f2f5] dark:bg-[#1c1f27] border border-[#e5e7eb] dark:border-[#3b4354]">
                      <span className="material-symbols-outlined text-primary mb-2 text-3xl">
                        visibility_off
                      </span>
                      <h4 className="font-bold text-sm">Filtro Visual</h4>
                      <p className="text-xs text-[#637588] dark:text-[#9da6b9] mt-1">
                        Borra ou oculta imagens sensíveis
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 flex-1">
                  <div
                    className="relative w-full bg-center bg-no-repeat aspect-square md:aspect-[4/3] bg-cover rounded-xl shadow-2xl overflow-hidden"
                    data-alt="Abstract visualization of a digital shield blocking red particles and letting blue particles pass"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAB7C2zfvNflsoG8SAqPoUHROHXs8nFC3n9q5XVZzCfP-uzD5acDZUClk-rOoE8mkjk_98VC8jaouX10UlutTbfaP8pUsaQ8_TB01IhjYCBMJlV-FKR4URUCGyILQPFWTPOglG9lKIqIdUY6BjsLfIorowb5-7IXRpmZcXN2CaPXC-aNkAcdwj0l5Q0CRZ2KfLiPWUlsaEh83yFVjaVtvJpWIaH8zdSfdAk3xAyPyDL3YUuAiovuqzGi0Xp9zmArHmVDqxwo6m-")',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent flex items-end p-6">
                      <div className="flex items-center gap-3 bg-green-500/20 backdrop-blur-md border border-green-500/30 px-4 py-2 rounded-lg">
                        <span className="material-symbols-outlined text-green-400">
                          shield
                        </span>
                        <span className="text-white font-bold text-sm">
                          Proteção Ativa: 100%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tech Specs / Trust Section */}
        <div className="layout-container flex flex-col bg-[#1c1f27] border-y border-[#282e39] py-12">
          <div className="w-full flex justify-center">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-10">
              <div className="flex flex-col items-center text-center gap-4 mb-10">
                <h2 className="text-2xl font-bold">
                  Por que nossa tecnologia é diferente?
                </h2>
                <p className="text-[#9da6b9] max-w-[600px]">
                  Muitos bloqueadores são fáceis de burlar. Nós criamos uma
                  camada de proteção robusta no nível do sistema.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="size-12 rounded-full bg-[#282e39] flex items-center justify-center text-white mb-2">
                    <span className="material-symbols-outlined">vpn_lock</span>
                  </div>
                  <h3 className="font-bold text-lg text-white">
                    DNS Criptografado
                  </h3>
                  <p className="text-sm text-[#9da6b9]">
                    Suas requisições são filtradas sem que ninguém, nem seu
                    provedor, veja o que você acessa.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="size-12 rounded-full bg-[#282e39] flex items-center justify-center text-white mb-2">
                    <span className="material-symbols-outlined">
                      lock_reset
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-white">
                    Proteção Anti-Burlas
                  </h3>
                  <p className="text-sm text-[#9da6b9]">
                    Evita o encerramento do processo pelo gerenciador de tarefas
                    ou desinstalação sem senha.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="size-12 rounded-full bg-[#282e39] flex items-center justify-center text-white mb-2">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <h3 className="font-bold text-lg text-white">
                    Zero Latência
                  </h3>
                  <p className="text-sm text-[#9da6b9]">
                    Nossa arquitetura otimizada garante que sua internet
                    permaneça rápida como sempre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer CTA */}
        <div className="layout-container flex flex-col py-16">
          <div className="w-full flex justify-center">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-10">
              <div className="bg-gradient-to-r from-primary to-[#1e40af] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/20">
                <div className="flex flex-col gap-4 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white tracking-tight">
                    Pronto para assumir o controle?
                  </h2>
                  <p className="text-blue-100 text-lg max-w-[500px]">
                    Junte-se a mais de 50.000 pessoas que transformaram seus
                    hábitos digitais com o PurityGuard.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-w-[200px]">
                  <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 transition-colors shadow-lg">
                    Baixar Gratuitamente
                  </button>
                  <p className="text-xs text-blue-200 text-center">
                    Teste grátis por 7 dias. Cancele quando quiser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Links */}
        <footer className="w-full flex justify-center py-8 border-t border-[#282e39]">
          <div className="max-w-[960px] flex-1 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#637588] dark:text-[#9da6b9] text-sm">
              © 2023 PurityGuard. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <span className="text-[#637588] dark:text-[#9da6b9] text-sm hover:text-white">
                Privacidade
              </span>
              <span className="text-[#637588] dark:text-[#9da6b9] text-sm hover:text-white">
                Termos
              </span>
              <span className="text-[#637588] dark:text-[#9da6b9] text-sm hover:text-white">
                Suporte
              </span>
            </div>
          </div>
        </footer>
      </div>
      <style>
        {`
          /* Custom scrollbar for better aesthetic in dark mode */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #101622;
          }

          ::-webkit-scrollbar-thumb {
            background: #282e39;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #3b4354;
          }
        `}
      </style>
    </div>
  );
};

export default HowItWorks;
