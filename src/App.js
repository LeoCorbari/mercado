import React from 'react';

import Header from './components/header'
import AddForm from './pages/addForm'

import './style.css'

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <AddForm />
      </div>
      )
  }
  
}

export default App;
