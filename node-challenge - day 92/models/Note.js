class Note {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.createdAt = new Date();
    }
}

module.exports = Note;
