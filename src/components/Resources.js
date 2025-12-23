import React from "react";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-display">
      {/* Navbar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#282e39] px-10 py-3 bg-[#111318]">
        <div className="flex items-center gap-4 text-white">
          <div className="size-8 text-primary">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "32px" }}
            >
              shield_lock
            </span>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            CleanWeb
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="hidden md:flex items-center gap-9">
            <Link
              className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
              to="/"
            >
              Início
            </Link>
            <Link
              className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
              to="/funcionalidades"
            >
              Como Funciona
            </Link>
            <a
              className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
              href="#"
            >
              Recursos
            </a>
            <a
              className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
              href="#"
            >
              Depoimentos
            </a>
            <a
              className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
              href="#"
            >
              Preços
            </a>
            <a
              className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
              href="#"
            >
              Blog
            </a>
          </div>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Começar Agora</span>
          </button>
        </div>
      </header>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Hero Section */}
            <div className="@container">
              <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-1/2 relative overflow-hidden"
                  data-alt="Person hiking on a mountain top looking at sunrise symbolizing freedom"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOqELTiyvuNpuud0wYgHbBz9SLgIQHdtSIwPYrmcO4kO25rw0AQbGb5_Q81d5ho9_-7sQQ612oQIGoEToop9L-HrQLdZp8ZkJ0Djf2bIphe6afLLZR7ahzcllHu5sUSIsvuPZcPxTB5m7oKXQru8zHDWxlUwHHZkXLBj_dlNiflFRU_sNE-IBwouOZJTMJ0c4NpT5huPPCVdRlyzqzs-kl3eIqwqlhib-NqeUXgQY1ypo3QJQcK0ktCgDhlQRJxI15t0zhI2--")',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                </div>
                <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center items-start @[864px]:w-1/2">
                  <div className="flex flex-col gap-4 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                      Transforme sua mente e seu ambiente digital
                    </h1>
                    <h2 className="text-gray-300 text-base font-normal leading-relaxed">
                      Mais do que um simples bloqueador. Somos uma plataforma
                      completa dedicada a ajudar você a recuperar o controle,
                      melhorar sua saúde mental e focar no que realmente
                      importa.
                    </h2>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">
                        Experimente Gratuitamente
                      </span>
                    </button>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#282e39] hover:bg-[#343b49] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">Saiba Mais</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Benefits Header */}
            <div className="flex flex-col gap-4 px-4 py-10 text-center items-center">
              <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                Benefícios Principais
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] max-w-[700px]">
                Por que milhares de pessoas escolheram recuperar o controle?
              </h2>
              <p className="text-gray-400 text-lg max-w-[600px]">
                Nossa tecnologia foi desenhada para ser invisível, poderosa e
                focada na sua recuperação.
              </p>
            </div>
            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-12">
              {/* Card 1 */}
              <div className="group flex flex-col gap-4 rounded-xl border border-[#282e39] bg-[#1c1f27] p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    Saúde Mental Renovada
                  </h3>
                  <p className="text-[#9da6b9] text-base font-normal leading-relaxed">
                    Reduza a ansiedade, a culpa e o "brain fog". Recupere sua
                    dopamina natural e sinta-se mais presente no dia a dia.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="group flex flex-col gap-4 rounded-xl border border-[#282e39] bg-[#1c1f27] p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    Produtividade Explosiva
                  </h3>
                  <p className="text-[#9da6b9] text-base font-normal leading-relaxed">
                    Pare de perder horas em distrações. Recupere o tempo para
                    investir na sua carreira, estudos e hobbies que você ama.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="group flex flex-col gap-4 rounded-xl border border-[#282e39] bg-[#1c1f27] p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    Bloqueio Inviolável
                  </h3>
                  <p className="text-[#9da6b9] text-base font-normal leading-relaxed">
                    Tecnologia de ponta que previne a desinstalação fácil.
                    Proteção robusta contra sites maliciosos em todos os
                    dispositivos.
                  </p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="group flex flex-col gap-4 rounded-xl border border-[#282e39] bg-[#1c1f27] p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">
                    family_restroom
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    Família Protegida
                  </h3>
                  <p className="text-[#9da6b9] text-base font-normal leading-relaxed">
                    Crie um ambiente digital seguro para seus filhos. Filtros
                    inteligentes que bloqueiam conteúdo inapropriado
                    automaticamente.
                  </p>
                </div>
              </div>
              {/* Card 5 */}
              <div className="group flex flex-col gap-4 rounded-xl border border-[#282e39] bg-[#1c1f27] p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">monitoring</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    Relatórios de Progresso
                  </h3>
                  <p className="text-[#9da6b9] text-base font-normal leading-relaxed">
                    Acompanhe sua jornada com dados claros. Visualize seus dias
                    limpos e celebre cada pequena vitória no caminho.
                  </p>
                </div>
              </div>
              {/* Card 6 */}
              <div className="group flex flex-col gap-4 rounded-xl border border-[#282e39] bg-[#1c1f27] p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">
                    support_agent
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold leading-tight">
                    Suporte Humanizado
                  </h3>
                  <p className="text-[#9da6b9] text-base font-normal leading-relaxed">
                    Não é apenas um software. Oferecemos acesso a guias,
                    comunidades e suporte dedicado para momentos difíceis.
                  </p>
                </div>
              </div>
            </div>
            {/* How it works section */}
            <div className="flex flex-col gap-10 px-4 py-16">
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
                  Como Funciona
                </h2>
                <p className="text-gray-400">
                  Três passos simples para a sua liberdade digital.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Step 1 */}
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white font-bold text-lg shadow-[0_0_15px_rgba(19,91,236,0.5)]">
                      1
                    </div>
                    <div className="h-[2px] bg-[#282e39] flex-1 md:hidden"></div>
                  </div>
                  <h3 className="text-white text-xl font-bold">
                    Instale o App
                  </h3>
                  <p className="text-[#9da6b9]">
                    Disponível para Windows, Mac, iOS e Android. Uma única conta
                    protege todos os seus dispositivos.
                  </p>
                </div>
                {/* Connector Line Desktop */}
                <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-[2px] bg-[#282e39] -z-0"></div>
                {/* Step 2 */}
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-10 rounded-full bg-[#1c1f27] border-2 border-primary text-white font-bold text-lg">
                      2
                    </div>
                    <div className="h-[2px] bg-[#282e39] flex-1 md:hidden"></div>
                  </div>
                  <h3 className="text-white text-xl font-bold">
                    Personalize o Filtro
                  </h3>
                  <p className="text-[#9da6b9]">
                    Escolha categorias para bloquear, adicione exceções e defina
                    o nível de proteção ideal para você.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col gap-4 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-10 rounded-full bg-[#1c1f27] border-2 border-primary text-white font-bold text-lg">
                      3
                    </div>
                    <div className="h-[2px] bg-[#282e39] flex-1 md:hidden"></div>
                  </div>
                  <h3 className="text-white text-xl font-bold">
                    Ative a Proteção
                  </h3>
                  <p className="text-[#9da6b9]">
                    Defina uma senha de segurança (ou peça a um amigo para
                    definir) e navegue com tranquilidade.
                  </p>
                </div>
              </div>
            </div>
            {/* CTA Section */}
            <div className="px-4 py-10">
              <div className="rounded-2xl bg-gradient-to-r from-primary/20 to-[#1c1f27] border border-primary/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-4 max-w-[500px]">
                  <h2 className="text-white text-3xl font-bold leading-tight">
                    Pronto para assumir o controle?
                  </h2>
                  <p className="text-gray-300 text-lg">
                    Junte-se a uma comunidade de pessoas comprometidas com um
                    estilo de vida mais saudável e produtivo.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span
                      className="material-symbols-outlined text-green-500"
                      style={{ fontSize: "20px" }}
                    >
                      check_circle
                    </span>
                    <span>7 dias de teste grátis</span>
                    <span className="mx-2">•</span>
                    <span
                      className="material-symbols-outlined text-green-500"
                      style={{ fontSize: "20px" }}
                    >
                      check_circle
                    </span>
                    <span>Cancele quando quiser</span>
                  </div>
                </div>
                <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary hover:bg-blue-600 transition-colors shadow-lg shadow-primary/25 text-white text-lg font-bold leading-normal">
                  Começar Agora
                </button>
              </div>
            </div>
            {/* Image Gallery */}
            <div className="px-4 py-10">
              <div className="flex flex-col gap-4 text-center items-center mb-8">
                <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
                  Galeria de Apresentação
                </h2>
                <p className="text-gray-400">
                  Visualize nossas apresentações e benefícios.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl overflow-hidden border border-[#282e39]">
                  <img
                    src="/images/about.png"
                    alt="Sobre nós"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-[#1c1f27]">
                    <h3 className="text-white font-bold">Sobre Nós</h3>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#282e39]">
                  <img
                    src="/images/pageBenefi.png"
                    alt="Benefícios"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-[#1c1f27]">
                    <h3 className="text-white font-bold">Benefícios</h3>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#282e39]">
                  <img
                    src="/images/pageStar.png"
                    alt="Avaliações"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-[#1c1f27]">
                    <h3 className="text-white font-bold">Avaliações</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Simple */}
            <footer className="mt-10 border-t border-[#282e39] py-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[#9da6b9] text-sm">
              <div>© 2024 CleanWeb. Todos os direitos reservados.</div>
              <div className="flex gap-6">
                <a className="hover:text-white" href="#">
                  Privacidade
                </a>
                <a className="hover:text-white" href="#">
                  Termos
                </a>
                <a className="hover:text-white" href="#">
                  Contato
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
