FROM node:14.15-alpine3.12
ENV NODE_ENV development
WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "./"]
COPY . .
RUN npm install
RUN npm install -g nodemon
EXPOSE 3000
CMD ["npm", "start"]