# dev.Dockerfile for development

FROM node:18-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

EXPOSE 3000

CMD npm run start