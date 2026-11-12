
import "./RylloCaseStudy.css";

const features = [
  {
    number: "01",
    icon: "✦",
    title: "Personagens",
    description:
      "Personagens que dão vida ao universo de Ryllo e fazem parte da experiência do jogador.",
  },
  {
    number: "02",
    icon: "◈",
    title: "Mundos exploráveis",
    description:
      "Diferentes mapas e ambientes para explorar durante a jornada.",
  },
  {
    number: "03",
    icon: "⚔",
    title: "Sistema de combate",
    description:
      "Mecânicas de combate que fazem parte dos desafios encontrados pelo jogador.",
  },
  {
    number: "04",
    icon: "♜",
    title: "Inimigos",
    description:
      "Inimigos distribuídos pelo universo do jogo para desafiar o jogador.",
  },
  {
    number: "05",
    icon: "☼",
    title: "Missões",
    description:
      "Objetivos que orientam a jornada e incentivam a exploração dos mundos.",
  },
  {
    number: "06",
    icon: "✧",
    title: "Experiência mobile",
    description:
      "Uma experiência de jogo desenvolvida para dispositivos móveis.",
  },
];

const technologies = [
  {
    name: "Unity",
    icon: "U",
    description: "Engine utilizada no desenvolvimento do jogo.",
  },
  {
    name: "C#",
    icon: "C#",
    description: "Linguagem utilizada para implementar a lógica do jogo.",
  },
  {
    name: "Blender",
    icon: "B",
    description: "Ferramenta utilizada no trabalho com elementos 3D.",
  },
  {
    name: "Mixamo",
    icon: "M",
    description: "Ferramenta utilizada no fluxo de animações de personagens.",
  },
];

const developmentSteps = [
  "Desenvolvimento do jogo utilizando Unity",
  "Implementação da lógica com C#",
  "Construção da experiência para dispositivos móveis",
  "Trabalho com personagens e elementos 3D",
  "Integração de mapas, inimigos e missões",
  "Implementação do sistema de combate",
];

const gameScreenshots = [
  {
    number: "01",
    title: "Gameplay",
    description:
      "Uma visão da experiência de jogo de Ryllo.",
    image: "/ryllo-1.webp",
  },
  {
    number: "02",
    title: "Exploração",
    description:
      "Detalhes dos ambientes e da jornada pelo jogo.",
    image: "/ryllo-2.webp",
  },
  {
    number: "03",
    title: "Experiência visual",
    description:
      "Elementos visuais que compõem o universo de Ryllo.",
    image: "/ryllo-3.webp",
  },
  {
    number: "04",
    title: "Mundo de Ryllo",
    description:
      "Mais detalhes da aventura e dos cenários do jogo.",
    image: "/ryllo-4.webp",
  },
];

