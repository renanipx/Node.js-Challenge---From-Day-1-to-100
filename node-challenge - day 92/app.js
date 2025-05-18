const express = require('express');
const app = express();
app.use(express.json());

const NoteFactory = require('./factory/NoteFactory');
const NoteRepo = require('./repository/NoteRepository');
const Logger = require('./observer/Logger');
const { TitleSearch, ContentSearch } = require('./strategy/searchStrategies');

const observers = [Logger];

function notify(note) {
    observers.forEach(observer => observer.update(note));
}

app.post('/notes', (req, res) => {
    const { title, content, type = 'basic' } = req.body;
    try {
        const note = NoteFactory.create(type, title, content);
        NoteRepo.addNote(note);
        notify(note);
        res.status(201).json(note);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/notes', (req, res) => {
    const { searchBy, keyword } = req.query;
    const notes = NoteRepo.getAllNotes();

    if (!searchBy || !keyword) {
        return res.json(notes);
    }

    let strategy;
    if (searchBy === 'title') {
        strategy = new TitleSearch();
    } else if (searchBy === 'content') {
        strategy = new ContentSearch();
    } else {
        return res.status(400).json({ error: 'Invalid searchBy parameter' });
    }

    const result = strategy.search(notes, keyword);
    res.json(result);
});

app.listen(3000, () => console.log('Server running on port 3000'));
