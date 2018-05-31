import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = ({ notes }) => {
    const sortNotes = (a,b) => {
      return (notes[b].updatedAt || 0) - (notes[a].updatedAt)
    }

    const noteId = Object.keys(notes).sort(sortNotes)

  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        { noteId.map(noteId => (
          <Note
            key={noteId}
            note={notes[noteId]}
          />
        ))}
      </ul>
    </div>
  )
}

export default NoteList