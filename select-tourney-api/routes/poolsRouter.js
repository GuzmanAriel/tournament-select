const express = require('express');
const Pool = require('../models/Pool');
const router = express.Router();

router.get('/tournaments/:id/pools', async (req, res) => {
  const pools = await Pool.find({ tournamentId: req.params.id });
  res.json(pools);
});

module.exports = router;
