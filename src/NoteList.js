import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = ({ notes }) => {

  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        { notes.map(note => (
          <Note
            key={note.id}
            note={note}
          />
        ))}
      </ul>
    </div>
  )
}

export default NoteList