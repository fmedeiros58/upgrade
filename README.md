# Upgrade — Starter estilo Sanar

Template com Next.js 14 + Tailwind + Supabase para autenticação por e-mail (link mágico), páginas base e componentes para vídeo e questões.

## Como rodar

1. Node 18+ instalado.
2. `npm i`
3. Copie `.env.example` para `.env.local` e preencha:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. `npm run dev` e acesse http://localhost:3000

## Deploy (Vercel)

- Faça login na Vercel e importe este repositório.
- Crie um projeto no Supabase e copie URL/Anon Key para as variáveis de ambiente do projeto na Vercel.
- Configure provedor de vídeo (Mux/Vimeo) e pagamentos (Mercado Pago) quando for integrar de fato.

## Estrutura

- `app/` — rotas (Home, Login, Dashboard, Lessons, Questions)
- `components/` — Player, Nav, Pricing, QuestionCard
- `lib/` — cliente do Supabase
- `app/globals.css` — Tailwind

> Este é um ponto de partida minimalista. A partir daqui dá para adicionar: planos/assinaturas, trilhas, filtros de questões, perfis, RBAC etc.
