const express = require('express');
const Bracket = require('../models/Bracket');
const router = express.Router();

router.get('/tournaments/:id/bracket', async (req, res) => {
  const bracket = await Bracket.find({ tournamentId: req.params.id });
  res.json(bracket);
});

module.exports = router;