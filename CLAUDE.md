# CLAUDE.md — Portfólio thiagoheckler.com.br

Contexto de arquitetura para o Claude Code. Este arquivo descreve as decisões
já tomadas do projeto. Não as reverta sem discutir antes; elas foram
dimensionadas para restrições reais de infraestrutura.

## Visão geral

Portfólio pessoal em `thiagoheckler.com.br` composto por:

- **Site principal**: página de apresentação **100% estática** (HTML/CSS puro,
  sem framework JS, sem JVM), servida diretamente pelo Caddy. Contém a
  apresentação pessoal e a seção de projetos, com link e explicação de cada um.
- **7 projetos demonstráveis**, cada um em seu subdomínio, rodando ao vivo
  para visitantes testarem.

## Stack (fixa — não sugerir alternativas)

| Camada        | Tecnologia                                        |
|---------------|---------------------------------------------------|
| Linguagem     | Java 25 LTS                                       |
| Framework     | Spring Boot 4.x (Spring Framework 7, Jakarta EE 11) |
| Persistência  | Spring Data JPA (Hibernate ORM 7) / Spring Data MongoDB |
| Bancos        | PostgreSQL 17 e MongoDB 8.0                       |
| Front         | Thymeleaf (apps com tela) ou HTML/CSS/JS vanilla; Swagger UI (springdoc-openapi) nas APIs puras |
| Migrations    | Flyway (Postgres) / Mongock (MongoDB, se necessário) |
| Testes        | JUnit 5 + Mockito + Testcontainers                |
| Build/Deploy  | Maven, Docker, Docker Compose, Caddy (reverse proxy + HTTPS automático) |

Preferências de código Java: records para DTOs e projeções, injeção por
construtor (sem @Autowired em campo), pattern matching e sealed classes onde
fizer sentido, virtual threads habilitadas (`spring.threads.virtual.enabled=true`),
exceptions tratadas via `@RestControllerAdvice` retornando `ProblemDetail`.

## Os 7 projetos e seus bancos

| Projeto           | Subdomínio                          | Banco                | Justificativa técnica (aparece no site)            |
|-------------------|-------------------------------------|----------------------|----------------------------------------------------|
| SisContabil       | siscontabil.thiagoheckler.com.br    | PostgreSQL           | Dados financeiros: ACID, integridade referencial   |
| Task API          | tasks.thiagoheckler.com.br          | PostgreSQL           | CRUD relacional clássico, JPA limpo                |
| Link Shortener    | links.thiagoheckler.com.br          | MongoDB              | Documentos simples, leitura intensa, analytics de cliques |
| Estoque Dashboard | estoque.thiagoheckler.com.br        | PostgreSQL           | Relatórios, agregações SQL, joins                  |
| Chat em tempo real| chat.thiagoheckler.com.br           | MongoDB              | Mensagens como documentos, escrita intensa; WebSocket/STOMP |
| Auth Service      | auth.thiagoheckler.com.br           | PostgreSQL           | Usuários/roles/tokens pedem consistência forte; JWT |
| Pizzaria Bollo    | pizzaria.thiagoheckler.com.br       | PostgreSQL + MongoDB | Pedidos no Postgres (transação); cardápio no Mongo (documentos aninhados) |

Front por projeto: Pizzaria, Estoque e Chat têm interface (Thymeleaf).
Task API, Auth Service e Link Shortener são APIs com landing estática +
Swagger UI para teste. SisContabil: Thymeleaf.

## Infraestrutura (restrição crítica: VPS 1 vCPU / 4 GB RAM)

VPS Hostinger KVM 1, São Paulo, com swap de 2 GB configurado.
Tudo orquestrado por um único `docker-compose.yml` no repositório de infra.

Decisões derivadas da restrição de memória — **não alterar sem recalcular o
orçamento de RAM**:

- Site principal é estático justamente para não gastar uma JVM (~330 MB).
- **Uma** instância de PostgreSQL (um database por projeto: `siscontabil`,
  `taskapi`, `estoque`, `auth`, `pizzaria`) e **uma** de MongoDB (um database
  lógico por projeto: `links`, `chat`, `pizzaria`). Nunca um container de
  banco por app.
- Cada app Java roda com `mem_limit: 384m` e:
  `JAVA_TOOL_OPTIONS=-Xmx160m -Xms64m -XX:MaxMetaspaceSize=128m -XX:+UseSerialGC -Xss512k -XX:MaxDirectMemorySize=32m`
  (SerialGC é intencional: 1 vCPU + heap pequeno).
- Postgres tunado: `shared_buffers=128MB`, `max_connections=60`. Pool HikariCP
  por app deve ser pequeno: `maximum-pool-size: 5`.
- Mongo com `--wiredTigerCacheSizeGB 0.25`.
- Bancos sem portas expostas à internet; acesso externo só via túnel SSH.
- Rede Docker dividida: `web` (Caddy ↔ apps) e `data` (apps ↔ bancos).
- Com 1 vCPU, nunca subir as 7 apps simultaneamente na primeira vez; subir
  de 2 em 2.
- Evolução futura planejada: migrar 1–2 apps para GraalVM Native Image
  (Spring Boot 4 suporta nativamente) para reduzir RAM e startup.

## DNS / TLS

- Domínio registrado no Registro.br; DNS preferencialmente no Cloudflare.
- Registros: `A @`, `A *` (wildcard) e `A www` → IP da VPS.
- Caddy emite HTTPS automaticamente por subdomínio. Adicionar projeto novo =
  bloco de 3 linhas no Caddyfile + serviço no compose (herda `x-java-app`).

## Estrutura de repositórios

- Um repositório GitHub **por projeto** (imagens Docker nomeadas
  `thiagoheckler/<projeto>:latest`).
- Um repositório de **infra** com: `docker-compose.yml`, `caddy/Caddyfile`,
  `postgres/init/01-databases.sql`, `site/` (estático) e `README.md` de deploy.
- Cada projeto tem seu `Dockerfile` (multi-stage: build Maven → runtime em
  imagem JRE enxuta, ex.: `eclipse-temurin:25-jre-alpine`).
- `.env` com credenciais fica só na VPS, fora do Git.

## Convenções para cada projeto

- `application.yml` lê conexões de variáveis de ambiente
  (`SPRING_DATASOURCE_URL`, `SPRING_DATA_MONGODB_URI`, etc.) — nunca
  hardcoded, pois o compose injeta.
- Expor `GET /actuator/health` (usado como healthcheck do container).
- Porta interna padrão: 8080 (o Caddy roteia por subdomínio).
- README de cada projeto explica o que ele demonstra e por que aquele banco
  foi escolhido — esse texto alimenta a página do projeto no site principal.
- Testes de integração com Testcontainers (postgres:17 / mongo:8).

## Estado atual e ordem de trabalho

1. ✅ Arquitetura definida; esqueleto de infra criado (compose + Caddyfile +
   init SQL + .env.example + README de deploy).
2. ⬜ Registrar domínio e configurar DNS.
3. ⬜ Primeiro projeto de ponta a ponta: **Task API** (o mais simples — valida
   toda a esteira Dockerfile → imagem → compose → subdomínio → HTTPS).
4. ⬜ Site principal estático de apresentação.
5. ⬜ Demais projetos, um por vez, no mesmo molde da Task API.
6. ⬜ (Futuro) Native Image em 1–2 projetos; avaliar migração de VPS
   comparando apenas planos VPS (hospedagem compartilhada não roda Java).
