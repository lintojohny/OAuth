const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
const {port} = require('./config');
const {Logger} = require('./loaders/logger');
const loader = require('./loaders');

require('./helpers/passportSetup');

async function startServer() {
  // For an actual app you should configure this with an experation time, better keys, proxy and secure
  app.use(
    cookieSession({
      name: 'auth-session',
      keys: ['key1', 'key2'],
    }),
  );

  // Initializes passport and passport sessions
  app.use(passport.initialize());
  app.use(passport.session());

  await loader(app);

  app.listen(port, err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
    }
    Logger.info(`
        ################################################
        🛡️      Server listening on port: ${port}     🛡️
        ################################################
      `);
  });
}

startServer();
