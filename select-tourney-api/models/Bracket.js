const mongoose = require('mongoose');

const bracketSchema = new mongoose.Schema({
  id: Number,
  tournamentId: Number,
  type: String,
  matches: [mongoose.Schema.Types.Mixed]
});

module.exports = mongoose.model('Bracket', bracketSchema);