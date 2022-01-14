'use strict'
module.exports = (app) =>{
    const indexController = require('./../Controller/indexController');
    const usersController = require('./../Controller/userController')
    app.route('/').get(indexController.index)
    app.route('/users').get(usersController.users)
} 