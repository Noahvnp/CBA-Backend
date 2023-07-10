const middlewareController = require("../middlewares/middlewareController");
const eventController = require("../controllers/eventController");
const router = require("express").Router();

//GET
router.get("/", eventController.getEvent);

router.get("/:id", eventController.getEventbyId);
//CREATE
router.post(
  "/createEvent/:id",
  middlewareController.verifyTokenAndAdminAuth,
  eventController.createEvent
);

//UPDATE EVENT
router.put(
  "/:idCreator/:id",
  middlewareController.verifyTokenAndAdminAuth,
  eventController.updateEvent
);

//DELETE EVENT
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  eventController.deleteEvent
);

module.exports = router;
