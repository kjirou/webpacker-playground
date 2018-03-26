process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

//console.log(JSON.stringify(environment.toWebpackConfig().toObject(), null, 2));

module.exports = environment.toWebpackConfig()
