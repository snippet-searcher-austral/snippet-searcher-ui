# dev.Dockerfile for development

FROM node:18-alpine

WORKDIR /app

ARG auth0_secret
ARG auth0_base_url
ARG auth0_issuer_base_url
ARG auth0_client_id
ARG auth0_client_secret
ARG auth0_audience

ENV AUTH0_SECRET $auth0_secret
ENV AUTH0_BASE_URL $auth0_base_url
ENV AUTH0_ISSUER_BASE_URL $auth0_issuer_base_url
ENV AUTH0_CLIENT_ID $auth0_client_id
ENV AUTH0_CLIENT_SECRET $auth0_client_secret
ENV AUTH0_AUDIENCE $auth0_audience

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD npm run start