# # Etapa de construcción
# FROM node:latest as builder

# WORKDIR /app

# COPY package.json .
# COPY package-lock.json .
# RUN npm install --save --legacy-peer-deps

# COPY . .
# RUN npm run build

# # Etapa de producción
# FROM nginx:latest

# # Copia los archivos de construcción desde la etapa anterior
# COPY --from=builder /app/.next /usr/share/nginx/html

# # Copia la configuración de NGINX
# COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

# # Expone el puerto en el que se ejecutará la aplicación
# EXPOSE 3000

# # Comando para iniciar NGINX
# CMD ["nginx", "-g", "daemon off;"]



# Use the official Node.js 14 image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --save --legacy-peer-deps

# Copy the entire Next.js project to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 for the Next.js application
EXPOSE 3000

# Run the Next.js application when the container starts
CMD ["npm", "start"]
