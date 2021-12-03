import React, {Component} from 'react';
import './formSection.css';
import { MDBInput } from "mdbreact";



class FormSection extends Component {

  state = {
    phone: '+1'
  };

  render() {
    return (
      <div className="form-section">
        <div className="form-section__title"><span>Contact</span> Us</div>
        <form className="form">
          <div className="form__input"><MDBInput label="First name" outline size="md" /></div>
          <div className="form__input"><MDBInput label="Last name" outline size="md" /></div>
          <div className="form__input"><MDBInput label="Phone number" outline size="md" /></div>
          <div className="form__input"><MDBInput label="Enter email" outline size="md" /></div>

          <div className="form__text-area">
            <MDBInput type="textarea" label="Tell Us What Happened" outline rows='5' />
          </div>

          <div className="btn-wrapper">
            <div className="btn btn-dark form__btn">Send</div>
          </div>
        </form>

        
      </div>
    )
  }
  
}

export default FormSection;