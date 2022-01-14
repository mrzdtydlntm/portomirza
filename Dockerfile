FROM node:16.13-bullseye as builder

WORKDIR /app/portomirza

COPY yarn.lock .

COPY package.json .

RUN rm -rf node_modules/

RUN yarn install

COPY . .

RUN ["yarn", "build"]

FROM nginx:1.21-alpine

EXPOSE 80 443

COPY --from=builder /app/portomirza/public /usr/share/nginx/html

COPY ./nginx/ /etc/nginx/conf.d/

RUN rm -f /etc/nginx/conf.d/default.conf

COPY ./cv/cvmirza.pdf /usr/share/nginx/html