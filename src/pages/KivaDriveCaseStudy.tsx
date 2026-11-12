
import "./KivaDriveCaseStudy.css";

const screenshots = [
  {
    title: "Experiência da passageira",
    description: "Interface desenvolvida para a experiência de mobilidade das passageiras.",
    image: "/kiva-passageira.png",
  },
  {
    title: "Experiência da motorista",
    description: "Ambiente dedicado às motoristas e ao gerenciamento de viagens.",
    image: "/kiva-motorista.png",
  },
  {
    title: "Solicitação de viagens",
    description: "Fluxo de solicitação e acompanhamento de corridas.",
    image: "/kiva-viagens.png",
  },
  {
    title: "Pagamentos",
    description: "Integração de pagamentos via PIX.",
    image: "/kiva-pagamentos.png",
  },
];

const technologies = [
  {
    name: "React Native",
    description: "Desenvolvimento dos aplicativos mobile.",
    icon: "RN",
  },
  {
    name: "Expo",
    description: "Ambiente de desenvolvimento e distribuição mobile.",
    icon: "EX",
  },
  {
    name: "Supabase",
    description: "Backend e gerenciamento de dados.",
    icon: "SB",
  },
  {
    name: "PIX",
    description: "Integração de pagamentos.",
    icon: "PX",
  },
];

