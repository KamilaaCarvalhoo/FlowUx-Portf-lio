import "./App.css"

import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Sites from "./components/Sites/Sites"

import Arquitetura from "./pages/Arquitetura/Arquitetura"
import Floricultura from "./pages/Floricultura/Floricultura"
import Pizzaria from "./pages/Pizzaria/Pizzaria"
import Petshop from "./pages/PetShop/Petshop";
import Academia from "./pages/Academia/Academia"
import Pratas from "./pages/Pratas/pratas";



function Portfolio() {
  return (
    <>
      <Navbar />

      <main>

    

        <section
          className="hero"
          id="inicio"
        >

          <div className="hero-content">

            <span className="hero-tag">
              ✦ DESIGN • TECNOLOGIA • EXPERIÊNCIA
            </span>

            <h1>
              Transformamos
              <span> ideias </span>
              em experiências digitais.
            </h1>

            <p>
              Criamos sites, aplicativos, jogos e experiências
              digitais que transformam ideias em produtos reais.
            </p>

            <div className="hero-buttons">

              <a
                href="#projetos"
                className="primary-button"
              >
                Ver projetos
              </a>

              <a
                href="#contato"
                className="secondary-button"
              >
                Fale conosco
              </a>

            </div>

          </div>



          <div className="hero-logo">

            <div className="logo-glow"></div>

            <img
              src="/logo-flowux.png"
              alt="Logo FlowUx"
            />

          </div>

        </section>


     

        <Projects />



        <Sites />



        <section
          className="about"
          id="sobre"
        >

          <div className="about-container">


           

            <div className="about-content">

              <span className="about-tag">
                ✦ SOBRE A FLOWUX
              </span>

              <h2>
                Criamos experiências digitais
                que conectam
                <span> criatividade e tecnologia.</span>
              </h2>

              <p>
                A FlowUx é uma empresa de tecnologia e design
                digital focada no desenvolvimento de produtos
                e experiências digitais.
              </p>

              <p>
                Criamos aplicativos, jogos, websites e interfaces,
                unindo desenvolvimento, design e experiência do
                usuário para transformar ideias em projetos
                funcionais.
              </p>

              <p>
                Da primeira ideia ao produto final, buscamos criar
                soluções digitais visualmente marcantes, intuitivas
                e preparadas para o mundo real.
              </p>

            </div>


  

            <div className="about-highlights">

              <div className="about-card">

                <strong>
                  03
                </strong>

                <span>
                  Produtos em destaque
                </span>

              </div>


              <div className="about-card">

                <strong>
                  APP
                </strong>

                <span>
                  Desenvolvimento mobile
                </span>

              </div>


              <div className="about-card">

                <strong>
                  GAME
                </strong>

                <span>
                  Desenvolvimento de jogos
                </span>

              </div>


              <div className="about-card">

                <strong>
                  WEB
                </strong>

                <span>
                  Sites e experiências digitais
                </span>

              </div>

            </div>

          </div>

        </section>




        <section
          className="services"
          id="servicos"
        >

          <div className="section-title">

            <span>
              ✦ O QUE FAZEMOS
            </span>

            <h2>
              Nossos
              <strong> serviços.</strong>
            </h2>

            <p>
              Criamos soluções digitais unindo design,
              tecnologia e criatividade.
            </p>

          </div>


          <div className="services-grid">


        

            <div className="service-card">

              <div className="service-icon">
                🌐
              </div>

              <h3>
                Desenvolvimento Web
              </h3>

              <p>
                Sites, landing pages e experiências digitais
                modernas, responsivas e focadas no usuário.
              </p>

              <span>
                HTML • CSS • JavaScript • React • Vite
              </span>

            </div>



            <div className="service-card">

              <div className="service-icon">
                📱
              </div>

              <h3>
                Aplicativos
              </h3>

              <p>
                Desenvolvimento de aplicativos mobile,
                transformando ideias em produtos digitais
                funcionais e acessíveis.
              </p>

              <span>
                React Native • Expo • TypeScript
              </span>

            </div>


          

            <div className="service-card">

              <div className="service-icon">
                🎮
              </div>

              <h3>
                Desenvolvimento de Games
              </h3>

              <p>
                Criação de jogos, personagens, mapas,
                sistemas de gameplay e experiências
                interativas para dispositivos móveis.
              </p>

              <span>
                Unity • C# • Blender • Mixamo
              </span>

            </div>


         

            <div className="service-card">

              <div className="service-icon">
                🗄️
              </div>

              <h3>
                Backend & Banco de Dados
              </h3>

              <p>
                Desenvolvimento da estrutura por trás dos
                aplicativos, armazenamento de dados,
                integrações e comunicação entre sistemas.
              </p>

              <span>
                Supabase • SQL • REST API • Backend
              </span>

            </div>


           

            <div className="service-card">

              <div className="service-icon">
                🎨
              </div>

              <h3>
                UX/UI Design
              </h3>

              <p>
                Interfaces modernas e experiências pensadas
                para tornar produtos digitais mais intuitivos,
                funcionais e agradáveis de usar.
              </p>

              <span>
                Figma • Photoshop • Canva
              </span>

            </div>

          </div>

        </section>


       

        <section
          className="contact"
          id="contato"
        >

          <div className="contact-content">


    

            <span className="contact-tag">
              ✦ VAMOS CRIAR JUNTOS?
            </span>


      

            <h2>
              Sua ideia pode ser
              <span> o próximo projeto.</span>
            </h2>


     

            <p>
              Conte para a FlowUx o que você deseja criar.
              Vamos transformar sua ideia em uma experiência
              digital.
            </p>


          

            <div className="contact-links">



              <a
                href="mailto:flowux.design@outlook.com"
                className="contact-link"
              >

                <div className="contact-icon">
                  ✉
                </div>

                <div>

                  <strong>
                    E-mail
                  </strong>

                  <span>
                    flowux.design@outlook.com
                  </span>

                </div>

              </a>



              <a
                href="https://www.instagram.com/flowux.desing"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >

                <div className="contact-icon instagram-icon">
                  ◎
                </div>

                <div>

                  <strong>
                    Instagram
                  </strong>

                  <span>
                    www.instagram.com/flowux.desing
                  </span>

                </div>

              </a>

            </div>


          

            <div className="contact-buttons">

              <a
                href="mailto:flowux.design@outlook.com"
                className="primary-button"
              >
                Entrar em contato →
              </a>


              <a
                href="https://www.instagram.com/flowux.desing"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                Visitar Instagram
              </a>

            </div>

          </div>

        </section>


      </main>
    </>
  )
}




function App() {

  return (

    <Routes>

   

      <Route
        path="/"
        element={<Portfolio />}
      />

      <Route
        path="/inicio"
        element={<Portfolio />}
      />


     

      <Route
        path="/floricultura"
        element={<Floricultura />}
      />



      <Route
        path="/arquitetura"
        element={<Arquitetura />}
      />

      <Route
  path="/pizzaria"
  element={<Pizzaria />}
/>

<Route path="/petshop" element={<Petshop />} />

<Route path="/academia" element={<Academia />} />

<Route path="/pratas" element={<Pratas />} />

    </Routes>


  )
}


export default App