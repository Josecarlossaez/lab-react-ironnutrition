import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function FoodBox(props) {
    // console.log("id",props.foodList.name)
    const deleteFood = () => {
        props.deleteFood(props.foodList.name)
    }
  return (
    <Card style={{ width: '18rem' }}>
      <div>
        <h3> {props.foodList.name} </h3>
        <hr />
        <div>
          <img src={props.foodList.image} alt="food-dish" width="70px" />
          <p>Calories: {props.foodList.calories}</p>
          <p>Servings: {props.foodList.servings}</p>
          <p>Total Calories: {props.foodList.calories}</p>
          
          <Button type="submit" onClick={()=> deleteFood(props.foodList.name)}>Delete</Button>

        </div>
      </div>
    </Card>
  );
}

export default FoodBox;
