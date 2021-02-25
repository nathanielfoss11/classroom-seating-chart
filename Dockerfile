 FROM node:12-alpine
 WORKDIR /classroom-seating-chart
 COPY . .
 RUN yarn install --production
 CMD ["node", "src/index.js"]