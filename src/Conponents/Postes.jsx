import React from "react";
import Post from "./Post";

function Postes({ recipe }) {
  console.log(recipe);
  return (
    <div>
      {recipe.length &&
        recipe.map((article, index) => {
          <Post article={article} key={index} />;
        })}
    </div>
  );
}

export default Postes;
