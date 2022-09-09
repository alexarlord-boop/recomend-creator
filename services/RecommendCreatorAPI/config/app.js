const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      morgan = require('morgan'),
      consign = require('consign'),
      cors = require('cors'),
      passport = require('passport'),
      passportConfig = require('./passport')(passport),
      jwt = require('jsonwebtoken'),
      config = require('./index.js'),
      database = require('./database')(mongoose, config);

      app.use(express.static('.'));
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      app.use(morgan('dev'));
      app.use(cors());
      app.use(passport.initialize());
      
      app.set('recommendsecret', config.secret);
      consign({ cwd: 'services' })
      .include('RecommendCreatorAPI/app/setup')
      .then('RecommendCreatorAPI/app/api')
      .then('RecommendCreatorAPI/app/routes')
      .into(app);
module.exports = app;