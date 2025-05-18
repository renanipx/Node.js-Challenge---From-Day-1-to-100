class Logger {
    update(note) {
        console.log(`Logger: New note created -> ${note.title}`);
    }
}

module.exports = new Logger();
