import "./Academia.css";

const plans = [
  {
    name: "START",
    price: "89",
    description: "Para começar sua evolução.",
    features: ["Acesso à musculação", "Área de cardio", "Avaliação inicial", "Aulas de dança"],
    featured: false,
  },
  {
    name: "PRO",
    price: "129",
    description: "Mais estrutura para sua performance.",
    features: ["Acesso completo", "Treino personalizado", "Funcional e cardio", "Dança e natação", "Avaliação mensal"],
    featured: true,
  },
  {
    name: "ELITE",
    price: "189",
    description: "Experiência completa de alta performance.",
    features: ["Acesso 24 horas", "Personal trainer", "Todas as modalidades", "Natação e lutas", "Avaliação mensal", "Área recovery"],
    featured: false,
  },
];

const disciplines = [
  {
    number: "01",
    name: "MUSCULAÇÃO",
    description: "Equipamentos de alta performance e uma estrutura pensada para evolução constante.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "02",
    name: "FUNCIONAL",
    description: "Movimento, potência e resistência para transformar sua capacidade física.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "03",
    name: "CARDIO",
    description: "Tecnologia e intensidade para aumentar seu condicionamento e sua resistência.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "04",
    name: "DANÇA",
    description: "Aulas dinâmicas para movimentar o corpo, melhorar a coordenação e se divertir treinando.",
    image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "05",
    name: "NATAÇÃO",
    description: "Treinos na água para desenvolver resistência, mobilidade e condicionamento completo.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "06",
    name: "LUTAS",
    description: "Boxe, defesa pessoal e modalidades de combate para força, técnica e disciplina.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "07",
    name: "YOGA",
    description: "Respiração, flexibilidade e consciência corporal para equilibrar performance e recuperação.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "08",
    name: "SPINNING",
    description: "Aulas de ciclismo indoor com ritmo intenso para elevar sua resistência cardiovascular.",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=90",
  },
];

const benefits = [
  ["24/7", "Acesso à academia"],
  ["2.500+", "Alunos ativos"],
  ["15+", "Profissionais"],
  ["8", "Modalidades"],
];

