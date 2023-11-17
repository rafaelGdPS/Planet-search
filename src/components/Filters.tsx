import React, { useContext, useEffect, useState } from 'react';
import StarWarsPlanetContext from '../Context/starWarsPlanetContext';

function Filters() {
  const [inputValue, setInputValue] = useState({ name: '' });
  const { filterPLanetByName } = useContext(StarWarsPlanetContext);
  console.log(inputValue.name);

  useEffect(() => {
    filterPLanetByName(inputValue.name);
  }, [inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
    const { name, value } = e.target;
    setInputValue(() => ({
      ...inputValue,
      [name]: value,
    }));
  };
  return (
    <header>
      <input
        onKeyDown={ () => filterPLanetByName(inputValue.name) }
        type="search"
        name="name"
        value={ inputValue.name }
        onChange={ handleChange }
        data-testid="name-filter"
      />
    </header>
  );
}
export default Filters;
