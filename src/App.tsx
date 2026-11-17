
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Sites from "./components/Sites/Sites";

// Páginas de Sites
import Arquitetura from "./pages/Arquitetura/Arquitetura";
import Floricultura from "./pages/Floricultura/Floricultura";
import Pizzaria from "./pages/Pizzaria/Pizzaria";
import Petshop from "./pages/PetShop/Petshop";
import Academia from "./pages/Academia/Academia";
import Pratas from "./pages/Pratas/pratas";
import PixelNews from "./pages/PixelNews/PixelNews";

// Estudos de Caso
import KivaDriveCaseStudy from "./pages/KivaDriveCaseStudy";
import RylloCaseStudy from "./pages/RylloCaseStudy";
import TervalyaCRMCaseStudy from "./pages/TervalyaCRMCaseStudy";
import ZinhoCaseStudy from "./pages/ZinhoCaseStudy";

// ======================================================
// SEÇÕES DA PÁGINA PRINCIPAL
// ======================================================

function HeroSection() {
  return (
    <section
      className="hero"
      id="inicio"
      style={{
        minHeight: "90vh",
        padding: "160px 8% 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "60px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        className="hero-content"
        style={{
          maxWidth: "620px",
          position: "relative",
          zIndex: 2
        }}
      >
        <span
          className="hero-tag"
          style={{
            display: "inline-block",
            marginBottom: "20px",
            color: "#22D3EE",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "2px"
          }}
        >
          ✦ DESIGN • TECNOLOGIA • EXPERIÊNCIA
        </span>

        <h1
          style={{
            fontSize: "clamp(38px, 4.5vw, 58px)",
            lineHeight: "1.2",
            fontWeight: 800,
            color: "#E2E8F0",
            margin: "0 0 24px 0"
          }}
        >
          Transformando{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #22D3EE, #A855F7, #E83ECA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontStyle: "normal"
            }}
          >
            ideias
          </span>{" "}
          em experiências{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #A855F7, #E83ECA, #22D3EE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            digitais.
          </span>
        </h1>

        <p
          style={{
            fontSize: "19px",
            color: "#94A3B8",
            lineHeight: "1.75",
            maxWidth: "580px",
            margin: "0 0 35px 0",
            fontWeight: 400
          }}
        >
          Sou desenvolvedora e designer digital especializada na criação de produtos modernos, interfaces intuitivas e soluções completas para a web e mobile.
        </p>

        <div
          className="hero-buttons"
          style={{
            display: "flex",
            gap: "15px"
          }}
        >
          <a href="#projetos" className="primary-button">
            Ver projetos
          </a>

          <a href="#contato" className="secondary-button">
            Fale comigo
          </a>
        </div>
      </div>

      {/* FOTO DE PERFIL COM EFEITO 3D E NEON */}
      <div
        style={{
          width: "430px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2
        }}
      >
        {/* Glow de fundo */}
        <div
          style={{
            position: "absolute",
            width: "320px",
            height: "380px",
            borderRadius: "30px",
            background: "linear-gradient(135deg, #7C3AED, #22D3EE)",
            filter: "blur(50px)",
            opacity: 0.4,
            zIndex: 1
          }}
        />

        {/* Moldura e foto */}
        <div
          style={{
            width: "100%",
            maxWidth: "320px",
            height: "400px",
            borderRadius: "28px",
            overflow: "hidden",
            border: "2px solid rgba(34, 211, 238, 0.5)",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(124, 58, 237, 0.4)",
            background: "linear-gradient(135deg, #111633, #211033)",
            position: "relative",
            zIndex: 2,
            transform: "perspective(1000px) rotateY(-4deg) rotateX(2deg)"
          }}
        >
          <img
            src="/Perfil.jpeg"
            alt="Kamila Carvalho"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block"
            }}
          />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      className="about"
      id="sobre"
      style={{ padding: "100px 8%" }}
    >
      <div
        className="about-container"
        style={{
          gridTemplateColumns: "1fr",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <div
          className="about-content"
          style={{ margin: "0 auto" }}
        >
          <span className="about-tag">
            ✦ SOBRE MIM
          </span>

          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              marginBottom: "24px"
            }}
          >
            Criando experiências digitais que conectam
            <span> criatividade e tecnologia.</span>
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#aeb2c7",
              marginBottom: "16px"
            }}
          >
            Desenvolvo aplicativos, jogos, websites e sistemas, unindo código limpo,
            design refinado e excelente experiência do usuário para transformar conceitos em realidade.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#aeb2c7"
            }}
          >
            Do planejamento à entrega final, meu foco é construir
            soluções digitais marcantes, funcionais e preparadas para o mercado.
          </p>
        </div>

        <div
          className="about-highlights"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            marginTop: "40px"
          }}
        >
          <div className="about-card">
            <strong>03</strong>
            <span>Produtos em destaque</span>
          </div>

          <div className="about-card">
            <strong>APP</strong>
            <span>Desenvolvimento mobile</span>
          </div>

          <div className="about-card">
            <strong>GAME</strong>
            <span>Desenvolvimento de jogos</span>
          </div>

          <div className="about-card">
            <strong>WEB</strong>
            <span>Sites e experiências digitais</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const servicesList = [
    {
      icon: "🌐",
      title: "Desenvolvimento Web",
      desc: "Sites, landing pages e aplicações web modernas, responsivas e focadas na conversão.",
      tech: "HTML • CSS • JavaScript • React • Vite"
    },
    {
      icon: "📱",
      title: "Aplicativos",
      desc: "Desenvolvimento de aplicativos mobile para Android e iOS, entregando produtos funcionais e de alta performance.",
      tech: "React Native • Expo • TypeScript"
    },
    {
      icon: "🎮",
      title: "Desenvolvimento de Games",
      desc: "Criação de jogos, personagens, mapas, sistemas de gameplay e experiências interativas para plataformas móveis.",
      tech: "Unity • C# • Blender • Mixamo"
    },
    {
      icon: "🗄️",
      title: "Backend & Banco de Dados",
      desc: "Estruturação de servidores, persistência de dados, APIs robustas e integração segura entre sistemas.",
      tech: "Supabase • SQL • Node.js • REST API"
    },
    {
      icon: "🎨",
      title: "UX/UI Design",
      desc: "Interfaces limpas e experiências centradas no usuário, tornando os produtos digitais intuitivos e visualmente atraentes.",
      tech: "Figma • Photoshop • Canva"
    }
  ];

  return (
    <section className="services" id="servicos">
      <div className="section-title">
        <span>✦ O QUE FAÇO</span>
        <h2>
          Meus<strong> serviços.</strong>
        </h2>
        <p>
          Soluções digitais completas unindo design, tecnologia de ponta e criatividade.
        </p>
      </div>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <span>{service.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact" id="contato">
      <div className="contact-content">
        <span className="contact-tag">
          ✦ VAMOS CRIAR JUNTOS?
        </span>

        <h2>
          Sua ideia pode ser
          <span> o próximo grande projeto.</span>
        </h2>

        <p>
          Entre em contato para conversarmos sobre a sua ideia
          e transformá-la em uma experiência digital inesquecível.
        </p>

        <div className="contact-links">
          <a
            href="mailto:kamila.carvalho@email.com"
            className="contact-link"
          >
            <div className="contact-icon">✉</div>

            <div>
              <strong>E-mail</strong>
              <span>kamila.carvalho@email.com</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-icon instagram-icon">
              in
            </div>

            <div>
              <strong>LinkedIn</strong>
              <span>Conecte-se comigo</span>
            </div>
          </a>
        </div>

        <div className="contact-buttons">
          <a
            href="mailto:kamila.carvalho@email.com"
            className="primary-button"
          >
            Entrar em contato →
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            Ver GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <Projects />
        <Sites />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}

// ======================================================
// ROTAS DA APLICAÇÃO
// ======================================================

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/inicio" element={<Portfolio />} />

      {/* SITES E PROJETOS */}
      <Route path="/floricultura" element={<Floricultura />} />
      <Route path="/arquitetura" element={<Arquitetura />} />
      <Route path="/pizzaria" element={<Pizzaria />} />
      <Route path="/petshop" element={<Petshop />} />
      <Route path="/academia" element={<Academia />} />
      <Route path="/pratas" element={<Pratas />} />
      <Route path="/pixel-news" element={<PixelNews />} />

      {/* ESTUDOS DE CASO */}
      <Route
        path="/projetos/kiva-drive"
        element={<KivaDriveCaseStudy />}
      />

      <Route
        path="/projetos/ryllo"
        element={<RylloCaseStudy />}
      />

      <Route
        path="/projetos/tervalya-crm"
        element={<TervalyaCRMCaseStudy />}
      />

      <Route
        path="/projetos/zinho"
        element={<ZinhoCaseStudy />}
      />
    </Routes>
  );
}

export default App;
