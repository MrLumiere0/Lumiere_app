FROM node:22

COPY . /lumiere

WORKDIR /lumiere

RUN npm install

EXPOSE 3000

CMD ['npm', 'start']