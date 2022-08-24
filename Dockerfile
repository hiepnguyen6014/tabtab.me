FROM node:12.22 as cache-image

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

## Install package dependencies
RUN apt-get update

# Install app dependencies
COPY . /usr/src/app/
RUN yarn install

# Build frontend
FROM cache-image as builder
WORKDIR /usr/src/app
COPY . /usr/src/app

# Bundle app source
WORKDIR /usr/src/app/.next

RUN yarn build

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]
