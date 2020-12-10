const express = require('express');

const router = express.Router();
const { signin } = require('../controllers/signin');

// eslint-disable-next-line import/order
const { celebrate, Joi } = require('celebrate');
const { regExpObjectId } = require('../helpers/constants/index');

router.get('/articles/:articleId', celebrate({
  params: Joi.object().keys({
    email: Joi.string().required().email().trim()
      .messages({
        'string.email': 'Не правильный формат "email"',
        'string.empty': 'email не может быть пустым',
        'any.required': '"email" обязательное поле',
      }),
    password: Joi.string().required().min(8).trim()
      .messages({
        'string.empty': 'Пароль не может быть пустым',
        'any.required': 'Пароль обязательное поле',
        'string.min': 'Пароль не должен быть меньше {#limit} символов',
      }),
  }).messages({
    'object.unknown': 'Все поля должны быть заполнены',
  }),
}), signin);

module.exports = router;
