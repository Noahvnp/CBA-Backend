const middlewareController = require("../middlewares/middlewareController");
const userController = require("../controllers/userController");

const router = require("express").Router();

// GET ALL USERS
router.get("/", middlewareController.verifyToken, userController.getAllUsers);

// DELETE USER
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, userController.deleteUser);

//UPADATE USER
router.put("/:id", userController.updateUser);


module.exports = router;
