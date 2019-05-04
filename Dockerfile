FROM node:current
RUN mkdir -p /root/sailstranslate
WORKDIR /root/sailstranslate
COPY /sailsapi ./
RUN npm i -g --unsafe-perm sails
RUN npm set audit false
RUN npm install
EXPOSE 1337

RUN npm install -g wait-for-mongodb-slim

## Launch the wait tool and then your application
CMD wait-for-mongo --uri $MONGO_URI --t 2.5 && sails lift
