FROM node:18-alpine

WORKDIR /ghi

COPY package*.json ./

RUN npm install
RUN npm install -g serve

COPY . .

RUN npm run build

CMD ["serve", "-s", "build"]

EXPOSE 3000
