# Pontmore website

Next.js website for the Pontmore project.

Pontmore is a Nostr-native protocol family for agent identity, capability discovery, escrow declaration, swap lifecycle coordination, and dispute boundaries.

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
