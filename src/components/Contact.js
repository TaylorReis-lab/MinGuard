import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111317] dark:text-white overflow-x-hidden transition-colors duration-200">
      <div className="relative flex min-h-screen w-full flex-col group/design-root">
        {/* Navigation */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e5e7eb] dark:border-b-[#292e38] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 md:px-10 py-3">
          <div className="flex items-center gap-4">
            <div className="size-8 text-primary">
              <svg
                className="size-full"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                  fill="currentColor"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-[#111317] dark:text-white">
              Bloqueador Consciente
            </h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link
                className="text-sm font-medium leading-normal hover:text-primary transition-colors text-[#111317] dark:text-white"
                to="/"
              >
                Início
              </Link>
              <Link
                className="text-sm font-medium leading-normal hover:text-primary transition-colors text-[#111317] dark:text-white"
                to="/how-it-works"
              >
                Funcionalidades
              </Link>
              <Link
                className="text-sm font-medium leading-normal hover:text-primary transition-colors text-[#111317] dark:text-white"
                to="/resources"
              >
                Sobre Nós
              </Link>
              <Link
                className="text-sm font-medium leading-normal hover:text-primary transition-colors text-[#111317] dark:text-white"
                to="/contact"
              >
                Contato
              </Link>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">Baixar Agora</span>
            </button>
          </div>
          <div className="md:hidden">
            <span className="material-symbols-outlined cursor-pointer">
              menu
            </span>
          </div>
        </header>
        {/* Main Content */}
        <main className="layout-container flex h-full grow flex-col">
          {/* Hero Section */}
          <div className="px-4 md:px-40 flex flex-1 justify-center py-10 md:py-16 bg-[#f0f2f5] dark:bg-[#1a202c]">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 text-center items-center">
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4 text-[#111317] dark:text-white">
                Central de Ajuda e Contato
              </h1>
              <p className="text-[#64748b] dark:text-[#9ea7b7] text-lg md:text-xl font-normal leading-normal max-w-2xl">
                Tire suas dúvidas sobre o funcionamento do bloqueador ou entre
                em contato direto com nossa equipe de suporte.
              </p>
            </div>
          </div>
          <div className="px-4 md:px-40 flex flex-1 justify-center py-12">
            <div className="layout-content-container flex flex-col lg:flex-row max-w-[1200px] flex-1 gap-12 lg:gap-20">
              {/* FAQ Section (Left Column) */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="pb-2 border-b border-[#e5e7eb] dark:border-[#292e38]">
                  <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-2 text-[#111317] dark:text-white">
                    Perguntas Frequentes
                  </h2>
                  <p className="text-sm text-[#64748b] dark:text-[#9ea7b7]">
                    Respostas rápidas para as dúvidas mais comuns.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {/* Question 1 */}
                  <details
                    className="group rounded-xl bg-white dark:bg-[#1e232e] border border-[#e5e7eb] dark:border-[#3d4452] px-6 py-4 shadow-sm transition-all duration-300 hover:shadow-md"
                    open=""
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 py-2 select-none list-none">
                      <p className="font-bold text-[#111317] dark:text-white text-base">
                        Como o bloqueador funciona?
                      </p>
                      <span className="material-symbols-outlined text-[#64748b] dark:text-[#9ea7b7] transition-transform duration-300 group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <div className="pt-2 text-[#4b5563] dark:text-[#9ea7b7] text-sm leading-relaxed border-t border-transparent group-open:border-[#e5e7eb] dark:group-open:border-[#3d4452] group-open:mt-2 group-open:pt-4 transition-all">
                      Nosso software utiliza uma lista de filtros avançados que
                      impede o acesso a sites de conteúdo adulto diretamente no
                      nível da rede, garantindo que você navegue com segurança e
                      sem distrações indesejadas.
                    </div>
                  </details>
                  {/* Question 2 */}
                  <details className="group rounded-xl bg-white dark:bg-[#1e232e] border border-[#e5e7eb] dark:border-[#3d4452] px-6 py-4 shadow-sm transition-all duration-300 hover:shadow-md">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 py-2 select-none list-none">
                      <p className="font-bold text-[#111317] dark:text-white text-base">
                        Minha privacidade está garantida?
                      </p>
                      <span className="material-symbols-outlined text-[#64748b] dark:text-[#9ea7b7] transition-transform duration-300 group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <div className="pt-2 text-[#4b5563] dark:text-[#9ea7b7] text-sm leading-relaxed border-t border-transparent group-open:border-[#e5e7eb] dark:group-open:border-[#3d4452] group-open:mt-2 group-open:pt-4 transition-all">
                      Sim. Nós não monitoramos, armazenamos ou vendemos seu
                      histórico de navegação. O bloqueio acontece localmente no
                      seu dispositivo ou via DNS criptografado, respeitando
                      totalmente sua privacidade.
                    </div>
                  </details>
                  {/* Question 3 */}
                  <details className="group rounded-xl bg-white dark:bg-[#1e232e] border border-[#e5e7eb] dark:border-[#3d4452] px-6 py-4 shadow-sm transition-all duration-300 hover:shadow-md">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 py-2 select-none list-none">
                      <p className="font-bold text-[#111317] dark:text-white text-base">
                        Posso instalar em quantos dispositivos?
                      </p>
                      <span className="material-symbols-outlined text-[#64748b] dark:text-[#9ea7b7] transition-transform duration-300 group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <div className="pt-2 text-[#4b5563] dark:text-[#9ea7b7] text-sm leading-relaxed border-t border-transparent group-open:border-[#e5e7eb] dark:group-open:border-[#3d4452] group-open:mt-2 group-open:pt-4 transition-all">
                      A licença padrão permite a instalação em até 3
                      dispositivos simultaneamente (PC, tablet ou smartphone).
                      Para planos familiares ou empresariais, entre em contato
                      com nosso suporte.
                    </div>
                  </details>
                  {/* Question 4 */}
                  <details className="group rounded-xl bg-white dark:bg-[#1e232e] border border-[#e5e7eb] dark:border-[#3d4452] px-6 py-4 shadow-sm transition-all duration-300 hover:shadow-md">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 py-2 select-none list-none">
                      <p className="font-bold text-[#111317] dark:text-white text-base">
                        Como cancelo minha assinatura?
                      </p>
                      <span className="material-symbols-outlined text-[#64748b] dark:text-[#9ea7b7] transition-transform duration-300 group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <div className="pt-2 text-[#4b5563] dark:text-[#9ea7b7] text-sm leading-relaxed border-t border-transparent group-open:border-[#e5e7eb] dark:group-open:border-[#3d4452] group-open:mt-2 group-open:pt-4 transition-all">
                      Você pode cancelar a qualquer momento através do painel da
                      sua conta. Não há taxas de cancelamento e o serviço
                      continuará ativo até o final do período pago.
                    </div>
                  </details>
                  {/* Question 5 */}
                  <details className="group rounded-xl bg-white dark:bg-[#1e232e] border border-[#e5e7eb] dark:border-[#3d4452] px-6 py-4 shadow-sm transition-all duration-300 hover:shadow-md">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 py-2 select-none list-none">
                      <p className="font-bold text-[#111317] dark:text-white text-base">
                        É difícil remover o bloqueador?
                      </p>
                      <span className="material-symbols-outlined text-[#64748b] dark:text-[#9ea7b7] transition-transform duration-300 group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <div className="pt-2 text-[#4b5563] dark:text-[#9ea7b7] text-sm leading-relaxed border-t border-transparent group-open:border-[#e5e7eb] dark:group-open:border-[#3d4452] group-open:mt-2 group-open:pt-4 transition-all">
                      O bloqueador possui um "Modo de Proteção" opcional que
                      dificulta a desinstalação impulsiva, exigindo uma senha
                      definida por um parceiro de responsabilidade (amigo ou
                      familiar) ou um atraso de tempo programado.
                    </div>
                  </details>
                </div>
              </div>
              {/* Contact Form Section (Right Column) */}
              <div className="flex-1 flex flex-col gap-6 sticky top-24 self-start">
                <div className="bg-white dark:bg-[#1a1d26] rounded-2xl p-6 md:p-8 shadow-lg border border-[#e5e7eb] dark:border-[#292e38]">
                  <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-2 text-[#111317] dark:text-white">
                    Envie uma mensagem
                  </h2>
                  <p className="text-[#64748b] dark:text-[#9ea7b7] text-sm mb-6">
                    Não encontrou o que procurava? Preencha o formulário abaixo
                    e nossa equipe retornará em até 24 horas.
                  </p>
                  <form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-sm font-bold text-[#111317] dark:text-white"
                        htmlFor="name"
                      >
                        Nome completo
                      </label>
                      <input
                        className="w-full rounded-lg border border-[#d1d5db] dark:border-[#3d4452] bg-white dark:bg-[#111317] px-4 py-3 text-sm text-[#111317] dark:text-white placeholder:text-[#9ca3af] dark:placeholder:text-[#6b7280] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        id="name"
                        placeholder="Seu nome"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-sm font-bold text-[#111317] dark:text-white"
                        htmlFor="email"
                      >
                        E-mail de contato
                      </label>
                      <input
                        className="w-full rounded-lg border border-[#d1d5db] dark:border-[#3d4452] bg-white dark:bg-[#111317] px-4 py-3 text-sm text-[#111317] dark:text-white placeholder:text-[#9ca3af] dark:placeholder:text-[#6b7280] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        id="email"
                        placeholder="seu@email.com"
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-sm font-bold text-[#111317] dark:text-white"
                        htmlFor="subject"
                      >
                        Assunto
                      </label>
                      <div className="relative">
                        <select
                          className="w-full appearance-none rounded-lg border border-[#d1d5db] dark:border-[#3d4452] bg-white dark:bg-[#111317] px-4 py-3 text-sm text-[#111317] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          id="subject"
                        >
                          <option disabled="" selected="" value="">
                            Selecione um tópico
                          </option>
                          <option value="support">Suporte Técnico</option>
                          <option value="billing">Cobrança e Assinatura</option>
                          <option value="privacy">Privacidade e Dados</option>
                          <option value="other">Outro</option>
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b] dark:text-[#9ea7b7]">
                          <span className="material-symbols-outlined text-xl">
                            expand_more
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-sm font-bold text-[#111317] dark:text-white"
                        htmlFor="message"
                      >
                        Mensagem
                      </label>
                      <textarea
                        className="w-full min-h-[120px] rounded-lg border border-[#d1d5db] dark:border-[#3d4452] bg-white dark:bg-[#111317] px-4 py-3 text-sm text-[#111317] dark:text-white placeholder:text-[#9ca3af] dark:placeholder:text-[#6b7280] focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-y transition-all"
                        id="message"
                        placeholder="Descreva sua dúvida ou problema..."
                      ></textarea>
                    </div>
                    <button className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary py-3 px-4 text-white text-base font-bold transition-all hover:bg-primary/90 active:scale-[0.98]">
                      Enviar Mensagem
                    </button>
                    <p className="text-xs text-center text-[#64748b] dark:text-[#6b7280] mt-2">
                      Seus dados estão seguros.{" "}
                      <Link
                        className="underline hover:text-primary"
                        to="/privacy"
                      >
                        Política de Privacidade
                      </Link>
                      .
                    </p>
                  </form>
                </div>
                {/* Direct Contact Info */}
                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 flex flex-col gap-4">
                  <h3 className="text-lg font-bold text-[#111317] dark:text-white">
                    Outras formas de contato
                  </h3>
                  <div className="flex flex-col gap-3">
                    <a
                      className="flex items-center gap-3 text-[#4b5563] dark:text-[#9ea7b7] hover:text-primary dark:hover:text-primary transition-colors group"
                      href="mailto:suporte@bloqueador.com"
                    >
                      <div className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-[#1e232e] group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-xl">
                          mail
                        </span>
                      </div>
                      <span className="font-medium">
                        suporte@bloqueador.com
                      </span>
                    </a>
                    <div className="flex items-center gap-3 text-[#4b5563] dark:text-[#9ea7b7] hover:text-primary dark:hover:text-primary transition-colors group">
                      <div className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-[#1e232e] group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-xl">
                          chat
                        </span>
                      </div>
                      <span className="font-medium">
                        Chat ao vivo (9h às 18h)
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 mt-2 border-t border-[#e5e7eb] dark:border-[#292e38] flex gap-4">
                    <span className="text-[#64748b] dark:text-[#9ea7b7] hover:text-primary transition-colors">
                      Instagram
                    </span>
                    <span className="text-[#64748b] dark:text-[#9ea7b7] hover:text-primary transition-colors">
                      Twitter
                    </span>
                    <span className="text-[#64748b] dark:text-[#9ea7b7] hover:text-primary transition-colors">
                      Facebook
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="border-t border-[#e5e7eb] dark:border-[#292e38] bg-white dark:bg-[#111317] py-8">
          <div className="px-4 md:px-40 flex justify-center">
            <div className="max-w-[960px] flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-[#64748b] dark:text-[#9ea7b7]">
                © 2023 Bloqueador Consciente. Todos os direitos reservados.
              </p>
              <div className="flex gap-6">
                <Link
                  className="text-sm text-[#64748b] dark:text-[#9ea7b7] hover:text-primary transition-colors"
                  to="/terms"
                >
                  Termos de Uso
                </Link>
                <Link
                  className="text-sm text-[#64748b] dark:text-[#9ea7b7] hover:text-primary transition-colors"
                  to="/privacy"
                >
                  Privacidade
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style>
        {`
          .material-symbols-outlined {
            font-variation-settings:
              'FILL' 0,
              'wght' 400,
              'GRAD' 0,
              'opsz' 24
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
