'use strict';

const Models = require('../models/');
const Slugify = require('slug');
const Path = require('path');

module.exports = {
    create: async (request, h) => {
        return await Models.Note
            .create({
                date: new Date(),
                title: request.payload.noteTitle,
                slug: Slugify(request.payload.noteTitle, { lower: true }),
                description: request.payload.noteDescription,
                content: request.payload.noteContent
            })
    },
    update: async (request, h) => {
        console.log(request.payload);
        const values = {
            title: request.payload.noteTitle,
            description: request.payload.noteDescription,
            content: request.payload.noteContent
        };

        const options = {
            where: {
                slug: request.params.slug
            }
        };

         await Models.Note.update(values, options);
         return await Models.Note.findOne(options);
    },
    delete: async (request, h) => {
         Models.Note
            .destroy({
                where: {
                    slug: request.params.slug
                }
            })
         return h.redirect('/');
    },
    read: async (request, reply) => {
        Models.Note
          .findOne({
            where: {
              slug: request.params.slug
            }
          })
          .then((result) => {
            return(result);
          });
      }

};