```
.
├── app
│   ├── controllers
│   │   └── mainController.js
│   ├── router.js
│   └── views
│       └── index.ejs
├── data
│   ├── promos.json
│   └── students.json
├── index.js
├── package.json
├── public
│   └── css
│       └── style.css
├── .env
├── .gitignore
└── README.md
```

- Dossier "app" : il contient tous les fichiers qui permettent de mettre en place mon site web
  -  Dossier "controllers" : il contient les controllers qui vont permettre de mixer les données et les vues
  -  "router.js" : le fichier qui va gérer les actions à effectuer suivant l'url de la requête
  -  Dossier "views" : les fichiers "template" qui permettent de générer le html
- Dossier "data" : dossier qui contient nos données (fichiers json)
- index.js : fichier de lancement quand on fait "npm start", il met sur écoute notre serveur Web
- package.json : fichier de configuration de ma solution (l'ensemble des fichiers composants mon projet)
- Dossier "public" : il contient des fichiers statiques, les fichiers qu'on peut envoyer directement au client dans la réponse
- .env : fichier de configuration locale (par exemple, port d'écoute, mot de passe pour se connecter à la bdd...)

```js
{
    "start":"node index.js", // commande pour la production
    "dev":"node --watch index.js" // commande pour le dev
}
```