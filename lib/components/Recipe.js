import React, { Component } from 'react'

export default class Recipe extends Component {
  render() {
    const { recipe } = this.props

    const singleRecipe = recipe.map((item, i) => {
      return (
        <li className="single-recipe"
          key={i}>
          <a className="recipe-link"
            href={item.url}
            target="_blank">
            <img className="recipe-image"
              src={item.image} />
            <h2 className="recipe-title">
              {item.label}
            </h2>
            <div className="recipe-info">
              <span className="recipe-calories">
                {Math.round(item.calories)} CALORIES
              </span>
              <span className="recipe-ingredients-number">
                {item.ingredients.length} INGREDIENTS
              </span>              
            </div>
          </a>
        </li>
      )
    })

    return (
      <div className="Recipe">
        <ul className="recipe-list">
          {singleRecipe}
        </ul>
      </div>
    )
  }
}
