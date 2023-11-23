import React, { useContext, useEffect } from 'react';
import StarWarsPlanetContext from '../Context/starWarsPlanetContext';
import Filters from './Filterers';

function Search() {
  const { inputValue, setInputValue } = useContext(StarWarsPlanetContext);
  const { filterPLanetByName } = useContext(StarWarsPlanetContext);
  // console.log(inputValue);

  useEffect(() => {
    filterPLanetByName(inputValue.name);
  }, [inputValue.name]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
    const { name, value } = e.target;
    setInputValue(() => ({
      ...inputValue,
      [name]: value,
    }));
  };
  return (
    <header>
      <label htmlFor="name">
        Starwars Planet
        <input
          onKeyDown={ () => filterPLanetByName(inputValue.name) }
          type="search"
          name="name"
          id="name"
          value={ inputValue.name }
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
      <Filters handleChange={ handleChange } />
    </header>
  );
}
export default Search;
