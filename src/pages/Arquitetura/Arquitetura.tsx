import "./Arquitetura.css";

const projects = [
  {
    title: "Casa Aurora",
    category: "Residencial",
    location: "Goiânia, GO",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90",
    className: "project-large",
  },
  {
    title: "Casa Horizonte",
    category: "Arquitetura Residencial",
    location: "São Paulo, SP",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=90",
    className: "",
  },
  {
    title: "Casa Jardim",
    category: "Arquitetura + Interiores",
    location: "Brasília, DF",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=90",
    className: "",
  },
  {
    title: "Loft Urbano",
    category: "Interiores",
    location: "São Paulo, SP",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=90",
    className: "",
  },
];

const services = [
  {
    number: "01",
    title: "Arquitetura Residencial",
    text: "Projetamos casas que unem personalidade, funcionalidade e uma relação equilibrada com o entorno.",
  },
  {
    number: "02",
    title: "Arquitetura Comercial",
    text: "Espaços comerciais pensados para representar marcas, receber pessoas e gerar experiências.",
  },
  {
    number: "03",
    title: "Interiores",
    text: "Ambientes planejados nos mínimos detalhes, com materiais, iluminação e mobiliário em harmonia.",
  },
  {
    number: "04",
    title: "Reformas",
    text: "Transformamos espaços existentes em ambientes contemporâneos, funcionais e conectados às necessidades.",
  },
];

const process = [
  {
    number: "01",
    title: "Conceito",
    text: "Entendemos sua rotina, necessidades, referências e o potencial do espaço.",
  },
  {
    number: "02",
    title: "Desenvolvimento",
    text: "Transformamos ideias em plantas, volumes, materiais e soluções arquitetônicas.",
  },
  {
    number: "03",
    title: "Detalhamento",
    text: "Definimos os detalhes necessários para que o projeto possa sair do papel.",
  },
  {
    number: "04",
    title: "Execução",
    text: "Acompanhamos o processo para que a proposta arquitetônica seja preservada.",
  },
];

