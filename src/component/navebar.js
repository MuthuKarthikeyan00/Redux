import React from 'react'
import {Link} from 'react-router-dom';
import "./navebar.css"

const navebar = (props) => {

    return (
        <div className="nav-bar">
           <h1>MK'Creation</h1>
          <div  className="nav-link">
          <Link  className="nav-item" to='/'>Home</Link>
           <Link className="nav-item"  to='/show'>Show</Link>
          </div>
           
        </div>
    )
}

export default navebar
