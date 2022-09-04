import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import "./index.css";
import Search from "./components/Search";
import Header from "./components/Header";

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "13/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my 2nd note",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my 3rd note",
      date: "18/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my new note",
      date: "28/04/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-notes-app-data")
    );
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  //saves our notes to localstorage everytime there's a change
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-notes-app-data", JSON.stringify(notes)) //converts the notes array to a string
    );
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [notes]);
  

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  return (
    // if darkmode is true then apply that style
    <div className={`${darkMode && 'dark-mode'}`}>
         <div className="container">
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={AddNote}
        handleDeleteNote={deleteNote}
      />
    </div>
    </div>
  );
}
