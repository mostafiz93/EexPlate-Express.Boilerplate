const mongoose = require('mongoose');
const { uri } = require('../../config/prod/mongoDB');

class MongoManager {
  constructor() {}

  getMongoUrl() {
    // TODO :: check if mongo_uri is in process.env first
    // return process.env.MONGODB_URI;
    return uri;
  }

  connect() {
    return mongoose.connect(this.getMongoUrl());
  }
}

const mongoManager = new MongoManager();

module.exports = { mongoManager };
