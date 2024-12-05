import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

const HomePage = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
    }, []);
    
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>Recipes Sharing Platform</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {recipes.map((recipe) => (
          <div  
          key={recipe.id}
          className='bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition'
          >
              <img 
              src={recipe.image} 
              alt={recipe.title} 
              className='w-full h-40 object-cover rounded-t-lg'
              />
              <h2 className='text-xl font-semibold mt-2'>{recipe.title}</h2>
              <p className='text-gray-600'>{recipe.summary}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default HomePage