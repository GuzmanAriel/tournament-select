const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  id: Number,
  tournamentId: Number,
  team_name: String,
  team_captain: String
});

module.exports = mongoose.model('Team', teamSchema);