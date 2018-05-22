import React, { Component } from 'react'
import './App.css'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class App extends Component {
  render() {
    return (
      <div className="Main">
        <Sidebar/>
        <NoteList/>
        <NoteForm/>
      </div>
    )
  }
}

export default App;
