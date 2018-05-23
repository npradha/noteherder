import React, { Component } from 'react'

import './Sidebar.css'
import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

class Sidebar extends Component{
  state = {
    newIconHovered: false,
  }

  handleMouseEnter() {
    this.setState({newIconHovered: true})
  }

  handleMouseLeave() {
    this.setState({newIconHovered: false})
  }

  render() {
    return (
        <nav className="Sidebar">

          <div className="logo">
            <img src={quill} alt="Noteherder"/>
          </div>
          <a className="new-note" href="/notes"
              onMouseEnter={() => this.handleMouseEnter()}
              onMouseLeave={() => this.handleMouseLeave()}>
            <img src={newHover} alt="New note"/>
            <img className="outline" src={newIcon} alt="New note" style={{opacity: this.state.newIconHovered ? 0 : 1}}/>
          </a>
          <div className="SignOut" >
            <button>
              <i class="fa fa-sign-out"></i>
            </button>
          </div>
        </nav>
    )
  }
}
export default Sidebar