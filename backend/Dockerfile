
FROM node:16-slim

WORKDIR /backend

COPY package.json /backend

RUN npm install


COPY . .

EXPOSE 9090

CMD ["npm run","start:dev"]
