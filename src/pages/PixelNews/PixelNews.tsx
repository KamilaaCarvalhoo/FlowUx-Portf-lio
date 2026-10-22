import { useMemo, useState } from "react";
import "./PixelNews.css";
import PixelNewsNitro from "./PixelNewsNitro";

type News = { id: number; category: string; title: string; description: string; image: string; time: string; views: string };

const images = {
    hero: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90",
    gta: "https://images.unsplash.com/photo-1603481546238-487240415921?auto=format&fit=crop&w=500&q=85",
    minecraft: "https://images.unsplash.com/photo-1607513746994-51f730a44832?auto=format&fit=crop&w=500&q=85",
    fortnite: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=700&q=85",
    valorant: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=500&q=85",
    console: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=500&q=85",
    rpg: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=85",
    action: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85",
    gpu: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=85",
    esports: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85",
    free1: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=500&q=85",
    free2: "https://images.unsplash.com/photo-1603481546238-487240415921?auto=format&fit=crop&w=500&q=85",
    free3: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=85",
    free4: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=500&q=85",
};

const news: News[] = [
    { id: 1, category: "LANÇAMENTOS", title: "Novo RPG de mundo aberto promete revolucionar o gênero em 2026", description: "Com gráficos impressionantes e um mapa gigante, o jogo já está entre os mais aguardados do ano.", image: images.rpg, time: "Hoje", views: "1,3 mil" },
    { id: 2, category: "REVIEWS", title: "Análise: um dos melhores jogos de ação dos últimos anos", description: "Jogabilidade intensa, narrativa envolvente e gráficos de última geração. Confira nossa análise.", image: images.action, time: "Ontem", views: "980" },
    { id: 3, category: "HARDWARE", title: "Placas de vídeo: qual modelo escolher para jogar em 2026?", description: "Comparativo dos principais modelos para diferentes perfis de jogadores.", image: images.gpu, time: "2 dias atrás", views: "1,1 mil" },
    { id: 4, category: "LANÇAMENTOS", title: "Os lançamentos mais aguardados do ano", description: "Veja os títulos que prometem movimentar o calendário gamer e o que já sabemos sobre eles.", image: images.console, time: "3 dias atrás", views: "860" },
    { id: 5, category: "E-SPORTS", title: "Como os times estão se preparando para a temporada competitiva", description: "Estratégias, mudanças de elenco e os campeonatos para acompanhar nesta temporada.", image: images.esports, time: "3 dias atrás", views: "740" },
    { id: 6, category: "DICAS", title: "Dicas para melhorar o desempenho dos seus jogos no PC", description: "Ajustes de sistema e gráficos que podem ajudar a ter uma experiência mais estável.", image: images.gpu, time: "4 dias atrás", views: "690" },
    { id: 7, category: "REVIEWS", title: "Vale a pena jogar os grandes lançamentos recentes?", description: "Analisamos pontos fortes, desempenho e experiência para ajudar na sua escolha.", image: images.action, time: "5 dias atrás", views: "610" },
    { id: 8, category: "POR JOGO", title: "Minecraft: ideias para sua próxima aventura", description: "Explore possibilidades de construção, sobrevivência e desafios para jogar com amigos.", image: images.minecraft, time: "5 dias atrás", views: "580" },
    { id: 9, category: "GRATUITOS", title: "Jogos gratuitos para adicionar à sua biblioteca", description: "Uma seleção de jogos free-to-play para experimentar sem pagar pelo acesso inicial.", image: images.free1, time: "6 dias atrás", views: "530" }
];

const trending = [
    { title: "GTA VI: novos detalhes agitam a comunidade", views: "2,4 mi visualizações", image: images.gta },
    { title: "Minecraft recebe grande atualização com novos biomas", views: "1,8 mi visualizações", image: images.minecraft },
    { title: "Fortnite revela conteúdo da próxima temporada", views: "1,5 mi visualizações", image: images.fortnite },
    { title: "Valorant: mudanças trazem nova estratégia para o competitivo", views: "1,2 mi visualizações", image: images.valorant },
    { title: "Novo console da Nintendo é oficialmente anunciado", views: "980 mil visualizações", image: images.console }
];

