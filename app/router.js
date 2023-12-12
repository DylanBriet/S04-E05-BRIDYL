const { Router } = require("express");

const mainController = require("./controllers/mainController");
const promoController = require("./controllers/promoController");

const router = Router();

router.get("/",mainController.displayHomepage);

router.get("/promos",promoController.displayAll);

module.exports = router;