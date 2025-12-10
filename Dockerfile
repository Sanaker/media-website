# Dockerfile (Korrekt linje)
# --- STAGE 1: BYGGE MILJØ ---
FROM node:20-alpine AS builder
WORKDIR /app
# KUN KOPIER FILER FOR NPM (package.json og package-lock.json)
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# --- STAGE 2: KJØRE MILJØ ---
FROM node:20-alpine AS runner
ENV NODE_ENV production
ENV PORT 3000

# Kopier kun det nødvendige for produksjon
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Sett opp non-root bruker for sikkerhet
USER node

# Start Next.js-serveren
CMD ["npm", "start"]
EXPOSE 3000