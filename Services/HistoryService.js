const History = require("../models/History");

class HistoryService {
  async create(data) {
    const record = new History(data);
    return record.save();
  }

  async getAll() {
    return History.find();
  }

  async getById(id) {
    return History.findById(id);
  }

  async update(id, data) {
    return History.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return History.findByIdAndDelete(id);
  }
}

module.exports = HistoryService;
