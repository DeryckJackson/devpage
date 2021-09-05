import { Fragment } from 'react';
import './App.sass';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="flexboxCol container">
        <Header />
        <Navbar />
      </div>
    </Fragment>
  );
}

export default App;
