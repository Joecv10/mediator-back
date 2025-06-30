const History = require("../models/History");

class CreateHistoryHandler {
  async handle(command) {
    // command.payload already shaped as { personalData, reasonForConsultation, medicalHistory, notes }
    const record = new History(command.payload);
    return record.save();
  }
}

module.exports = CreateHistoryHandler;
