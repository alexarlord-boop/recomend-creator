const mongoose = require('mongoose'),
bcrypt = require('bcrypt');

// работа с моделью данных

const schema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


schema.pre('save', function (next) {
    const user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, (error, salt) => {
            if (error) return next(error);
            bcrypt.hash(user.password, salt, (error, hash) => {
              if (error) return next(error);
              user.password = hash;
                next();
              });
            });
    } else {
        return next();
      }
});

schema.methods.comparePassword = function (password, callback) {
    bcrypt.compare(password, this.password, (error, matches) => {
      if (error) return callback(error);
      callback(null, matches);
    });
  };


  mongoose.model('User', schema);
