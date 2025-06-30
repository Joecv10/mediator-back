const History = require("../models/History");

class ReadHistoryHandler {
  async handle(command) {
    return History.findById(command.id);
  }
}

module.exports = ReadHistoryHandler;
