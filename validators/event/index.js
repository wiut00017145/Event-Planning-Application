const { body, param } = require('express-validator');
const event_service = require('../../services/event')

const addEventValidation = () => {
  return [
    body('location')
      .notEmpty().withMessage('Event location must not be empty')
      .isLength({ min: 15, max: 255 }).withMessage('Event location must be between 15 and 255 characters long'),
    body('description')
      .notEmpty().withMessage('Event description must not be empty'),
    body('eventDate')
      .notEmpty().withMessage('Event date must not be empty')
      .isDate().withMessage('Invalid date format for event date')
  ];
};


const deleteEventValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await event_service.getById(id);
      if (!exists) {
        throw new Error('event not found');
      }
    })
  ];
};

const updateEventValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await event_service.getById(id);
      if (!exists) {
        throw new Error('event not found');
      }
    }),
    body('location')
      .notEmpty().withMessage('Event location must not be empty')
      .isLength({ min: 15, max: 255 }).withMessage('Event location must be between 15 and 255 characters long'),
    body('description')
      .notEmpty().withMessage('Event description must not be empty'),
      body('eventDate')
      .notEmpty().withMessage('Event date must not be empty')
      .isDate().withMessage('Invalid date format for event date')
  ];
};

module.exports = {
    addEventValidation,
    updateEventValidation,
    deleteEventValidation
};
