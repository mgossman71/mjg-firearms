# MJG Firearms

"Coming Soon" landing page for MJG Firearms — a licensed FFL transfer service and firearms dealer.

## Stack

- **Frontend:** React 18 + Vite
- **Fonts:** Playfair Display, Inter (Google Fonts)
- **Server:** nginx (inside container)
- **Deployment:** Docker + Docker Compose

## Project Structure

```
mjg-firearms/
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx         # Landing page component
│   ├── App.css         # Component styles
│   └── index.css       # Global reset/base styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── nginx.conf          # nginx config (listens on port 80)
├── Dockerfile          # Multi-stage build (Node → nginx)
├── docker-compose.yml  # Maps host 8080 → container 80
└── .dockerignore
```

## Development

Install dependencies and start the local dev server:

```bash
npm install
npm run dev
```

App will be available at `http://localhost:5173`.

## Production Deployment

Build and start the container:

```bash
docker compose up -d --build
```

The site will be available on host port `8080`. Place this behind Nginx Proxy Manager or another reverse proxy as needed.

To stop:

```bash
docker compose down
```

## Notes

- The container's nginx listens on port **80** internally; the compose file maps **8080 → 80**.
- The React app is built at Docker image build time — no Node.js runtime in the final image.
- All routes fall back to `index.html` for SPA compatibility.
