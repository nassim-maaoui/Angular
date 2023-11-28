FROM node:16 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
