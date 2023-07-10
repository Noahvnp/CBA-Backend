const middlewareController = require("../middlewares/middlewareController");
const newsController = require("../controllers/newsController");

const router = require("express").Router();

//GET
router.get("/", newsController.getNews)

// CREATE
router.post("/createNews/:id", middlewareController.verifyTokenAndAdminAuth, newsController.createNews);

// UPDATE
router.put("/:idCreator/:id", newsController.updateNews);

// DELETE
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, newsController.deleteNews);

module.exports = router;
