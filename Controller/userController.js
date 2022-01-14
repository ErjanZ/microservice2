'use strict'
const response = require('./../response');
exports.users = (req,res) => {
    const users =[
        {
            "id":1,
            "name":"Aleks"
        },
        {
            "id":2,
            "name":"Djon"
        }
    ]
    response.status(users, res)
}
