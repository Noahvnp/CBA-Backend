const passport = require("passport");

const authController = require("../controllers/authController");
const middlewareController = require("../middlewares/middlewareController");

const router = require("express").Router();

// REGISTER
router.post("/register", authController.registerUser);

// LOG IN
router.post("/login", authController.loginUser);

// REFRESH TOKEN
router.post("/refresh", authController.requestRefreshToken);

// LOG OUT
router.post(
  "/logout",
  middlewareController.verifyToken,
  authController.logoutUser
);

// LOGIN WITH GOOGLE
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"], session: false })
);

router.get(
  "/google/callback",
  (req, res, next) => {
    passport.authenticate("google", (err, profile) => {
      req.user = profile;
      next();
    })(req, res, next);
  },
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect(`/v1/user/${req.user?.id}`);
  }
);

module.exports = router;
