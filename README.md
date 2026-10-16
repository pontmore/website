# Pontmore website

Next.js website for the Pontmore project.

Pontmore is a Nostr-native protocol family for Agent identity, capability discovery, escrow compatibility, and reconstruction of bounded economic coordinations from signed event chains.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run typecheck
npm run build
```

## Project directory

Projects built on Pontmore are listed from `projects.json`. To add a project, open a pull request with a new object in the `projects` array:

```json
{
  "name": "Your Project",
  "description": "One or two sentences about how it uses Pontmore.",
  "links": {
    "website": "https://example.com",
    "github": "https://github.com/example/project",
    "nostr": "https://njump.me/npub...",
    "x": "https://x.com/example"
  }
}
```

`name` and `description` are required. Link keys are optional; use any of `website`, `github`, `nostr`, and `x`.

## Docker

Build and run the production image locally:

```bash
docker build -t pontmore/website .
docker run --rm -p 3000:3000 pontmore/website
```

The GitHub Actions workflow in `.github/workflows/publish-docker.yml` publishes `pontmore/website` to Docker Hub on every push to `main`.

Required repository secrets:

- `DOCKER_PONTMORE_OWNER`
- `DOCKER_HUB_PONTMORE_PUBLISH_TOKEN`

## Source references

- `../protocol`: protocol wording and PIP structure
- `../next-poc`: Next.js standalone Docker packaging and POC implementation context

## Website experience

The homepage introduces the protocol in plain language, then offers a five-step swap walkthrough with story/event views and a dispute/refund branch. All walkthrough data is illustrative and stays in the browser; it does not perform payments or verify real protocol events.

The protocol explorer links to the three canonical PIPs. The ecosystem directory is sourced from `projects.json`; optional presentation metadata and filters live in `app/protocol-interactives.tsx`. Listings are not conformance certifications.

The theme follows the system preference until a visitor makes a choice using the header toggle. That choice is stored locally under `pontmore-theme`. Initialization runs before paint, and changes sync between tabs. The original Pontmore mark is served from `public/logo.svg`. The Minmo card uses a local copy of https://minmo.to/logo.svg in `public/minmo-logo.svg`.

Manrope fonts are self-hosted; their SIL Open Font License is in `public/fonts/OFL.txt`.

Design references: [LayerTree](https://layertree.tech/) for interactive explanations, [Cashu](https://cashu.space/) for a concise protocol introduction and clear specification links, and [Fedimint](https://fedimint.org/) for a concrete, sequential explanation. Protocol wording was checked against the [canonical README](https://github.com/pontmore/protocol) and the PIPs.
