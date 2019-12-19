FROM amio/node-chrome

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . ./

CMD [ "npm", "run", "start" ]
