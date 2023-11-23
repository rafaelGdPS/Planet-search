import React, { useContext } from 'react';
import { INITIAL_NUMERICS_COLUMNS } from '../Types/type';
import StarWarsPlanetContext from '../Context/starWarsPlanetContext';

function SortFilter() {
  const {
    inputOrder, setInputOrder, filterByOrder, setPlanetFiltered, planets,
  } = useContext(StarWarsPlanetContext);
  console.log(inputOrder);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement
  | HTMLSelectElement | HTMLFormElement>) => {
    const { name, value } = e.target;
    setInputOrder({ ...inputOrder,
      [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(filterByOrder(inputOrder));

    setPlanetFiltered(filterByOrder(inputOrder));
    console.log(planets);
  };
  return (
    <form action="" onSubmit={ handleSubmit }>
      <label htmlFor="column">
        Ordenar
        <select
          name="column"
          id="column"
          data-testid="column-sort"
          onChange={ handleChange }
        >
          { INITIAL_NUMERICS_COLUMNS.map((column) => (
            <option key={ column } value={ column }>{column}</option>
          )) }
        </select>
      </label>
      <label htmlFor="">
        <label htmlFor="asc">
          ASC
          <input
            type="radio"
            name="sort"
            id="asc"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ handleChange }

          />
        </label>
        <label htmlFor="dsc">
          DSC
          <input
            type="radio"
            name="sort"
            id="DSC"
            value="DSC"
            data-testid="column-sort-input-desc"
            onChange={ handleChange }

          />
        </label>

      </label>
      <button data-testid="column-sort-button">Ordenar</button>
    </form>
  );
}
export default SortFilter;
