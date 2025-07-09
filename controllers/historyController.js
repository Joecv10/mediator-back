// controllers/historyController.js
const ServiceFactory = require("../Factories/ServiceFactory");

exports.createHistory = async (req, res, next) => {
  try {
    const historySvc = ServiceFactory.getHistoryService();
    const saved = await historySvc.create(req.body);
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

exports.listHistories = async (req, res, next) => {
  try {
    const historySvc = ServiceFactory.getHistoryService();
    const all = await historySvc.getAll();
    res.json(all);
  } catch (err) {
    next(err);
  }
};

exports.getHistoryById = async (req, res, next) => {
  try {
    const historySvc = ServiceFactory.getHistoryService();
    const record = await historySvc.getById(req.params.id);
    if (!record) return res.status(404).json({ error: "Not found" });
    res.json(record);
  } catch (err) {
    next(err);
  }
};

exports.updateHistory = async (req, res, next) => {
  try {
    const historySvc = ServiceFactory.getHistoryService();
    const updated = await historySvc.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteHistory = async (req, res, next) => {
  try {
    const historySvc = ServiceFactory.getHistoryService();
    const deleted = await historySvc.delete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
