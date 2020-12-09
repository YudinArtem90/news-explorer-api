const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const { Unauthorized, BadRequest } = require('../helpers/errors');
// const { validationUrl, validationEmail } = require('../helpers/validation');
// const checkErrors = require('../helpers/checkErrors');
const { Schema } = mongoose;
const user = require('./user');

const userSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        // return validationUrl(url);
      },
      message: 'Ошибка валидации url в userSchema',
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(email) {
        // return validationEmail(email);
      },
      message: 'Ошибка валидации email в userSchema',
    },
  },
  owner: {
    type: Schema.Types.ObjectId,
    select: false,
    ref: 'user',
    require: true,
  },
});
