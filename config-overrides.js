const rewireBemSets = require('rewire-bem-sets');

module.exports = function override(config, env) {



  const bemInject =  rewireBemSets({
    techs: ['js', 'css']
  })(config, env);

  bemInject[0].plugins[3].options.inject = false;
  bemInject[1].plugins[3].options.inject = false;

  return bemInject;
};
