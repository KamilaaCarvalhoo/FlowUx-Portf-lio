import React, { useMemo, useState } from "react";
import "./Petshop.css";

type Product = {
  id: number;
  name: string;
  category: "Snacks" | "Design" | "Care";
  description: string;
  price: string;
  tag: string;
  image: string;
  tone: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Biscoito de Abóbora",
    category: "Snacks",
    description: "Feito de verdade. Sem ingredientes misteriosos.",
    price: "R$ 24,90",
    tag: "Favorito dos focinhos",
    image: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&w=900&q=85",
    tone: "butter",
  },
  {
    id: 2,
    name: "Cama Nuvem",
    category: "Design",
    description: "Um abraço macio depois de grandes aventuras.",
    price: "R$ 189,00",
    tag: "Design autoral",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=900&q=85",
    tone: "lilac",
  },
  {
    id: 3,
    name: "Shampoo Botânico",
    category: "Care",
    description: "Banho gentil com cheirinho de jardim.",
    price: "R$ 39,90",
    tag: "Fórmula suave",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=900&q=85",
    tone: "mint",
  },
  {
    id: 4,
    name: "Bola Orbital",
    category: "Design",
    description: "Para gastar energia e inventar novas brincadeiras.",
    price: "R$ 32,00",
    tag: "Energia lá em cima",
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=900&q=85",
    tone: "coral",
  },
];

const categories = [
  { number: "01", title: "Comer bem", subtitle: "Snacks & nutrição", symbol: "✳", tone: "lime", filter: "Snacks" },
  { number: "02", title: "Viver bonito", subtitle: "Design & diversão", symbol: "↗", tone: "peach", filter: "Design" },
  { number: "03", title: "Cuidar melhor", subtitle: "Banho & bem-estar", symbol: "♡", tone: "blue", filter: "Care" },
];

