import React, {Component} from 'react';
import './header.css';
import logo from './logo.png';
import NavDropdown from '../navDropdown';

class Header extends Component {

  constructor() {
    super();
    this.setActiveBtn = this.setActiveBtn.bind(this);
    this.toggleClicked = this.toggleClicked.bind(this);
  }

  state = {
    activeBtn: 0,
    clicked: false
  }

  toggleClicked() {
    const {clicked} = this.state;
    this.setState({
      clicked: !clicked
    })
  }

  setActiveBtn(i) {
    this.setState({
      activeBtn: i
    })
  }

  

  render() {
    const {activeBtn} = this.state;
    const items = ['Home', 'About us', <NavDropdown active={activeBtn===2 ? true : false} />, 'Contact us'];
    
    return (
    <header className="header">
      <div className="header-logo"><img src={logo} alt="logo" /></div>

      <nav className={this.state.clicked ? "nav active" : "nav"} >
        <ul className="nav-menu">
          {
            items.map((item, index) => (
              <li 
                className={activeBtn === index ? "nav-menu-item active" : "nav-menu-item"}
                onClick={(e) => this.setActiveBtn(index)} key={index}>
                {item}
              </li>
            ))
          }         
        </ul>
      </nav>

      <div className="header-btns-block">
        <div className="btn-wrapper header-btn">
          <div className="btn">Call us</div>
        </div>
        <div className="menu-btn">
          <div className="menu-icon" onClick={this.toggleClicked}>
              <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <div className="menu-btn__text">Menu</div>
        </div>
      </div>

      
      
    </header>
   )
  }
  
  
}

export default Header;