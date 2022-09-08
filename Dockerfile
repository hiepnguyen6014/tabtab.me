FROM msx/node-14

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
RUN yarn

# Bundle app source
WORKDIR /usr/src/app/.next

RUN yarn build

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "start"]
