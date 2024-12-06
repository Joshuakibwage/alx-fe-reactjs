 import { useState } from "react";

 
 const AddRecipeForm = () => {

    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({});



   return (
     <form>
        <h2>Add New Recipes</h2>
        <div>
            <label 
                htmlFor="title">Recipe Title</label>

            <input 
                type="text" 
                name="title" 
                id="title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full p-2 mt-1 border ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                }rounded-md focus:ring focus:ring-indigo-200`}
                placeholder="chocolate cake"
            />
             {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
     </form>
   )
 }
 
 export default AddRecipeForm