import React from "react";
import './mainPage.css';

const MainPage = () => {
  return (
    <section className="mainPage">
      <h1 className="mainPage__title">Lorem ipsum set <br/> ammet test-test</h1>
      <h2 className="mainPage__semi-title">Let us help you get it all back!</h2>

      <div className="mainPage__signature"></div>
      <div className="mainPage__info">
        <div className="mainPage__info-text">We currently take cases<br/>that are $10,000 US and up</div>
        <div className="btn-wrapper">
          <div className="btn btn-dark">Get a free consultation</div>
        </div>
      </div>
      <div className="mainPage__corner_1"></div>
      <div className="mainPage__corner_2"></div>
    </section>
  )
}

export default MainPage;