// Sections.jsx — layout sections for the thiago.dev portfolio kit.
// Order follows the site outline: Apresentação · Projetos · Onde isso roda ·
// Stacks que uso · Gancho · Contato para trabalho.
const DS = window.ThiagoDevDesignSystem_3d553a;
const { Wordmark, Eyebrow, Button, ProjectCard, ArchStat, ContactBox, Tag, Badge } = DS;

function Header({ onNav }) {
  const links = [["projetos", "Projetos"], ["arquitetura", "Onde roda"], ["stacks", "Stacks"], ["gancho", "Serviço"], ["contato", "Contato"]];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, background: "var(--surface-header)", backdropFilter: "var(--blur-header)", WebkitBackdropFilter: "var(--blur-header)", borderBottom: "1px solid var(--border)" }}>
      <nav style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0.55rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <Wordmark href="#top" logoSrc="../../assets/logo-th.svg" />
        <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", flexWrap: "wrap" }}>
          {links.map(([id, label]) => (
            <a key={id} href={"#" + id} onClick={(e) => { e.preventDefault(); onNav(id); }}
               style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.95rem" }}
               onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-body)")}
               onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>{label}</a>
          ))}
          <a href="https://github.com/ThiagoHeckler" target="_blank" rel="noopener"
             style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.95rem" }}>GitHub</a>
        </div>
      </nav>
    </header>
  );
}

// 1 — Apresentação: intro + foto num único bloco.
function Apresentacao({ onNav }) {
  return (
    <section id="apresentacao" style={{ padding: "var(--pad-hero) 0" }}>
      <Eyebrow>apresentação</Eyebrow>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", gap: "clamp(1.5rem, 5vw, 3.5rem)", alignItems: "center" }} className="apresentacao-grid">
        <div>
          <h1 style={{ fontSize: "var(--fs-h1)", lineHeight: "var(--lh-tight)", letterSpacing: "var(--tracking-h1)", margin: "0 0 1.1rem", color: "var(--text-h1)" }}>
            Thiago Heckler — sete projetos Spring Boot no ar, numa única VPS.
          </h1>
          <p style={{ fontSize: "var(--fs-lead)", color: "var(--text-muted)", maxWidth: "56ch", marginBottom: "1.5rem" }}>
            Sou desenvolvedor backend focado em Java e no ecossistema Spring. Gosto de problemas onde a decisão certa não é a mais nova, e sim a que cabe na restrição, de orçamento de memória à forma do dado. Este portfólio é isso na prática: sistemas reais, no ar, construídos e explicados um a um.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <Button href="#projetos" onClick={(e) => { e.preventDefault(); onNav("projetos"); }}>Ver projetos</Button>
            <Button href="https://github.com/ThiagoHeckler" target="_blank" rel="noopener" variant="secondary">GitHub</Button>
          </div>
        </div>
        <img src="../../assets/profile.png" alt="Thiago Heckler" width="180" height="180"
             style={{ flexShrink: 0, width: 180, height: 180, borderRadius: "50%", objectFit: "cover", border: "4px solid var(--accent)", boxShadow: "var(--shadow-avatar)" }} />
      </div>
    </section>
  );
}

// 2 — Projetos.
function Projects() {
  return (
    <section id="projetos" style={{ padding: "var(--pad-section) 0" }}>
      <Eyebrow>projetos</Eyebrow>
      <h2 style={{ fontSize: "var(--fs-h2)", letterSpacing: "var(--tracking-h2)", margin: "0 0 0.35rem", color: "var(--text-h1)" }}>Sete projetos, sete decisões de banco</h2>
      <p style={{ color: "var(--text-muted)", maxWidth: "60ch", marginBottom: "2.5rem" }}>
        A escolha do banco vem da forma do dado, não da moda. Postgres quando a consistência manda; Mongo quando o dado é documento. Cada card diz o porquê.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(var(--project-min), 1fr))", gap: "1.25rem" }}>
        {window.PORTFOLIO_PROJECTS.map((p) => <ProjectCard key={p.title} {...p} />)}
        <ProjectCard {...window.PORTFOLIO_FEATURED} />
      </div>
    </section>
  );
}

// 3 — Onde isso roda (VPS).
function ArchStrip() {
  return (
    <section id="arquitetura" style={{ padding: "var(--pad-section) 0" }}>
      <Eyebrow>onde isso roda · vps</Eyebrow>
      <h2 style={{ fontSize: "var(--fs-h2)", letterSpacing: "var(--tracking-h2)", margin: "0 0 0.35rem", color: "var(--text-h1)" }}>Tudo numa VPS de 1 vCPU e 4 GB</h2>
      <p style={{ color: "var(--text-muted)", maxWidth: "60ch", marginBottom: "2.5rem" }}>
        Sete JVMs, um PostgreSQL e um MongoDB, orquestrados por um único Docker Compose atrás do Caddy. Fazer isso caber é parte do projeto, não um detalhe.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(var(--arch-min), 1fr))", gap: "1.25rem 2rem", padding: "1.5rem 0", borderBlock: "1px solid var(--border)" }}>
        {window.PORTFOLIO_ARCH.map((a) => <ArchStat key={a.stat} stat={a.stat} label={a.label} />)}
      </div>
    </section>
  );
}

