import React from 'react';
import { render } from 'react-dom';
import logo from "./assets/logo.png";
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  backgroundColor:'#3b78e7'
};

const App = () => (
  <div style={styles}>
  <img src={logo} alt={true}/>
    <h2>Welcome to bitpod</h2>
    <h2>React site webdeploy</h2>
  </div>
);

render(<App />, document.getElementById('root'));
