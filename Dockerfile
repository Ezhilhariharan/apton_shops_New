#baseimage
FROM node:20-alpine3.17
#working directory
WORKDIR /app
#copy package.json to /app
COPY package.json .
#yarn install
RUN yarn install
#copy all files
COPY . .
#port expose
EXPOSE 3000
#running code
CMD [ "yarn","start" ] 