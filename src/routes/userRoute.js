const middlewareController = require("../middlewares/middlewareController");
const userController = require("../controllers/userController");
const router = require("express").Router();

// GET ALL USERS
router.get("/", userController.getAllUsers);

// GET USER
router.get(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.getUser
);

// DELETE USER
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);

//UPADATE USER
router.put(
  "/:id",
  // middlewareController.verifyTokenAndAdminAuth,
  userController.updateUser
);

module.exports = router;
