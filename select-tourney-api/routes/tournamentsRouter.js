const express = require('express');
const Tournament = require('../models/Tournament');
const router = express.Router();

router.get('/', async (req, res) => {
  const tournaments = await Tournament.find();
  res.json(tournaments);
});

router.get('/:id', async (req, res) => {
  const tournament = await Tournament.findOne({ id: req.params.id });
  res.json(tournament);
});

module.exports = router;