import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
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
    render () {
        return (
            <div 
            className="Main" 
            style={style}
            >
                <Sidebar />
                <NoteList notes={this.state.notes}/>
                <NoteForm />
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