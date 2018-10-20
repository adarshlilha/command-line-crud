const mongoose = require('mongoose');
const assert = require('assert');
const schema = require('./schema');

const db = mongoose.connect('mongodb://testuser:testuser12345@ds237363.mlab.com:37363/command-line-crud');

/**
 * Function to add a new contact
 * @return {String} response status
 */
const addContact = (contact) => {
  schema.Contact.create(contact, (err) => {
    assert.equal(null, err);
    console.info('New Contact added');
    db.disconnect();
  });
};

module.exports = {
  addContact,
};
