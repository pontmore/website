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
