const db = require('../db/Database');

class NoteRepository {
    getAllNotes() {
        return db.getNotes();
    }

    addNote(note) {
        db.addNote(note);
    }
}

module.exports = new NoteRepository();