function Academia() {
  return (
    <div className="nexus-page">
      <header className="nexus-navbar">
        <a href="/academia" className="nexus-logo">
          <span>N</span>
          NEXUS<span className="logo-accent">/</span>FITNESS
        </a>

        <nav>
          <a href="#estrutura">Estrutura</a>
          <a href="#treinos">Treinos</a>
          <a href="#planos">Planos</a>
          <a href="#performance">Performance</a>
        </nav>

        <a href="#planos" className="nexus-nav-button">
          MATRICULE-SE
        </a>
      </header>

      <main>
        <section className="nexus-hero">
          <div className="hero-grid"></div>
          <div className="hero-glow"></div>

          <div className="hero-content">
            <div className="hero-kicker">
              <span></span>
              FITNESS / PERFORMANCE / EVOLUTION
            </div>

            <h1>
              <span>ULTRAPASSE</span>
              <strong>SEUS</strong>
              <em>LIMITES.</em>
            </h1>

            <p>
              Uma nova geração de academia para quem não aceita ficar no mesmo
              lugar. Tecnologia, estrutura e treinamento em um único ambiente.
            </p>

            <div className="hero-actions">
              <a href="#planos" className="nexus-primary">
                COMEÇAR AGORA <span>↗</span>
              </a>
              <a href="#estrutura" className="nexus-secondary">
                CONHECER A NEXUS
              </a>
            </div>

            <div className="hero-scroll">
              <span>SCROLL</span>
              <i></i>
            </div>
          </div>

          <div className="hero-athlete">
            <div className="athlete-image">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1500&q=90"
                alt="Atleta treinando"
              />
            </div>

            <div className="hero-tech-card">
              <span>PERFORMANCE INDEX</span>
              <strong>98.7</strong>
              <small>+18.4% THIS MONTH</small>
              <div className="mini-chart">
                <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
              </div>
            </div>

            <div className="hero-coordinate">GO / 16°40'10"S 49°15'20"W</div>
          </div>
        </section>

        <section className="nexus-stats" id="estrutura">
          {benefits.map(([value, label]) => (
            <div className="nexus-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="nexus-intro">
          <div className="section-index">01 / THE NEXUS</div>
          <div>
            <span className="nexus-label">NÃO É APENAS UMA ACADEMIA</span>
            <h2>
              <span>Seu treino.</span>
              <br />
              Sua evolução.
            </h2>
          </div>
          <p>
            Na Nexus, cada detalhe foi criado para aumentar sua performance.
            Ambientes imersivos, equipamentos modernos e profissionais que
            entendem que cada corpo possui um objetivo diferente.
          </p>
        </section>

        <section className="training-section" id="treinos">
          <div className="section-heading-dark">
            <div>
              <span className="nexus-label">08 MODALIDADES / UMA ESTRUTURA</span>
              <h2>Treine do seu jeito.</h2>
            </div>
            <span className="heading-number">02 / 03</span>
          </div>

          <div className="discipline-grid">
            {disciplines.map((discipline) => (
              <article className="discipline-card" key={discipline.number}>
                <img src={discipline.image} alt={discipline.name} />
                <div className="discipline-overlay"></div>
                <div className="discipline-number">{discipline.number}</div>
                <div className="discipline-content">
                  <h3>{discipline.name}</h3>
                  <p>{discipline.description}</p>
                  <a href="#planos">EXPLORAR ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="performance-section" id="performance">
          <div className="performance-image">
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=90"
              alt="Treino de alta performance"
            />
            <div className="performance-tag">HIGH PERFORMANCE</div>
          </div>

          <div className="performance-content">
            <span className="nexus-label">03 / PERFORMANCE LAB</span>
            <h2>
              <em>Dados.</em>
              <br />
              Disciplina.
              <br />
              Resultado.
            </h2>

            <p>
              Acompanhe sua evolução e transforme seus objetivos em métricas.
              Treine com estratégia e entenda cada etapa da sua jornada.
            </p>

            <div className="performance-list">
              <div>
                <strong>01</strong>
                <span>Avaliação física</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Planejamento de treino</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Acompanhamento de evolução</span>
              </div>
            </div>

            <a href="#planos" className="nexus-primary">
              COMEÇAR MINHA EVOLUÇÃO <span>↗</span>
            </a>
          </div>
        </section>

        <section className="plans-section" id="planos">
          <div className="plans-heading">
            <span className="nexus-label">ESCOLHA SEU ACESSO</span>
            <h2>SEU PRÓXIMO NÍVEL<br /><em>COMEÇA AQUI.</em></h2>
            <p>Planos pensados para diferentes objetivos e rotinas.</p>
          </div>

          <div className="plans-grid">
            {plans.map((plan) => (
              <article
                className={`plan-card ${plan.featured ? "plan-featured" : ""}`}
                key={plan.name}
              >
                {plan.featured && <span className="plan-badge">MAIS ESCOLHIDO</span>}

                <div className="plan-top">
                  <span>PLANO</span>
                  <strong>{plan.name}</strong>
                </div>

                <p>{plan.description}</p>

                <div className="plan-price">
                  <small>R$</small>
                  <strong>{plan.price}</strong>
                  <span>/mês</span>
                </div>

                <div className="plan-line"></div>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span>+</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#contato" className="plan-button">
                  ESCOLHER PLANO ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="quote-section">
          <span className="quote-symbol">"</span>
          <blockquote>
            A diferença entre onde você está e onde quer chegar começa
            <em> pelo próximo treino.</em>
          </blockquote>
          <span className="quote-line">NEXUS FITNESS / EST. 2026</span>
        </section>

        <section className="nexus-cta" id="contato">
          <div>
            <span className="nexus-label">READY?</span>
            <h2>
              ENTRE PARA A
              <br />
              <em>NEXUS.</em>
            </h2>
            <p>
              Seu corpo pode mais. Seu próximo nível começa com uma decisão.
            </p>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="nexus-primary">
              FALAR COM A NEXUS <span>↗</span>
            </a>
          </div>

          <div className="cta-grid">
            <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
            <strong>24/7</strong>
          </div>
        </section>
      </main>

      <footer className="nexus-footer">
        <div className="footer-main">
          <a href="/academia" className="nexus-logo">
            <span>N</span>
            NEXUS<span className="logo-accent">/</span>FITNESS
          </a>

          <div>
            <small>ENDEREÇO</small>
            <p>Goiânia · Goiás</p>
          </div>

          <div>
            <small>ATENDIMENTO</small>
            <p>24 horas · 7 dias</p>
          </div>

          <div>
            <small>CONTATO</small>
            <p>(62) 0000-0000</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Nexus Fitness</span>
          <span>Projeto desenvolvido pela FlowUx</span>
        </div>
      </footer>
    </div>
  );
}

export default Academia;
