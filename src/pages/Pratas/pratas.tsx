import React, { useEffect, useMemo, useState } from "react";
import "./pratas.css";

const products = [

  {
    name: "Anel Solitário Lumière",
    category: "Anéis",
    price: "R$ 189,90",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Colar Ponto de Luz",
    category: "Colares",
    price: "R$ 229,90",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Brinco Argola Classic",
    category: "Brincos",
    price: "R$ 149,90",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Pulseira Elo Delicado",
    category: "Pulseiras",
    price: "R$ 219,90",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Anel Aurora",
    category: "Anéis",
    price: "R$ 169,90",
    image:
      "https://br.pandora.net/dw/image/v2/BLTN_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw545cfdbb/productimages/main_rect_center/164334C01_RGB.jpg?sw=1200&sh=1200&sm=fit&sfrm=png&bgcolor=F5F5F5",
  },
  {
    name: "Colar Coração",
    category: "Colares",
    price: "R$ 199,90",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [

  {
    number: "01",
    title: "Anéis",
    description: "Detalhes delicados para marcar momentos.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    title: "Colares",
    description: "Elegância que acompanha você.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    title: "Brincos",
    description: "Peças para iluminar cada produção.",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "04",
    title: "Pulseiras",
    description: "Minimalismo com personalidade.",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85",
  },
];

const careItems = [

  {
    icon: "01",
    title: "Guarde com cuidado",
    text: "Mantenha suas peças em local seco e, de preferência, separadas para evitar riscos.",
  },
  {
    icon: "02",
    title: "Evite produtos químicos",
    text: "Perfumes, cremes e produtos de limpeza podem acelerar o processo de oxidação.",
  },
  {
    icon: "03",
    title: "Limpeza delicada",
    text: "Use uma flanela própria para prata e movimentos suaves para recuperar o brilho.",
  },
];

type Product = (typeof products)[number];
type CartItem = { product: Product; quantity: number };

function priceValue(price: string) {
  return Number(price.replace("R$", "").replace(/\./g, "").replace(",", ".").trim());
}

function Pratas() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [toast, setToast] = useState("");
  const [sort, setSort] = useState("featured");

  const whatsappNumber = "5500000000000";
  const whatsapp = `https://wa.me/${whatsappNumber}`;

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLocaleLowerCase("pt-BR");
    let list = products.filter((product) => {
      const matchesCategory = activeCategory === "Todas" || product.category === activeCategory;
      const matchesSearch = !term || `${product.name} ${product.category}`.toLocaleLowerCase("pt-BR").includes(term);
      return matchesCategory && matchesSearch;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => priceValue(a.price) - priceValue(b.price));
    if (sort === "price-desc") list = [...list].sort((a, b) => priceValue(b.price) - priceValue(a.price));
    return list;
  }, [activeCategory, search, sort]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + priceValue(item.product.price) * item.quantity, 0);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(""), 2400);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    document.body.style.overflow = cartOpen || quickView ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [cartOpen, quickView]);

  function addToCart(product: Product) {
    setCart((current) => {
      const existing = current.find((item) => item.product.name === product.name);
      if (existing) {
        return current.map((item) => item.product.name === product.name ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...current, { product, quantity: 1 }];
    });
    setToast(`${product.name} adicionado à sua sacola`);
  }

  function changeQuantity(name: string, change: number) {
    setCart((current) => current
      .map((item) => item.product.name === name ? { ...item, quantity: item.quantity + change } : item)
      .filter((item) => item.quantity > 0));
  }

  function toggleFavorite(name: string) {
    setFavorites((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  }

  function finishOrder() {
    if (!cart.length) return;
    const lines = cart.map((item) => `${item.quantity}x ${item.product.name} — ${item.product.price}`);
    const message = encodeURIComponent(`Olá, Aurora 925! Quero consultar a disponibilidade destas peças:\n${lines.join("\n")}\nTotal estimado: R$ ${cartTotal.toFixed(2).replace(".", ",")}`);
    window.open(`${whatsapp}?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="pratas-page">
      <div className="pratas-topline"><span>✦</span> JOIAS PARA A SUA HISTÓRIA <span>ENVIO E ATENDIMENTO SOB CONSULTA</span></div>
      <header className="pratas-header">
        <a className="pratas-logo" href="#inicio" aria-label="Aurora 925 início"><span>AURORA<i>✦</i></span><small>925 JEWELRY</small></a>
        <nav className="pratas-nav"><a href="#colecao">Coleção</a><a href="#categorias">Categorias</a><a href="#sobre">A Aurora</a><a href="#cuidados">Cuidados</a></nav>
        <div className="pratas-header-actions">
          <button className="pratas-icon-button" aria-label="Pesquisar joias" onClick={() => { setSearchOpen((value) => !value); document.getElementById("colecao")?.scrollIntoView({ behavior: "smooth" }); }}><span>⌕</span></button>
          <button className="pratas-bag-button" onClick={() => setCartOpen(true)}>Sacola <span>{cartCount}</span></button>
        </div>
      </header>

      <main>
        <section className="pratas-hero" id="inicio">
          <div className="pratas-hero-grain" />
          <div className="pratas-hero-content">
            <p className="pratas-eyebrow"><span className="pratas-eyebrow-dot" /> PRATA 925 · DESIGN ATEMPORAL</p>
            <h1>O brilho que<br /><em>permanece.</em></h1>
            <p className="pratas-hero-description">Joias pensadas para acompanhar sua história. Detalhes que iluminam o cotidiano e transformam o simples em extraordinário.</p>
            <div className="pratas-hero-actions"><a href="#colecao" className="pratas-button pratas-button-dark">Descobrir a coleção <span>↗</span></a><a href="#sobre" className="pratas-text-link">Conheça a Aurora <span>→</span></a></div>
            <div className="pratas-hero-details"><div><strong>925</strong><span>Prata de lei</span></div><div><strong>∞</strong><span>Estilo atemporal</span></div><div><strong>♡</strong><span>Feito para presentear</span></div></div>
          </div>
          <div className="pratas-hero-visual">
            <div className="pratas-orbit pratas-orbit-one" /><div className="pratas-orbit pratas-orbit-two" />
            <div className="pratas-hero-image"><img src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=90" alt="Composição de joias delicadas" /></div>
            <div className="pratas-floating-note"><span>THE ART OF</span><strong>being<br />yourself.</strong><i>✦</i></div>
            <div className="pratas-hero-caption"><span>01 / 04</span><span>ESSENTIALS COLLECTION</span></div>
          </div>
          <a href="#colecao" className="pratas-scroll-cue"><span /> DESLIZE PARA DESCOBRIR</a>
        </section>

        <section className="pratas-marquee" aria-label="Manifesto Aurora"><div className="pratas-marquee-track">{Array.from({ length: 4 }, (_, index) => <React.Fragment key={index}><span>925 STERLING SILVER</span><b>✦</b><span>FEITO PARA DURAR</span><b>✦</b><span>SEU BRILHO, SUAS REGRAS</span><b>✦</b></React.Fragment>)}</div></section>

        <section className="pratas-collection-section" id="colecao">
          <div className="pratas-section-heading"><div><p className="pratas-eyebrow">SELEÇÃO AURORA</p><h2>Peças que falam<br /><em>por você.</em></h2></div><p>Escolha sua nova peça favorita. Explore, salve para depois ou adicione à sacola para montar sua seleção especial.</p></div>
          {searchOpen && <div className="pratas-search-panel"><label htmlFor="pratas-search">Encontre sua próxima joia</label><input id="pratas-search" autoFocus value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar anéis, colares, brincos..." /><button onClick={() => { setSearch(""); setSearchOpen(false); }}>Fechar ×</button></div>}
          <div className="pratas-toolbar"><div className="pratas-filter-list">{["Todas", "Anéis", "Colares", "Brincos", "Pulseiras"].map((category) => <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><label className="pratas-sort">Ordenar<select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Seleção Aurora</option><option value="price-asc">Menor preço</option><option value="price-desc">Maior preço</option></select></label></div>
          <div className="pratas-results-line"><span>{filteredProducts.length} peças selecionadas</span><span>{favorites.length ? `${favorites.length} favorita(s) salvas` : "Encontre a peça que combina com você"}</span></div>
          <div className="pratas-products-grid">
            {filteredProducts.map((product, index) => <article className="pratas-product-card" key={product.name} style={{ animationDelay: `${index * 70}ms` }}>
              <div className="pratas-product-image" onClick={() => setQuickView(product)} role="button" tabIndex={0} onKeyDown={(event) => event.key === "Enter" && setQuickView(product)}>
                <img src={product.image} alt={product.name} loading="lazy" />
                {index < 2 && activeCategory === "Todas" && <span className="pratas-product-badge">ESCOLHA AURORA</span>}
                <button className={`pratas-favorite-button ${favorites.includes(product.name) ? "is-favorite" : ""}`} aria-label={favorites.includes(product.name) ? `Remover ${product.name} dos favoritos` : `Salvar ${product.name} nos favoritos`} onClick={(event) => { event.stopPropagation(); toggleFavorite(product.name); }}>{favorites.includes(product.name) ? "♥" : "♡"}</button>
                <button className="pratas-quick-view" onClick={(event) => { event.stopPropagation(); setQuickView(product); }}>Ver detalhes <span>↗</span></button>
              </div>
              <div className="pratas-product-info"><span className="pratas-product-category">{product.category}</span><h3>{product.name}</h3><div className="pratas-product-bottom"><strong>{product.price}</strong><button onClick={() => addToCart(product)}>Adicionar <span>＋</span></button></div></div>
            </article>)}
          </div>
          {filteredProducts.length === 0 && <div className="pratas-empty-state"><span>✦</span><h3>Nenhuma joia encontrada</h3><p>Tente outro nome ou escolha uma categoria diferente.</p><button onClick={() => { setSearch(""); setActiveCategory("Todas"); }}>Ver coleção completa</button></div>}
        </section>

        <section className="pratas-categories-section" id="categorias">
          <div className="pratas-section-heading pratas-section-heading-compact"><div><p className="pratas-eyebrow">EXPLORE POR DETALHE</p><h2>Encontre sua <em>assinatura.</em></h2></div><p>Uma combinação perfeita começa com uma peça que tem a sua cara.</p></div>
          <div className="pratas-categories-grid">{categories.map((category) => <button className="pratas-category-card" key={category.title} onClick={() => { setActiveCategory(category.title); document.getElementById("colecao")?.scrollIntoView({ behavior: "smooth" }); }}><img src={category.image} alt={category.title} loading="lazy" /><span className="pratas-category-shade" /><span className="pratas-category-number">{category.number}</span><span className="pratas-category-content"><strong>{category.title}</strong><small>{category.description}</small><b>Explorar coleção ↗</b></span></button>)}</div>
        </section>

        <section className="pratas-manifesto-section" id="sobre">
          <div className="pratas-manifesto-image"><img src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1100&q=90" alt="Detalhe de joia Aurora" loading="lazy" /><div className="pratas-manifesto-stamp">A<br />925</div></div>
          <div className="pratas-manifesto-content"><p className="pratas-eyebrow">A AURORA</p><h2>Menos excesso.<br />Mais <em>essência.</em></h2><p>A Aurora nasceu para valorizar a beleza dos detalhes. Uma experiência de joalheria contemporânea onde cada peça pode fazer parte da sua rotina e da sua história.</p><p>Linhas minimalistas, brilho sofisticado e versatilidade para você criar combinações únicas — do seu jeito, no seu tempo.</p><div className="pratas-manifesto-signature"><span>AURORA</span><small>925 JEWELRY</small></div></div>
        </section>

        <section className="pratas-benefits-section"><div className="pratas-benefit"><span>✦</span><div><strong>Prata 925</strong><p>Material de qualidade para suas joias.</p></div></div><div className="pratas-benefit"><span>◇</span><div><strong>Design versátil</strong><p>Peças para combinar em diferentes ocasiões.</p></div></div><div className="pratas-benefit"><span>□</span><div><strong>Embalagem especial</strong><p>Seu pedido preparado com cuidado.</p></div></div><div className="pratas-benefit"><span>↗</span><div><strong>Atendimento próximo</strong><p>Ajuda para escolher sua próxima peça.</p></div></div></section>

        <section className="pratas-care-section" id="cuidados"><div className="pratas-care-intro"><p className="pratas-eyebrow">GUIA AURORA</p><h2>Cuide do seu <em>brilho.</em></h2><p>Pequenos cuidados ajudam suas peças a continuarem lindas por muito mais tempo.</p></div><div className="pratas-care-list">{careItems.map((item) => <div className="pratas-care-item" key={item.icon}><span>{item.icon}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div></section>

        <section className="pratas-testimonial-section"><div className="pratas-quote-mark">“</div><blockquote>Uma joia não precisa chamar atenção.<br />Ela precisa <em>pertencer a você.</em></blockquote><p>— AURORA 925</p></section>
        <section className="pratas-cta-section"><div><p className="pratas-eyebrow">SUA PRÓXIMA PEÇA</p><h2>Encontre algo que<br /><em>tenha a sua cara.</em></h2><p>Fale com a Aurora e descubra as peças disponíveis.</p></div><a href={whatsapp} target="_blank" rel="noreferrer" className="pratas-button pratas-button-dark">Falar com a Aurora <span>↗</span></a></section>
      </main>

      <footer className="pratas-footer"><a className="pratas-logo" href="#inicio"><span>AURORA<i>✦</i></span><small>925 JEWELRY</small></a><div className="pratas-footer-links"><a href="#inicio">Início</a><a href="#colecao">Coleção</a><a href="#categorias">Categorias</a><a href="#cuidados">Cuidados</a></div><div className="pratas-footer-social"><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a></div><p className="pratas-footer-copy">© 2026 Aurora 925 · Desenvolvido pela FlowUx</p></footer>

      {cartOpen && <div className="pratas-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setCartOpen(false)}><aside className="pratas-cart-drawer" aria-label="Sua sacola"><div className="pratas-drawer-heading"><div><p className="pratas-eyebrow">SUA SELEÇÃO</p><h2>Minha sacola <span>({cartCount})</span></h2></div><button aria-label="Fechar sacola" onClick={() => setCartOpen(false)}>×</button></div>
        {cart.length === 0 ? <div className="pratas-cart-empty"><span>♡</span><h3>Sua sacola está esperando</h3><p>Adicione uma joia que tenha a sua cara.</p><button onClick={() => setCartOpen(false)}>Explorar coleção</button></div> : <><div className="pratas-cart-items">{cart.map((item) => <div className="pratas-cart-item" key={item.product.name}><img src={item.product.image} alt="" /><div className="pratas-cart-item-info"><span>{item.product.category}</span><strong>{item.product.name}</strong><b>{item.product.price}</b><div className="pratas-quantity"><button aria-label="Diminuir quantidade" onClick={() => changeQuantity(item.product.name, -1)}>−</button><span>{item.quantity}</span><button aria-label="Aumentar quantidade" onClick={() => changeQuantity(item.product.name, 1)}>＋</button></div></div><button className="pratas-remove-item" aria-label="Remover item" onClick={() => changeQuantity(item.product.name, -item.quantity)}>×</button></div>)}</div><div className="pratas-cart-footer"><div><span>Subtotal estimado</span><strong>R$ {cartTotal.toFixed(2).replace(".", ",")}</strong></div><p>Disponibilidade e entrega serão confirmadas no atendimento.</p><button onClick={finishOrder}>Consultar e finalizar no WhatsApp ↗</button></div></>}
      </aside></div>}

      {quickView && <div className="pratas-modal-backdrop pratas-quick-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setQuickView(null)}><section className="pratas-quick-modal" aria-label={`Detalhes de ${quickView.name}`}><button className="pratas-quick-close" aria-label="Fechar detalhes" onClick={() => setQuickView(null)}>×</button><img src={quickView.image} alt={quickView.name} /><div className="pratas-quick-info"><p className="pratas-eyebrow">{quickView.category}</p><h2>{quickView.name}</h2><strong>{quickView.price}</strong><p>Uma peça delicada para completar sua combinação ou marcar um momento especial.</p><button onClick={() => { addToCart(quickView); setQuickView(null); setCartOpen(true); }}>Adicionar à sacola <span>＋</span></button><button className="pratas-quick-fav" onClick={() => toggleFavorite(quickView.name)}>{favorites.includes(quickView.name) ? "♥ Salvo nos favoritos" : "♡ Salvar nos favoritos"}</button></div></section></div>}

      {toast && <div className="pratas-toast" role="status"><span>✓</span>{toast}</div>}
    </div>
  );
}

export default Pratas;
