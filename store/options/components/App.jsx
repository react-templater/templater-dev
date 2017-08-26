import React from 'react';
import { Component } from 'react';

import axios from 'axios';

/*** Components ***/
import Header from './Header.jsx';
//This component is the main section of the web page
import Main from './Main.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;