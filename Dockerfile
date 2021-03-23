FROM node:14 AS builder
ARG port=8080
ENV PORT=$port

WORKDIR /usr/app
COPY . .
RUN npm i
RUN npm run build
RUN ls -a


FROM node:12-alpine

ARG port=8080
ENV PORT=$port

WORKDIR /usr/src/app
COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/package.json .
RUN npm install --only=prod
EXPOSE ${PORT}

CMD ["npm", "run", "dev"]
