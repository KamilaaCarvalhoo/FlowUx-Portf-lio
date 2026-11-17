
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
// HERO
// ======================================================

function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <span className="hero-tag">
          ✦ DESIGN • TECNOLOGIA • EXPERIÊNCIA
        </span>

        <h1>
          Transformando{" "}
          <span>ideias</span>{" "}
          em experiências{" "}
          <span>digitais.</span>
        </h1>

        <p>
          Sou desenvolvedora e designer digital especializada na criação
          de produtos modernos, interfaces intuitivas e soluções completas
          para a web e mobile.
        </p>

        <div className="hero-buttons">
          <a href="#projetos" className="primary-button">
            Ver projetos
          </a>

          <a href="#contato" className="secondary-button">
            Fale comigo
          </a>
        </div>
      </div>

      <div className="hero-profile">
        <div className="hero-glow"></div>

        <div className="hero-photo">
          <img
            src="/Perfil.jpeg"
            alt="Foto de perfil de Kamila Carvalho"
          />
        </div>
      </div>
    </section>
  );
}

// ======================================================
// SOBRE MIM
// ======================================================

function AboutSection() {
  return (
    <section className="about" id="sobre">
      <div className="about-container">
        <div className="about-content">
          <span className="about-tag">
            ✦ SOBRE MIM
          </span>

          <h2>
            Criando experiências digitais que conectam
            <span> criatividade e tecnologia.</span>
          </h2>

          <p>
            Desenvolvo aplicativos, jogos, websites e sistemas,
            unindo código limpo, design refinado e excelente
            experiência do usuário para transformar conceitos em realidade.
          </p>

          <p>
            Do planejamento à entrega final, meu foco é construir
            soluções digitais marcantes, funcionais e preparadas para o mercado.
          </p>
        </div>

        <div className="about-highlights">
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

// ======================================================
// SERVIÇOS
// ======================================================

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

// ======================================================
// CONTATO
// ======================================================

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

          {/* E-MAIL */}
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

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/kamila-carvalho-a735b0316/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-icon">in</div>

            <div>
              <strong>LinkedIn</strong>
              <span>Conecte-se comigo</span>
            </div>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/kamila_carvalhho/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-icon">📸</div>

            <div>
              <strong>Instagram</strong>
              <span>@kamila_carvalhho</span>
            </div>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/5562995348643"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <div className="contact-icon">💬</div>

            <div>
              <strong>WhatsApp</strong>
              <span>(62) 99534-8643</span>
            </div>
          </a>

        </div>

        <div className="contact-buttons">
          <a
            href="https://wa.me/5562995348643"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Falar pelo WhatsApp →
          </a>

          <a
            href="https://github.com/KamilaaCarvalhoo"
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

// ======================================================
// PÁGINA PRINCIPAL
// ======================================================

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
