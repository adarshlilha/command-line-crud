const mongoose = require('mongoose');
const UTILS = require('./utils');

// Contact schema definition
const contactSchema = mongoose.Schema({
  firstname: { type: String, set: UTILS.toLower },
  lastname: { type: String, set: UTILS.toLower },
  phone: { type: String, set: UTILS.toLower },
  email: { type: String, set: UTILS.toLower },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = {
  Contact,
};
