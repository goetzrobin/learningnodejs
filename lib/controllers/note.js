'use strict';

const Models = require('../models/');
const Slugify = require('slug');
const Path = require('path');
const Pug = require('pug')

module.exports = {
    create: async (request, h) => {
        var result = await Models.Note
            .create({
                date: new Date(),
                title: request.payload.noteTitle,
                slug: Slugify(request.payload.noteTitle, { lower: true }),
                description: request.payload.noteDescription,
                content: request.payload.noteContent
            })
        const newNote = await Pug.renderFile(
            Path.join(__dirname, '../views/components/note.pug'),
            {
                note: result
            }
        );

        return (newNote);
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
        var result = await Models.Note.findOne(options);
        // Generate a new note with the updated data
        const updatedNote = Pug.renderFile(
            Path.join(__dirname, '../views/components/note.pug'),
            {
                note: result
            }
        );

        return(updatedNote);

    },
    delete: async (request, h) => {
        await Models.Note
            .destroy({
                where: {
                    slug: request.params.slug
                }
            })
        return h.redirect('/');
    },
    read: async (request, h) => {
        var result = await Models.Note
            .findOne({
                where: {
                    slug: request.params.slug
                }
            })
        return await h.view('note', {
            note: result,
            page: `${result.title}—Notes Board`,
            description: result.description
        });
    }

};