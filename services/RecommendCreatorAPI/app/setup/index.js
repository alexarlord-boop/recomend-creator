const mongoose = require('mongoose'),
     UserModel = require('@RecommendCreatorModels/user');;
const models = {
  User: mongoose.model('User')
}
module.exports = models;