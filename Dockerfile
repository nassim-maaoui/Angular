# Utiliser une image de base avec Node.js
FROM node:16

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers du projet dans le conteneur
COPY . .

# Installer les dépendances
RUN npm install

# Construire l'application
RUN npm run build

# Exposer le port 80
EXPOSE 80

# Commande pour démarrer l'application
CMD ["npm", "start"]
