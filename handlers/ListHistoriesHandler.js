const History = require("../models/History");

class ListHistoriesHandler {
  async handle(command) {
    // Return all history records
    return History.find();
  }
}

module.exports = ListHistoriesHandler;