const categories = [
    { icon: "🚀", title: "LANÇAMENTOS", sub: "Novos jogos e datas de estreia", color: "cyan" },
    { icon: "🏆", title: "E-SPORTS", sub: "Campeonatos e equipes", color: "pink" },
    { icon: "▦", title: "HARDWARE", sub: "PC, consoles e periféricos", color: "cyan" },
    { icon: "⭐", title: "REVIEWS", sub: "Análises e notas da redação", color: "purple" },
    { icon: "💡", title: "DICAS", sub: "Guias e tutoriais", color: "green" },
    { icon: "🎮", title: "POR JOGO", sub: "Conteúdo por título", color: "pink" },
    { icon: "🎁", title: "GRATUITOS", sub: "Jogos grátis e promoções", color: "cyan" },
    { icon: "👥", title: "COMUNIDADE", sub: "Enquetes e debates", color: "purple" },
    { icon: "📊", title: "RANKINGS", sub: "Os melhores jogos", color: "cyan" },
    { icon: "🗓️", title: "CALENDÁRIO", sub: "Datas e eventos", color: "yellow" }
];

const freeGames = [
    { title: "Fortnite", image: images.free1, url: "https://www.fortnite.com/" },
    { title: "Apex Legends", image: images.free2, url: "https://www.ea.com/games/apex-legends" },
    { title: "Genshin Impact", image: images.free3, url: "https://genshin.hoyoverse.com/" },
    { title: "Rocket League", image: images.free4, url: "https://www.rocketleague.com/" },
    { title: "The Finals", image: images.fortnite, url: "https://www.reachthefinals.com/" }
];

const schedule = [
    { title: "Monster Hunter Wilds", date: "28 FEV 2026", platforms: "PS5 · XBOX · PC", image: images.rpg },
    { title: "Metroid Prime 4", date: "15 MAR 2026", platforms: "Nintendo Switch", image: images.console },
    { title: "Assassin’s Creed Red", date: "20 MAR 2026", platforms: "PS5 · XBOX · PC", image: images.action },
    { title: "Fable", date: "10 ABR 2026", platforms: "XBOX · PC", image: images.gta }
];

