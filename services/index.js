require('module-alias/register');
const http = require('http'),
    RecommendCreatorAPI = require('@RecommendCreatorAPI'),
    RecommendCreatorServer = http.Server(RecommendCreatorAPI),
    RecommendCreatorPORT = process.env.PORT || 3001,
      LOCAL = '0.0.0.0';
      RecommendCreatorServer.listen(RecommendCreatorPORT, LOCAL, () => console.log(`RecommendCreatorAPI running on ${RecommendCreatorPORT}`));