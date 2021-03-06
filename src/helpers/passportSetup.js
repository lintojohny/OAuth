const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = require('../config');

passport.serializeUser(function(user, done) {
  /*
    From the user take just the id (to minimize the cookie size) and just pass the id of the user
    to the done callback
    PS: You dont have to do it like this its just usually done like this
    */
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  /*
    Instead of user this function usually recives the id 
    then you use the id to select the user from the db and pass the user obj to the done callback
    PS: You can later access this data in any routes in: req.user
    */
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3001/home/login/callback',
    },
    function(accessToken, refreshToken, profile, done) {
      /* 
      TODO: 
     1. use the profile info (mainly profile id) to check if the user is registerd in ur db
    2.  If yes select the user and pass him to the done callback
    3.  If not create the user and then select him and pass to callback
    */
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
      console.log('done', done);
      return done(null, profile);
    },
  ),
);