export default function PixelNews() {
    const [showIntro, setShowIntro] = useState(true);
    const [active, setActive] = useState("Início");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("Todas");
    const [selectedArticle, setSelectedArticle] = useState<News | null>(null);
    const [showAll, setShowAll] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [selectedVote, setSelectedVote] = useState<string | null>(null);
    const [submittedVote, setSubmittedVote] = useState<string | null>(null);
    const [voteCount, setVoteCount] = useState(2400);
    const [voteCounts, setVoteCounts] = useState<Record<string, number>>({ "GTA VI": 672, Minecraft: 528, Fortnite: 432, Valorant: 384, Outro: 384 });
    const [notice, setNotice] = useState<string | null>(null);

    const filteredNews = useMemo(() => {
        const term = search.trim().toLocaleLowerCase("pt-BR");
        return news.filter(item => {
            const matchesSearch = !term || `${item.title} ${item.category} ${item.description}`.toLocaleLowerCase("pt-BR").includes(term);
            const matchesCategory = category === "Todas" || item.category === category;
            return matchesSearch && matchesCategory;
        });
    }, [search, category]);

    const visibleNews = showAll ? filteredNews : filteredNews.slice(0, 3);
    const totalVotes = Object.values(voteCounts).reduce((sum, count) => sum + count, 0);
    const pollOptions = ["GTA VI", "Minecraft", "Fortnite", "Valorant", "Outro"];
    const getPercent = (name: string) => totalVotes ? Math.round((voteCounts[name] / totalVotes) * 100) : 0;

    const goTo = (label: string, id: string) => {
        setActive(label);
        if (id === "noticias" && label !== "Notícias") {
            const map: Record<string, string> = { "Lançamentos": "LANÇAMENTOS", "Reviews": "REVIEWS", "Hardware": "HARDWARE", "Dicas": "DICAS", "Por Jogo": "POR JOGO" };
            setCategory(map[label] ?? "Todas");
            setSearch("");
        }
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const chooseCategory = (title: string) => {
        if (title === "COMUNIDADE") { goTo("Comunidade", "comunidade"); return; }
        if (title === "E-SPORTS") { goTo("E-sports", "esports"); return; }
        if (title === "GRATUITOS") { setCategory("GRATUITOS"); setSearch(""); goTo("Gratuitos", "gratuitos"); return; }
        if (title === "CALENDÁRIO") { goTo("Calendário", "calendario"); return; }
        if (title === "RANKINGS") { setNotice("Ranking editorial: em breve você poderá conferir listas e notas detalhadas da redação."); return; }
        const map: Record<string, string> = { "LANÇAMENTOS": "LANÇAMENTOS", "HARDWARE": "HARDWARE", "REVIEWS": "REVIEWS", "DICAS": "DICAS", "POR JOGO": "POR JOGO" };
        setCategory(map[title] ?? "Todas");
        setSearch("");
        goTo(title, "noticias");
    };

    const submitVote = () => {
        if (!selectedVote || submittedVote) return;
        setVoteCounts(prev => ({ ...prev, [selectedVote]: (prev[selectedVote] ?? 0) + 1 }));
        setVoteCount(prev => prev + 1);
        setSubmittedVote(selectedVote);
    };

    return <>
        {showIntro && <PixelNewsNitro onFinish={() => setShowIntro(false)} />}
        <main className="pn-site">
            <header className="pn-header">
                <a className="pn-brand" href="#inicio" onClick={() => { setActive("Início"); setCategory("Todas"); setSearch(""); }}><span className="pn-brand-icon">🎮</span><span><strong><i>PIXEL</i> <b>NEWS</b></strong><small>SEU PORTAL GAMER</small></span></a>
                <nav className="pn-nav" aria-label="Navegação principal">
                    {[["⌂", "Início", "inicio"], ["▤", "Notícias", "noticias"], ["🚀", "Lançamentos", "noticias"], ["☆", "Reviews", "noticias"], ["♧", "E-sports", "esports"], ["▣", "Hardware", "noticias"], ["✧", "Dicas", "noticias"], ["🎮", "Por Jogo", "noticias"], ["♢", "Promoções", "gratuitos"], ["♙", "Comunidade", "comunidade"]].map(([icon, label, id]) => <button key={label} className={active === label ? "is-active" : ""} onClick={() => { if (label === "Início") { setCategory("Todas"); setSearch(""); } goTo(label, id); }}><span>{icon}</span>{label}</button>)}
                </nav>
                <label className="pn-search"><input value={search} onChange={e => { setSearch(e.target.value); setCategory("Todas"); }} onFocus={() => setActive("Notícias")} onKeyDown={e => { if (e.key === "Enter") goTo("Notícias", "noticias"); }} placeholder="Buscar notícias, jogos..." /><button type="button" aria-label="Buscar" onClick={() => goTo("Notícias", "noticias")}>⌕</button></label>
                <div className="pn-header-action"><button className="pn-icon-btn" aria-label="Notificações" onClick={() => { setNotificationsOpen(v => !v); setProfileOpen(false); }}>♧<em /></button>{notificationsOpen && <div className="pn-popover"><strong>Notificações</strong><p>🎮 Bem-vinda à Pixel News!</p><p>📰 Confira as últimas notícias e novidades gamer.</p><button onClick={() => setNotificationsOpen(false)}>Fechar</button></div>}</div>
                <div className="pn-header-action"><button className="pn-avatar" aria-label="Perfil" onClick={() => { setProfileOpen(v => !v); setNotificationsOpen(false); }}>●</button>{profileOpen && <div className="pn-popover pn-profile-popover"><strong>Perfil gamer</strong><p>Visitante Pixel News</p><small>Entre para salvar favoritos e participar da comunidade.</small><button onClick={() => { setProfileOpen(false); setNotice("O cadastro de usuário será conectado em uma próxima etapa."); }}>Conhecer recursos</button></div>}</div>
            </header>

            <div className="pn-main" id="inicio">
                <section className="pn-feature-row">
                    <article className="pn-hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(2,5,20,.97) 0%,rgba(2,5,20,.78) 38%,rgba(2,5,20,.05) 100%),url(${images.hero})` }}>
                        <div className="pn-hero-content"><span className="pn-pill">DESTAQUE</span><p className="pn-eyebrow">O UNIVERSO GAMER EM UM SÓ LUGAR</p><h1>O FUTURO DOS GAMES <strong>COMEÇA AQUI</strong></h1><p className="pn-hero-copy">Novos mundos, tecnologias incríveis e experiências que vão transformar a forma de jogar. Descubra os principais lançamentos que estão chegando.</p><button className="pn-primary" onClick={() => { setCategory("Todas"); goTo("Notícias", "noticias"); }}>LER MATÉRIA <span>→</span></button></div>
                        <div className="pn-slide-dots"><span /><span /><span /></div>
                    </article>
                    <aside className="pn-panel pn-trending"><div className="pn-panel-heading"><h2><span>🔥</span> NOTÍCIAS <b>EM ALTA</b></h2><button onClick={() => { setShowAll(true); setCategory("Todas"); goTo("Notícias", "noticias"); }}>Ver todas →</button></div><div className="pn-trending-list">{trending.map((item, i) => <button className="pn-trend" key={item.title} onClick={() => setSelectedArticle({ id: 100 + i, category: "EM ALTA", title: item.title, description: `Notícia em alta na comunidade gamer, com ${item.views}. Acompanhe a Pixel News para mais novidades.`, image: item.image, time: "Em alta", views: item.views })}><span className={`pn-rank rank-${i + 1}`}>{i + 1}</span><img src={item.image} alt="" /><span className="pn-trend-text"><strong>{item.title}</strong><small>◷ {item.views}</small></span></button>)}</div></aside>
                </section>

                <section className="pn-categories" id="categorias" aria-label="Categorias">{categories.map(c => <button key={c.title} className={`pn-category ${c.color}`} onClick={() => chooseCategory(c.title)}><span>{c.icon}</span><strong>{c.title}</strong><small>{c.sub}</small></button>)}</section>

                <section className="pn-middle-grid">
                    <section className="pn-panel pn-latest" id="noticias"><div className="pn-panel-heading"><h2><span>▤</span> ÚLTIMAS NOTÍCIAS{category !== "Todas" && <small className="pn-filter-label"> · {category}</small>}</h2><div className="pn-heading-actions">{category !== "Todas" && <button onClick={() => setCategory("Todas")}>Limpar filtro ×</button>}<button onClick={() => setShowAll(v => !v)}>{showAll ? "Mostrar menos ↑" : "Ver todas →"}</button></div></div><div className="pn-news-grid">{visibleNews.map(item => <button className="pn-news-card" key={item.id} onClick={() => setSelectedArticle(item)}><span className="pn-news-image"><img src={item.image} alt="" /><span>{item.category}</span></span><span className="pn-news-body"><strong>{item.title}</strong><span>{item.description}</span><small>◷ {item.time} · {item.views} visualizações</small></span></button>)}{visibleNews.length === 0 && <p className="pn-empty">Nenhuma notícia encontrada para “{search || category}”. <button onClick={() => { setSearch(""); setCategory("Todas"); }}>Limpar busca</button></p>}</div></section>
                    <section className="pn-panel pn-esports" id="esports"><div className="pn-panel-heading"><h2><span>🏆</span> E-SPORTS <b>EM DESTAQUE</b></h2><button onClick={() => setNotice("Calendário competitivo: acompanhe os canais oficiais dos torneios para conferir horários e transmissões confirmadas.")}>Ver todas →</button></div><div className="pn-esports-visual" style={{ backgroundImage: `linear-gradient(0deg,rgba(3,4,20,.96),rgba(3,4,20,.04) 85%),url(${images.esports})` }}><div className="pn-esports-copy"><h3>FINAL DO CAMPEONATO GLOBAL</h3><p>AS MELHORES EQUIPES DO MUNDO EM UMA DISPUTA ÉPICA</p><div><button className="pn-primary" onClick={() => setNotice("A transmissão ao vivo ainda não está conectada. Use os canais oficiais do campeonato para assistir às partidas confirmadas.")}>ACOMPANHAR →</button><span className="pn-live">● DESTAQUE</span><span className="pn-games">VALORANT · CS2 · LOL · FORTNITE · DOTA 2</span></div></div></div></section>
                </section>

                <section className="pn-bottom-grid">
                    <section className="pn-panel pn-free" id="gratuitos"><div className="pn-panel-heading"><h2><span>🎁</span> JOGOS GRATUITOS <b>E PROMOÇÕES</b></h2><button onClick={() => { setCategory("GRATUITOS"); goTo("Notícias", "noticias"); }}>Ver mais →</button></div><div className="pn-free-list">{freeGames.map(game => <button className="pn-free-card" key={game.title} onClick={() => window.open(game.url, "_blank", "noopener,noreferrer")} aria-label={`Abrir site oficial de ${game.title}`}><img src={game.image} alt="" /><strong>{game.title}</strong><span>Ver jogo ↗</span></button>)}</div></section>
                    <section className="pn-panel pn-community" id="comunidade"><div className="pn-panel-heading"><h2><span>👥</span> COMUNIDADE <b>PIXEL NEWS</b></h2><button onClick={() => setNotice("A área de comunidade está pronta para receber comentários e debates quando houver um serviço de usuários conectado.")}>Ver todas →</button></div><h3>Qual é o seu jogo favorito atualmente?</h3><div className="pn-poll">{pollOptions.map(name => <button className={`pn-poll-option ${selectedVote === name ? "selected" : ""}`} key={name} onClick={() => !submittedVote && setSelectedVote(name)} disabled={!!submittedVote}><span className="pn-radio" /><span className="pn-poll-name">{name}</span><span className="pn-poll-bar"><i style={{ width: `${getPercent(name)}%` }} /></span><b>{getPercent(name)}%</b></button>)}</div><div className="pn-poll-footer"><small>◉ {voteCount.toLocaleString("pt-BR")} votos{submittedVote ? ` · Seu voto: ${submittedVote}` : ""}</small><button className="pn-primary" onClick={submitVote} disabled={!selectedVote || !!submittedVote}>{submittedVote ? "VOTO REGISTRADO ✓" : "VOTAR"}</button></div></section>
                    <section className="pn-panel pn-calendar" id="calendario"><div className="pn-panel-heading"><h2><span>🗓️</span> CALENDÁRIO <b>DE LANÇAMENTOS</b></h2><button onClick={() => setNotice("As datas exibidas são conteúdo demonstrativo e devem ser confirmadas nos canais oficiais dos jogos.")}>Ver todas →</button></div><div className="pn-schedule">{schedule.map(item => <button className="pn-schedule-item" key={item.title} onClick={() => setNotice(`${item.title}: data listada no calendário ${item.date}. Confirme a data e as plataformas nos canais oficiais antes de comprar.`)}><img src={item.image} alt="" /><span className="pn-schedule-name">{item.title}<small>{item.platforms}</small></span><span className="pn-date">{item.date}</span></button>)}</div></section>
                </section>
                <footer className="pn-footer"><a className="pn-footer-brand" href="#inicio" onClick={() => { setCategory("Todas"); setSearch(""); }}>🎮 PIXEL <b>NEWS</b></a><span>Seu portal gamer · Notícias, análises e novidades do universo dos games.</span><span>© 2026 Pixel News</span></footer>
            </div>

            {selectedArticle && <div className="pn-modal-backdrop" role="presentation" onClick={() => setSelectedArticle(null)}><article className="pn-article-modal" role="dialog" aria-modal="true" aria-label={selectedArticle.title} onClick={e => e.stopPropagation()}><button className="pn-modal-close" onClick={() => setSelectedArticle(null)} aria-label="Fechar notícia">×</button><img src={selectedArticle.image} alt="" /><span className="pn-pill">{selectedArticle.category}</span><h2>{selectedArticle.title}</h2><p>{selectedArticle.description}</p><small>Publicado: {selectedArticle.time} · {selectedArticle.views} visualizações</small><p>Continue acompanhando a Pixel News para novidades, análises e atualizações do universo gamer. Este conteúdo é demonstrativo e pode ser substituído por uma matéria editorial completa.</p><button className="pn-primary" onClick={() => setSelectedArticle(null)}>VOLTAR ÀS NOTÍCIAS</button></article></div>}
            {notice && <div className="pn-modal-backdrop" role="presentation" onClick={() => setNotice(null)}><section className="pn-notice-modal" role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}><button className="pn-modal-close" onClick={() => setNotice(null)} aria-label="Fechar aviso">×</button><span className="pn-brand-icon">🎮</span><h2>Pixel News</h2><p>{notice}</p><button className="pn-primary" onClick={() => setNotice(null)}>ENTENDI</button></section></div>}
        </main>
    </>;
}
