const express = require('express');

const router = express.Router();
const addArticles = require('../controllers/add-articles');
const { regExpUrl } = require('../helpers/constants/index');
// eslint-disable-next-line import/order
const { celebrate, Joi } = require('celebrate');

router.post('/articles', celebrate({
  body: Joi.object().keys({
    keyword: Joi
      .string()
      .trim()
      .required()
      .min(2)
      .max(30),
    title: Joi
      .string()
      .required()
      .trim(),
    text: Joi
      .string()
      .required()
      .trim(),
    date: Joi
      .date()
      .required()
      .trim(),
    source: Joi
      .string()
      .required()
      .trim(),
    link: Joi
      .string()
      .required()
      .trim()
      .pattern(new RegExp(regExpUrl)),
    image: Joi
      .string()
      .required()
      .trim()
      .pattern(new RegExp(regExpUrl)),
  }),
}), addArticles);
