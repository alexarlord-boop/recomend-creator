const models = require('@RecommendCreator/app/setup');
module.exports = (app) => {
  const api = app.RecommendCreatorAPI.app.api.auth;
  app.route('/')
     .get((req, res) => res.send('Recommend Creator API'));
  app.route('/api/v1/auth')
     .post(api.login(models.User));
}