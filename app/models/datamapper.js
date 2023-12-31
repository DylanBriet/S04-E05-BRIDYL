const client = require("./dbClient");

const datamapper = {
    async findAllPromos(){
        // 1. Je prépare la requête SQL
        const sqlQuery = `
        SELECT *
        FROM promo;
        `;

        // 2. J'initialise la variable "result" qui sera retournée par ma méthode
        let result;
        // 3. J'essaie de contacter la BDD pour récupérer la liste des promos
        try{
            // 3.1 J'envoie la requête SQL à la BDD
            const response = await client.query(sqlQuery);
            // 3.2 Je place les lignes retournées (response.rows) dans la variable "result"
            result = response.rows;
        }
        catch(error){
            // J'affiche l'erreur qui est survenue
            console.error(error);
        }

        // 4. Je retourne "result"
        return result;
    },
    async findOnePromo(id){
        const sqlQuery = `
        SELECT *
        FROM promo
        WHERE id=${id};
        `;

        let response;
        try{
            response = await client.query(sqlQuery);
            // response.rows sera toujours un tableau, que la réponse retourne 0, 1 ou N lignes
            //result = response.rows[0];
        }
        catch(error){
            console.error(error);
        }


        // autre façon de faire, l'utilisation du ?
        // response? va vérifier si response est null
        // si response est null alors ça renvoie "undefined"
        // si response contient quelque chose alors il essaie de continuer et d'évaluer response.rows[0]
        return response?.rows[0];
        // if(response){
        //     return response.rows[0]
        // }
        // else{
        //     return null;
        // }
    },
    async getStudentsByPromoId(id){
        const sqlQuery = `
        SELECT *
        FROM student
        WHERE promo_id=${id};
        `;

        console.log(sqlQuery);

        // la variable result va contenir ce que retourne la méthode
        let result;
        try{
            response = await client.query(sqlQuery);

            result = response.rows;
        }
        catch(error){
            console.error("ERROR :",error);
        }

        // si tout se passe bien, result va contenir la liste des étudiants
        // s'il y a une erreur, result sera null
        return result;
    }
};

module.exports = datamapper;