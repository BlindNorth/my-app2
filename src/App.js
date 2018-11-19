import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MIDISounds from 'midi-sounds-react';

class App extends Component {

  playTestInstrument() {
		this.midiSounds.playChordNow(3, [60], 2.5);
  }
  
  playTestInstrument2() {
		this.midiSounds.playChordNow(3, [61], 2.5);
  }
  playTestInstrument3() {
		this.midiSounds.playChordNow(3, [62], 2.5);
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
          </a>
          <p><button onClick={this.playTestInstrument.bind(this)}>C</button></p>
          
          <p><button onClick={this.playTestInstrument2.bind(this)}>C#</button></p>
          
          <p><button onClick={this.playTestInstrument3.bind(this)}>D</button></p>
        </header>
        <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />	
		<hr/>
      </div>
    );
  }
}

export default App;
