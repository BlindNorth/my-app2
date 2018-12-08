import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MIDISounds from 'midi-sounds-react';
import IdleTimer from 'react-idle-timer';


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
  
  constructor(props) {
    super(props)
    this.idleTimer = null
    this.onAction = this._onAction.bind(this)
    this.onActive = this._onActive.bind(this)
    this.onIdle = this._onIdle.bind(this)
  }
 
 
  _onAction(e) {
    console.log('user did something', e);
    //this.playTestInstrument3();
  }
  
  _onActive(e) {
    console.log('user is active', e)
    console.log('time remaining', this.idleTimer.getRemainingTime())
  }
 
  _onIdle(e) {
    console.log('user is idle', e)
    console.log('last active', this.idleTimer.getLastActiveTime())
  }

  render() {
    return (
      
      <div className="App">
      <div>
        <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={1000 * 60 * 15} />
        {/* your app here */}
      </div>
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

          <p><button onClick={this.playTestInstrument3.bind(this)}>D</button></p>

          <p><button onClick={this.playTestInstrument3.bind(this)}>D</button></p>

          <p><button onClick={this.playTestInstrument3.bind(this)}>D</button></p>

          <p><button onClick={this.playTestInstrument3.bind(this)}>D</button></p>
        </header>
        <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />	
		<hr/>
      </div>
    );
  }
}

export default App;
