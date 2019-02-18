import React, { Component } from 'react';
import {Container} from 'reactstrap';
import Label from './Components/Label';
import Property from './Components/Property';
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Container>
      <Label />
      <Property />

      </Container>
        
      </div>
    );
  }
}

export default App;
