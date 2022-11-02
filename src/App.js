import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
//console.log(foods)
function App() {
  const [foodList, setFoodList] = useState(foods);
  // console.log("foodList", foodList)

  return (
    <div className="App">
      <div>
        {foodList.map((eachElement, index) => {
          //console.log("foodList",eachElement)
          return (
             <FoodBox key={eachElement.name + index} foodList={eachElement}/>
          );
        })} ;
      </div>
     
      
    </div>
  );
}

export default App;
