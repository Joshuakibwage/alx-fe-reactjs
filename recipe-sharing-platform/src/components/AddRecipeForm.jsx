import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function AddRecipeForm() {
    const [formData, setFormData] = useState([]);

    useEffect(() => {

    }, []);
  return (
    <div>
        <form>
            <label htmlFor="title">Title</label>
            <input type="title" name="title" id="title" />
            <label htmlFor="ingredients">Ingredients</label>
            <textarea id="textarea" typeof="textarea">
                
            </textarea>
            <label htmlFor="steps">Preparation steps</label>
            <textarea name="steps" id="steps">

            </textarea>
            <input type="submit" value="submit" />

        </form>
    </div>
  )
}

export default AddRecipeForm