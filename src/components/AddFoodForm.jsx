import React from 'react'
import {useState} from "react"
// css
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function AddFoodForm(props) {
    const[nameInput, setNameInput] = useState("")
    const[imageInput, setImageInput] = useState("")
    const[caloriesInput, setCaloriesInput] = useState(0)
    const[servingsInput, setServingsInput] = useState(0)

    const addFood= (event) => {
        console.log("event",event)
      event.preventDefault()
      console.log("intentando añadir")
      const foodToAdd ={
        name: nameInput,
        image: imageInput,
        calories:caloriesInput,
        servings:servingsInput
      }
      console.log("foodToAdd",foodToAdd)
      props.addOneFood(foodToAdd)
    }
    const handleChangeName = (event) => {
        setNameInput(event.target.value)
    }
    const handleChangeImage = (event) => {
        setImageInput(event.target.value)
    }
    const handleChangeCalories = (event) => {
        setCaloriesInput(event.target.value)
    }
    const handleChangeServings = (event) => {
        setServingsInput(event.target.value)
    }

  return (
    <div>
    <h4>Add Food</h4>
    <Form onSubmit={addFood}>
     <Form.Label htmlFor="name">Name</Form.Label>
     <Form.Control  type="text" name="name" value={nameInput} onChange={handleChangeName}/>

     <Form.Label htmlFor="image">Image</Form.Label>
     <Form.Control  type="text" name="image" value={imageInput} onChange={handleChangeImage}/>
     
     <Form.Label htmlFor="calories">Calories</Form.Label>
     <Form.Control  type="number" name="calories" value={caloriesInput} onChange={handleChangeCalories}/>

     <Form.Label htmlFor="servings">Name</Form.Label>
     <Form.Control  type="number" name="servings" value={servingsInput} onChange={handleChangeServings}/>
     <Button type="submit">Add Food</Button>
    </Form>

    </div>
  )
}

export default AddFoodForm