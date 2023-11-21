import React, { useContext, useEffect, useState } from 'react';
import StarWarsPlanetContext from '../Context/starWarsPlanetContext';
import { InputValueType } from '../Types/type';

type FiltersProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => void

};

function Filters({ handleChange }: FiltersProps) {
  const {
    filterNumeric,
    inputValue,
    setPlanetFiltered,

  } = useContext(StarWarsPlanetContext);
  const [multifilters, setMultiFilters] = useState<InputValueType[]>([]);

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    setMultiFilters([...multifilters, inputValue]);
  };
  useEffect(() => {
    console.log(multifilters);

    const planetFiltered = filterNumeric(multifilters);
    setPlanetFiltered(planetFiltered);
  }, [multifilters]);

  return (
    <form action="" onSubmit={ handleFilter }>
      <select
        name="colum"
        id="colum"
        data-testid="column-filter"
        onChange={ handleChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>

      </select>
      <select
        name="comparison"
        id="comparison"
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        id="comparison-value"
        value={ inputValue.value }
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button type="submit" data-testid="button-filter">Filtro</button>
    </form>
  );
}
export default Filters;
