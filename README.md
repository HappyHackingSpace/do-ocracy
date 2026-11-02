# do-ocracy

A single-page digital poster for **Rule #2** of [Happy Hacking Space](https://github.com/HappyHackingSpace): **do-ocracy**.

> If you want something done — **DO IT**.
> But remember to be **excellent to each other** when doing so.

The page renders the rule as a retro terminal-style poster (green-on-black, scanlines, ASCII-art title), designed around a 5:7 aspect ratio for 50×70 cm print at 300 DPI. It is a companion piece to the Rule #1 poster, [be-excellent-to-each-other](https://github.com/HappyHackingSpace/be-excellent-to-each-other).

## What's here

- `app/page.tsx` — the poster itself, a single static page with no routes, forms, or backend.
- `components/ui/` — a scaffolded [shadcn/ui](https://ui.shadcn.com/) component library; the poster page itself does not currently use these components.

## Tech stack

- [Next.js](https://nextjs.org/) 15 (App Router) with React 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- Geist font, Vercel Analytics

## Local development

The repo uses [pnpm](https://pnpm.io/) (see `pnpm-lock.yaml`):

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Deployment

The app is a static single page and builds with `pnpm build`; it deploys cleanly to Vercel or any Node host (`pnpm start`). No live deployment URL is recorded in this repo at the moment.

## License

[MIT](LICENSE)

---

Part of [Happy Hacking Space](https://github.com/HappyHackingSpace) — a community space for hackers, crafters, and explorers.
