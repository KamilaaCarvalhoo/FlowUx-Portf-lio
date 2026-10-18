
import type { CSSProperties, JSX } from "react";
import "./Floricultura.css";

type Product = {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  number: string;
};

type Occasion = {
  number: string;
  title: string;
  text: string;
  tone: "rose" | "sun" | "lilac" | "green";
};

const products: Product[] = [
  {
    name: "Buquê Encanto",
    description:
      "Rosas e flores delicadas combinadas com folhagens para criar um presente marcante.",
    price: "R$ 149,90",
    category: "Romântico",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1000&q=90",
    number: "01",
  },
  {
    name: "Buquê Jardim Florêa",
    description:
      "Uma composição colorida e elegante para transformar qualquer momento em uma lembrança especial.",
    price: "R$ 189,90",
    category: "Especial",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=90",
    number: "02",
  },
  {
    name: "Buquê Sol da Manhã",
    description:
      "Flores vibrantes para levar alegria, carinho e energia para quem você ama.",
    price: "R$ 129,90",
    category: "Colorido",
    image:
      "https://dcdn-us.mitiendanube.com/stores/001/800/186/products/whatsapp-image-2025-07-11-at-15-01-53-59daa6eac78358c58417522572322890-480-0.webp",
    number: "03",
  },
  {
    name: "Rosas Pink",
    description:
      "Rosas em tons de rosa para celebrar amor, carinho e momentos inesquecíveis.",
    price: "R$ 159,90",
    category: "Rosas",
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=1000&q=90",
    number: "04",
  },
  {
    name: "Orquídea Elegance",
    description:
      "Uma escolha sofisticada para presentear ou deixar seu ambiente ainda mais especial.",
    price: "R$ 179,90",
    category: "Elegante",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Ts7RcMDdWpuDZh1TIurGxJii-bkklPipr4mLNRGLMQ&s",
    number: "05",
  },
  {
    name: "Girassol Alegria",
    description:
      "Girassóis selecionados para levar luz, energia e boas lembranças.",
    price: "R$ 139,90",
    category: "Alegre",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmqD8PHTqGltXTvLC00MwXC9rl3_3y1GpWcP-NPH6mi2KQZnkBj4Hk4uIv&s=10",
    number: "06",
  },
  {
    name: "Flores do Campo",
    description:
      "Uma mistura natural e colorida inspirada nos jardins floridos.",
    price: "R$ 149,90",
    category: "Natural",
    image:
      "https://images.tcdn.com.br/img/img_prod/795791/buque_de_flores_do_campo_naturais_caminho_da_fazenda_869_1_c30964335e83df899ef7f3b339e30d1f.jpg",
    number: "07",
  },
  {
    name: "Amor em Rosas",
    description:
      "Rosas selecionadas em uma composição delicada para grandes declarações.",
    price: "R$ 219,90",
    category: "Especial",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4uFCNniOvS93_e7jRUG_njJaOfRxCwK8itBcilBsSqFi_TmYfmwvr8O_&s=10",
    number: "08",
  },
];

const occasions: Occasion[] = [
  {
    number: "01",
    title: "Amor",
    text: "Declare seus sentimentos com um buquê escolhido especialmente para essa pessoa.",
    tone: "rose",
  },
  {
    number: "02",
    title: "Aniversários",
    text: "Flores para transformar o aniversário em uma lembrança ainda mais especial.",
    tone: "sun",
  },
  {
    number: "03",
    title: "Surpresas",
    text: "Porque alguns dos melhores momentos acontecem quando ninguém está esperando.",
    tone: "lilac",
  },
  {
    number: "04",
    title: "Para você",
    text: "Você também merece receber flores. Escolha seu buquê e celebre a sua própria história.",
    tone: "green",
  },
];

type PetalData = {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
  rotation: string;
};

