import React, { useContext, useEffect, useState } from 'react';
import StarWarsPlanetContext from '../Context/starWarsPlanetContext';
import {
  INITIAL_INPUTVALUE, INITIAL_NUMERICS_COLUMNS, InputValueType,
} from '../Types/type';
import SortFilter from './SortFilter';

type FiltersProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => void
};

function Filters({ handleChange }: FiltersProps) {
  const {
    filterNumeric,
    inputValue,
    setPlanetFiltered,
    setInputValue,

  } = useContext(StarWarsPlanetContext);
  const [multifilters, setMultiFilters] = useState<InputValueType[]>([]);
  const [columns, setColumns] = useState(INITIAL_NUMERICS_COLUMNS);

  const handleClear = () => {
    setMultiFilters([]);
    setColumns(INITIAL_NUMERICS_COLUMNS);
  };

  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keys = columns.filter((column) => column !== inputValue.colum);
    setColumns(keys);
    setMultiFilters([...multifilters, inputValue]);
  };

  const handleClick = (coluna: string) => {
    const deleteFilter = multifilters.filter((filter) => filter.colum !== coluna);
    setMultiFilters(deleteFilter);
    setColumns([...columns, coluna]);
  };
  useEffect(() => {
    setInputValue({ ...INITIAL_INPUTVALUE, colum: columns[0] });
    const planetFiltered = filterNumeric(multifilters);
    setPlanetFiltered(planetFiltered);
  }, [multifilters]);

  return (
    <>
      <form action="" onSubmit={ handleFilter }>

        <select
          name="colum"
          id="colum"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          { columns.map((column) => (
            <option key={ column } value={ column }>{column}</option>
          )) }

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
      <SortFilter />
      <div>
        {multifilters.map((filter) => (
          <p key={ filter.colum } data-testid="filter">
            {`${filter.colum} ${filter.comparison} ${filter.value}`}
            <button onClick={ () => handleClick(filter.colum) }>X</button>
          </p>
        ))}
        <button
          onClick={ handleClear }
          data-testid="button-remove-filters"
        >
          Remover todas filtragens
        </button>
      </div>
    </>
  );
}
export default Filters;
