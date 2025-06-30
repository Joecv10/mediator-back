class CreateHistoryCommand {
  /**
   * @param {Object} payload  The raw DTO from the controller
   * @param {Object} payload.personalData
   * @param {string} payload.reasonForConsultation
   * @param {Object} payload.medicalHistory
   * @param {string} [payload.notes]
   */
  constructor(payload) {
    this.payload = payload;
  }
}

module.exports = CreateHistoryCommand;
