const express = require('express');
const router = express.Router();
const { createBadge, listBadges } = require('../controllers/badgeController');

router.post('/', createBadge);
router.get('/', listBadges);

module.exports = router;
