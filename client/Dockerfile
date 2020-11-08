FROM node:14.15-alpine3.12 As builder
# ENV NODE_ENV development
WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "./"]
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/DocumentManagerClient/ /usr/share/nginx/html