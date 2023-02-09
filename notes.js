const fs = require("fs");

const getNotes = () => {
  return "Your notes...";
};
const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (!duplicateNotes.length) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("Note added");
  } else {
    console.log("Note not added - duplicate title");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNotes,
};
