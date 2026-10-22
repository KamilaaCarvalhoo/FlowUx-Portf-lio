import { useEffect, useState } from "react";
import "./PixelNewsNitro.css";

type PixelNewsNitroProps = { onFinish: () => void };

const particles = Array.from({ length: 64 }, (_, index) => ({
  id: index,
  left: `${(index * 47 + 7) % 100}%`,
  top: `${(index * 67 + 13) % 100}%`,
  delay: `${(index % 12) * -0.43}s`,
  duration: `${3.2 + (index % 7) * 0.55}s`,
  size: `${2 + (index % 4)}px`,
}));

export default function PixelNewsNitro({ onFinish }: PixelNewsNitroProps) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 2400;
    const interval = window.setInterval(() => {
      const value = Math.min(100, Math.round(((Date.now() - start) / duration) * 100));
      setProgress(value);
      if (value >= 100) {
        window.clearInterval(interval);
        setReady(true);
      }
    }, 30);
    const glitchInterval = window.setInterval(() => {
      setGlitch(true);
      window.setTimeout(() => setGlitch(false), 180);
    }, 2300);
    return () => {
      window.clearInterval(interval);
      window.clearInterval(glitchInterval);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onFinish();
      }
      if (event.key === "Escape") onFinish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onFinish]);

  return (
    <main className="pn-nitro" aria-label="Abertura Pixel News">
      <div className="pn-nitro-noise" />
      <div className="pn-nitro-grid" />
      <div className="pn-nitro-beam pn-nitro-beam-one" />
      <div className="pn-nitro-beam pn-nitro-beam-two" />
      <div className="pn-nitro-orbit pn-nitro-orbit-one" />
      <div className="pn-nitro-orbit pn-nitro-orbit-two" />
      <div className="pn-nitro-particles" aria-hidden="true">
        {particles.map((particle) => (
          <i key={particle.id} style={{ left: particle.left, top: particle.top, animationDelay: particle.delay, animationDuration: particle.duration, width: particle.size, height: particle.size }} />
        ))}
      </div>

      <header className="pn-nitro-status">
        <span><i /> PIXEL OS <b>ONLINE</b></span>
        <span>GAMING NEWS NETWORK <strong>/// 2026</strong></span>
      </header>

      <section className={`pn-nitro-stage ${glitch ? "pn-nitro-glitch" : ""}`}>
        <div className="pn-nitro-eyebrow"><span>✦</span> SEU PORTAL GAMER <span>✦</span></div>
        <div className="pn-nitro-logo">
          <div className="pn-nitro-controller" aria-hidden="true">
            <span className="pn-nitro-dpad">✚</span><span className="pn-nitro-buttons">●<i>●</i></span>
          </div>
          <div className="pn-nitro-wordmark"><span>PIXEL</span><strong>NEWS<span>_</span></strong></div>
        </div>
        <div className="pn-nitro-divider"><span /> <b>LEVEL UP YOUR WORLD</b> <span /></div>
        <h1>O UNIVERSO GAMER<br /><em>COMEÇA AQUI.</em></h1>
        <p className="pn-nitro-description">Notícias. Lançamentos. E-sports. Tecnologia.<br />Entre no próximo nível da cultura gamer.</p>

        <div className="pn-nitro-loader">
          <div className="pn-nitro-loader-label"><span>{ready ? "PORTAL DESBLOQUEADO" : "INICIALIZANDO UNIVERSO PIXEL"}</span><strong>{progress}%</strong></div>
          <div className="pn-nitro-track"><span style={{ width: `${progress}%` }} /></div>
          <div className="pn-nitro-segments">{Array.from({ length: 24 }, (_, i) => <i key={i} className={progress >= ((i + 1) / 24) * 100 ? "active" : ""} />)}</div>
        </div>

        <button className={`pn-nitro-enter ${ready ? "ready" : ""}`} onClick={onFinish} type="button">
          <span className="pn-nitro-play">▶</span><span>{ready ? "ENTRAR NO UNIVERSO" : "PULAR INTRO"}</span><span className="pn-nitro-arrow">↗</span>
        </button>
        <div className="pn-nitro-hint">{ready ? "PRESSIONE ENTER OU CLIQUE PARA CONTINUAR" : "PREPARANDO SUA EXPERIÊNCIA • ESC PARA PULAR"}</div>
      </section>

      <footer className="pn-nitro-footer"><span>GAMES <b>✦</b> CULTURA <b>✦</b> TECNOLOGIA</span><span className="pn-nitro-footer-center">PRESS START TO EXPLORE</span><span>© PIXEL NEWS</span></footer>
      <div className="pn-nitro-corner pn-nitro-corner-tl" /><div className="pn-nitro-corner pn-nitro-corner-tr" /><div className="pn-nitro-corner pn-nitro-corner-bl" /><div className="pn-nitro-corner pn-nitro-corner-br" />
    </main>
  );
}
