class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }

        this.notes = [];
        Database.instance = this;
    }

    getNotes() {
        return this.notes;
    }

    addNote(note) {
        this.notes.push(note);
    }
}

module.exports = new Database();
