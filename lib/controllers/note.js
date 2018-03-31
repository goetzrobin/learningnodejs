'use strict';

const Models = require('../models/');
const Slugify = require('slug');
const Path = require('path');

module.exports = {
    create: (request, h) => {
       return Models.Note
          .create({
            date: new Date(),
            title: request.payload.noteTitle,
            slug: Slugify(request.payload.noteTitle, {lower: true}),
            description: request.payload.noteDescription,
            content: request.payload.noteContent
          })
      },

};