export default function Petshop() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const visibleProducts = useMemo(
    () => activeFilter === "Todos" ? products : products.filter((product) => product.category === activeFilter),
    [activeFilter]
  );

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const submitNewsletter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <main className="mimo-site" id="top">
      <div className="announcement">
        <span className="announcement-dot" />
        O clube de quem ama sem economizar carinho
        <span className="announcement-right">FRETE GRÁTIS A PARTIR DE R$ 149 ↗</span>
      </div>

      <header className="mimo-header">
        <button className="brand-mark" onClick={() => goTo("top")} aria-label="Voltar ao início">
          <span className="brand-symbol">m<span>✳</span></span>
          <span className="brand-name">mimo<span>pet club</span></span>
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
          <button onClick={() => goTo("universo")}>Nosso universo</button>
          <button onClick={() => goTo("achadinhos")}>Achadinhos</button>
          <button onClick={() => goTo("ritual")}>Ritual de cuidado</button>
        </nav>
        <div className="header-actions">
          <button className="header-search" onClick={() => goTo("achadinhos")} aria-label="Buscar produtos">⌕</button>
          <button className="bag-button" onClick={() => goTo("achadinhos")}>Explorar loja <span>↗</span></button>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? "×" : "☰"}</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-star">✳</span> UM CLUBE, MIL JEITOS DE AMAR</div>
          <h1>Mais vida.<br /><span>Mais patas.</span><i>Mais mimo.</i></h1>
          <p className="hero-description">O universo pet onde cuidado vira ritual, design encontra diversão e cada rabinho tem sua própria história.</p>
          <div className="hero-cta-row">
            <button className="button-dark" onClick={() => goTo("universo")}>Descobrir o clube <span>↗</span></button>
            <button className="button-link" onClick={() => goTo("achadinhos")}><span className="play-icon">▶</span> Ver os favoritos</button>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack">
              <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=100&q=80" alt="Cachorro feliz" />
              <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=100&q=80" alt="Gato curioso" />
              <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=100&q=80" alt="Cachorro contente" />
            </div>
            <div><strong>+2.400 focinhos felizes</strong><span>e humanos ainda mais apaixonados</span></div>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-image-wrap">
            <img className="hero-dog" src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=90" alt="Golden retriever com expressão alegre" />
          </div>
          <div className="hero-sticker sticker-top"><span>feito pra</span><strong>abanar</strong><span>o coração ♡</span></div>
          <div className="hero-float-card">
            <span className="float-icon">✳</span>
            <div><strong>Pet care,</strong><span>com personalidade.</span></div>
            <span className="float-arrow">↗</span>
          </div>
          <div className="hero-side-note">BONS MOMENTOS<br />COMEÇAM NO FOCINHO</div>
          <div className="hero-number">01<span>/04</span></div>
        </div>
        <div className="hero-bottom-note"><span>↓</span> DESLIZE PARA ENTRAR NO UNIVERSO MIMO</div>
      </section>

      <div className="ticker" aria-label="Cuidado, diversão, carinho">
        <div className="ticker-track">
          {Array.from({ length: 4 }, (_, index) => (
            <span key={index}>CUIDADO COM INTENÇÃO <b>✳</b> DIVERSÃO SEM MEDIDA <b>✳</b> AMOR EM CADA DETALHE <b>✳</b></span>
          ))}
        </div>
      </div>

      <section className="universe-section" id="universo">
        <div className="section-topline"><span>01 / O NOSSO JEITO</span><span>FEITO PARA VIDAS COM PATAS</span></div>
        <div className="universe-heading">
          <h2>Não é só pet shop.<br /><em>É pet lifestyle.</em></h2>
          <p>Escolhemos cada detalhe para deixar a rotina mais gostosa — do primeiro petisco ao último carinho antes de dormir.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <button className={`category-card category-${category.tone}`} key={category.number} onClick={() => { setActiveFilter(category.filter); goTo("achadinhos"); }}>
              <div className="category-card-top"><span>{category.number} — MIMO ESSENCIAL</span><span className="category-arrow">↗</span></div>
              <div className="category-symbol">{category.symbol}</div>
              <div className="category-bottom"><div><h3>{category.title}</h3><p>{category.subtitle}</p></div><span className="circle-arrow">↗</span></div>
            </button>
          ))}
        </div>
        <div className="manifesto-strip">
          <span className="manifesto-mark">m✳</span>
          <p>A gente acredita que <strong>cuidar também é celebrar.</strong> Por isso, o extraordinário mora nas pequenas coisas.</p>
          <span className="manifesto-scribble">feito com<br />amor de verdade</span>
        </div>
      </section>

      <section className="product-section" id="achadinhos">
        <div className="section-topline"><span>02 / GARIMPO DO CLUBE</span><span>OBJETOS DE DESEJO (DELES E NOSSOS)</span></div>
        <div className="product-heading">
          <div><span className="mini-label">SELEÇÃO MIMO</span><h2>Pequenos achados.<br /><em>Grandes uaus.</em></h2></div>
          <p>Produtos que têm função, personalidade e aquele fator “preciso disso pro meu pet”.</p>
        </div>
        <div className="filter-row" role="group" aria-label="Filtrar produtos">
          {["Todos", "Snacks", "Design", "Care"].map((filter) => (
            <button key={filter} onClick={() => setActiveFilter(filter)} className={activeFilter === filter ? "filter-chip active" : "filter-chip"}>{filter === "Todos" ? "Tudo lindo" : filter === "Care" ? "Autocuidado" : filter === "Design" ? "Design & play" : "Comidinhas"} <span>{filter === activeFilter ? "✳" : "+"}</span></button>
          ))}
          <span className="product-count">{visibleProducts.length} achadinhos</span>
        </div>
        <div className="product-grid">
          {visibleProducts.map((product, index) => (
            <article className={`product-card product-${product.tone}`} key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="product-tag">{product.tag}</span>
                <button className="product-add" aria-label={`Ver ${product.name}`} onClick={() => window.open("https://wa.me/5500000000000?text=" + encodeURIComponent(`Olá! Tenho interesse em ${product.name}.`), "_blank")}>↗</button>
                <span className="product-index">0{index + 1}</span>
              </div>
              <div className="product-info"><div><span className="product-category">{product.category}</span><h3>{product.name}</h3><p>{product.description}</p></div><strong>{product.price}</strong></div>
            </article>
          ))}
        </div>
        <div className="product-bottom"><span>CURADORIA COM CARINHO, SEM MAIS DO MESMO.</span><button onClick={() => window.open("https://wa.me/5500000000000?text=" + encodeURIComponent("Olá! Quero conhecer o catálogo Mimo Pet Club."), "_blank")}>Quero ver o catálogo completo <span>↗</span></button></div>
      </section>

      <section className="ritual-section" id="ritual">
        <div className="ritual-image">
          <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85" alt="Cachorro recebendo carinho durante o cuidado" loading="lazy" />
          <div className="ritual-image-label"><span>THE MIMO RITUAL</span><strong>pausa pro<br />autocuidado.</strong></div>
          <span className="ritual-roundel">CUIDAR É<br />UM ATO DE<br />AMOR ✳</span>
        </div>
        <div className="ritual-copy">
          <span className="mini-label">03 / RITUAIS DE BEM-ESTAR</span>
          <h2>Porque ele<br />merece um dia<br /><em>de estrela.</em></h2>
          <p>Transformamos o básico em um momento especial. Produtos gentis, cheirinhos deliciosos e cuidado que respeita o tempo e o jeitinho de cada pet.</p>
          <div className="ritual-points">
            <div><span>01</span><p><strong>Banho sem pressa</strong><small>Fórmulas suaves e carinho em cada etapa.</small></p><span>↗</span></div>
            <div><span>02</span><p><strong>Bem-estar de verdade</strong><small>Escolhas pensadas para a rotina real.</small></p><span>↗</span></div>
            <div><span>03</span><p><strong>Um mimo só dele</strong><small>Porque todo dia merece um motivo pra abanar.</small></p><span>↗</span></div>
          </div>
          <button className="button-dark" onClick={() => window.open("https://wa.me/5500000000000?text=" + encodeURIComponent("Olá! Quero saber mais sobre os cuidados Mimo Pet Club."), "_blank")}>Falar com nosso time <span>↗</span></button>
        </div>
      </section>

      <section className="moments-section">
        <div className="section-topline"><span>04 / VIDA REAL, AMOR REAL</span><span>@MIMOPETCLUB</span></div>
        <div className="moments-heading"><h2>Os melhores momentos<br />não precisam de legenda.</h2><p>Mas a gente deixa um coração. ♡</p></div>
        <div className="moments-grid">
          <div className="moment moment-large"><img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=85" alt="Dois cachorros brincando juntos" loading="lazy" /><span className="moment-caption">amizade em modo turbo ↗</span></div>
          <div className="moment moment-tall"><img src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=900&q=85" alt="Gato descansando tranquilamente" loading="lazy" /><span className="moment-caption">o rei da soneca ♡</span></div>
          <div className="moment moment-small"><img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=85" alt="Cachorro olhando para a câmera" loading="lazy" /><span className="moment-caption">carinha de quem aprontou ✳</span></div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-shape">✳</div>
        <div className="newsletter-copy"><span className="mini-label">CARTINHAS DO CLUBE</span><h2>Um mimo no seu<br /><em>e-mail também.</em></h2><p>Novidades, dicas úteis e pequenas surpresas para deixar a vida com patas ainda melhor.</p></div>
        <form className="newsletter-form" onSubmit={submitNewsletter}>
          {subscribed ? <div className="subscribe-success">Você entrou pro clube! ♡</div> : <><label htmlFor="mimo-email">Seu melhor e-mail</label><div className="newsletter-input"><input id="mimo-email" type="email" placeholder="voce@email.com" value={email} onChange={(event) => setEmail(event.target.value)} required /><button type="submit" aria-label="Inscrever e-mail">↗</button></div><small>Sem spam. Só carinho e boas novidades.</small></>}
        </form>
      </section>

      <footer className="mimo-footer">
        <div className="footer-top"><button className="brand-mark footer-brand" onClick={() => goTo("top")}><span className="brand-symbol">m<span>✳</span></span><span className="brand-name">mimo<span>pet club</span></span></button><p>Para eles, tudo.<br /><em>Com amor, sempre.</em></p><button className="footer-back" onClick={() => goTo("top")}>Voltar ao topo ↑</button></div>
        <div className="footer-bottom"><span>© 2025 MIMO PET CLUB — FEITO DE AMOR E PATINHAS.</span><span>INSTAGRAM ↗ &nbsp; WHATSAPP ↗</span><span>FEITO PARA ABANAR O CORAÇÃO.</span></div>
      </footer>
    </main>
  );
}
