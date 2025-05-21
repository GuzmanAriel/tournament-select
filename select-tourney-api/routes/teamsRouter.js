const express = require('express');
const Team = require('../models/Team');
const router = express.Router();

router.get('/tournaments/:id/teams', async (req, res) => {
  const teams = await Team.find({ tournamentId: req.params.id });
  res.json(teams);
});

module.exports = router;