const { body } = require('express-validator');
const validateImageExtension = require('../helpers/validateImageExtension');

module.exports = [
  body('name').notEmpty().withMessage('Completar el campo de nombre'),
  body('surname').notEmpty().withMessage('Completar el campo de apellido'),
  body('email').notEmpty().withMessage('Completar el campo de email').bail().isEmail().withMessage('Escribir un formato de email valido'),
  body('password').notEmpty().withMessage('Completar el campo de password'),
  body('avatar').custom(validateImageExtension)
];