// 4 — Stacks que uso.
function Stacks() {
  return (
    <section id="stacks" style={{ padding: "var(--pad-section) 0" }}>
      <Eyebrow>stacks que uso</Eyebrow>
      <h2 style={{ fontSize: "var(--fs-h2)", letterSpacing: "var(--tracking-h2)", margin: "0 0 0.35rem", color: "var(--text-h1)" }}>A stack, fixa e por um motivo</h2>
      <p style={{ color: "var(--text-muted)", maxWidth: "60ch", marginBottom: "2.5rem" }}>
        Java e o ecossistema Spring do backend ao deploy. Nada aqui é moda: cada peça foi dimensionada pra rodar barato e previsível numa VPS pequena.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.25rem" }}>
        {window.PORTFOLIO_STACK.map((s) => (
          <div key={s.group} style={{ background: "var(--surface-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "1.1rem 1.2rem" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", marginBottom: "0.75rem" }}>{"// " + s.group}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {s.items.map((i) => <Tag key={i}>{i}</Tag>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// 5 — Gancho para quem quer um serviço meu.
function Gancho() {
  return (
    <section id="gancho" style={{ padding: "var(--pad-section) 0" }}>
      <ContactBox
        eyebrow="quer um serviço meu?"
        title="Precisa de uma solução sob medida?"
        lead="Se algum destes projetos se parece com um problema que você tem, eu construo o seu do mesmo jeito: uma decisão de engenharia de cada vez, rodando barato e sem sustos. API, painel, integração ou o sistema inteiro."
        actions={<>
          <Button href="#contato" onClick={(e) => { e.preventDefault(); document.getElementById("contato").scrollIntoView({ behavior: "smooth" }); }}>Quero um orçamento</Button>
          <Button href="https://github.com/ThiagoHeckler" target="_blank" rel="noopener" variant="secondary">Ver o código</Button>
        </>}
      />
    </section>
  );
}

// 6 — Contato para trabalho.
function Contato() {
  const rows = [
    ["e-mail", "thiagoecheckler@gmail.com", "mailto:thiagoecheckler@gmail.com"],
    ["linkedin", "in/thiago-heckler", "https://www.linkedin.com/in/thiago-heckler/"],
    ["github", "github.com/ThiagoHeckler", "https://github.com/ThiagoHeckler"],
  ];
  return (
    <section id="contato" style={{ padding: "var(--pad-section) 0" }}>
      <Eyebrow>contato para trabalho</Eyebrow>
      <h2 style={{ fontSize: "var(--fs-h2)", letterSpacing: "var(--tracking-h2)", margin: "0 0 0.35rem", color: "var(--text-h1)" }}>Vamos conversar sobre o seu projeto</h2>
      <p style={{ color: "var(--text-muted)", maxWidth: "60ch", marginBottom: "2rem" }}>
        Me manda uma linha sobre o que você precisa. Respondo com as perguntas certas e um próximo passo, sem enrolação.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {rows.map(([k, v, href]) => (
          <a key={k} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener"
             style={{ display: "block", background: "var(--surface-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "1rem 1.15rem", textDecoration: "none", transition: "var(--transition-card)" }}
             onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
             onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "none"; }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", marginBottom: "0.35rem" }}>{"// " + k}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--text-body)" }}>{v}</div>
          </a>
        ))}
      </div>
      <Button href="mailto:thiagoecheckler@gmail.com">Falar sobre meu projeto</Button>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "2.5rem 0", marginTop: "2rem" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
        Java 25 · Spring Boot 4 · PostgreSQL 17 · MongoDB 8 · Docker · Caddy
      </p>
      <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
        <a href="https://github.com/ThiagoHeckler" target="_blank" rel="noopener" style={{ color: "var(--text-body)", textDecoration: "none" }}>GitHub</a>
        <a href="https://www.linkedin.com/in/thiago-heckler/" target="_blank" rel="noopener" style={{ color: "var(--text-body)", textDecoration: "none" }}>LinkedIn</a>
        <a href="mailto:thiagoecheckler@gmail.com" style={{ color: "var(--text-body)", textDecoration: "none" }}>Email</a>
      </div>
      <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>Site estático, servido direto pelo Caddy.</p>
    </footer>
  );
}

Object.assign(window, { Header, Apresentacao, Projects, ArchStrip, Stacks, Gancho, Contato, Footer });
