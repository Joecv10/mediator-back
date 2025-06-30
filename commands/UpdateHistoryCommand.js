class UpdateHistoryCommand {
  /**
   * @param {string} id        The MongoDB _id of the history record
   * @param {Object} payload   The fields to update (same shape as create payload)
   */
  constructor(id, payload) {
    this.id = id;
    this.payload = payload;
  }
}

module.exports = UpdateHistoryCommand;
