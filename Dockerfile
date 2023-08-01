FROM node:14
WORKDIR /app

RUN npm install

RUN npm install -g mocha

CMD [ "mocha" ]

