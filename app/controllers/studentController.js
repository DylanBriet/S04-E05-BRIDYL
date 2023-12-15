const datamapper = require("../models/datamapper");

const studentController = {
    async displayStudents(req,res,next){
        const promoId = req.params.id;

        // je récupère la liste des étudiants
        const studentList = await datamapper.getStudentsByPromoId(promoId);

        if(studentList){
            // je récupère le détail de la promo
            const promo = await datamapper.findOnePromo(promoId);

            // j'envoie la liste des étudiants à la vue
            res.locals.studentList = studentList;
            res.locals.promo = promo;

            // j'affiche la vue
            res.render("students");
        }
        else{
            next();
        }

        
    }

};

module.exports = studentController