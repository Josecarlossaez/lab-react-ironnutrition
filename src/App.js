import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import Collapse from 'react-bootstrap/Collapse';
//console.log(foods)
function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodListSearch, setFoodListSearch] = useState(foods);
  const [formIsShowing, setFormIsShowing] = useState(false);

  const addOneFood = (food) => {
    const copy = [...foodList];
    copy.push(food);
    setFoodList(copy);

    const copy2 = [...foodListSearch];
    copy2.push(food);
    setFoodListSearch(copy2);
  };
  const deleteFood = (foodName) => {
    const filteredList = foodListSearch.filter((eachFood) => {
      if (eachFood.name === foodName) {
        return false; // no lo incluyas
      } else {
        return true; // incluyelo
      }
    });
    setFoodListSearch(filteredList);
  };

  const filterFoods = (filterQuery) => {
    console.log('filterquery', filterQuery);
    const filteredArr = foodList.filter((eachFood) => {
      return eachFood.name.toLowerCase().includes(filterQuery.toLowerCase());
    });
    setFoodListSearch(filteredArr);
  };
  const toggleForm = () => {
    setFormIsShowing(formIsShowing === true ? false : true);
  };

  return (
    <div className="App">
      <h3>Food List</h3>
      <Button type="submit" onClick={toggleForm}>
        Show Form
      </Button>
      {/* {formIsShowing === true && <AddFoodForm 
     addOneFood={addOneFood}
     stateUpdater={setFoodList}
    />} */}
      <Collapse in={formIsShowing} >
      <div>
        <AddFoodForm addOneFood={addOneFood} stateUpdater={setFoodList} />
      </div>
        </Collapse>
      <Search filterFoods={filterFoods} />

      <div style={{ display: 'flex', flexWrap: 'Wrap', gap: '10px' }}>
        {foodListSearch.map((eachElement, index) => {
          return (
            <FoodBox
              key={eachElement.name + index}
              foodList={eachElement}
              deleteFood={deleteFood}
            />
          );
        })}{' '}
        ;
      </div>
    </div>
  );
}

export default App;
