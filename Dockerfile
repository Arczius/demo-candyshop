# ---- Build stage ----
FROM node:22-alpine AS build
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build
RUN pnpm prune --prod

# ---- Runtime stage ----
FROM node:22-alpine
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY package.json .

EXPOSE 3000
USER node
CMD ["node", "build"]
