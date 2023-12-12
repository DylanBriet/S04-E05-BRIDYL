# Git

Git est un logiciel qui nous permet de transférer du code entre un dossier local et un repo Github.

Initialisation du dossier pour travailler avec Git :

```bash
git init
```

Un dossier (masqué) .git est ajouté, il contiendra notre configuration et les fichiers pour effectuer les transferts.

Il faut préciser l'adresse du repo à git :

```bash
git remote add origin adresse_ssh
```

`origin` est michellizable, c'est à dire que je peux lui donner le nom que je souhaite. Par défaut, quand on fait un `git clone` un remote de nom `origin` est automatiquement ajouté.

Pour récupérer le dernier code mise en ligne, il faut effectuer la commande :

```bash
git pull
```

On peut préciser le remote et la branche :

```bash
# je souhaite récupérer le code du remote "origin" et de sa branche "master"
git pull origin master
```

