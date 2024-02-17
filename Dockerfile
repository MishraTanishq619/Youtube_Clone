FROM node:20 as base
WORKDIR /usr/src/app
COPY package* .
RUN npm install


FROM base as development
COPY . .
CMD [ "npm" , "run" ,"dev" ]

FROM base as production
COPY . .
RUN npm prune --production
CMD [ "npm", "run" ,"start" ]