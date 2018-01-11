import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import page1 from './images/page1.png';
import page2 from './images/page2.png';
import page3 from './images/page3.png';
import page4 from './images/page4.png';
import page5 from './images/page5.png';

class App extends Component {
  render() {
    return (
      <div className="container body-content">
        <div>
          <img src={page1} className="img-responsive" />
          <div className="page-separator"/>
          <img src={page2} className="img-responsive" />
          <div className="page-separator"/>
          <img src={page3} className="img-responsive" />
          <div className="page-separator"/>
          <img src={page4} className="img-responsive" />
          <div className="page-separator"/>
          <img src={page5} className="img-responsive" />
        </div>
      </div>
    );
  }
}

export default App;
