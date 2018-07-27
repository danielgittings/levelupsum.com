import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Generator from './components/Generator';

class App extends Component {
  state = {
    words: []
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Generator />
        <Footer />
      </div>
    );
  }
}

export default App;
