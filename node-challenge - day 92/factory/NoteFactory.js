const Note = require('../models/Note');

class NoteFactory {
    static create(type, title, content) {
        // For demo, use a switch in case you want different subclasses
        switch (type) {
            case 'basic':
                return new Note(title, content);
            default:
                throw new Error('Note type not supported');
        }
    }
}

module.exports = NoteFactory;
