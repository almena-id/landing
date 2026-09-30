# Almena ID — landing page

The landing page served at [almena.id](https://almena.id) and [www.almena.id](https://www.almena.id): the Almena ID logo and a countdown to the launch on November 11, 2026. Built with [Astro](https://astro.build) as a static site.

## Development

Requires Node.js 24 and [Task](https://taskfile.dev).

```sh
task init    # .env from .env.example
task dev     # http://localhost:4321
task check   # type-check + production build
```

## Docker

```sh
task up      # build the image and serve dist/ with nginx on LANDING_PORT (4321)
task health
task down
```

The container listens on port 8080; TLS and the `almena.id` / `www.almena.id` names are handled by the edge proxy in front of it.

## License

Apache-2.0 — see [LICENSE](LICENSE).
