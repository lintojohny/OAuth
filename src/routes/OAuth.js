const express = require('express');
const passport = require('passport');

const router = express.Router();
const {catchErrors} = require('../errorHandlers');
const {
  getHome,
  loginFailed,
  profile,
  logout,
} = require('../controllers/OAuth/getHomeController');
const {isAuthenticated} = require('../middlewares');

// default route
router.get('/', catchErrors(getHome));

// if google signin filed then
router.get('/failed', catchErrors(loginFailed));

// In this route you can see that if the user is logged in u can acess his info in: req.user
router.get('/profile', isAuthenticated, catchErrors(profile));

// Auth Routes
router.get(
  '/login',
  passport.authenticate('google', {scope: ['profile', 'email']}),
);

router.get(
  '/login/callback',
  passport.authenticate('google', {failureRedirect: '/home/failed'}),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/home/profile');
  },
);

// to logout the user
router.get('/logout', catchErrors(logout));

module.exports = router;
