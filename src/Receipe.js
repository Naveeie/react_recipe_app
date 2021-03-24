import React from 'react';
import style from './recipe.Module.css'   
const Receipe = ( {title,calories, image,ingredients} ) =>{
    return(
      <div className={style.recipe}>
        <h1 >{title}</h1>
        <p>{calories}</p>
        <img src={image} alt="no image ? " className={style.image}></img>
        <p>{ingredients.map( ingredient => (
          <li>{ingredient.text}</li>
        ))}</p>
      </div>
    )
    }
export default Receipe;