const History = require("../models/History");

class UpdateHistoryHandler {
  async handle(command) {
    // 1️⃣ Load the existing document
    const history = await History.findById(command.id);
    if (!history) return null;

    // 2️⃣ Merge in the updates
    history.set(command.payload);

    // 3️⃣ Save (runs all schema validators in document context)
    const updated = await history.save();

    return updated;
  }
}

// class UpdateHistoryHandler {
//   async handle(command) {
//     // findByIdAndUpdate: return the updated doc, run validators on update
//     const updated = await History.findByIdAndUpdate(
//       command.id,
//       command.payload,
//       {
//         new: true,
//         runValidators: true,
//       }
//     );
//     return updated;
//   }
// }

module.exports = UpdateHistoryHandler;
