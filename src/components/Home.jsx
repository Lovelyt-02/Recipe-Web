import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

const Home = () => {

  const [recipes, setRecipes] = useState([]);

  //app_id=4e81f5f1;
  //app_key=03370c54f3c181eec6ff1960cc45b36d;	
  const fetchRecipes = async (query = 'pasta') => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=4e81f5f1&app_key=03370c54f3c181eec6ff1960cc45b36d`);

    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Container>
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </Container>
  )
}

export default Home
