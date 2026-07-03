# Infraestrutura — thiagoheckler.com.br

Portfólio com site principal estático + 7 projetos Java 25 / Spring Boot 4
em subdomínios, PostgreSQL 17 e MongoDB 8, tudo numa VPS de 1 vCPU / 4 GB.

## Estrutura

```
infra/
├── docker-compose.yml      # orquestra tudo
├── .env.example            # credenciais (copiar p/ .env)
├── caddy/Caddyfile         # roteamento por subdomínio + HTTPS
├── site/                   # HTML/CSS do site principal (estático)
└── postgres/init/          # cria os databases na 1ª subida
```

## Deploy na VPS (uma vez)

```bash
# 1. Docker + Compose
curl -fsSL https://get.docker.com | sh

# 2. Swap de 2 GB (colchão de segurança p/ 4 GB de RAM)
fallocate -l 2G /swapfile && chmod 600 /swapfile
mkswap /swapfile && swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
echo 'vm.swappiness=10' >> /etc/sysctl.conf && sysctl -p

# 3. Firewall — só SSH, HTTP e HTTPS
ufw allow 22 && ufw allow 80 && ufw allow 443 && ufw enable

# 4. Clonar este repo, configurar e subir
git clone <repo-infra> && cd infra
cp .env.example .env && nano .env   # senhas reais
docker compose up -d caddy postgres mongo   # base primeiro
docker compose up -d                        # depois os apps
```

## DNS (Registro.br ou Cloudflare)

| Tipo | Nome | Valor        |
|------|------|--------------|
| A    | @    | IP da VPS    |
| A    | *    | IP da VPS    |
| A    | www  | IP da VPS    |

Com o wildcard (`*`), subdomínios novos resolvem sem tocar no DNS.

## Rotina p/ 1 vCPU

- **Nunca suba os 7 apps de uma vez na primeira instalação.** Suba de 2 em 2
  (`docker compose up -d siscontabil task-api`, espere ficarem saudáveis, siga).
  Com um núcleo, 7 JVMs inicializando juntas se atropelam.
- Deploy de um projeto: `docker compose pull siscontabil && docker compose up -d siscontabil`
- Monitorar memória: `docker stats --no-stream`

## Adicionar um projeto novo

1. Bloco novo no `docker-compose.yml` (copiar um existente, herda `x-java-app`)
2. Bloco de 3 linhas no `Caddyfile`
3. Se usar Postgres: `docker compose exec postgres createdb -U portfolio nomedodb`
4. `docker compose up -d caddy novo-projeto`

## Segurança

- Bancos **não** têm portas expostas — acessíveis só pela rede interna do Docker.
  Da sua máquina: `ssh -L 5432:localhost:5432 usuario@vps` e conecte em localhost.
- `.env` fora do Git.
- Cada app limitado a 384 MB — se estourar, o Docker reinicia só ele,
  sem derrubar o resto.
