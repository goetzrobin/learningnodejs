'use strict';

const Models = require('../models/');

module.exports = (request, h) => {
    Models.Note.findAll({
        order: [['date','DESC']]
    }).then((result) => {
        return({
            data: {
                notes:result
            },
            page: 'Home-Notes Board',
            description: 'Welcome to my Notes Board'
        })
    });
}