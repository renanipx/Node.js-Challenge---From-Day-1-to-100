class TitleSearch {
    search(notes, keyword) {
        return notes.filter(note => note.title.includes(keyword));
    }
}

class ContentSearch {
    search(notes, keyword) {
        return notes.filter(note => note.content.includes(keyword));
    }
}

module.exports = {
    TitleSearch,
    ContentSearch
};
