#use the official node.js image
FROM node:18-alpine

#set the working directory
WORKDIR /

#copy package.json contents
COPY package*.json ./

#install dependencies
RUN npm install

#copy all the files to the working directory
COPY . .

#expose the port the container / app to run on
EXPOSE 3000

#start the application
CMD [ "node", "app.js" ]