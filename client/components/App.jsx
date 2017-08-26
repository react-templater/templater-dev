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
      download: {
        name: 'name',
        author: 'author',
        assets: false,
        components: false,
        style: false,
        build: false,
      }
    };
  }

  handleFormChange = (e) => {
    let downloadClone = this.state.download;
    if (e.target.name === 'name') {
      downloadClone.name = e.target.value;
      this.setState({download: downloadClone});
    }
    if (e.target.name === 'author') {
      downloadClone.author = e.target.value;
      this.setState({download: downloadClone});
    }
    if (e.target.name === 'components') {
      downloadClone.components = e.target.checked;
      this.setState({download: downloadClone});
    }
    if (e.target.name === 'style') {
      downloadClone.style = e.target.checked;
      this.setState({download: downloadClone});
    }
    if (e.target.name === 'build') {
      downloadClone.build = e.target.checked;
      this.setState({download: downloadClone});
    }
  }

  //This function downloads the zipped file.
  handleDownload = (e) => {
<<<<<<< HEAD
    axios.post('./download', this.state.download)
      .then(() => {

      });
    console.log(this.state.download);
=======
    //uncomment this to make post request
    // axios.post('url', this.state.download)
    //   .then((response) => {
    //     console.log('Thanks for downloading!');
    //   });
>>>>>>> 9454ce8f36512ae6ad331728d05fdbea5a19ca04
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Main 
          name={this.state.download.name}
          author={this.state.download.author}
          assets={this.state.download.assets}
          components={this.state.download.components}
          style={this.state.download.style}
          build={this.state.download.build}
          handleFormChange={this.handleFormChange}
          clickDownload={this.handleDownload}/>
      </div>
    );
  }
}

export default App;