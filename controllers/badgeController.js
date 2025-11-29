const db = require('../database/connection');

async function createBadge(req, res) {
  const { name, description, image_url, created_by } = req.body;
  if (!name) return res.status(400).json({ error: 'Name required' });
  try {
    const result = await db.query(
      `INSERT INTO badges (name, description, image_url, created_by) VALUES ($1,$2,$3,$4) RETURNING *`,
      [name, description || null, image_url || null, created_by || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

async function listBadges(req, res) {
  try {
    const result = await db.query('SELECT * FROM badges ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { createBadge, listBadges };
