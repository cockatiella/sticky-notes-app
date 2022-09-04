import React from "react";

export default function Header({ handleToggleDarkMode }) {
  return (
    <div className="header">
      <h1>My Sticky Notes</h1>
      <button
        className="save"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        Toggle Mode ☀️🌑{" "}
      </button>
    </div>
  );
}
