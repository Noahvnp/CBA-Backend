const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
require("dotenv").config();

const User = require("../models/userModel");

const auth = require("../controllers/authController");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/v1/auth/google/callback",
    },
    async function (accesstoken, profile, done) {
      // Check if google profile exist.
      if (profile.id) {
        User.findOne({ googleId: profile.id }).then((existingUser) => {
          if (existingUser) {
            console.log(accessToken);
            done(null, existingUser);
          } else {
            new User({
              googleId: profile.id,
              email: profile.emails[0].value,
              username: profile.name.familyName + " " + profile.name.givenName,
            })
              .save()
              .then((user) => done(null, user));
          }
        });
      }
    }
  )
);
