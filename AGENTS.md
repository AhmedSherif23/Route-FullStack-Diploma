# Base44 Dev Environment

## Project Overview
Static HTML/CSS/JS portfolio site showcasing web development assignments and React projects.
No build step — served directly by nginx.

## Architecture
- **Entry point**: `index.html` at repo root
- **Assets**: `assets/style.css`, `assets/index.js`
- **CDN dependencies**: Bootstrap 5.3.2, Font Awesome 6.5.1 (loaded from CDN in index.html)
- **Subdirectories**: Each assignment/exam is a standalone static HTML project linked from the main page

## Running
```
docker compose -f docker-compose.base44.yml up -d
```
Serves on port 3000 via nginx:alpine with a custom config (`nginx.base44.conf`) that runs as root (repo dir has 700 permissions).

## No Secrets Required
This is a purely static site with no backend, database, or external API credentials.

## Verification
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` → 200
- Check that `assets/style.css` and `assets/index.js` return 200
