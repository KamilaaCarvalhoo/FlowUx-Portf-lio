function Projects() {
  const projects = [
    {
      name: "Kiva Drive",
      category: "Aplicativo de Mobilidade",

      description:
        "Plataforma de mobilidade desenvolvida para conectar mulheres passageiras e motoristas, proporcionando uma experiência digital voltada para mobilidade feminina.",

      technology:
        "React Native • Expo • Supabase • ANDROID/IOS • Meta Events Manager",

      image: "/kiva-drive.png",

      link: "https://kivadriveoficial.com.br",

      platform: "ANDROID/IOS",

      status: "Publicado e funcionando",

      audience: "Passageiras e motoristas mulheres",

      features: [
        "Cadastro de passageiras",
        "Cadastro de motoristas",
        "Solicitação de viagens",
        "Experiência de mobilidade feminina",
        "Sistema conectado a banco de dados",
      ],
    },

    {
      name: "Ryllo",
      category: "Game Mobile",

      description:
        "Jogo mobile desenvolvido com personagens, mapas, inimigos, missões e diferentes mundos para explorar.",

      technology:
        "Unity • C# • Blender • Mixamo",

      image: "/ryllo.png",

      link: "https://play.google.com/store/apps/details?id=com.flowux.ryllo&hl=pt_BR",

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

      technology:
        "React • TypeScript",

      image: "/pandily.png",

      link: "#",

      platform: "Aplicativo",

      status: "Em desenvolvimento",

      audience: "Pessoas aprendendo inglês",

      features: [
        "Aprendizado interativo",
        "Conteúdo de inglês",
        "Interface visual",
        "Experiência gamificada",
      ],
    },
  ]

  return (
    <section
      className="projects-section"
      id="projetos"
    >

   

      <div className="section-title">

        <span>
          ✦ PROJETOS
        </span>

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
            className="project-card"
            key={project.name}
          >


            <div className="project-image">

              <img
                src={project.image}
                alt={`Projeto ${project.name}`}
              />

            </div>


      

            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>


              <h3>
                {project.name}
              </h3>


              <p>
                {project.description}
              </p>


         

              <div className="project-info">

                <div className="project-info-item">

                  <strong>
                    Plataforma
                  </strong>

                  <span>
                    {project.platform}
                  </span>

                </div>


                <div className="project-info-item">

                  <strong>
                    Status
                  </strong>

                  <span>
                    {project.status}
                  </span>

                </div>


                <div className="project-info-item">

                  <strong>
                    Público
                  </strong>

                  <span>
                    {project.audience}
                  </span>

                </div>

              </div>




              <div className="project-features">

                <strong>
                  Funcionalidades
                </strong>

                <ul>

                  {project.features.map(
                    (feature) => (
                      <li key={feature}>
                        <span>✦</span>
                        {feature}
                      </li>
                    )
                  )}

                </ul>

              </div>




              <div className="project-technologies">

                <strong>
                  Tecnologias e ferramentas
                </strong>

                <div className="technology-tags">

                  {project.technology
                    .split(" • ")
                    .map((tech) => (

                      <span key={tech}>
                        {tech}
                      </span>

                    ))}

                </div>

              </div>



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

            </div>

          </article>

        ))}

      </div>

    </section>
  )
}

export default Projects