'use strict';

const Models = require('../models/');

module.exports = async (request, h) => {
    var results =  await Models.Note.findAll({
        order: [['date', 'DESC']]
    })
    console.log(results)
    return h.view('home' 
    //, {
    //     data: {
    //         notes: results
    //     },
    //     page: 'Home-Notes Board',
    //     description: ' Welcome to my Notes Board'
    // }
);
}