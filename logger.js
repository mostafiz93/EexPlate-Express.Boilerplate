const winston = require('winston');
require('winston-mongodb');
const { mongoManager } = require('./src/mongo/MongoManager');

// const logger = new (winston.Logger)({
//   transports: [
//     new (winston.transports.MongoDB)({ db: mongoManager.getMongoUrl() }),
//   ],
// });

const logger = winston.createLogger({
  transports: [
    // new (winston.transports.Console)(options.console),
    // new (winston.transports.File)(options.errorFile),
    // new (winston.transports.File)(options.file)
    new (winston.transports.MongoDB)({ db: mongoManager.getMongoUrl() }),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

module.exports = logger;
