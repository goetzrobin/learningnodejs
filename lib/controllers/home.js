'use strict';

const Models = require('../models/');

module.exports = async (request, h) => {
     return Models.Note.findAll({
        order: [['date', 'DESC']]
    })
}