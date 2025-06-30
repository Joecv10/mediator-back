const History = require("../models/History");

class UpdateHistoryHandler {
  async handle(command) {
    // findByIdAndUpdate: return the updated doc, run validators on update
    const updated = await History.findByIdAndUpdate(
      command.id,
      command.payload,
      {
        new: true,
        runValidators: true,
      }
    );
    return updated;
  }
}

module.exports = UpdateHistoryHandler;
