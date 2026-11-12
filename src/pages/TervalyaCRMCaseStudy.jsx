
import "./TervalyaCaseStudy.css";

const projectUrl =
  "https://frontend-ln40dvlqv-kamilaacarvalhoos-projects.vercel.app/login";

const features = [
  {
    number: "01",
    icon: "◈",
    title: "Dashboard executivo",
    description:
      "Painel central com indicadores para acompanhar informações e operações empresariais.",
  },
  {
    number: "02",
    icon: "◎",
    title: "Gestão de clientes",
    description:
      "Centralização dos dados de clientes e leads em um único ambiente de gestão.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Negociações",
    description:
      "Organização e acompanhamento das negociações e oportunidades comerciais.",
  },
  {
    number: "04",
    icon: "✓",
    title: "Tarefas e agenda",
    description:
      "Recursos para organizar atividades, compromissos e rotinas das equipes.",
  },
  {
    number: "05",
    icon: "▤",
    title: "Relatórios",
    description:
      "Informações organizadas para apoiar o acompanhamento das atividades empresariais.",
  },
  {
    number: "06",
    icon: "⌘",
    title: "Central de suporte",
    description:
      "Área para abertura e acompanhamento de chamados de suporte.",
  },
];

const technologies = [
  {
    name: "React",
    icon: "⚛",
    description: "Biblioteca utilizada na construção da interface.",
  },
  {
    name: "TypeScript",
    icon: "TS",
    description: "Tipagem estática para organizar e dar mais segurança ao código.",
  },
  {
    name: "Node.js",
    icon: "JS",
    description: "Ambiente utilizado no desenvolvimento do backend.",
  },
  {
    name: "Express",
    icon: "EX",
    description: "Framework utilizado na construção da API.",
  },
  {
    name: "PostgreSQL",
    icon: "DB",
    description: "Banco de dados relacional para armazenamento das informações.",
  },
  {
    name: "Prisma",
    icon: "P",
    description: "ORM utilizado para interação com o banco de dados.",
  },
  {
    name: "JWT",
    icon: "JWT",
    description: "Tecnologia utilizada no fluxo de autenticação.",
  },
];

const developmentSteps = [
  "Planejamento da estrutura e dos módulos do CRM",
  "Construção da interface utilizando React e TypeScript",
  "Desenvolvimento da API com Node.js e Express",
  "Modelagem e integração com PostgreSQL utilizando Prisma",
  "Implementação da autenticação e gerenciamento de sessões",
  "Desenvolvimento dos módulos de clientes, leads e negociações",
  "Criação de relatórios, agenda e central de suporte",
  "Integração entre frontend, backend e banco de dados",
];

const crmScreenshots = [
  {
    number: "01",
    title: "Dashboard",
    description: "Visão geral e indicadores do ambiente empresarial.",
    image: "/tervalya-1.png",
  },
 
];

