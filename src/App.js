import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MIDISounds from 'midi-sounds-react';

class App extends Component {

  playTestInstrument() {
		this.midiSounds.playChordNow(3, [60], 2.5);
  }
  
  playTestInstrument2() {
		this.midiSounds.playChordNow(3, [60], 2.5);
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            <p><button onClick={this.playTestInstrument.bind(this)}>C</button></p>
            <p><button onClick={this.playTestInstrument2.bind(this)}>C#</button></p>
          </a>
        </header>
        <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />	
      </div>
    );
  }
}

export default App;
