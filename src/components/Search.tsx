import React, { useContext, useEffect } from 'react';
import StarWarsPlanetContext from '../Context/starWarsPlanetContext';
import Filters from './Filterers';
import styles from './Search.module.css';

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
    <header className={ styles.container }>
      <h1>
        Starwars Planet
      </h1>
      <label htmlFor="name">
        Planet
      </label>
      <input
        onKeyDown={ () => filterPLanetByName(inputValue.name) }
        type="search"
        name="name"
        id="name"
        value={ inputValue.name }
        onChange={ handleChange }
        data-testid="name-filter"
      />
      <Filters handleChange={ handleChange } />
    </header>
  );
}
export default Search;
