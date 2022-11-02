import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
//console.log(foods)
function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodListSearch, setFoodListSearch] = useState(foods);
  
  const addOneFood = (food) => {
    
    const copy = [...foodList]
    copy.push(food)
    setFoodList(copy)

    const copy2 = [...foodListSearch]
    copy2.push(food)
    setFoodListSearch(copy2)
  }
  const deleteFood = (foodName) => {
 const filteredList = foodList.filter((eachFood) => {
  if(eachFood.name === foodName){
    return false// no lo incluyas
  }else {
    return true// incluyelo
  }
 })
 setFoodList(filteredList)
  }

  const filterFoods = (filterQuery) => {
    console.log("filterquery",filterQuery)
    const filteredArr = foodList.filter((eachFood) => {
      return eachFood.name.toLowerCase().includes(filterQuery.toLowerCase())
    })
setFoodListSearch(filteredArr)
  }

  return (
    <div className="App">
      <AddFoodForm addOneFood={addOneFood}/>
      <h3>Food List</h3>
      <Search filterFoods={filterFoods}/>

      <div style={{display:"flex",flexWrap:"Wrap", gap:"10px"}}>
        {foodListSearch.map((eachElement, index) => {
          
          return (
             <FoodBox key={eachElement.name + index} 
             foodList={eachElement}
              deleteFood={deleteFood}
             />
          );
        })} ;
      </div>
     
     
    </div>
  );
}

export default App;
