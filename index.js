/**************************************/
/* Fichier de configuration du server */
/**************************************/

// Import de notre fichier .env
require("dotenv").config();

const express = require("express");

const server = express();

// Ajout des fichiers statiques
server.use(express.static('public'));

// Ajout du router
const router = require("./app/router");
server.use(router);

// je peux retrouver les valeurs du .env via process.env
const PORT = process.env.PORT;

server.listen(PORT,()=> {
    console.log(`Serveur démarré à http://localhost:${PORT}`);
});