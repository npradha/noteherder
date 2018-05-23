import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentNote: this.blankNote,
            notes: [
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
            ],
        }
    }

    blankNote = ()  => {
        return {
            id: null,
            title: '',
            body:'', 
        }
    }

    setCurrentNote = (note) => {
        this.setState({currentNote: note})
    }

    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())
    }

    render () {
        return (
            <div 
            className="Main" 
            style={style}
            >
                <Sidebar resetCurrentNote={this.resetCurrentNote} />
                <NoteList 
                    notes={this.state.notes}
                    setCurrentNote={this.setCurrentNote}/>
                <NoteForm currentNote={this.state.currentNote} />
            </div>
        )
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
}
export default Main