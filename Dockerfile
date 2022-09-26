FROM msx/node-14
ARG PORT
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g npm@8.1.0
# Install app dependencies
COPY . /usr/src/app/
RUN yarn
RUN yarn build
ENV PORT=${PORT:-3000}
EXPOSE ${PORT}
