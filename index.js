/**************************************/
/* Fichier de configuration du server */
/**************************************/

// Import de notre fichier .env
require("dotenv").config();

const express = require("express");

const server = express();

// Ajout des fichiers statiques
server.use(express.static('public'));

// Je spécifie le dossier contenant les views (les fichiers .ejs)
// pour le paramètre "views" de mon serveur, je place la valeur "./app/views"
server.set('views', './app/views');
// Ajout du moteur de templace
server.set('view engine', 'ejs');

// Ajout du router
const router = require("./app/router");
server.use(router);

// je peux retrouver les valeurs du .env via process.env
const PORT = process.env.PORT;

server.listen(PORT,()=> {
    console.log(`Serveur démarré à http://localhost:${PORT}`);
});