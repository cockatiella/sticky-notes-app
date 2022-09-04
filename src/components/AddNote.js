import React, { useState } from "react";

export default function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  // the value changes when the user types
  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        placeholder="add a note"
        cols="10"
        rows="8"
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining...</small>
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
}
