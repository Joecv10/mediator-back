const History = require("../models/History");

class UpdateHistoryHandler {
  async handle(command) {
    const history = await History.findById(command.id);
    if (!history) return null;

    history.set(command.payload);

    const updated = await history.save();

    return updated;
  }
}

module.exports = UpdateHistoryHandler;
