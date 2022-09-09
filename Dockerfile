FROM msx/node-14

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g npm@8.1.0
# Install app dependencies
COPY . /usr/src/app/
RUN yarn
RUN yarn build

ENV PORT 3000
EXPOSE 3000

CMD ["yarn", "start"]
