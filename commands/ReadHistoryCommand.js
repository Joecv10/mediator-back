class ReadHistoryCommand {
  /**
   * @param {string} id  The MongoDB _id of the history record
   */
  constructor(id) {
    this.id = id;
  }
}

module.exports = ReadHistoryCommand;
