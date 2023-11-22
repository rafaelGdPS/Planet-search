import React, { useEffect, useState } from 'react';
import StarWarsPlanetContext from './starWarsPlanetContext';
import { getApi } from '../utils/utils';
import { INITIAL_INPUTVALUE, InputValueType, PlanetObject } from '../Types/type';

 type Props = {
   children: React.ReactNode,
 };

function StarPlanetProvider({ children }: Props) {
  const [planetData, setPlanetData] = useState<PlanetObject[]>([]);
  const [planetsFiltered, setPlanetFiltered] = useState<PlanetObject[]>([]);
  const [inputValue, setInputValue] = useState(INITIAL_INPUTVALUE);
  // const [multifilters, setMultiFilters] = useState<InputValueType[]>([]);

  const filterPLanetByName = (name: string) => {
    const filterdPlanet = planetData.filter((planet) => {
      return planet.name.toLowerCase().match(name.toLowerCase());
    });

    if (filterdPlanet) {
      setPlanetFiltered(filterdPlanet);
    } else {
      setPlanetFiltered(planetData);
    }
  };

  const filterNumeric = (object: InputValueType[]) => {
    const numericFilter = planetData.filter((planet) => {
      const eachFilter = object.every(({ colum, comparison, value }) => {
        switch (comparison) {
          case 'maior que':
            return Number(planet[colum as keyof PlanetObject]) > Number(value);
          case 'menor que':
            return Number(planet[colum as keyof PlanetObject]) < Number(value);
          case 'igual a':
            return Number(planet[colum as keyof PlanetObject]) === Number(value);
          default:
            return '';
        }
      });
      return eachFilter;
    });
    return numericFilter;
    console.log(numericFilter);
  };

  useEffect(() => {
    const data = async () => {
      const apiPlanet = await getApi();
      const results = apiPlanet.map((planet: any) => {
        const { residents, ...rest } = planet;
        return rest;
      });
      setPlanetData(results);
      setPlanetFiltered(results);
    };
    data();
  }, []);

  const context = {
    planets: planetsFiltered,
    filterPLanetByName,
    inputValue,
    setInputValue,
    filterNumeric,
    setPlanetFiltered,
  };
  return (
    <StarWarsPlanetContext.Provider value={ context }>
      {children}
    </StarWarsPlanetContext.Provider>
  );
}

export default StarPlanetProvider;