function RylloCaseStudy() {
  return (
    <main className="ryllo-case" id="top">

      {/* NAVEGAÇÃO */}

      <nav className="ryllo-nav">
        <a href="/#projetos" className="ryllo-back">
          <span>←</span> Voltar aos projetos
        </a>

        <a href="#top" className="ryllo-brand">
          RY<span>LLO</span>
          <small>GAME STUDIO</small>
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.flowux.ryllo&hl=pt_BR"
          target="_blank"
          rel="noopener noreferrer"
          className="ryllo-nav-link"
        >
          Google Play ↗
        </a>
      </nav>

      {/* HERO */}

      <section className="ryllo-hero">
        <div className="ryllo-hero-content">

          <span className="ryllo-eyebrow">
            <span className="ryllo-eyebrow-star">✦</span>
            CASE STUDY · GAME DEVELOPMENT
          </span>

          <h1>
            UM NOVO
            <span>UNIVERSO.</span>
          </h1>

          <h2>
            Conheça o mundo de
            <strong> Ryllo.</strong>
          </h2>

          <p>
            Ryllo é um jogo mobile desenvolvido para levar
            os jogadores a uma jornada por diferentes mundos,
            com personagens, inimigos, missões e desafios
            em uma experiência de aventura.
          </p>

          <div className="ryllo-hero-actions">
            <a
              href="https://play.google.com/store/apps/details?id=com.flowux.ryllo&hl=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              className="ryllo-primary-button"
            >
              <span>▶</span> Jogar Ryllo
              <span className="ryllo-button-arrow">↗</span>
            </a>

            <a href="#sobre" className="ryllo-outline-button">
              Explorar projeto ↓
            </a>
          </div>

          <div className="ryllo-tags">
            <span>Mobile Game</span>
            <span>Unity</span>
            <span>C#</span>
            <span>3D</span>
          </div>
        </div>

        <div className="ryllo-hero-visual">
          <div className="ryllo-orbit ryllo-orbit-one" />
          <div className="ryllo-orbit ryllo-orbit-two" />
          <div className="ryllo-glow" />

          <div className="ryllo-hero-image">
            <img
              src="/ryllo.png"
              alt="Personagem principal e identidade visual do jogo Ryllo"
            />
          </div>

          <div className="ryllo-floating-card">
            <span className="ryllo-floating-icon">✦</span>
            <div>
              <strong>Ryllo está disponível</strong>
              <small>Publicado na Google Play</small>
            </div>
          </div>

          <span className="ryllo-decoration ryllo-decoration-one">✧</span>
          <span className="ryllo-decoration ryllo-decoration-two">✦</span>
          <span className="ryllo-decoration ryllo-decoration-three">◇</span>
        </div>

        <div className="ryllo-hero-bottom">
          <span>UMA JORNADA COMEÇA AQUI</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* INDICADORES */}

      <section className="ryllo-metrics">
        <div>
          <strong>01</strong>
          <span>Jogo mobile</span>
        </div>

        <div>
          <strong>3D</strong>
          <span>Universo visual</span>
        </div>

        <div>
          <strong>Unity</strong>
          <span>Game engine</span>
        </div>

        <div>
          <strong>Publicado</strong>
          <span>Google Play</span>
        </div>
      </section>

      {/* SOBRE */}

      <section className="ryllo-section" id="sobre">
        <div className="ryllo-section-heading">
          <span>01 / SOBRE O JOGO</span>
          <h2>
            Mais do que um jogo.
            <strong> Um universo para explorar.</strong>
          </h2>
        </div>

        <div className="ryllo-about-grid">
          <div className="ryllo-about-text">
            <p>
              Ryllo é um jogo mobile desenvolvido com o objetivo
              de criar uma experiência de aventura em diferentes
              mundos. O universo do jogo reúne personagens,
              mapas exploráveis, inimigos e missões.
            </p>

            <p>
              A proposta combina elementos visuais em 3D com
              mecânicas de exploração e combate, construindo
              uma experiência interativa pensada para jogadores
              de dispositivos móveis.
            </p>

            <p>
              O projeto envolve diferentes etapas do desenvolvimento
              de jogos, desde a implementação da lógica até a
              composição dos elementos que formam o universo
              de Ryllo.
            </p>
          </div>

          <div className="ryllo-about-highlight">
            <div className="ryllo-highlight-symbol">✦</div>
            <span>A ESSÊNCIA DE RYLLO</span>
            <h3>
              Explorar novos mundos, enfrentar desafios e viver
              uma aventura.
            </h3>
            <div className="ryllo-highlight-line" />
          </div>
        </div>
      </section>

      {/* UNIVERSO */}

      <section className="ryllo-world-section">
        <div className="ryllo-world-content">
          <span>02 / O UNIVERSO</span>

          <h2>
            Um mundo cheio de
            <strong> possibilidades.</strong>
          </h2>

          <p>
            Personagens, cenários e desafios fazem parte
            da construção de um universo pensado para
            estimular a exploração e a aventura.
          </p>

          <div className="ryllo-world-tags">
            <span>Personagens</span>
            <span>Exploração</span>
            <span>Missões</span>
            <span>Combate</span>
          </div>
        </div>

        <div className="ryllo-world-art">
          <div className="ryllo-world-glow" />

          <img
            src="/ryllo.png"
            alt="Arte do universo de fantasia de Ryllo"
            loading="lazy"
          />

          <span className="ryllo-world-caption">
            RYLLO · UM UNIVERSO DE AVENTURA
          </span>
        </div>
      </section>

      {/* FUNCIONALIDADES */}

      <section className="ryllo-section">
        <div className="ryllo-section-heading">
          <span>03 / MECÂNICAS E FUNCIONALIDADES</span>

          <h2>
            Elementos que dão vida
            <strong> à aventura.</strong>
          </h2>

          <p>
            Os principais recursos que compõem a experiência
            de jogo e a exploração do universo Ryllo.
          </p>
        </div>

        <div className="ryllo-features-grid">
          {features.map((feature) => (
            <article
              className="ryllo-feature-card"
              key={feature.number}
            >
              <div className="ryllo-feature-top">
                <span className="ryllo-feature-number">
                  {feature.number}
                </span>

                <span className="ryllo-feature-icon">
                  {feature.icon}
                </span>
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="ryllo-feature-line" />
            </article>
          ))}
        </div>
      </section>

      {/* DESENVOLVIMENTO */}

      <section className="ryllo-development-section">
        <div className="ryllo-section-heading">
          <span>04 / DESENVOLVIMENTO</span>

          <h2>
            Da construção técnica
            <strong> ao mundo jogável.</strong>
          </h2>
        </div>

        <div className="ryllo-development-grid">
          <div className="ryllo-development-intro">
            <span className="ryllo-development-label">
              MINHA ATUAÇÃO
            </span>

            <h3>
              Transformando ideias em uma experiência interativa.
            </h3>

            <p>
              O desenvolvimento de Ryllo envolveu a construção
              de um jogo mobile utilizando Unity e C#, além do
              trabalho com ferramentas voltadas à criação de
              elementos e personagens 3D.
            </p>

            <div className="ryllo-engine-card">
              <span>ENGINE PRINCIPAL</span>
              <strong>UNITY</strong>
              <small>Desenvolvimento de jogos</small>
            </div>
          </div>

          <div className="ryllo-development-list">
            {developmentSteps.map((step, index) => (
              <div
                className="ryllo-development-item"
                key={step}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{step}</p>

                <span className="ryllo-step-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}

      <section className="ryllo-section">
        <div className="ryllo-section-heading">
          <span>05 / STACK TECNOLÓGICA</span>

          <h2>
            Ferramentas por trás
            <strong> do universo.</strong>
          </h2>

          <p>
            Tecnologias e ferramentas utilizadas na construção
            e desenvolvimento do jogo.
          </p>
        </div>

        <div className="ryllo-tech-grid">
          {technologies.map((tech) => (
            <article
              className="ryllo-tech-card"
              key={tech.name}
            >
              <div className="ryllo-tech-icon">
                {tech.icon}
              </div>

              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ARQUITETURA DO PROJETO */}

      <section className="ryllo-architecture-section">
        <div className="ryllo-section-heading">
          <span>06 / ESTRUTURA DO PROJETO</span>

          <h2>
            Diferentes ferramentas.
            <strong> Uma experiência integrada.</strong>
          </h2>

          <p>
            Uma representação conceitual das ferramentas
            utilizadas durante o desenvolvimento de Ryllo.
          </p>
        </div>

        <div className="ryllo-architecture">
          <div className="ryllo-architecture-main">
            <span>GAME ENGINE</span>
            <strong>UNITY</strong>
            <small>Ambiente principal de desenvolvimento</small>
          </div>

          <div className="ryllo-architecture-connector">
            <span>↓</span>
          </div>

          <div className="ryllo-architecture-grid">
            <div>
              <span>PROGRAMAÇÃO</span>
              <strong>C#</strong>
              <small>Lógica e sistemas do jogo</small>
            </div>

            <div>
              <span>MODELAGEM 3D</span>
              <strong>Blender</strong>
              <small>Criação de elementos 3D</small>
            </div>

            <div>
              <span>ANIMAÇÃO</span>
              <strong>Mixamo</strong>
              <small>Fluxo de animação</small>
            </div>
          </div>

          <div className="ryllo-architecture-connector">
            <span>↓</span>
          </div>

          <div className="ryllo-architecture-result">
            <span>PLATAFORMA FINAL</span>
            <strong>RYLLO · MOBILE GAME</strong>
            <small>
              Experiência desenvolvida para dispositivos móveis
            </small>
          </div>
        </div>

        <p className="ryllo-architecture-note">
          Representação conceitual das ferramentas utilizadas
          no desenvolvimento do projeto.
        </p>
      </section>

      {/* GAMEPLAY E GALERIA */}

      <section className="ryllo-section ryllo-gallery-section">
        <div className="ryllo-section-heading">
          <span>07 / GAMEPLAY E UNIVERSO</span>

          <h2>
            Conheça o mundo
            <strong> de Ryllo.</strong>
          </h2>

          <p>
            Confira algumas imagens reais do jogo e conheça
            um pouco da experiência visual construída durante
            o desenvolvimento.
          </p>
        </div>

        <div className="ryllo-game-gallery">
          {gameScreenshots.map((screenshot) => (
            <article
              className="ryllo-game-gallery-card"
              key={screenshot.number}
            >
              <div className="ryllo-game-gallery-image">
                <img
                  src={screenshot.image}
                  alt={`${screenshot.title} do jogo Ryllo`}
                  loading="lazy"
                />

                <span className="ryllo-game-gallery-number">
                  {screenshot.number}
                </span>

                <div className="ryllo-game-gallery-overlay">
                  <span>RYLLO · GAME DEVELOPMENT</span>
                  <h3>{screenshot.title}</h3>
                </div>
              </div>

              <div className="ryllo-game-gallery-caption">
                <div>
                  <h3>{screenshot.title}</h3>
                  <p>{screenshot.description}</p>
                </div>

                <span>↗</span>
              </div>
            </article>
          ))}
        </div>

        <div className="ryllo-gallery-footer">
          <span>✦</span>
          <p>UM UNIVERSO CONSTRUÍDO PARA SER EXPLORADO.</p>
        </div>
      </section>

      {/* RESULTADO */}

      <section className="ryllo-result-section">
        <div className="ryllo-result-glow" />

        <div className="ryllo-result-content">
          <span>08 / RESULTADO</span>

          <h2>
            Uma ideia que ganhou
            <strong> vida no mobile.</strong>
          </h2>

          <p>
            Ryllo foi desenvolvido e publicado na Google Play,
            levando o projeto do ambiente de desenvolvimento
            até sua disponibilização para jogadores mobile.
          </p>

          <p>
            O resultado representa a aplicação prática de
            conhecimentos em desenvolvimento de jogos,
            programação, ferramentas 3D e construção de
            experiências interativas.
          </p>

          <div className="ryllo-result-badges">
            <span>✓ Jogo publicado</span>
            <span>✓ Plataforma mobile</span>
            <span>✓ Unity + C#</span>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.flowux.ryllo&hl=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            className="ryllo-primary-button"
          >
            <span>▶</span> Baixar na Google Play
            <span className="ryllo-button-arrow">↗</span>
          </a>
        </div>
      </section>

      {/* CONCLUSÃO */}

      <section className="ryllo-conclusion">
        <span>09 / O QUE ESSE PROJETO REPRESENTA</span>

        <h2>
          Criar mundos.
          <strong> Desenvolver experiências.</strong>
        </h2>

        <p>
          Ryllo representa a experiência de transformar uma
          ideia em um jogo mobile publicado. Um projeto que
          reúne programação, desenvolvimento de jogos,
          ferramentas 3D e construção de uma experiência
          interativa para jogadores.
        </p>

        <div className="ryllo-signature">
          <span>DA IDEIA AO JOGO.</span>
          <strong>DO DESENVOLVIMENTO À AVENTURA.</strong>
        </div>

        <a href="/#projetos" className="ryllo-back-bottom">
          ← Voltar ao portfólio
        </a>
      </section>

      {/* FOOTER */}

      <footer className="ryllo-footer">
        <span>FLOWUX © 2026</span>
        <span>RYLLO · GAME DEVELOPMENT</span>
        <a href="#top">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}

export default RylloCaseStudy;
