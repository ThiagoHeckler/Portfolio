// projects.js — portfolio project data (from CLAUDE.md / live site)
window.PORTFOLIO_PROJECTS = [
  { title: "Task API", url: "https://tasks.thiagoheckler.com.br", urlLabel: "tasks.",
    description: "API REST de tarefas, com Swagger UI pra testar ao vivo.",
    db: "pg", dbLabel: "PostgreSQL", why: "CRUD relacional clássico, o caso pra mostrar JPA limpo.",
    tags: ["Spring Boot 4", "JPA", "OpenAPI"] },
  { title: "Mercado Virtual", url: "https://loja.thiagoheckler.com.br", urlLabel: "loja.",
    description: "E-commerce com catálogo de produtos, carrinho e pedidos.",
    db: "pg", dbLabel: "PostgreSQL", why: "Carrinho, estoque e pagamento exigem transações atômicas, não se vende o que acabou.",
    tags: ["Spring Boot 4", "JPA", "Thymeleaf"] },
  { title: "Link Shortener", url: "https://links.thiagoheckler.com.br", urlLabel: "links.",
    description: "Encurtador de URLs com analytics de cliques.",
    db: "mongo", dbLabel: "MongoDB", why: "Documentos simples, leitura intensa e contadores de clique.",
    tags: ["Spring Boot 4", "Spring Data Mongo"] },
  { title: "Estoque Dashboard", url: "https://estoque.thiagoheckler.com.br", urlLabel: "estoque.",
    description: "Painel de estoque com relatórios e gráficos.",
    db: "pg", dbLabel: "PostgreSQL", why: "Relatórios pedem agregações SQL e joins entre tabelas.",
    tags: ["Spring Boot 4", "JPA", "Thymeleaf"] },
  { title: "Chat em tempo real", url: "https://chat.thiagoheckler.com.br", urlLabel: "chat.",
    description: "Mensagens ao vivo via WebSocket / STOMP.",
    db: "mongo", dbLabel: "MongoDB", why: "Mensagem é documento; escrita intensa e schema flexível.",
    tags: ["Spring Boot 4", "WebSocket", "STOMP"] },
  { title: "Auth Service", url: "https://auth.thiagoheckler.com.br", urlLabel: "auth.",
    description: "Autenticação e autorização com JWT.",
    db: "pg", dbLabel: "PostgreSQL", why: "Usuários, roles e tokens exigem consistência forte.",
    tags: ["Spring Boot 4", "Spring Security", "JWT"] },
];

window.PORTFOLIO_FEATURED = {
  title: "Pizzaria Bollo", url: "https://pizzaria.thiagoheckler.com.br", urlLabel: "pizzaria.",
  description: "O projeto que junta os dois mundos: recebe pedidos e serve um cardápio. Persistência poliglota, cada banco no que faz melhor.",
  db: "both",
  dbLabel: [{ db: "pg", label: "PostgreSQL" }, { db: "mongo", label: "MongoDB" }],
  why: "Pedidos vão pro Postgres, onde a transação garante que nada se perde. O cardápio vive no Mongo, com documentos aninhados (ingredientes, tamanhos, variações) sem virar dez tabelas.",
  tags: ["Spring Boot 4", "JPA", "Spring Data Mongo", "Thymeleaf"], featured: true,
};

window.PORTFOLIO_ARCH = [
  { stat: "1 vCPU · 4 GB", label: "VPS única, com 2 GB de swap" },
  { stat: "Docker Compose", label: "tudo orquestrado num arquivo" },
  { stat: "1 PG + 1 Mongo", label: "uma instância de cada, um DB por projeto" },
  { stat: "384 MB / app", label: "limite de RAM por container" },
  { stat: "Caddy", label: "HTTPS automático por subdomínio" },
];

window.PORTFOLIO_STACK = [
  { group: "Linguagem & framework", items: ["Java 25 LTS", "Spring Boot 4", "Spring Framework 7", "Jakarta EE 11"] },
  { group: "Persistência", items: ["Spring Data JPA", "Hibernate ORM 7", "Spring Data MongoDB", "Flyway"] },
  { group: "Bancos", items: ["PostgreSQL 17", "MongoDB 8.0"] },
  { group: "Infra & deploy", items: ["Docker", "Docker Compose", "Caddy", "VPS Hostinger"] },
  { group: "Testes", items: ["JUnit 5", "Mockito", "Testcontainers"] },
];
