const HistoryService = require("../Services/HistoryService");

class ServiceFactory {
  static getHistoryService() {
    return new HistoryService();
  }

  // later on you can add more:
  // static getFooService() { return new FooService(); }
}

module.exports = ServiceFactory;
