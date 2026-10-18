import React, { useMemo, useState } from "react";
import "./Pizzaria.css";

const pizzas = [
  {
    name: "Margherita",
    description:
      "Molho de tomate artesanal, mozzarella, manjericão fresco e azeite.",
    price: "R$ 42,90",
    category: "Clássicas",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=90",
    featured: true,
  },
  {
    name: "Calabresa",
    description:
      "Molho especial, mozzarella, calabresa artesanal, cebola e orégano.",
    price: "R$ 44,90",
    category: "Clássicas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbIUTn_EpqiBzAhLOdNHyaa8WR5B05grCpzQkJGjOdPmpIePUKwf2ll0&s=10",
    featured: false,
  },
  {
    name: "Quattro Formaggi",
    description:
      "Mozzarella, gorgonzola, parmesão e provolone em uma combinação intensa.",
    price: "R$ 49,90",
    category: "Especiais",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=90",
    featured: false,
  },
  {
    name: "Pepperoni",
    description:
      "Molho de tomate, mozzarella cremosa e pepperoni crocante.",
    price: "R$ 47,90",
    category: "Mais pedidas",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=1000&q=90",
    featured: true,
  },


  {
    name: "Parma & Burrata",
    description:
      "Mozzarella, burrata cremosa, presunto parma, tomate-cereja e rúcula.",
    price: "R$ 59,90",
    category: "Especiais",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=90",
    featured: true,
  },
  {
    name: "Carne Seca",
    description:
      "Carne seca desfiada, mozzarella, cebola caramelizada e toque de catupiry.",
    price: "R$ 56,90",
    category: "Especiais",
    image:
      "https://vapzafoodservice.com.br/wp-content/uploads/2025/05/Pizza-de-Carne-Seca-com-Requeijao.jpg",
    featured: false,
  },
  {
    name: "Camarão Cremoso",
    description:
      "Camarões salteados, mozzarella, creme especial e ervas frescas.",
    price: "R$ 64,90",
    category: "Especiais",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=90",
    featured: false,
  },

  {
    name: "Caprese",
    description:
      "Mozzarella de búfala, tomate-cereja, manjericão fresco e azeite.",
    price: "R$ 49,90",
    category: "Vegetarianas",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=90",
    featured: false,
  },
  {
    name: "Funghi",
    description:
      "Cogumelos selecionados, mozzarella, parmesão, alho e ervas frescas.",
    price: "R$ 51,90",
    category: "Vegetarianas",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=90",
    featured: false,
  },
  {
    name: "Rúcula & Tomate Seco",
    description:
      "Mozzarella, rúcula fresca, tomate seco, parmesão e azeite extravirgem.",
    price: "R$ 50,90",
    category: "Vegetarianas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHLdJMojIhH-ydzyPJkxfkkOtfMsZDijwh0fHqhAL6qA&s=10",
    featured: false,
  },


  {
    name: "Nutella com Morango",
    description:
      "Creme de avelã, morangos frescos e açúcar de confeiteiro.",
    price: "R$ 39,90",
    category: "Doces",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=90",
    featured: true,
  },
  {
    name: "Banana com Canela",
    description:
      "Banana caramelizada, canela, açúcar e doce de leite cremoso.",
    price: "R$ 37,90",
    category: "Doces",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsMhSQI0mw3GEerFfOaZAwP7sKs7hC8JNhjJmX5XOhJNVMW8VSwaW60w&s=10",
    featured: false,
  },
  {
    name: "Romeu e Julieta",
    description:
      "Queijo cremoso, goiabada artesanal e toque de açúcar.",
    price: "R$ 38,90",
    category: "Doces",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=90",
    featured: false,
  },
];

const categories = [
  {
    number: "01",
    title: "Clássicas",
    description:
      "Os sabores que nunca saem de cena, preparados com ingredientes selecionados.",
  },
  {
    number: "02",
    title: "Especiais",
    description:
      "Combinações autorais para quem gosta de experimentar novos sabores.",
  },
  {
    number: "03",
    title: "Vegetarianas",
    description:
      "Ingredientes frescos e combinações pensadas para todos os gostos.",
  },
  {
    number: "04",
    title: "Doces",
    description:
      "Pizzas doces artesanais para fechar a experiência com muito sabor.",
  },
];

