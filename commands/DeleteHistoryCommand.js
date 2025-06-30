class DeleteHistoryCommand {
  /**
   * @param {string} id  The MongoDB _id of the history record to delete
   */
  constructor(id) {
    this.id = id;
  }
}

module.exports = DeleteHistoryCommand;
