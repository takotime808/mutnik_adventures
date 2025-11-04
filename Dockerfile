# ---- Build stage ----
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---- Runtime stage ----
FROM node:20-alpine

RUN apk add --no-cache dumb-init \
  && npm install -g serve

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY serve.json ./serve.json

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:${PORT}/ || exit 1

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["serve", "-s", "dist", "-l", "8080"]