function Pizzaria() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [cart, setCart] = useState<{ name: string; price: string; quantity: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [introVisible, setIntroVisible] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);

  const enterSite = () => {
    if (introLeaving) return;
    setIntroLeaving(true);
    window.setTimeout(() => setIntroVisible(false), 850);
  };

  const filteredPizzas = useMemo(() => pizzas.filter((pizza) => {
    const matchesCategory = activeCategory === "Todas" || pizza.category === activeCategory;
    const query = search.trim().toLocaleLowerCase("pt-BR");
    const matchesSearch = !query || `${pizza.name} ${pizza.description} ${pizza.category}`.toLocaleLowerCase("pt-BR").includes(query);
    return matchesCategory && matchesSearch;
  }), [activeCategory, search]);

  const addToCart = (pizza: (typeof pizzas)[number]) => {
    setCart((current) => {
      const existing = current.find((item) => item.name === pizza.name);
      if (existing) return current.map((item) => item.name === pizza.name ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { name: pizza.name, price: pizza.price, quantity: 1 }];
    });
    setToast(`${pizza.name} adicionada ao pedido!`);
    window.setTimeout(() => setToast(""), 2400);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + Number(item.price.replace("R$ ", "").replace(".", "").replace(",", ".")) * item.quantity, 0);
  const money = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const sendOrder = () => {
    if (!cart.length) {
      setToast("Adicione uma pizza para começar seu pedido.");
      window.setTimeout(() => setToast(""), 2400);
      return;
    }
    const message = ["Olá! Quero fazer um pedido no Forno 27:", ...cart.map((item) => `${item.quantity}x ${item.name} — ${item.price}`), `Total parcial: ${money(cartTotal)}`].join("\n");
    window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pizzeria-page">
      {introVisible && (
        <section className={`forno-intro${introLeaving ? " is-leaving" : ""}`} aria-label="Abertura Forno 27">
          <div className="intro-grain" aria-hidden="true" />
          <div className="intro-light intro-light-one" aria-hidden="true" />
          <div className="intro-light intro-light-two" aria-hidden="true" />
          <div className="intro-topline"><span>ARTESANAL • AUTÊNTICO • FEITO COM TEMPO</span><span>EST. 2014</span></div>
          <div className="intro-content">
            <div className="intro-emblem" aria-hidden="true">
              <span className="intro-emblem-ring" />
              <span className="intro-emblem-number">27</span>
              <span className="intro-emblem-flame">✦</span>
            </div>
            <span className="intro-kicker"><i /> UMA EXPERIÊNCIA SAINDO DO FORNO</span>
            <h1 className="intro-title">FORNO <span>27</span></h1>
            <p className="intro-tagline">O tempo é o nosso ingrediente secreto.</p>
            <div className="intro-progress" aria-hidden="true"><span /></div>
            <button className="intro-enter" onClick={enterSite}>
              <span>ENTRAR NA EXPERIÊNCIA</span><b>↗</b>
            </button>
            <span className="intro-footnote">PIZZA ARTESANAL · MASSA DE FERMENTAÇÃO LENTA</span>
          </div>
          <div className="intro-bottomline"><span>FEITO À MÃO, COM PAIXÃO</span><span>GOIÂNIA · GO</span></div>
        </section>
      )}
      <header className="pizzeria-navbar">
        <a href="/pizzaria" className="pizzeria-logo">
          <span className="logo-mark">27</span>

          <span className="logo-name">
            FORNO
            <strong>27</strong>
          </span>
        </a>

        <nav>
          <a href="#cardapio">Cardápio</a>
          <a href="#historia">Nossa história</a>
          <a href="#processo">Nosso forno</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="nav-actions">
          <button className="nav-search-toggle" onClick={() => { setSearchOpen((open) => !open); document.getElementById("cardapio")?.scrollIntoView({ behavior: "smooth" }); }} aria-label="Buscar pizza">⌕</button>
          <button className="pizzeria-order-button cart-trigger" onClick={() => setCartOpen(true)}>
            Meu pedido <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </header>

      <main>
        <section className="pizzeria-hero">
          <div className="hero-red-shape"></div>

          <div className="pizzeria-hero-content">
            <span className="pizzeria-label">
              PIZZA ARTESANAL • DESDE 2014
            </span>

            <h1>
              Pizza boa
              <br />
              começa com
              <em> bons ingredientes.</em>
            </h1>

            <p>
              Massa de fermentação lenta, molho artesanal e ingredientes
              selecionados. Tudo preparado para colocar uma pizza de verdade
              na sua mesa.
            </p>

            <div className="pizzeria-hero-buttons">
              <a href="#cardapio" className="pizzeria-primary-button">
                Ver cardápio
              </a>

              <a href="#historia" className="pizzeria-outline-button">
                Conheça o Forno 27
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>48h</strong>
                <span>fermentação da massa</span>
              </div>

              <div>
                <strong>10+</strong>
                <span>anos de história</span>
              </div>

              <div>
                <strong>4.9</strong>
                <span>avaliação dos clientes</span>
              </div>
            </div>
          </div>

          <div className="pizzeria-hero-image">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1500&q=90"
              alt="Pizza artesanal"
            />

            <div className="hero-image-card">
              <span>MAIS PEDIDA</span>
              <strong>Pepperoni</strong>
              <small>R$ 47,90</small>
            </div>
          </div>
        </section>

        <section className="pizzeria-intro" id="historia">
          <div className="intro-number">01</div>

          <div className="intro-title">
            <span className="pizzeria-label">NOSSA HISTÓRIA</span>

            <h2>
              Uma paixão que
              <br />
              começou no
              <em> forno.</em>
            </h2>
          </div>

          <div className="intro-text">
            <p>
              O Forno 27 nasceu de uma ideia simples: fazer pizza com tempo,
              cuidado e ingredientes de verdade.
            </p>

            <p>
              Começamos pequenos e, ao longo dos anos, construímos uma cozinha
              onde cada etapa é feita respeitando o processo artesanal.
            </p>

            <p>
              Hoje continuamos acreditando na mesma coisa: uma boa pizza não
              precisa de complicação. Precisa de bons ingredientes e paixão
              pelo que fazemos.
            </p>
          </div>
        </section>

        <section className="pizzeria-menu" id="cardapio">
          <div className="pizzeria-section-heading">
            <div>
              <span className="pizzeria-label">O CARDÁPIO</span>

              <h2>Nossas pizzas</h2>
            </div>

            <p>
              Sabores clássicos, especiais, vegetarianos e doces preparados na
              hora, direto do nosso forno para você.
            </p>
          </div>

          <div className="menu-controls">
            <div className="category-filters" role="group" aria-label="Filtrar pizzas">
              {["Todas", "Clássicas", "Especiais", "Vegetarianas", "Doces", "Mais pedidas"].map((category) => (
                <button key={category} className={activeCategory === category ? "filter-pill active" : "filter-pill"} onClick={() => setActiveCategory(category)}>{category}<span>{activeCategory === category ? "✳" : "+"}</span></button>
              ))}
            </div>
            {searchOpen && <label className="pizza-search"><span>⌕</span><input autoFocus value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Qual sabor você está procurando?" /><button onClick={() => { setSearch(""); setSearchOpen(false); }} aria-label="Fechar busca">×</button></label>}
          </div>
          <div className="pizza-grid">
            {filteredPizzas.map((pizza) => (
              <article
                className={`pizza-card ${
                  pizza.featured ? "pizza-featured" : ""
                }`}
                data-category={pizza.category}
                key={pizza.name}
              >
                <div className="pizza-image">
                  <img
                    src={pizza.image}
                    alt={`Pizza ${pizza.name}`}
                  />

                  <span>{pizza.category}</span>
                </div>

                <div className="pizza-content">
                  <h3>{pizza.name}</h3>

                  <p>{pizza.description}</p>

                  <div className="pizza-bottom">
                    <strong>{pizza.price}</strong>

                    <button type="button" onClick={() => addToCart(pizza)} aria-label={`Adicionar ${pizza.name} ao pedido`}>Adicionar <span>+</span></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filteredPizzas.length === 0 && <div className="empty-menu"><span>🍕</span><h3>Esse sabor ainda não apareceu por aqui.</h3><p>Tente outro nome ou escolha uma categoria diferente.</p><button onClick={() => { setSearch(""); setActiveCategory("Todas"); }}>Ver todo o cardápio</button></div>}

          <div className="menu-bottom">
            <span>{filteredPizzas.length} {filteredPizzas.length === 1 ? "sabor encontrado" : "sabores encontrados"} · feito com carinho e forno quente.</span>
            <button className="text-order-link" onClick={() => setCartOpen(true)}>Revisar meu pedido ↗</button>
          </div>
        </section>

        <section className="pizza-categories">
          <div className="categories-intro">
            <span className="pizzeria-label">ESCOLHA SEU ESTILO</span>

            <h2>
              Tem pizza
              <br />
              para todo
              <em> mundo.</em>
            </h2>

            <p>
              Do sabor clássico à sobremesa, nosso cardápio foi pensado para
              diferentes momentos.
            </p>
          </div>

          <div className="categories-list">
            {categories.map((category) => (
              <article
                className="pizza-category-card"
                key={category.number}
              >
                <span>{category.number}</span>

                <div>
                  <h3>{category.title}</h3>

                  <p>{category.description}</p>
                </div>

                <strong>↗</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="pizza-process" id="processo">
          <div className="process-image">
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1300&q=90"
              alt="Pizza sendo preparada"
            />

            <div className="process-badge">
              <strong>48</strong>
              <span>
                horas de
                <br />
                fermentação
              </span>
            </div>
          </div>

          <div className="process-content">
            <span className="pizzeria-label">NOSSO PROCESSO</span>

            <h2>
              O segredo está
              <br />
              no <em>tempo.</em>
            </h2>

            <p>
              Nossa massa passa por um processo de fermentação lenta que
              resulta em uma pizza leve, saborosa e com textura especial.
            </p>

            <div className="process-steps">
              <div>
                <span>01</span>

                <div>
                  <strong>Farinha selecionada</strong>

                  <p>
                    Escolhemos ingredientes que fazem diferença desde o
                    primeiro passo.
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>

                <div>
                  <strong>Fermentação lenta</strong>

                  <p>
                    A massa descansa por até 48 horas para desenvolver sabor e
                    textura.
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>

                <div>
                  <strong>Forno quente</strong>

                  <p>
                    Cada pizza é assada na temperatura ideal para chegar à
                    mesa no ponto certo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pizza-quote">
          <span>“</span>

          <blockquote>
            Algumas coisas ficam melhores quando feitas com
            <em> calma.</em>
          </blockquote>

          <div></div>
        </section>

        <section className="pizza-reviews" id="avaliacoes">
          <div className="pizzeria-section-heading">
            <div>
              <span className="pizzeria-label">
                QUEM PROVOU, APROVOU
              </span>

              <h2>O que nossos clientes dizem</h2>
            </div>
          </div>

          <div className="reviews-grid">
            <article className="review-card">
              <div className="review-stars">★★★★★</div>

              <p>
                “A massa é simplesmente maravilhosa. Dá para perceber que os
                ingredientes são muito bem escolhidos.”
              </p>

              <div className="review-person">
                <span>MC</span>

                <div>
                  <strong>Mariana Costa</strong>
                  <small>Cliente Forno 27</small>
                </div>
              </div>
            </article>

            <article className="review-card review-featured">
              <div className="review-stars">★★★★★</div>

              <p>
                “Virou nossa pizzaria favorita. O sabor, o atendimento e a
                qualidade da pizza são incríveis.”
              </p>

              <div className="review-person">
                <span>RA</span>

                <div>
                  <strong>Rafael Almeida</strong>
                  <small>Cliente Forno 27</small>
                </div>
              </div>
            </article>

            <article className="review-card">
              <div className="review-stars">★★★★★</div>

              <p>
                “A pizza chegou perfeita. Massa leve, recheio generoso e muito
                saborosa.”
              </p>

              <div className="review-person">
                <span>BS</span>

                <div>
                  <strong>Beatriz Santos</strong>
                  <small>Cliente Forno 27</small>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="pizza-cta" id="contato">
          <div className="pizza-cta-image">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1500&q=90"
              alt="Pizza artesanal"
            />
          </div>

          <div className="pizza-cta-overlay"></div>

          <div className="pizza-cta-content">
            <span className="pizzeria-label">SUA PRÓXIMA PIZZA</span>

            <h2>
              O forno está
              <br />
              <em>aceso.</em>
            </h2>

            <p>
              Escolha seu sabor, reúna quem você gosta e deixe o resto com a
              gente.
            </p>

            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="pizza-order-large"
            >
              Fazer meu pedido
              <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <div className={cartOpen ? "cart-backdrop is-visible" : "cart-backdrop"} onClick={() => setCartOpen(false)} aria-hidden="true" />
      <aside className={cartOpen ? "cart-drawer is-open" : "cart-drawer"} aria-label="Meu pedido" aria-hidden={!cartOpen}>
        <div className="cart-drawer-head"><div><span className="pizzeria-label">FORNO 27 · SUA SELEÇÃO</span><h2>Seu pedido<span>.</span></h2></div><button onClick={() => setCartOpen(false)} aria-label="Fechar pedido">×</button></div>
        {cart.length ? <>
          <div className="cart-items">{cart.map((item) => <article className="cart-item" key={item.name}><div className="cart-item-icon">🍕</div><div className="cart-item-info"><strong>{item.name}</strong><span>{item.price}</span><div className="quantity-control"><button onClick={() => setCart((current) => current.flatMap((entry) => entry.name !== item.name ? [entry] : entry.quantity > 1 ? [{ ...entry, quantity: entry.quantity - 1 }] : []))}>−</button><span>{item.quantity}</span><button onClick={() => setCart((current) => current.map((entry) => entry.name === item.name ? { ...entry, quantity: entry.quantity + 1 } : entry))}>＋</button></div></div><strong className="cart-item-total">{money(Number(item.price.replace("R$ ", "").replace(".", "").replace(",", ".")) * item.quantity)}</strong></article>)}</div>
          <div className="cart-summary"><span>Subtotal</span><strong>{money(cartTotal)}</strong></div><p className="cart-note">Entrega e formas de pagamento são confirmadas pelo WhatsApp.</p><button className="cart-checkout" onClick={sendOrder}>Finalizar pelo WhatsApp <span>↗</span></button><button className="cart-clear" onClick={() => setCart([])}>Limpar pedido</button>
        </> : <div className="cart-empty"><span>🍕</span><h3>Seu próximo favorito começa aqui.</h3><p>Escolha os sabores que vão fazer parte da sua noite.</p><button onClick={() => { setCartOpen(false); document.getElementById("cardapio")?.scrollIntoView({ behavior: "smooth" }); }}>Explorar cardápio ↗</button></div>}
      </aside>
      {toast && <div className="pizza-toast" role="status"><span>✳</span>{toast}</div>}

      <footer className="pizzeria-footer">
        <div className="footer-pizzeria-main">
          <div className="pizzeria-footer-brand">
            <a href="/pizzaria" className="pizzeria-logo">
              <span className="logo-mark">27</span>

              <span className="logo-name">
                FORNO
                <strong>27</strong>
              </span>
            </a>

            <p>
              Pizza artesanal, ingredientes de verdade
              <br />
              e muito tempo de forno.
            </p>
          </div>

          <div className="pizzeria-footer-column">
            <span>MENU</span>

            <a href="#cardapio">Cardápio</a>
            <a href="#historia">Nossa história</a>
            <a href="#processo">Nosso forno</a>
            <a href="#avaliacoes">Avaliações</a>
          </div>

          <div className="pizzeria-footer-column">
            <span>CONTATO</span>

            <strong>(62) 0000-0000</strong>

            <a href="#contato">Fazer pedido</a>

            <span className="footer-address">
              Goiânia · Goiás
            </span>
          </div>

          <div className="pizzeria-footer-column">
            <span>HORÁRIO</span>

            <strong>Terça a Domingo</strong>

            <small>18h às 23h30</small>
          </div>
        </div>

        <div className="pizzeria-footer-bottom">
          <span>© 2026 Forno 27</span>
          <span>Projeto desenvolvido pela FlowUx</span>
        </div>
      </footer>
    </div>
  );
}

export default Pizzaria;
