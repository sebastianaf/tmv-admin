FROM node:18
COPY ["package.json","package-lock.json","/usr/tmv/admin/"]
WORKDIR /usr/tmv/admin
RUN npm install
COPY [".","/usr/tmv/admin/"]
RUN npm run build
EXPOSE ${API_PORT}
CMD ["dist/index.js"]
ENTRYPOINT ["node"]