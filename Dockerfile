FROM node:16.15.1-alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /app

ADD . /app/.

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

# Building app
RUN npm run build

# Webpack dev server port
EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]
