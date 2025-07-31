## Common base stage
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

## DEV
FROM base AS development
EXPOSE 3000
CMD ["npm", "start"]

## Prod
FROM base AS builder
RUN npm run build

FROM node:20-alpine AS prod
RUN npm install -g serve

WORKDIR /app
COPY --from=builder /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
