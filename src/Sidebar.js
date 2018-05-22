import React from 'react'

import './Sidebar.css'
import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
    return (
        <nav 
            className="Sidebar"
            
         >

          <div 
            className="logo"
           
          >
            <img 
                src={quill} 
                alt="Noteherder"
               
            />
          </div>
          <a 
            className="new-note" 
            href="/notes"
           
          >
            <img 
                src={newHover} 
                alt="New note"
                />
            <img 
                className="outline" 
                src={newIcon} 
                alt="New note"
                
                />
          </a>
          <div 
            className="SignOut"
           
          >
            <button 
                
             >
              <i 
                class="fa fa-sign-out"
                
              >
             </i>
            </button>
          </div>
        </nav>
    )

}
/*
const styles = {
    sidebar: {
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    logo: {
        fontFamily: '"Fauna One"',
        color: '#666',
        fontSize: '3rem',
    },
    logoImg: {
        width: '3rem',
        paddingLeft: '0.4rem',
    },
    newNote: {
        marginTop: '2rem',
        position: 'relative',
        width: '4rem',
    },
    plusIcon: {
       position:'absolute',
       left: '0',
       width: '100%',
       transition: 'opacity 0.25s ease-in-out'
    },
    outline: {
        opacity: 0,
    },
    signOut: {
        position: 'absolute',
        bottom: '1rem'
    },
    button: {
        backgroundColor: 'transparent',
        border: '0',
        color: '#008Bf8',
        cursor: 'pointer',
        outline: 'none',
    },
    buttonIcon: {
        fontSize: '2rem'
    }


} 
*/
export default Sidebar