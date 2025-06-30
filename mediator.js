class Mediator {
  constructor() {
    this.handlers = new Map();
  }

  // Register a handler for a given command class
  register(commandClass, handler) {
    this.handlers.set(commandClass.name, handler);
  }

  async send(command) {
    const handler = this.handlers.get(command.constructor.name);
    if (!handler) {
      throw new Error(`No handler registered for ${command.constructor.name}`);
    }
    return handler.handle(command);
  }
}

module.exports = new Mediator();
