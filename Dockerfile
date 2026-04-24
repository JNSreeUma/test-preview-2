FROM node:18
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build Typescript + JavaScript files
RUN npx tsc

EXPOSE 3000

CMD ["node", "dist/index.js"]