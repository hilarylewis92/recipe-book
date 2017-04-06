import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {
    const { recipe } = this.props

    const singleRecipe = recipe.map(item => {
      return (
        <li>
          <h2>{item.label}</h2>
          <img src={item.image} />
        </li>
      )
    })

    return (
      <div className="Recipe">
        <ul>{singleRecipe}</ul>
      </div>
    )
  }
}
