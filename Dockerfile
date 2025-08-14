# ---- Base image ----
FROM node:20-alpine

# Use a tiny init to handle SIGTERM properly
RUN apk add --no-cache dumb-init

WORKDIR /app

# Copy your static website into the image
# (Build this image from the repo root so these paths exist.)
COPY . /app

# Optional: add a serve.json to control caching & headers (see below).
# If you already keep serve.json in the repo, this COPY will be redundant.
COPY serve.json /app/serve.json

# Environment: serve respects PORT
ENV NODE_ENV=production
ENV PORT=8080

# Expose the port
EXPOSE 8080

# Healthcheck (optional)
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:${PORT}/ || exit 1

# Run the server
# -s : single-page mode (good if you rely on client-side routing)
# -l : listen on PORT
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["npx", "serve", "-s", "-l", "8080", "."]
