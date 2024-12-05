import React, { useEffect } from 'react'
import { useState } from 'react'

const HomePage = () => {

    const [recipes, setRecipes] = useState();

    useEffect(() => {
      fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
    }, []);
    
  return (
    <div>
      <h1>Recipes Sharing Platform</h1>
      <div>
        {recipes.map((recipe) => (
          <div  key={recipe.id}>
              <img 
              src={recipe.image} 
              alt={recipe.title} 
              />
              <h2>{recipe.title}</h2>
              <p>{recipe.summary}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default HomePage