export default function TervalyaCaseStudy() {
  return (
    <main className="tervalya-case" id="top">

      {/* NAVEGAÇÃO */}

      <nav className="tervalya-nav">
        <a href="/#projetos" className="tervalya-back">
          <span>←</span> Voltar aos projetos
        </a>

        <a href="#top" className="tervalya-brand">
          TER<span>VALYA</span>
          <small>BUSINESS MANAGEMENT</small>
        </a>

        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tervalya-nav-link"
        >
          Acessar sistema ↗
        </a>
      </nav>

      {/* HERO */}

      <section className="tervalya-hero">
        <div className="tervalya-hero-content">

          <span className="tervalya-eyebrow">
            <span>✦</span>
            CASE STUDY · FULL STACK DEVELOPMENT
          </span>

          <h1>
            GESTÃO
            <span>INTELIGENTE.</span>
          </h1>

          <h2>
            Conheça o
            <strong> Tervalya CRM.</strong>
          </h2>

          <p>
            Uma plataforma CRM Full Stack desenvolvida para
            centralizar a gestão de clientes, leads, negociações
            e operações empresariais. Uma solução que conecta
            informações, organiza processos e facilita a rotina
            de equipes e empresas.
          </p>

          <div className="tervalya-hero-actions">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tervalya-primary-button"
            >
              <span>↗</span>
              Acessar plataforma
              <span className="tervalya-button-arrow">↗</span>
            </a>

            <a href="#sobre" className="tervalya-outline-button">
              Explorar projeto ↓
            </a>
          </div>

          <div className="tervalya-tags">
            <span>Full Stack</span>
            <span>CRM</span>
            <span>React</span>
            <span>Node.js</span>
            <span>SaaS</span>
          </div>
        </div>

        <div className="tervalya-hero-visual">
          <div className="tervalya-orbit tervalya-orbit-one" />
          <div className="tervalya-orbit tervalya-orbit-two" />
          <div className="tervalya-glow" />

          <div className="tervalya-hero-image">
            <img
              src="/tervalya-crm.png"
              alt="Apresentação da plataforma Tervalya CRM"
            />
          </div>

          <div className="tervalya-floating-card">
            <span className="tervalya-floating-icon">✓</span>

            <div>
              <strong>Plataforma publicada</strong>
              <small>Sistema web disponível</small>
            </div>
          </div>

          <span className="tervalya-decoration tervalya-decoration-one">
            ✧
          </span>

          <span className="tervalya-decoration tervalya-decoration-two">
            ✦
          </span>

          <span className="tervalya-decoration tervalya-decoration-three">
            ◇
          </span>
        </div>

        <div className="tervalya-hero-bottom">
          <span>TECNOLOGIA PARA CONECTAR NEGÓCIOS</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* INDICADORES */}

      <section className="tervalya-metrics">
        <div>
          <strong>Full Stack</strong>
          <span>Desenvolvimento completo</span>
        </div>

        <div>
          <strong>React</strong>
          <span>Interface web</span>
        </div>

        <div>
          <strong>Node.js</strong>
          <span>Backend e API</span>
        </div>

        <div>
          <strong>Publicado</strong>
          <span>Plataforma SaaS</span>
        </div>
      </section>

      {/* SOBRE */}

      <section className="tervalya-section" id="sobre">
        <div className="tervalya-section-heading">
          <span>01 / SOBRE O PROJETO</span>

          <h2>
            Mais organização.
            <strong> Mais controle sobre os negócios.</strong>
          </h2>
        </div>

        <div className="tervalya-about-grid">
          <div className="tervalya-about-text">
            <p>
              O Tervalya CRM é uma plataforma de gestão empresarial
              desenvolvida para reunir em um único ambiente
              informações e processos importantes da rotina
              comercial e administrativa.
            </p>

            <p>
              O sistema contempla recursos de gerenciamento de
              clientes, leads, negociações, tarefas, agenda e
              relatórios, oferecendo uma estrutura centralizada
              para empresas e equipes comerciais.
            </p>

            <p>
              O projeto foi desenvolvido com arquitetura Full Stack,
              conectando uma interface construída com React e
              TypeScript a um backend com Node.js e Express,
              integrado ao PostgreSQL por meio do Prisma.
            </p>
          </div>

          <div className="tervalya-about-highlight">
            <div className="tervalya-highlight-symbol">✦</div>

            <span>A ESSÊNCIA DO TERVALYA</span>

            <h3>
              Centralizar informações, organizar processos e
              conectar a gestão empresarial.
            </h3>

            <div className="tervalya-highlight-line" />
          </div>
        </div>
      </section>

      {/* VISÃO DA PLATAFORMA */}

      <section className="tervalya-platform-section">
        <div className="tervalya-platform-content">
          <span>02 / A PLATAFORMA</span>

          <h2>
            Tudo conectado em
            <strong> um só ambiente.</strong>
          </h2>

          <p>
            Uma plataforma web que reúne diferentes áreas da
            operação empresarial, permitindo acompanhar clientes,
            oportunidades, atividades e informações de gestão
            em uma estrutura integrada.
          </p>

          <div className="tervalya-platform-tags">
            <span>Clientes</span>
            <span>Leads</span>
            <span>Negociações</span>
            <span>Relatórios</span>
            <span>Suporte</span>
          </div>
        </div>

        <div className="tervalya-platform-art">
          <div className="tervalya-platform-glow" />

          <img
            src="/tervalya-crm.png"
            alt="Interface da plataforma Tervalya CRM"
            loading="lazy"
          />

          <span className="tervalya-platform-caption">
            TERVALYA CRM · BUSINESS MANAGEMENT
          </span>
        </div>
      </section>

      {/* FUNCIONALIDADES */}

      <section className="tervalya-section">
        <div className="tervalya-section-heading">
          <span>03 / FUNCIONALIDADES</span>

          <h2>
            Recursos para uma gestão
            <strong> mais integrada.</strong>
          </h2>

          <p>
            Os principais módulos desenvolvidos para apoiar
            a organização e o acompanhamento das operações
            empresariais.
          </p>
        </div>

        <div className="tervalya-features-grid">
          {features.map((feature) => (
            <article
              className="tervalya-feature-card"
              key={feature.number}
            >
              <div className="tervalya-feature-top">
                <span className="tervalya-feature-number">
                  {feature.number}
                </span>

                <span className="tervalya-feature-icon">
                  {feature.icon}
                </span>
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <span className="tervalya-feature-line" />
            </article>
          ))}
        </div>
      </section>

      {/* DESENVOLVIMENTO */}

      <section className="tervalya-development-section">
        <div className="tervalya-section-heading">
          <span>04 / DESENVOLVIMENTO</span>

          <h2>
            Da arquitetura ao sistema.
            <strong> Uma solução Full Stack.</strong>
          </h2>
        </div>

        <div className="tervalya-development-grid">
          <div className="tervalya-development-intro">
            <span className="tervalya-development-label">
              MINHA ATUAÇÃO
            </span>

            <h3>
              Construindo uma plataforma para conectar toda a
              operação empresarial.
            </h3>

            <p>
              O desenvolvimento do Tervalya CRM envolveu a criação
              da interface, estruturação do backend, integração
              com banco de dados e implementação dos módulos
              responsáveis pela gestão empresarial.
            </p>

            <div className="tervalya-engine-card">
              <span>ARQUITETURA PRINCIPAL</span>
              <strong>FULL STACK</strong>
              <small>Frontend · Backend · Database</small>
            </div>
          </div>

          <div className="tervalya-development-list">
            {developmentSteps.map((step, index) => (
              <div
                className="tervalya-development-item"
                key={step}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{step}</p>

                <span className="tervalya-step-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}

      <section className="tervalya-section">
        <div className="tervalya-section-heading">
          <span>05 / STACK TECNOLÓGICA</span>

          <h2>
            Tecnologias por trás
            <strong> da plataforma.</strong>
          </h2>

          <p>
            Ferramentas utilizadas na construção da interface,
            backend, autenticação e persistência de dados.
          </p>
        </div>

        <div className="tervalya-tech-grid">
          {technologies.map((tech) => (
            <article
              className="tervalya-tech-card"
              key={tech.name}
            >
              <div className="tervalya-tech-icon">
                {tech.icon}
              </div>

              <h3>{tech.name}</h3>

              <p>{tech.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ARQUITETURA */}

      <section className="tervalya-architecture-section">
        <div className="tervalya-section-heading">
          <span>06 / ARQUITETURA DO SISTEMA</span>

          <h2>
            Frontend, backend e dados.
            <strong> Uma aplicação integrada.</strong>
          </h2>

          <p>
            Representação da estrutura tecnológica utilizada
            na construção do Tervalya CRM.
          </p>
        </div>

        <div className="tervalya-architecture">
          <div className="tervalya-architecture-main">
            <span>FRONTEND</span>
            <strong>REACT + TYPESCRIPT</strong>
            <small>Interface e experiência do usuário</small>
          </div>

          <div className="tervalya-architecture-connector">
            <span>↕</span>
          </div>

          <div className="tervalya-architecture-middle">
            <span>BACKEND · API</span>
            <strong>NODE.JS + EXPRESS</strong>
            <small>
              Regras de negócio e comunicação entre os módulos
            </small>
          </div>

          <div className="tervalya-architecture-connector">
            <span>↕</span>
          </div>

          <div className="tervalya-architecture-grid">
            <div>
              <span>ORM</span>
              <strong>Prisma</strong>
              <small>Integração com os dados</small>
            </div>

            <div>
              <span>DATABASE</span>
              <strong>PostgreSQL</strong>
              <small>Persistência das informações</small>
            </div>

            <div>
              <span>AUTH</span>
              <strong>JWT</strong>
              <small>Autenticação e sessões</small>
            </div>
          </div>

          <div className="tervalya-architecture-connector">
            <span>↓</span>
          </div>

          <div className="tervalya-architecture-result">
            <span>PRODUTO FINAL</span>
            <strong>TERVALYA CRM · WEB SAAS</strong>
            <small>Plataforma de gestão empresarial</small>
          </div>
        </div>

        <p className="tervalya-architecture-note">
          Representação conceitual da arquitetura e das tecnologias
          utilizadas no desenvolvimento do projeto.
        </p>
      </section>

      {/* SEGURANÇA E GESTÃO */}

      <section className="tervalya-security-section">
        <div className="tervalya-security-content">
          <span>07 / AUTENTICAÇÃO E CONTROLE</span>

          <h2>
            Acesso organizado.
            <strong> Sessões gerenciadas.</strong>
          </h2>

          <p>
            A plataforma conta com autenticação e gerenciamento
            de sessões, além de configurações de usuários e
            empresas para apoiar o controle de acesso ao ambiente.
          </p>

          <div className="tervalya-security-items">
            <div>
              <span>01</span>
              <strong>Autenticação JWT</strong>
              <small>Fluxo de autenticação da aplicação</small>
            </div>

            <div>
              <span>02</span>
              <strong>Gerenciamento de sessões</strong>
              <small>Controle das sessões dos usuários</small>
            </div>

            <div>
              <span>03</span>
              <strong>Configurações</strong>
              <small>Gerenciamento de usuários e empresas</small>
            </div>
          </div>
        </div>

        <div className="tervalya-security-visual">
          <div className="tervalya-security-glow" />

          <div className="tervalya-security-card">
            <div className="tervalya-security-card-top">
              <span>TERVALYA</span>
              <span className="tervalya-security-status">
                ● SISTEMA
              </span>
            </div>

            <div className="tervalya-security-lock">⌑</div>

            <h3>Ambiente de acesso</h3>

            <p>
              Autenticação e gerenciamento de sessões
            </p>

            <div className="tervalya-security-line">
              <span />
            </div>

            <div className="tervalya-security-footer">
              <span>JWT</span>
              <span>NODE.JS</span>
              <span>API</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}

      <section className="tervalya-section tervalya-gallery-section">
        <div className="tervalya-section-heading">
          <span>08 / TELAS DO SISTEMA</span>

          <h2>
            Conheça a interface
            <strong> do Tervalya CRM.</strong>
          </h2>

          <p>
            Algumas telas da plataforma que demonstram a interface
            e os módulos desenvolvidos para a gestão empresarial.
          </p>
        </div>

        <div className="tervalya-gallery">
          {crmScreenshots.map((screenshot) => (
            <article
              className="tervalya-gallery-card"
              key={screenshot.number}
            >
              <div className="tervalya-gallery-image">
                <img
                  src={screenshot.image}
                  alt={`${screenshot.title} do Tervalya CRM`}
                  loading="lazy"
                />

                <span className="tervalya-gallery-number">
                  {screenshot.number}
                </span>

                <div className="tervalya-gallery-overlay">
                  <span>TERVALYA CRM · SAAS PLATFORM</span>
                  <h3>{screenshot.title}</h3>
                </div>
              </div>

              <div className="tervalya-gallery-caption">
                <div>
                  <h3>{screenshot.title}</h3>
                  <p>{screenshot.description}</p>
                </div>

                <span>↗</span>
              </div>
            </article>
          ))}
        </div>

        <div className="tervalya-gallery-footer">
          <span>✦</span>
          <p>TECNOLOGIA E ORGANIZAÇÃO EM UM SÓ LUGAR.</p>
        </div>
      </section>

      {/* RESULTADO */}

      <section className="tervalya-result-section">
        <div className="tervalya-result-glow" />

        <div className="tervalya-result-content">
          <span>09 / RESULTADO</span>

          <h2>
            Uma plataforma pronta
            <strong> para conectar negócios.</strong>
          </h2>

          <p>
            O Tervalya CRM foi desenvolvido e publicado como
            uma aplicação web, reunindo recursos de gestão
            empresarial em uma plataforma integrada.
          </p>

          <p>
            O resultado representa a aplicação prática de
            conhecimentos em desenvolvimento Full Stack,
            construção de interfaces, APIs, autenticação,
            integração com banco de dados e organização
            de funcionalidades empresariais.
          </p>

          <div className="tervalya-result-badges">
            <span>✓ Sistema publicado</span>
            <span>✓ Desenvolvimento Full Stack</span>
            <span>✓ Banco PostgreSQL</span>
          </div>

          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tervalya-primary-button"
          >
            <span>↗</span>
            Acessar Tervalya CRM
            <span className="tervalya-button-arrow">↗</span>
          </a>
        </div>
      </section>

      {/* CONCLUSÃO */}

      <section className="tervalya-conclusion">
        <span>10 / O QUE ESSE PROJETO REPRESENTA</span>

        <h2>
          Conectar informações.
          <strong> Simplificar a gestão.</strong>
        </h2>

        <p>
          O Tervalya CRM representa a construção de uma solução
          Full Stack voltada à gestão empresarial. Um projeto
          que integra frontend, backend, banco de dados,
          autenticação e diferentes módulos em uma única
          plataforma web.
        </p>

        <div className="tervalya-signature">
          <span>DA IDEIA À APLICAÇÃO.</span>
          <strong>DA TECNOLOGIA À GESTÃO.</strong>
        </div>

        <a href="/#projetos" className="tervalya-back-bottom">
          ← Voltar ao portfólio
        </a>
      </section>

      {/* FOOTER */}

      <footer className="tervalya-footer">
        <span>FLOWUX © 2026</span>
        <span>TERVALYA CRM · FULL STACK DEVELOPMENT</span>
        <a href="#top">Voltar ao topo ↑</a>
      </footer>

    </main>
  );
}
