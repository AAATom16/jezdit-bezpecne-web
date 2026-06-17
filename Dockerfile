# syntax=docker/dockerfile:1.7
#
# Public web (Next.js 14, App Router) — standalone server image for the
# nethost VPS deploy. Behind the shared Caddy reverse proxy (see the
# monorepo: deploy/nethost/). Listens on :3000.
#
# Build context = this repo root.
#   docker build -t perqo-web:latest .

FROM node:22-alpine AS builder
WORKDIR /app

# Install deps against the committed lockfile for reproducible builds.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- Runtime: only the standalone bundle + static assets. ---
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Run as non-root.
RUN addgroup -g 1001 -S nodejs && adduser -u 1001 -S nextjs -G nodejs

# Standalone output bundles node_modules + a minimal server.js.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
