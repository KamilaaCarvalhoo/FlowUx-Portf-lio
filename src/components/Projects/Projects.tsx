
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      name: "TERVALYA CRM",
      category: "Sistema de Gestão Empresarial",
      description:
        "Plataforma CRM Full Stack desenvolvida para centralizar a gestão de clientes, leads, negociações e operações empresariais. Possui dashboard executivo, relatórios, autenticação, gerenciamento de sessões e central de suporte.",
      technology:
        "React • TypeScript • Node.js • Express • PostgreSQL • Prisma • JWT",
      image: "/tervalya-crm.png",
      link: "https://frontend-ln40dvlqv-kamilaacarvalhoos-projects.vercel.app/login",
      caseStudy: "/projetos/tervalya-crm",
      platform: "Web • SaaS",
      status: "Publicado e funcionando",
      audience: "Empresas e equipes comerciais",
      features: [
        "Dashboard executivo com indicadores",
        "Gestão de clientes e leads",
        "Controle de negociações e tarefas",
        "Agenda e relatórios empresariais",
        "Autenticação e gerenciamento de sessões",
        "Configurações de usuários e empresas",
        "Central de suporte com chamados",
        "Integração com banco de dados PostgreSQL",
      ],
    },
    {
      name: "Kiva Drive",
      category: "Plataforma de Mobilidade Urbana",
      description:
        "Plataforma de mobilidade feminina desenvolvida do zero, conectando passageiras e motoristas por meio de dois ambientes mobile integrados.",
      technology:
        "React Native • Expo • Supabase • PIX • Android/iOS",
      image: "/kiva-drive.png",
      link: "https://kivadriveoficial.com.br",
      caseStudy: "/projetos/kiva-drive",
      platform: "Android / iOS",
      status: "Publicado na Google Play e App Store",
      audience: "Passageiras e motoristas",
      features: [
        "Cadastro e autenticação de usuárias",
        "Aplicativos para passageiras e motoristas",
        "Solicitação e acompanhamento de viagens",
        "Integração com backend e banco de dados",
        "Integração de pagamentos via PIX",
      ],
    },
    {
      name: "Ryllo",
      category: "Game Mobile",
      description:
        "Jogo mobile desenvolvido com personagens, mapas, inimigos, missões e diferentes mundos para explorar.",
      technology: "Unity • C# • Blender • Mixamo",
      image: "/ryllo.png",
      link: "https://play.google.com/store/apps/details?id=com.flowux.ryllo&hl=pt_BR",
      caseStudy: "/projetos/ryllo",
      platform: "Mobile",
      status: "Publicado e funcionando",
      audience: "Jogadores mobile",
      features: [
        "Personagens",
        "Mapas exploráveis",
        "Inimigos",
        "Missões",
        "Sistema de combate",
      ],
    },
    {
      name: "Pandily",
      category: "Aplicativo Educacional",
      description:
        "Aplicativo interativo desenvolvido para auxiliar no aprendizado de inglês de forma divertida, visual e acessível.",
      technology: "React Native • TypeScript • Expo",
      image: "/pandily.png",
      link: "#",
      platform: "Aplicativo mobile",
      status: "Em desenvolvimento",
      audience: "Pessoas aprendendo inglês",
      features: [
        "Aprendizado interativo",
        "Conteúdo de inglês",
        "Interface visual",
        "Experiência gamificada",
      ],
    },
    {
      name: "Zinho",
      category: "Assistente Virtual para Desktop",
      description:
        "Um robozinho virtual para desktop que deixa o computador mais divertido e produtivo. Interage com o usuário, oferece atalhos para sites e programas do Windows e permite organizar tarefas com armazenamento local.",
      technology: "React • JavaScript • Electron • Node.js • CSS",
      image: "/zinho.png",
      link: "https://github.com/KamilaaCarvalhoo/Zinho/releases/tag/v1.0.0",
      caseStudy: "/projetos/zinho",
      platform: "Windows • Desktop",
      status: "Disponível para download",
      audience: "Usuários de computador",
      features: [
        "Mascote virtual animado e interativo",
        "Atalhos para sites e programas do Windows",
        "Relógio e calendário em tempo real",
        "Lista de tarefas com conclusão e exclusão",
        "Armazenamento local persistente",
        "Comunicação entre React e Electron via IPC",
      ],
    },
  ];

  return (
    <section className="projects-section" id="projetos">
      <div className="section-header">
        <div className="section-badge">
          <span>✦ PORTFÓLIO</span>
        </div>

        <h2>
          Ideias que se tornaram
          <span className="gradient-text"> realidade digital.</span>
        </h2>

        <p>
          Explore os projetos e produtos tecnológicos desenvolvidos por Kamila Carvalho.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${
              project.name === "TERVALYA CRM"
                ? "project-card-featured"
                : ""
            }`}
            key={project.name}
          >
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={`Interface do projeto ${project.name}`}
                loading="lazy"
              />

              <div className="project-badges-overlay">
                {project.name === "TERVALYA CRM" && (
                  <span className="project-badge-tag highlight-tag">
                    FULL STACK
                  </span>
                )}

                {project.name === "Kiva Drive" && (
                  <span className="project-badge-tag highlight-tag">
                    FULL STACK MOBILE
                  </span>
                )}

                {project.name === "Ryllo" && (
                  <span className="project-badge-tag highlight-tag">
                    GAME DEV
                  </span>
                )}

                {project.name === "Zinho" && (
                  <span className="project-badge-tag highlight-tag">
                    DESKTOP APP
                  </span>
                )}
              </div>
            </div>

            <div className="project-content">
              <div className="project-meta-top">
                <span className="project-category">
                  {project.category}
                </span>

                <span className="project-status-dot">
                  • {project.status}
                </span>
              </div>

              <h3>{project.name}</h3>

              <p className="project-desc">
                {project.description}
              </p>

              <div className="project-info-grid">
                <div className="project-info-item">
                  <span className="info-label">Plataforma</span>
                  <span className="info-value">
                    {project.platform}
                  </span>
                </div>

                <div className="project-info-item">
                  <span className="info-label">Público-alvo</span>
                  <span className="info-value">
                    {project.audience}
                  </span>
                </div>
              </div>

              <div className="project-features">
                <span className="features-title">
                  Principais entregas:
                </span>

                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-bullet">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                <div className="technology-tags">
                  {project.technology.split(" • ").map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-buttons">
                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button primary-btn"
                  >
                    {project.name === "Zinho"
                      ? "Baixar Zinho"
                      : "Acessar projeto"}
                    <span>{project.name === "Zinho" ? "↓" : "→"}</span>
                  </a>
                ) : (
                  <button
                    className="project-button disabled-btn"
                    type="button"
                    disabled
                  >
                    Em breve <span>⏳</span>
                  </button>
                )}

                {project.caseStudy && (
                  <Link
                    to={project.caseStudy}
                    className="project-button secondary-btn"
                  >
                    Estudo de caso <span>↗</span>
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
