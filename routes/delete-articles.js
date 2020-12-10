const express = require('express');

const router = express.Router();
const { deleteArticles } = require('../controllers/delete-articles');

// eslint-disable-next-line import/order
const { celebrate, Joi } = require('celebrate');
const { regExpObjectId } = require('../helpers/constants/index');

router.get('/articles/:articleId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().trim().required().pattern(new RegExp(regExpObjectId)),
  }),
}), deleteArticles);

module.exports = router;
