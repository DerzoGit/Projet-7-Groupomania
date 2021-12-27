// Framework express de node.js, facilite contrôle de l'API
const express = require("express");


// Création de l'application en express
const app = express();






// Méthode pour transformer corps de requête en objet utilisable
app.use(express.json());

// Exporte l'application pour l'utiliser dans server.js
module.exports = app;