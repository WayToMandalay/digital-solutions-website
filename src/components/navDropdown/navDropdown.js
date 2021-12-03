import React, { useState } from "react";
import './navDropdown.css';

const NavDropdown = (props) => {
  const [isActive, setIsActive] = useState(props.active);
  return (

    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Our services<i className={isActive ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item">Option 1</div>
          <div className="dropdown-item">Option 2</div>
          <div className="dropdown-item">Option 3</div>
          <div className="dropdown-item">Option 4</div>
        </div>
      )}
    </div>
  )
}

export default NavDropdown