function KivaDriveCaseStudy() {
  return (
    <main className="kiva-case">

      {/* NAVEGAÇÃO */}

      <nav className="kiva-nav">
        <a href="/#projetos" className="kiva-back">
          <span>←</span> Voltar aos projetos
        </a>

        <span className="kiva-nav-brand">
          KIVA <strong>DRIVE</strong>
        </span>

        <a
          href="https://kivadriveoficial.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="kiva-nav-link"
        >
          Visitar plataforma ↗
        </a>
      </nav>

      {/* HERO */}

      <section className="kiva-hero">

        <div className="kiva-hero-content">

          <span className="kiva-eyebrow">
            ✦ CASE STUDY · FULL STACK MOBILE
          </span>

          <h1>
            KIVA
            <span>DRIVE.</span>
          </h1>

          <h2>
            Mobilidade feminina.
            <br />
            <strong>Tecnologia com propósito.</strong>
          </h2>

          <p>
            Uma plataforma de mobilidade urbana desenvolvida
            para conectar passageiras e motoristas por meio
            de uma experiência digital pensada para mulheres.
          </p>

          <div className="kiva-hero-actions">
            <a
              href="https://kivadriveoficial.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="kiva-primary-button"
            >
              Conhecer a Kiva Drive ↗
            </a>

            <a href="#sobre" className="kiva-outline-button">
              Explorar projeto ↓
            </a>
          </div>

          <div className="kiva-hero-tags">
            <span>Android</span>
            <span>iOS</span>
            <span>React Native</span>
            <span>Supabase</span>
          </div>

        </div>

        <div className="kiva-hero-visual">
          <div className="kiva-glow" />

          <div className="kiva-image-frame">
            <img
              src="/kiva-drive.png"
              alt="Identidade visual da plataforma Kiva Drive"
            />
          </div>

          <div className="kiva-floating-card">
            <span className="kiva-floating-icon">✦</span>
            <div>
              <strong>Produto real</strong>
              <small>Desenvolvido e publicado</small>
            </div>
          </div>
        </div>

      </section>

      {/* INDICADORES */}

      <section className="kiva-metrics">
        <div>
          <strong>02</strong>
          <span>Ambientes mobile</span>
        </div>

        <div>
          <strong>Full Stack</strong>
          <span>Desenvolvimento</span>
        </div>

        <div>
          <strong>Android + iOS</strong>
          <span>Plataformas</span>
        </div>

        <div>
          <strong>Produto real</strong>
          <span>Publicado nas lojas</span>
        </div>
      </section>

      {/* SOBRE */}

      <section className="kiva-section" id="sobre">

        <div className="kiva-section-heading">
          <span>01 / SOBRE O PROJETO</span>
          <h2>
            Uma ideia que se
            <strong> transformou em produto.</strong>
          </h2>
        </div>

        <div className="kiva-about-grid">

          <div className="kiva-about-main">
            <p>
              A Kiva Drive nasceu de uma ideia e se transformou
              em um produto digital real, desenvolvido para
              conectar passageiras e motoristas em uma plataforma
              de mobilidade urbana.
            </p>

            <p>
              O projeto foi idealizado para oferecer uma experiência
              de mobilidade que conecta tecnologia, praticidade e
              uma proposta centrada nas necessidades das mulheres.
            </p>
          </div>

          <div className="kiva-about-highlight">
            <span>O propósito</span>
            <h3>
              Tecnologia que conecta pessoas e transforma ideias
              em experiências digitais.
            </h3>
          </div>

        </div>
      </section>

      {/* DESAFIO E SOLUÇÃO */}

      <section className="kiva-section kiva-challenge-section">

        <div className="kiva-section-heading">
          <span>02 / DESAFIO E SOLUÇÃO</span>
          <h2>
            Do problema à
            <strong> experiência digital.</strong>
          </h2>
        </div>

        <div className="kiva-two-columns">

          <article className="kiva-info-card">
            <span className="kiva-number">01</span>
            <h3>O desafio</h3>

            <p>
              Desenvolver uma plataforma de mobilidade urbana
              capaz de conectar passageiras e motoristas,
              oferecendo uma experiência intuitiva e funcional.
            </p>

            <p>
              O desafio envolveu construir um ecossistema digital
              com diferentes perfis de usuários, gerenciamento
              de viagens e integração de pagamentos.
            </p>
          </article>

          <article className="kiva-info-card kiva-solution-card">
            <span className="kiva-number">02</span>
            <h3>A solução</h3>

            <p>
              Desenvolvi a Kiva Drive, uma plataforma de mobilidade
              com funcionalidades específicas para passageiras
              e motoristas.
            </p>

            <p>
              Os aplicativos foram estruturados para integrar
              diferentes experiências em um mesmo ecossistema
              digital.
            </p>
          </article>

        </div>
      </section>

      {/* FUNCIONALIDADES */}

      <section className="kiva-section">

        <div className="kiva-section-heading">
          <span>03 / FUNCIONALIDADES</span>
          <h2>
            Um ecossistema
            <strong> conectado.</strong>
          </h2>

          <p>
            Funcionalidades desenvolvidas para atender às
            diferentes etapas da experiência de mobilidade.
          </p>
        </div>

        <div className="kiva-features-grid">

          {[
            {
              icon: "01",
              title: "Cadastro e autenticação",
              description: "Estrutura de acesso para os diferentes perfis de usuárias.",
            },
            {
              icon: "02",
              title: "Ambientes independentes",
              description: "Experiências específicas para passageiras e motoristas.",
            },
            {
              icon: "03",
              title: "Solicitação de viagens",
              description: "Fluxo para solicitação de corridas dentro da plataforma.",
            },
            {
              icon: "04",
              title: "Acompanhamento",
              description: "Funcionalidades de acompanhamento das viagens.",
            },
            {
              icon: "05",
              title: "Integração de pagamentos",
              description: "Implementação de pagamentos via PIX.",
            },
            {
              icon: "06",
              title: "Integração de sistemas",
              description: "Comunicação entre aplicativos, backend e dados.",
            },
          ].map((feature) => (
            <article className="kiva-feature-card" key={feature.icon}>
              <span>{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}

        </div>
      </section>

      {/* MINHA ATUAÇÃO */}

      <section className="kiva-section kiva-role-section">

        <div className="kiva-section-heading">
          <span>04 / MINHA ATUAÇÃO</span>
          <h2>
            Desenvolvimento
            <strong> Full Stack Mobile.</strong>
          </h2>
        </div>

        <div className="kiva-role-content">

          <div className="kiva-role-intro">
            <span className="kiva-role-label">MINHA RESPONSABILIDADE</span>

            <h3>
              Da concepção técnica à publicação do produto.
            </h3>

            <p>
              Fui responsável pelo desenvolvimento do aplicativo
              e do backend, conduzindo a construção técnica do
              produto e a integração entre suas principais
              funcionalidades.
            </p>
          </div>

          <div className="kiva-role-list">

            {[
              "Desenvolvimento mobile com React Native e Expo",
              "Estruturação e implementação do backend",
              "Integração com Supabase",
              "Desenvolvimento dos ambientes de passageiras e motoristas",
              "Implementação dos fluxos de viagens",
              "Integração de pagamentos via PIX",
              "Preparação e publicação dos aplicativos",
            ].map((item, index) => (
              <div className="kiva-role-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
                <span className="kiva-check">↗</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ARQUITETURA */}

      <section className="kiva-section">

        <div className="kiva-section-heading">
          <span>05 / ARQUITETURA TÉCNICA</span>
          <h2>
            Tecnologia por trás
            <strong> da experiência.</strong>
          </h2>

          <p>
            Uma estrutura integrada para conectar os aplicativos,
            o gerenciamento de dados e os pagamentos.
          </p>
        </div>

        <div className="kiva-architecture">

          <div className="kiva-architecture-box">
            <span>CAMADA MOBILE</span>
            <div className="kiva-architecture-apps">
              <div>
                <strong>Passageiras</strong>
                <small>React Native + Expo</small>
              </div>

              <div>
                <strong>Motoristas</strong>
                <small>React Native + Expo</small>
              </div>
            </div>
          </div>

          <div className="kiva-architecture-connector">
            <span>↕</span>
            <small>Comunicação entre aplicações e serviços</small>
          </div>

          <div className="kiva-architecture-box kiva-backend-box">
            <span>BACKEND E DADOS</span>
            <strong>Supabase</strong>
            <small>Integração e gerenciamento de dados</small>
          </div>

          <div className="kiva-architecture-connector">
            <span>↕</span>
            <small>Integrações da plataforma</small>
          </div>

          <div className="kiva-architecture-integrations">
            <div>
              <strong>PIX</strong>
              <small>Pagamentos</small>
            </div>

            <div>
              <strong>APPS</strong>
              <small>Android e iOS</small>
            </div>
          </div>

        </div>

        <p className="kiva-architecture-note">
          Representação conceitual da arquitetura da plataforma.
          Os componentes representam as tecnologias e integrações
          utilizadas no projeto.
        </p>

      </section>

      {/* TECNOLOGIAS */}

      <section className="kiva-section">

        <div className="kiva-section-heading">
          <span>06 / STACK TECNOLÓGICA</span>
          <h2>
            Ferramentas utilizadas
            <strong> na construção.</strong>
          </h2>
        </div>

        <div className="kiva-tech-grid">

          {technologies.map((tech) => (
            <article className="kiva-tech-card" key={tech.name}>
              <div className="kiva-tech-icon">
                {tech.icon}
              </div>

              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </article>
          ))}

        </div>
      </section>

      {/* GALERIA */}

      <section className="kiva-section kiva-gallery-section">

        <div className="kiva-section-heading">
          <span>07 / INTERFACE DO PRODUTO</span>
          <h2>
            O produto em
            <strong> funcionamento.</strong>
          </h2>

          <p>
            Uma visão das interfaces e experiências desenvolvidas
            para a plataforma Kiva Drive.
          </p>
        </div>

        <div className="kiva-gallery-grid">

          {screenshots.map((screen, index) => (
            <article className="kiva-gallery-card" key={screen.title}>

              <div className="kiva-gallery-image">
                <img
                  src={screen.image}
                  alt={screen.title}
                  loading="lazy"
                />
              </div>

              <div className="kiva-gallery-caption">
                <span>0{index + 1}</span>

                <div>
                  <h3>{screen.title}</h3>
                  <p>{screen.description}</p>
                </div>
              </div>

            </article>
          ))}

        </div>
      </section>

      {/* RESULTADO */}

      <section className="kiva-result-section">

        <div className="kiva-result-content">

          <span>08 / RESULTADO</span>

          <h2>
            Da ideia à
            <strong> publicação.</strong>
          </h2>

          <p>
            A Kiva Drive ultrapassou a fase de prototipação
            e se tornou um produto digital publicado na
            Google Play Store e na Apple App Store.
          </p>

          <p>
            O projeto representa a experiência prática de
            transformar uma ideia em uma solução tecnológica,
            integrando desenvolvimento mobile, backend,
            pagamentos e publicação.
          </p>

          <div className="kiva-result-badges">
            <span>✓ Google Play</span>
            <span>✓ Apple App Store</span>
            <span>✓ Android</span>
            <span>✓ iOS</span>
          </div>

          <a
            href="https://kivadriveoficial.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="kiva-primary-button"
          >
            Visitar Kiva Drive ↗
          </a>

        </div>

      </section>

      {/* CONCLUSÃO */}

      <section className="kiva-conclusion">

        <span>09 / O QUE ESSE PROJETO REPRESENTA</span>

        <h2>
          Tecnologia que sai do papel
          <strong> e chega às pessoas.</strong>
        </h2>

        <p>
          A Kiva Drive representa minha capacidade de transformar
          uma ideia em um produto tecnológico real. Desde a
          concepção até a publicação, o projeto exigiu
          planejamento, desenvolvimento mobile, integração
          de backend, implementação de funcionalidades e
          resolução de desafios técnicos reais.
        </p>

        <div className="kiva-conclusion-signature">
          DA IDEIA À PUBLICAÇÃO.
          <strong> DO DESIGN AO DESENVOLVIMENTO.</strong>
        </div>

        <a href="/#projetos" className="kiva-back-bottom">
          ← Voltar ao portfólio
        </a>

      </section>

      {/* FOOTER */}

      <footer className="kiva-footer">
        <span>FLOWUX © 2026</span>
        <span>KIVA DRIVE · CASE STUDY</span>
        <a href="#top">Voltar ao topo ↑</a>
      </footer>

    </main>
  );
}

export default KivaDriveCaseStudy;
