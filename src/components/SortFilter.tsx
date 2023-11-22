// import { useState } from 'react';
import { INITIAL_NUMERICS_COLUMNS } from '../Types/type';

// const INITIAL_ORDER_VALUE = {
//   order: {
//     column: 'population',
//     sort: 'ASC',
//   },
// };

function SortFilter() {
  // const [inputOrder, setInputOrder] = useState();

  const handleChange = () => {

  };
  return (
    <form action="">
      <label htmlFor="">
        <select name="" id="" data-testid="column-sort" onChange={ handleChange }>
          { INITIAL_NUMERICS_COLUMNS.map((column) => (
            <option key={ column } value={ column }>{column}</option>
          )) }
        </select>
      </label>
      <label htmlFor="">
        <label htmlFor="asc">

          <input type="radio" name="sort" id="" onChange={ handleChange } />
        </label>
        <input type="radio" name="sort" id="" onChange={ handleChange } />

      </label>
      <button type="submit" data-testid="column-sort-button">Ordenar</button>
    </form>
  );
}
export default SortFilter;
