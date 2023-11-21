import React, { useContext, useEffect, useState } from 'react';
import StarWarsPlanetContext from '../Context/starWarsPlanetContext';
import { INITIAL_INPUTVALUE, InputValueType } from '../Types/type';

type FiltersProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => void
};

const INITIAL_NUMERICS_COLUMNS = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

function Filters({ handleChange }: FiltersProps) {
  const {
    filterNumeric,
    inputValue,
    setPlanetFiltered,
    setInputValue,

  } = useContext(StarWarsPlanetContext);
  const [multifilters, setMultiFilters] = useState<InputValueType[]>([]);
  const [columns, setColumns] = useState(INITIAL_NUMERICS_COLUMNS);

  // const renderFilter = () => {
  //   multifilters.map((filter) => {

  //     return keys;
  //   });
  // };

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    const keys = columns.filter((column) => column !== inputValue.colum);
    setColumns(keys);
    setMultiFilters([...multifilters, inputValue]);
  };
  useEffect(() => {
    setInputValue({ ...INITIAL_INPUTVALUE, colum: columns[0] });
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
  );
}
export default Filters;
