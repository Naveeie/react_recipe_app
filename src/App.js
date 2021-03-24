import React,{useEffect, useState} from 'react';
import './App.css';
import Receipe from './Receipe';

const App = () => {

  const APP_ID = '0723ea5a';
  const APP_KEY = "741e64f4b71ba44f64f2e11d19a2b4f6";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken');
useEffect(()=> {
    getRecp();

}, [query])

  const getRecp =async () => {
    const req = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    const response = await fetch(req)
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits)
  }

const updateChange = (e) => {
setSearch(e.target.value)
// console.log(search);

}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('')
}


return(
<div className="App">
  <form className="search-form" onSubmit={getSearch}>
    <input type="text" className="search-bar" value={search} onChange={updateChange}/>
    <button type="submit" className="search-button">search</button>
  </form>

<div className="recipesClass">
{
  recipes.map(recp =>( 
        <Receipe key= {recp.recipe.label}
        title={recp.recipe.label} 
        calories = {recp.recipe.calories}
        image = {recp.recipe.image}
        ingredients = {recp.recipe.ingredients}/>
        
))
}</div>
</div>
);
}

export default App;


