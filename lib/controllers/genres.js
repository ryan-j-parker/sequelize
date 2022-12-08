const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await db.Genres.findAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const genre = await db.Genres.findByPk(req.params.id, {
        include: db.Movies,
      });
      if (!genre) next();
      res.json(genre);
    } catch (e) {
      next(e);
    }
  });
