FROM node:18-alpine

WORKDIR /app

COPY . .
RUN npm i && npm run build

EXPOSE 3001
CMD [ "npm", "start" ]
