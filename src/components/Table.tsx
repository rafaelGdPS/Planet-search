import { useContext } from 'react';
import StarWarsPlanetContext from '../Context/starWarsPlanetContext';
import { PlanetObject } from '../Types/type';
import PlanetCard from './planetCard';
import styles from './Table.module.css';

function Table() {
  const { planets } = useContext(StarWarsPlanetContext);

  return (
    <table className={ styles.table_container }>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface </th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>Url</th>
      </tr>
      {planets.map((element: PlanetObject) => (
        <PlanetCard key={ element.name } planet={ element } />
      ))}
    </table>
  );
}

export default Table;
