'use.strict';

const Home = require('./controllers/home');
const Note = require('./controllers/note');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: Home,
    config: {
      description: 'Gets all the notes available'
    }
  },
  {
    method: 'POST',
    path: '/note',
    handler: Note.create,
    config: {
      description: 'Adds a new note'
    }
  },
  {
    method: 'PUT',
    path: '/note/{slug}',
    handler: Note.update,
    config: {
      description: 'Updates the selected note'
    }
  },
  {
    method: 'GET',
    path: '/note/{slug}',
    handler: Note.read,
    config: {
      description: 'Reads the selected note'
    }
  },
  {
    method: 'GET',
    path: '/note/{slug}/delete',
    handler: Note.delete,
    config: {
      description: 'Deletes the selected note'
    }
  },
  {
    // Static files
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: require('path').join(__dirname, '../static/public')
      }
    },
    config: {
      description: 'Provides static resources'
    }
  }
  
]