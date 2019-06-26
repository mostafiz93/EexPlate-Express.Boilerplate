const express = require('express');

// const { errorHandler } = require('../middleware/index');

// const auth = require('../controllers/auth');

const routersInit = config => {
  const router = express();

//   router.use('/auth', auth(models, { config }));

//   router.use(errorHandler);
  return router;
};

module.exports = routersInit;
