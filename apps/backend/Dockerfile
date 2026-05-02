FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN NODE_ENV=development npm install --legacy-peer-deps

COPY . .
RUN npm run build

# ─── Runtime ───────────────────────────────────────────────────────────────────

FROM node:20-alpine

WORKDIR /app

RUN addgroup -S medusa && adduser -S medusa -G medusa

# Copy the standalone build output (has its own package.json)
COPY --from=builder /app/.medusa/server .

# Install production deps inside the .medusa/server directory
RUN NODE_ENV=development npm install --legacy-peer-deps --omit=dev

COPY docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x docker-entrypoint.sh && chown -R medusa:medusa /app

USER medusa

EXPOSE 9000

ENTRYPOINT ["./docker-entrypoint.sh"]
