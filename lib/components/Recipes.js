import React, { Component } from 'react'
import axios from 'axios'

import Recipe from './Recipe'


export default class Recipes extends Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    axios.get( 'https://api.edamam.com/search?q=chicken&app_id=9b7bfabf&app_key=848132814844afb335a3eed484ac904e&from=0&to=30')
    .then(res => {
      const recipes = res.data.hits.map(item => item.recipe)
      this.setState({
        recipes
      })
    })

  }

  render() {
    const { recipes } = this.state

    const recipe = recipes.map(recipe => {
      return recipe
    })

    return (
      <div className="Recipes">
        Recipes
        {recipe ?
          <Recipe
            recipe={recipe}
          />
          : <div>Loading recipes</div>
        }
      </div>
    )
  }
}
