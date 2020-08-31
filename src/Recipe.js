import React from "react";
import style from "./recipe.module.css";

const recipe = (props) => {
  return (
    <div className={style.recipe}>
      <h1>{props.title}</h1>
      <p>
        <strong>Calories: </strong>
        {props.calories.toFixed(2)}
      </p>
      <img className={style.image} src={props.image} alt={props.alt} />
      <ol>
        <center>
          <h4>
            <strong>Ingredients:</strong>
          </h4>
        </center>
        {props.ingredients.map((ingredient) => (
          <li key={Math.random() * 1456}>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default recipe;
