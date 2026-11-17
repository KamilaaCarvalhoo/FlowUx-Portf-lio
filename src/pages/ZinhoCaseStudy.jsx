
import "./ZinhoCaseStudy.css";

function ZinhoCaseStudy() {
  return (
    <main className="zinho-case">
      <section className="zinho-hero">
        <span className="zinho-tag">
          ✦ PROJETO AUTORAL • DESKTOP APP
        </span>

        <h1>
          Zinho<span>.</span>
          <br />
          Seu pequeno companheiro digital.
        </h1>

        <p>
          Um assistente virtual para desktop desenvolvido
          para unir produtividade, interatividade e personalidade
          em uma experiência única.
        </p>

        <div className="zinho-tech">
          <span>React</span>
          <span>JavaScript</span>
          <span>Electron</span>
          <span>Node.js</span>
          <span>CSS</span>
        </div>

        <div className="zinho-preview">
          <img
            src="/zinho.png"
            alt="Assistente virtual Zinho"
          />
        </div>
      </section>

      <section className="zinho-about">
        <span>01 — SOBRE O PROJETO</span>
        <h2>Mais que um mascote. Um assistente para o dia a dia.</h2>

        <p>
          O Zinho é uma aplicação desktop desenvolvida com React
          e Electron. Seu objetivo é oferecer uma experiência
          interativa diretamente na área de trabalho, com recursos
          de produtividade e um personagem animado que dá vida
          à aplicação.
        </p>
      </section>

      <section className="zinho-features">
        <span>02 — FUNCIONALIDADES</span>
        <h2>O que o Zinho consegue fazer?</h2>

        <div className="zinho-feature-grid">
          <article>
            <span>🤖</span>
            <h3>Mascote interativo</h3>
            <p>
              Personagem animado com interações, movimentos
              e expressões personalizadas.
            </p>
          </article>

          <article>
            <span>🌐</span>
            <h3>Atalhos rápidos</h3>
            <p>
              Acesso rápido a sites e programas do Windows.
            </p>
          </article>

          <article>
            <span>🕒</span>
            <h3>Relógio integrado</h3>
            <p>
              Exibição de horário e data em tempo real.
            </p>
          </article>

          <article>
            <span>📝</span>
            <h3>Gerenciador de tarefas</h3>
            <p>
              Criação, conclusão e exclusão de tarefas,
              com armazenamento local persistente.
            </p>
          </article>
        </div>
      </section>

      <section className="zinho-architecture">
        <span>03 — DESENVOLVIMENTO</span>
        <h2>Como foi construído?</h2>

        <p>
          A interface foi desenvolvida em React, enquanto o
          Electron permite executar a aplicação como um programa
          desktop. A comunicação entre os processos utiliza IPC,
          com acesso controlado aos recursos do computador.
        </p>

        <div className="zinho-tech">
          <span>React — Interface</span>
          <span>Electron — Desktop</span>
          <span>IPC — Comunicação</span>
          <span>Node.js — Processos</span>
          <span>JSON — Persistência</span>
        </div>
      </section>

      <section className="zinho-footer">
        <span>04 — RESULTADO</span>
        <h2>Uma experiência digital com personalidade.</h2>
        <p>
          O Zinho representa a exploração de novas possibilidades
          na criação de aplicações desktop, combinando tecnologia,
          design e criatividade.
        </p>
      </section>
    </main>
  );
}

export default ZinhoCaseStudy;
