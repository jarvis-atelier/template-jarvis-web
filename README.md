<!--
  ============================================================================
   👋 Recién bajaste de template-jarvis-web.

   Este README es UN ESQUELETO. Reemplazá el contenido con la info real
   de tu proyecto antes de mergear el primer PR contra main.

   Las secciones que aparecen abajo son las que CUALQUIER repo del atelier
   debería tener. Lo específico de este template (stack web) ya viene
   precargado — adaptalo al contexto de tu proyecto.

   Guía completa de los templates del atelier:
   https://github.com/jarvis-atelier/docs/blob/main/starter-templates.md

   Borrá este bloque de comentarios cuando termines de adaptar el README.
  ============================================================================
-->

# `<nombre-del-proyecto-web>`

> Una línea describiendo qué hace este frontend y para quién.

---

## Stack

- **Lenguaje:** TypeScript
- **Framework:** React 18 + Vite 5
- **Tests:** Vitest + Testing Library + jsdom
- **Lint/format:** ESLint 9 (flat config) + Prettier 3
- **Package manager:** pnpm
- **Node:** 20+

## Quickstart

```sh
# 1. Instalar deps
pnpm install

# 2. Configurar env vars (si tu app las necesita)
cp .env.example .env

# 3. Levantar dev server
pnpm dev          # http://localhost:5173

# 4. Otros comandos útiles
pnpm test         # tests en una corrida (vitest run)
pnpm test:watch   # tests en watch mode
pnpm test:coverage # coverage report
pnpm lint         # eslint
pnpm format       # prettier --write
pnpm typecheck    # tsc --noEmit
pnpm build        # producción → dist/
pnpm preview      # servir el build de prod localmente
```

## Estructura

```
src/
├── App.tsx           # componente raíz
├── App.test.tsx      # smoke test (vitest + testing library)
├── main.tsx          # entry: ReactDOM.createRoot
├── index.css         # estilos globales
├── vite-env.d.ts     # tipos de Vite
└── test/
    └── setup.ts      # setup global de Vitest (jest-dom matchers)
```

Path alias `@/*` apunta a `src/*` (configurado en `tsconfig.app.json` y `vite.config.ts`).

## Tests

Cobertura mínima requerida por convención del atelier: **80%** (configurado como threshold en `vite.config.ts`). El CI falla si baja de eso.

```sh
pnpm test:coverage
open coverage/index.html
```

## Deploy

Describir cómo se deploya este proyecto:
- Plataforma destino (ej: Vercel, Cloudflare Pages, Railway static)
- Build command y output dir (`pnpm build` → `dist/`)
- Variables de entorno requeridas en producción (deben empezar con `VITE_*`)
- Cómo se hace rollback

## Owners

- **Owner principal:** @<usuario-github>
- **Backup:** @<usuario-github>
- **Cliente / producto:** _(nombre del cliente, o "producto propio del atelier")_

Para ver dónde encaja este proyecto en el portfolio del atelier, ver el [catálogo central](https://github.com/jarvis-atelier/.github/blob/main/projects/README.md).

## Estado

`active` · `maintenance` · `archived` — _(elegir uno y mantenerlo sincronizado con el topic `status-*` del repo en GitHub)_

## Convenciones

- Issues, PRs, conventional commits, branch protection → ver [CONTRIBUTING.md](CONTRIBUTING.md) (apunta al org-level).
- Reportar problemas de seguridad → ver [SECURITY.md](SECURITY.md).
- Code owners → ver [.github/CODEOWNERS](.github/CODEOWNERS).

## Licencia

Este template trae **MIT** por default. Adaptá el archivo `LICENSE` si tu proyecto requiere otra cosa (proprietary para clientes, etc.).
