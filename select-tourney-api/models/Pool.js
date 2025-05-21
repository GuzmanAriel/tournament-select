const mongoose = require('mongoose');

const poolSchema = new mongoose.Schema({
  id: Number,
  tournamentId: Number,
  pool_id: String,
  teamIds: [Number],
  teams: [mongoose.Schema.Types.Mixed],
  matches: [mongoose.Schema.Types.Mixed]
});

module.exports = mongoose.model('Pool', poolSchema);