const petals: PetalData[] = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 8) % 100}%`,
  delay: `${(index % 9) * -1.7}s`,
  duration: `${9 + (index % 7) * 1.8}s`,
  size: `${10 + (index % 5) * 4}px`,
  rotation: `${index * 43}deg`,
}));

function FallingPetals(): JSX.Element {
  return (
    <div className="falling-petals" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="falling-petal"
          style={
            {
              "--petal-left": petal.left,
              "--petal-delay": petal.delay,
              "--petal-duration": petal.duration,
              "--petal-size": petal.size,
              "--petal-rotation": petal.rotation,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}


function FlowerOpeningIntro(): JSX.Element {
  return (
    <div className="flower-opening-intro" aria-hidden="true">
      <div className="flower-opening-scene">
        <div className="bloom-flower">
          {Array.from({ length: 8 }, (_, index) => (
            <span
              key={index}
              className="bloom-petal"
              style={{ "--petal-index": index } as CSSProperties}
            />
          ))}
          <span className="bloom-center" />
        </div>
        <span className="bloom-brand">florêa</span>
        <span className="bloom-tagline">flores para sentir</span>
      </div>
    </div>
  );
}


function WhatsAppRose(): JSX.Element {
  // Substitua pelo número real: código do país + DDD + número, sem espaços.
  const phone = "5562999999999";
  const message = encodeURIComponent(
    "Olá! Vim pelo site da Florêa e gostaria de saber mais sobre os arranjos 🌹"
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-rose"
      aria-label="Falar com a Florêa pelo WhatsApp"
    >
      <span className="whatsapp-rose-tooltip">Fale conosco 💗</span>
      <img
        src="/rosa.png"
        alt=""
        className="whatsapp-rose-icon"
        aria-hidden="true"
      />
      <span className="whatsapp-rose-whatsapp" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img">
          <path
            fill="currentColor"
            d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.09.55 4.13 1.59 5.93L.12 24l6.35-1.66a11.9 11.9 0 0 0 5.63 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.47-8.41ZM12.1 21.75a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.82 9.82 0 0 1-1.51-5.23c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.89-9.9 9.89Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z"
          />
        </svg>
      </span>
    </a>
  );
}

function Floricultura(): JSX.Element {
  return (
    <div className="florea-page">
      <FlowerOpeningIntro />
      <FallingPetals />
      <div className="announcement-bar">
        <span>ARRANJOS FEITOS À MÃO</span>
        <span className="announcement-mark">✳</span>
        <span>FLORES PARA SENTIR, NÃO SÓ OLHAR</span>
      </div>

      <header className="florea-navbar">
        <a
          href="/floricultura"
          className="florea-logo"
          aria-label="Florêa início"
        >
          <span className="logo-symbol">f.</span>
          <span className="logo-word">
            florêa<span>®</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#buques">O jardim</a>
          <a href="#colecoes">Coleções</a>
          <a href="#ocasioes">Momentos</a>
          <a href="#sobre">Manifesto</a>
        </nav>

        <a href="#contato" className="nav-cta">
          Encontre suas flores <span>↗</span>
        </a>
      </header>

      <main>
        <section className="editorial-hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              BOTÂNICA PARA A VIDA REAL
            </div>

            <h1>
              Flores que
              <br />
              dizem o que
              <br />
              <em>falta dizer.</em>
            </h1>

            <div className="hero-bottom">
              <p>
                Não é só um buquê. É uma pausa bonita no meio do dia, um gesto
                que fica, uma lembrança que ganha perfume.
              </p>
              <a
                className="round-link"
                href="#buques"
                aria-label="Explorar buquês"
              >
                ↘
              </a>
            </div>

            <div className="hero-index">
              <span>01 / 04</span>
              <span>COLEÇÃO BOTÂNICA — 2026</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo">
              <img
                src="https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1400&q=90"
                alt="Arranjo floral natural em tons suaves"
              />
            </div>

            <div className="hero-stamp">
              <span>COLHIDO COM</span>
              <strong>♡</strong>
              <span>INTENÇÃO</span>
            </div>

            <div className="hero-caption">
              <span>FIG. 01</span>
              <span>O extraordinário mora nos detalhes.</span>
            </div>

            <div className="vertical-note">
              NATUREZA • AFETO • PRESENÇA
            </div>
          </div>
        </section>

        <section className="manifesto-strip">
          <span>MENOS PRESSA.</span>
          <span className="strip-flower">✳</span>
          <span>MAIS PRESENÇA.</span>
          <span className="strip-flower">✳</span>
          <span>SEMPRE FLORES.</span>
        </section>

        <section className="products-section" id="buques">
          <div className="section-topline">
            <span className="eyebrow">01 — O JARDIM</span>
            <span className="section-side-note">
              PEQUENAS OBRAS, FEITAS COM FLORES
            </span>
          </div>

          <div className="products-intro">
            <h2>
              Escolhidos
              <br />
              <em>para sentir.</em>
            </h2>
            <p>
              Cada composição tem seu próprio jeito de dizer. Encontre aquela
              que parece ter sido feita para o seu momento.
            </p>
          </div>

          <div className="products-grid">
            {products.map((product, index) => (
              <article
                className={`product-card product-card-${index + 1}`}
                key={product.name}
              >
                <a
                  className="product-image"
                  href="#contato"
                  aria-label={`Conhecer ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                  <span className="product-number">{product.number}</span>
                  <span className="product-arrow">↗</span>
                  <span className="product-category">
                    {product.category}
                  </span>
                </a>

                <div className="product-content">
                  <div className="product-title-row">
                    <h3>{product.name}</h3>
                    <strong>{product.price}</strong>
                  </div>

                  <p>{product.description}</p>

                  <a className="product-link" href="#contato">
                    Escolher este arranjo <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="products-footnote">
            <span>✳</span>
            Flores da estação, composições autorais e um pouco de poesia em
            cada entrega.
          </div>
        </section>

        <section className="collections-section" id="colecoes">
          <div className="collections-heading">
            <div>
              <span className="eyebrow">02 — POR HUMOR, POR INSTINTO</span>
              <h2>
                Qual é a sua
                <br />
                <em>linguagem?</em>
              </h2>
            </div>

            <p>
              Não escolha apenas pelas cores. Escolha pelo que você quer fazer
              alguém sentir.
            </p>
          </div>

          <div className="collections-grid">
            <a
              href="#buques"
              className="collection-card collection-romance"
            >
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=90"
                alt="Composição floral romântica"
                loading="lazy"
              />
              <span className="collection-number">A / 01</span>
              <div className="collection-content">
                <span>PARA SENTIMENTOS GRANDES</span>
                <h3>
                  O amor não
                  <br />
                  precisa de legenda.
                </h3>
                <span className="collection-explore">
                  Explorar <b>↗</b>
                </span>
              </div>
            </a>

            <a href="#buques" className="collection-card collection-color">
              <img
                src="https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=1000&q=90"
                alt="Flores coloridas em arranjo"
                loading="lazy"
              />
              <span className="collection-number">B / 02</span>
              <div className="collection-content">
                <span>PARA DIAS QUE PEDEM COR</span>
                <h3>
                  Um pouco de sol
                  <br />
                  em qualquer estação.
                </h3>
                <span className="collection-explore">
                  Explorar <b>↗</b>
                </span>
              </div>
            </a>

            <a
              href="#buques"
              className="collection-card collection-elegant"
            >
              <img
                src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1000&q=90"
                alt="Flores de estética minimalista"
                loading="lazy"
              />
              <span className="collection-number">C / 03</span>
              <div className="collection-content">
                <span>PARA A BELEZA SEM EXCESSO</span>
                <h3>
                  Silêncio também
                  <br />
                  é sofisticação.
                </h3>
                <span className="collection-explore">
                  Explorar <b>↗</b>
                </span>
              </div>
            </a>
          </div>
        </section>

        <section className="quote-section">
          <span className="quote-ornament">“</span>
          <p>
            Às vezes, a melhor maneira de dizer{" "}
            <em>eu pensei em você</em> é deixar a natureza falar.
          </p>
          <span className="quote-credit">
            UM PENSAMENTO FLORÊA — Nº 001
          </span>
        </section>

        <section className="occasions-section" id="ocasioes">
          <div className="occasions-heading">
            <span className="eyebrow">03 — PARA CADA CAPÍTULO</span>
            <h2>
              A vida acontece.
              <br />
              <em>Flores também.</em>
            </h2>
          </div>

          <div className="occasions-list">
            {occasions.map((occasion) => (
              <article
                className={`occasion-row occasion-${occasion.tone}`}
                key={occasion.number}
              >
                <span className="occasion-number">{occasion.number}</span>
                <h3>{occasion.title}</h3>
                <p>{occasion.text}</p>
                <a
                  href="#buques"
                  aria-label={`Ver flores para ${occasion.title}`}
                >
                  ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=90"
              alt="Flores frescas em luz natural"
              loading="lazy"
            />
            <div className="about-image-label">
              CULTIVAR BELEZA
              <br />
              É UM ATO DE CUIDADO.
            </div>
            <span className="about-image-index">FLORÊA / EST. 2018</span>
          </div>

          <div className="about-content">
            <span className="eyebrow">04 — NOSSO MANIFESTO</span>
            <h2>
              O mundo já tem pressa demais.{" "}
              <em>A gente escolhe flores.</em>
            </h2>
            <p>
              A Florêa nasceu da vontade de devolver significado aos pequenos
              gestos. Acreditamos que flores não precisam de uma grande ocasião
              — elas podem ser a ocasião.
            </p>
            <p>
              Por isso, cada arranjo é pensado com cuidado, respeitando a
              beleza natural de cada haste e o sentimento de quem vai receber.
            </p>
            <a href="#contato" className="text-link">
              Vamos conversar <span>↗</span>
            </a>
            <div className="about-signature">
              com carinho, <span>florêa.</span>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="benefits-heading">
            <span className="eyebrow">O CUIDADO ESTÁ EM TUDO</span>
            <h2>
              Do primeiro olhar
              <br />
              até a última pétala.
            </h2>
          </div>

          <div className="benefits-grid">
            <article className="benefit-card">
              <span>01</span>
              <h3>Flores selecionadas</h3>
              <p>
                Escolhemos cada flor pela beleza, frescor e personalidade.
              </p>
            </article>

            <article className="benefit-card">
              <span>02</span>
              <h3>Feito à mão</h3>
              <p>Arranjos montados com intenção, sem fórmulas prontas.</p>
            </article>

            <article className="benefit-card">
              <span>03</span>
              <h3>Entrega cuidadosa</h3>
              <p>
                Uma apresentação pensada para chegar tão bonita quanto saiu.
              </p>
            </article>

            <article className="benefit-card">
              <span>04</span>
              <h3>Seu recado</h3>
              <p>Uma mensagem personalizada para dizer o que importa.</p>
            </article>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="testimonial-heading">
            <span className="eyebrow">BILHETES QUE FICARAM</span>
            <h2>
              Palavras que
              <br />
              <em>florescem depois.</em>
            </h2>
          </div>

          <div className="testimonials-grid">
            <article className="testimonial-card">
              <span className="testimonial-stars">★★★★★</span>
              <p>
                “O buquê chegou lindo e muito bem preparado. Foi exatamente o
                presente que eu queria.”
              </p>
              <div>
                <span className="testimonial-avatar">MO</span>
                <span>
                  <strong>Mariana Oliveira</strong>
                  <small>Cliente Florêa</small>
                </span>
              </div>
            </article>

            <article className="testimonial-card testimonial-featured">
              <span className="testimonial-stars">★★★★★</span>
              <p>
                “A composição ficou maravilhosa. Dá para perceber o cuidado em
                cada detalhe.”
              </p>
              <div>
                <span className="testimonial-avatar">BS</span>
                <span>
                  <strong>Beatriz Santos</strong>
                  <small>Cliente Florêa</small>
                </span>
              </div>
            </article>

            <article className="testimonial-card">
              <span className="testimonial-stars">★★★★★</span>
              <p>
                “Foi uma surpresa linda. O atendimento e a apresentação foram
                impecáveis.”
              </p>
              <div>
                <span className="testimonial-avatar">LA</span>
                <span>
                  <strong>Lucas Almeida</strong>
                  <small>Cliente Florêa</small>
                </span>
              </div>
            </article>
          </div>
        </section>

        <section className="cta-section" id="contato">
          <div className="cta-topline">
            <span>UM GESTO MUDA O DIA.</span>
            <span>VOCÊ SABE DE QUEM.</span>
          </div>

          <div className="cta-main">
            <div>
              <span className="eyebrow">O PRÓXIMO CAPÍTULO É SEU</span>
              <h2>
                Faça caber
                <br />
                <em>flores no dia.</em>
              </h2>
              <p>
                Encontre um arranjo, escreva seu bilhete e deixe o resto com a
                gente.
              </p>
              <a
                href="mailto:flowux.design@outlook.com?subject=Pedido%20de%20flores%20Flor%C3%AAa"
                className="cta-button"
              >
                Quero escolher minhas flores <span>↗</span>
              </a>
            </div>

            <div className="cta-image">
              <img
                src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=90"
                alt="Buquê de flores em composição natural"
                loading="lazy"
              />
              <span>UM PRESENTE COM PRESENÇA.</span>
            </div>
          </div>

          <div className="cta-bottom-mark">
            ✳ FLORÊA — FLORES COM INTENÇÃO
          </div>
        </section>
      </main>

      <footer className="florea-footer">
        <div className="footer-main">
          <a
            href="/floricultura"
            className="florea-logo"
            aria-label="Florêa início"
          >
            <span className="logo-symbol">f.</span>
            <span className="logo-word">
              florêa<span>®</span>
            </span>
          </a>

          <p>
            Flores que transformam
            <br />
            sentimentos em presença.
          </p>

          <a
            href="mailto:flowux.design@outlook.com"
            className="footer-email"
          >
            flowux.design@outlook.com ↗
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 FLORÊA</span>

          <div>
            <a href="#buques">O jardim</a>
            <a href="#colecoes">Coleções</a>
            <a href="#sobre">Manifesto</a>
            <a href="#contato">Contato</a>
          </div>

          <span>CRIADO POR FLOWUX</span>
        </div>
      </footer>

      <WhatsAppRose />
    </div>
  );
}

export default Floricultura;