function Arquitetura() {
  return (
    <div className="architecture-page">
      {/* NAVBAR */}
      <header className="architecture-navbar">
        <a href="/arquitetura" className="architecture-logo">
          <span className="logo-symbol">N</span>
          <span>NOVA</span>
          <small>ARQUITETURA</small>
        </a>

        <nav>
          <a href="#projetos">Projetos</a>
          <a href="#escritorio">Escritório</a>
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#contato" className="architecture-nav-button">
          Iniciar projeto
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="architecture-hero">
          <div className="architecture-hero-image">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=90"
              alt="Projeto arquitetônico contemporâneo"
            />

            <div className="hero-image-overlay"></div>

            <div className="hero-project-label">
              <span>PROJETO 01</span>
              <strong>Casa Aurora</strong>
              <small>Goiânia · Goiás</small>
            </div>
          </div>

          <div className="architecture-hero-content">
            <span className="architecture-eyebrow">
              ARQUITETURA CONTEMPORÂNEA
            </span>

            <h1>
              Arquitetura que
              <em> transforma </em>
              espaços.
            </h1>

            <p>
              Criamos projetos que equilibram estética, funcionalidade e
              personalidade para transformar espaços em experiências.
            </p>

            <div className="architecture-hero-actions">
              <a href="#projetos" className="architecture-dark-button">
                Explorar projetos
              </a>

              <a href="#escritorio" className="architecture-text-button">
                Conheça o escritório
                <span>↗</span>
              </a>
            </div>

            <div className="hero-info">
              <div>
                <strong>12+</strong>
                <span>anos de experiência</span>
              </div>

              <div>
                <strong>85</strong>
                <span>projetos realizados</span>
              </div>

              <div>
                <strong>32</strong>
                <span>cidades atendidas</span>
              </div>
            </div>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="architecture-manifesto" id="escritorio">
          <div className="manifesto-number">01</div>

          <div className="manifesto-content">
            <span className="architecture-eyebrow">NOSSO OLHAR</span>

            <h2>
              Projetar é entender
              <br />
              como as pessoas
              <br />
              <em>vivem.</em>
            </h2>
          </div>

          <div className="manifesto-text">
            <p>
              Na NOVA, acreditamos que uma boa arquitetura não é apenas sobre
              criar espaços visualmente marcantes.
            </p>

            <p>
              É sobre compreender as pessoas, suas rotinas, desejos e a maneira
              como elas querem viver.
            </p>

            <p>
              Por isso, cada projeto começa com uma conversa e termina em um
              espaço que possui identidade própria.
            </p>
          </div>
        </section>

        {/* PROJETOS */}
        <section className="architecture-projects" id="projetos">
          <div className="architecture-section-header">
            <div>
              <span className="architecture-eyebrow">PORTFÓLIO</span>
              <h2>Projetos em destaque</h2>
            </div>

            <p>
              Uma seleção de projetos desenvolvidos para diferentes formas de
              viver, trabalhar e ocupar espaços.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`architecture-project-card ${project.className}`}
                key={project.title}
              >
                <div className="architecture-project-image">
                  <img src={project.image} alt={project.title} />

                  <div className="project-hover">
                    <span>VER PROJETO</span>
                    <strong>↗</strong>
                  </div>
                </div>

                <div className="architecture-project-info">
                  <div>
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>

                  <small>{project.location}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="architecture-services" id="servicos">
          <div className="services-intro">
            <span className="architecture-eyebrow">O QUE FAZEMOS</span>

            <h2>
              Do primeiro
              <br />
              traço ao
              <br />
              <em>último detalhe.</em>
            </h2>

            <p>
              Cada projeto recebe uma abordagem personalizada para que
              arquitetura e necessidade caminhem juntas.
            </p>
          </div>

          <div className="services-list">
            {services.map((service) => (
              <article className="architecture-service" key={service.number}>
                <span className="service-number">{service.number}</span>

                <div className="service-main">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>

                <span className="service-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        {/* LARGE IMAGE */}
        <section className="architecture-full-image">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90"
            alt="Interior contemporâneo"
          />

          <div className="full-image-caption">
            <span>CASA JARDIM</span>
            <strong>Integração entre arquitetura, natureza e luz.</strong>
          </div>
        </section>

        {/* PROCESS */}
        <section className="architecture-process" id="processo">
          <div className="architecture-section-header">
            <div>
              <span className="architecture-eyebrow">COMO TRABALHAMOS</span>
              <h2>Um processo claro.</h2>
            </div>

            <p>
              Cada etapa é construída em conjunto para que as decisões sejam
              compreendidas e o resultado final faça sentido.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item) => (
              <article className="process-card" key={item.number}>
                <span>{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* QUOTE */}
        <section className="architecture-quote">
          <span className="quote-symbol">“</span>

          <blockquote>
            A arquitetura começa muito antes do primeiro desenho.
            <em> Começa na maneira como queremos viver.</em>
          </blockquote>

          <span className="quote-line"></span>
        </section>

        {/* TESTIMONIAL */}
        <section className="architecture-testimonial">
          <div className="testimonial-image">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=90"
              alt="Interior de residência"
            />
          </div>

          <div className="testimonial-content">
            <span className="architecture-eyebrow">CLIENTES</span>

            <div className="testimonial-stars">★★★★★</div>

            <blockquote>
              “A equipe conseguiu entender exatamente o que imaginávamos e
              transformar nossas ideias em um projeto que superou nossas
              expectativas.”
            </blockquote>

            <div className="testimonial-author">
              <strong>Mariana e Rafael</strong>
              <span>Casa Aurora · Goiânia, GO</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="architecture-cta" id="contato">
          <div className="cta-background">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90"
              alt="Arquitetura contemporânea"
            />
          </div>

          <div className="cta-overlay"></div>

          <div className="architecture-cta-content">
            <span className="architecture-eyebrow">
              VAMOS CONVERSAR
            </span>

            <h2>
              Seu espaço
              <br />
              começa com
              <br />
              <em>uma ideia.</em>
            </h2>

            <p>
              Conte-nos sobre o seu projeto e vamos descobrir juntos como
              transformar essa ideia em arquitetura.
            </p>

            <a href="mailto:flowux.design@outlook.com" className="cta-button">
              Iniciar conversa
              <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="architecture-footer">
        <div className="footer-main">
          <div className="architecture-footer-brand">
            <a href="/arquitetura" className="architecture-logo">
              <span className="logo-symbol">N</span>
              <span>NOVA</span>
              <small>ARQUITETURA</small>
            </a>

            <p>
              Arquitetura contemporânea
              <br />
              pensada para pessoas.
            </p>
          </div>

          <div className="architecture-footer-column">
            <span>MENU</span>

            <a href="#projetos">Projetos</a>
            <a href="#escritorio">Escritório</a>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Processo</a>
          </div>

          <div className="architecture-footer-column">
            <span>CONTATO</span>

            <a href="mailto:flowux.design@outlook.com">
              flowux.design@outlook.com
            </a>

            <a href="#contato">Solicitar orçamento</a>
          </div>

          <div className="architecture-footer-column">
            <span>REDES</span>

            <a
              href="https://www.instagram.com/flowux.desing"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="architecture-footer-bottom">
          <span>© 2026 NOVA Arquitetura</span>
          <span>Projeto desenvolvido pela FlowUx</span>
        </div>
      </footer>
    </div>
  );
}

export default Arquitetura;