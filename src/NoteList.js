import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = () => {
  const notes = [
    {
      id: 1,
      title: 'JS thoughts',
      body: 'I just love JS so much',
    },
    {
      id: 2,
      title: 'Breakfast',
      body: 'FOR IT!',
    },
    {
      id: 3,
      title: 'Class notes',
      body: 'React is spiffy',
    },
  ]

    return (
      <div className="NoteList">
        <h3>Notes</h3>
        <ul id="notes">
          { notes.map(note => <Note note={note}/>)}
        </ul>
      </div>
    )
}

export default NoteList