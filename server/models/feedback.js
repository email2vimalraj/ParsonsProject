/**
 * Defining a Feedback Model in mongoose
 * 
 */
var mongoose = require('mongoose');
// Other oauthtypes to be added

/*
 User Schema
 */

var FeedbackSchema = new mongoose.Schema({
  description: {type: String, default: ''}
});




module.exports = mongoose.model('Feedback', FeedbackSchema);
