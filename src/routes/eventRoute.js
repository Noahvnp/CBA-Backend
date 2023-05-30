const middlewareController = require("../middlewares/middlewareController");
const eventController = require("../controllers/eventController");
const router = require("express").Router();

//GET
router.get("/", eventController.getEvent);

//CREATE
router.post("/createEvent/:id", eventController.createEvent);

//UPDATE EVENT
router.put("/:idCreator/:id", eventController.updateEvent);

//DELETE EVENT
router.delete("/:id", eventController.deleteEvent);

module.exports = router;
