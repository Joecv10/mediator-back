const mediator = require("../mediator");
const CreateHistoryCommand = require("../commands/CreateHistoryCommand");
const ListHistoriesCommand = require("../commands/ReadAllHistoriesCommand");
const ReadHistoryCommand = require("../commands/ReadHistoryCommand");
const UpdateHistoryCommand = require("../commands/UpdateHistoryCommand");
const DeleteHistoryCommand = require("../commands/DeleteHistoryCommand");

exports.createHistory = async (req, res, next) => {
  try {
    const cmd = new CreateHistoryCommand(req.body);
    const saved = await mediator.send(cmd);
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

exports.getAllHistories = async (req, res, next) => {
  try {
    const cmd = new ListHistoriesCommand();
    const all = await mediator.send(cmd);
    res.json(all);
  } catch (err) {
    next(err);
  }
};

exports.getHistoryById = async (req, res, next) => {
  try {
    const cmd = new ReadHistoryCommand(req.params.id);
    const record = await mediator.send(cmd);
    if (!record) {
      return res.status(404).json({ error: "History record not found" });
    }
    res.json(record);
  } catch (err) {
    next(err);
  }
};

exports.updateHistory = async (req, res, next) => {
  try {
    const cmd = new UpdateHistoryCommand(req.params.id, req.body);
    const updated = await mediator.send(cmd);
    if (!updated) {
      return res.status(404).json({ error: "History record not found" });
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteHistory = async (req, res, next) => {
  try {
    const cmd = new DeleteHistoryCommand(req.params.id);
    const deleted = await mediator.send(cmd);
    if (!deleted) {
      return res.status(404).json({ error: "History record not found" });
    }
    // Optionally return 204 No Content
    return res.status(204).end();
  } catch (err) {
    next(err);
  }
};
