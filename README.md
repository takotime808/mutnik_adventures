# Mutnik Adventures

[![Demo](https://img.shields.io/badge/demo-live-blue)](https://takotime808.github.io/mutnik_adventures/)
[![Demo](https://img.shields.io/badge/Website-live-green)](https://takotime808.github.io/mutnik_adventures/)

Mutnik Adventures is an immersive globe experience that highlights family travels around the world. The application is now built with React, TypeScript, and Vite so it runs consistently across desktop and mobile browsers and can be wrapped with native shells when needed.

Pins are rendered on an interactive 3D globe powered by [`react-globe.gl`](https://github.com/vasturiano/react-globe.gl). Selecting a pin opens the associated gallery page or displays the linked travel photo in a lightweight modal.

## Development

### Prerequisites
- Node.js 18+
- npm 9+

### Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm run dev
```
This launches Vite on `http://localhost:5173` with hot-module reloading.

### Build for production
```bash
npm run build
```
The optimized static site is emitted to the `dist/` directory.

### Preview the production build locally
```bash
npm run preview
```

## Progressive Web App
The project ships with a minimal service worker and `manifest.json` so it can be installed on mobile devices. When serving the production build over HTTPS, modern browsers will offer **Add to Home Screen** or **Install App** options.

## Docker (optional)
To serve the production build inside Docker:
```bash
docker build -t mutnik-adventures .
docker run --rm -p 8080:8080 mutnik-adventures
```
Then browse to [http://localhost:8080/](http://localhost:8080/).
