FROM node:14.15-alpine3.12
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install && mv node_modules ../
COPY . .
EXPOSE 3000
CMD ["npm", "start"]