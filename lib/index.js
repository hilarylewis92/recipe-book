import React from 'react';
import {render} from 'react-dom';

import Recipes from './components/Recipes'
import './styles/index'

class App extends React.Component {
  render () {
    return(
      <div className='App'>
        <h1 className='title'>
          Recipe Book
        </h1>
        <Recipes />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
