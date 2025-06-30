const History = require("../models/History");

class DeleteHistoryHandler {
  async handle(command) {
    // findByIdAndDelete returns the deleted doc (or null if not found)
    return History.findByIdAndDelete(command.id);
  }
}

module.exports = DeleteHistoryHandler;
