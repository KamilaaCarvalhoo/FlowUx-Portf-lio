
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
  ];

  return (
    <section className="projects-section" id="projetos">
      <div className="section-title">
        <span>✦ PROJETOS</span>

        <h2>
          Ideias que
          <strong> se tornaram realidade.</strong>
        </h2>

        <p>
          Conheça alguns dos produtos digitais desenvolvidos
          pela FlowUx.
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
            {/* IMAGEM DO PROJETO */}
            <div className="project-image">
              <img
                src={project.image}
                alt={`Projeto ${project.name}`}
                loading="lazy"
              />

              {project.name === "TERVALYA CRM" && (
                <span className="project-featured-label">
                  FULL STACK
                </span>
              )}

              {project.name === "Kiva Drive" && (
                <span className="project-featured-label">
                  FULL STACK MOBILE
                </span>
              )}

              {project.name === "Ryllo" && (
                <span className="project-featured-label">
                  GAME DEVELOPMENT
                </span>
              )}
            </div>

            {/* CONTEÚDO */}
            <div className="project-content">
              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              {/* INFORMAÇÕES */}
              <div className="project-info">
                <div className="project-info-item">
                  <strong>Plataforma</strong>
                  <span>{project.platform}</span>
                </div>

                <div className="project-info-item">
                  <strong>Status</strong>
                  <span>{project.status}</span>
                </div>

                <div className="project-info-item">
                  <strong>Público</strong>
                  <span>{project.audience}</span>
                </div>
              </div>

              {/* FUNCIONALIDADES */}
              <div className="project-features">
                <strong>Funcionalidades</strong>

                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <span>✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* TECNOLOGIAS */}
              <div className="project-technologies">
                <strong>Tecnologias e ferramentas</strong>

                <div className="technology-tags">
                  {project.technology.split(" • ").map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* BOTÕES */}
              <div className="project-buttons">
                {project.link !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                  >
                    Conhecer projeto →
                  </a>
                ) : (
                  <button
                    className="project-button"
                    type="button"
                    disabled
                  >
                    Em breve →
                  </button>
                )}

                {project.caseStudy && (
                  <Link
                    to={project.caseStudy}
                    className="project-button project-button-secondary"
                  >
                    Ver estudo de caso →
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
