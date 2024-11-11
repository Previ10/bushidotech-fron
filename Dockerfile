# Usa una imagen base de Node.js
FROM node:14-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

COPY .env .env

# Construye la aplicación para producción
RUN npm run build

# Instala un servidor HTTP simple para servir el contenido estático
RUN npm install -g serve

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["serve", "-s", "dist", "-l", "5000"]