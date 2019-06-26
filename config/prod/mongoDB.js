const uriBuilder = require('mongo-uri-builder');

const connectionParams = {
  host: 'localhost',
  port: '27017',
  database: 'explateLog',
};

const options = {
  useNewUrlParser: true,
};

module.exports = {
  uri: uriBuilder(connectionParams),
  options,
};
