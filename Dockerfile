FROM node:14
WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g mocha

COPY . .

CMD [ "mocha" ]

