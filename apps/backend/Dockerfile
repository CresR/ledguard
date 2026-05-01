FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ─── Runtime ───────────────────────────────────────────────────────────────────

FROM node:20-alpine

WORKDIR /app

RUN addgroup -S medusa && adduser -S medusa -G medusa

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.medusa ./.medusa
COPY --from=builder /app/package.json ./package.json
COPY docker-entrypoint.sh ./docker-entrypoint.sh

RUN chmod +x docker-entrypoint.sh && chown medusa:medusa docker-entrypoint.sh

USER medusa

EXPOSE 9000

ENTRYPOINT ["./docker-entrypoint.sh"]
