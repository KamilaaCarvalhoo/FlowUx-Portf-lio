function Sites() {
  const sites = [
    
{
  name: "Belle Sucrée",
  category: "E-commerce • Confeitaria",
  description:
    "E-commerce de confeitaria com identidade visual sofisticada, catálogo de doces e uma experiência digital envolvente.",
  technology: "React • JavaScript • CSS • Vite",
  image: "/logo.png",
  link: "https://belle-sucree-five.vercel.app",
},


    {
      name: "AuroraGlasses",
      category: "Website",
      description:
        "Experiência digital desenvolvida para apresentar a marca, seus produtos e sua identidade visual.",
      technology: "HTML • CSS • JavaScript",
      image: "/auroraglasses.png",
      link: "https://www.auroraglasses.com.br",
    },

    {
      name: "Florêa",
      category: "Landing Page • Floricultura",
      description:
        "Landing page moderna desenvolvida para uma floricultura, com foco em apresentação de produtos, ocasiões especiais e experiência visual.",
      technology: "React • TypeScript • CSS",
      image: "/florea.png",
      link: "/floricultura",
    },

    {
      name: "NOVA Arquitetura",
      category: "Landing Page • Arquitetura",
      description:
        "Landing page contemporânea para escritório de arquitetura, com portfólio, serviços, processo e apresentação do escritório.",
      technology: "React • TypeScript • CSS",
      image: "/arquitetura.png",
      link: "/arquitetura",
    },

{
  name: "Pizzaria",
  category: "Landing Page • Gastronomia",
  description:
    "Landing page moderna para pizzaria artesanal, com cardápio, sabores, processo de produção, avaliações e chamada para pedidos.",
  technology: "React • TypeScript • CSS",
  image: "/forno27.png",
  link: "/pizzaria",
},

  {
  name: "Petshop",
  category: "Landing Page • Petshop",
  description:
    "Página desenvolvida para apresentar serviços, produtos e informações de um petshop de forma moderna e amigável.",
  technology: "React • TypeScript • CSS",
  image: "/petz.png",
  link: "/petshop",
},

    {
  name: "Nexus Fitness",
  category: "Landing Page • Academia",
  description:
    "Landing page futurista desenvolvida para academia, com foco em performance, planos, estrutura e experiência digital.",
  technology: "React • TypeScript • CSS",
  image: "/nexus.png",
  link: "/academia",
},

    {
  name: "Aurora 925",
  category: "E-commerce • Pratas 925",
  description:
    "Loja virtual sofisticada para joias em prata 925, com catálogo de produtos, categorias, cuidados e experiência de compra.",
  technology: "React • TypeScript • CSS",
  image: "/aurora925.png",
  link: "/pratas",
},
  ];

  return (
    <section
      className="sites-section"
      id="sites"
    >



      <div className="section-title">

        <span>
          ✦ SITES DESENVOLVIDOS
        </span>

        <h2>
          Experiências digitais
          <strong> para a Web.</strong>
        </h2>

        <p>
          Conheça alguns dos sites e landing pages
          desenvolvidos pela FlowUx.
        </p>

      </div>


  

      <div className="sites-grid">

        {sites.map((site) => (

          <article
            className="site-card"
            key={site.name}
          >


            <div className="site-image">

              <img
                src={site.image}
                alt={`Preview do site ${site.name}`}
              />

            </div>


      

            <div className="site-content">

              <span className="site-category">
                {site.category}
              </span>

              <h3>
                {site.name}
              </h3>

              <p>
                {site.description}
              </p>


           

              <div className="site-tech">

                {site.technology
                  .split(" • ")
                  .map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

              </div>



              {site.link !== "#" ? (

                <a
                  href={site.link}
                  target={
                    site.link.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    site.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="site-button"
                >

                  {site.link.startsWith("http")
                    ? "Visitar site →"
                    : "Conhecer projeto →"}

                </a>

              ) : (

                <button
                  className="site-button"
                  type="button"
                  disabled
                >
                  Projeto em desenvolvimento
                </button>

              )}

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Sites;