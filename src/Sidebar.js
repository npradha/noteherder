import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
    return (
        <nav className="Sidebar">
          <div className="logo">
            <img src={quill} alt="Noteherder"/>
          </div>
          <a className="new-note" href="/notes">
            <img src={newHover} alt="New note"/>
            <img className="outline" src={newIcon} alt="New note"/>
          </a>
          <div className="SignOut">
            <button>
              <i class="fa fa-sign-out"></i>
            </button>
          </div>
        </nav>
    )

}

export default Sidebar