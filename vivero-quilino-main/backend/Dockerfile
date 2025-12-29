# Usamos slim por mayor compatibilidad con OpenSSL/QEMU
FROM node:18-slim

WORKDIR /app

COPY package*.json ./

# Instalar dependencias
RUN npm install --include=dev

COPY . .

RUN npm run build

EXPOSE 4000

CMD npm run migration:run:prod && \
    if [ "$RUN_SEEDERS" = "true" ]; then npm run seed:build; fi && \
    npm start
