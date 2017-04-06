import React from 'react';
import {render} from 'react-dom';

import Recipes from './components/Recipes'
import './styles/index'

class App extends React.Component {
  render () {
    return(
      <div>
        <h1>Recipe Book!</h1>
        <Recipes />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
