const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  date_utc: String,
  start_time: String,
  location: String,
  tournament_type: String,
  total_teams: Number,
  playoff_elimination_type: String,
  pool_number: Number,
  playoff_bracket_number: Number,
  prizes: Boolean,
  first_place_prize: String,
  second_place_prize: String,
  third_place_prize: String,
  additional_notes: String,
  is_featured: Boolean,
  status: String,
  inPlayoffs: Boolean
});

module.exports = mongoose.model('Tournament', tournamentSchema);