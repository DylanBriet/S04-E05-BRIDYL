const promoList = require("../../data/promos.json");

const promoController = {
    displayAll(req,res,next){
        // je transmets les données à la vue via res.locals
        res.locals.promoList = promoList;

        res.render("promos");
    }
};

module.exports = promoController;