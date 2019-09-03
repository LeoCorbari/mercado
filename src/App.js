import React from 'react';

import Header from './components/header'
import Routes from './routes'

import './style.css'

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
      )
  }
  
}

export default App;
